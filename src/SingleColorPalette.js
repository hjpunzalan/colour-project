import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import styles from './styles/PaletteStyles';

class SingleColorPalette extends Component {
	// might change color format so we need state

	constructor(props) {
		super(props);
		this._shades = this.gatherShades(this.props.palette, this.props.colorId);
		this.changeFormat = this.changeFormat.bind(this);
		this.state = { format: 'hex' };
	}

	gatherShades(palette, colorToFilterBy) {
		let shades = [];
		let allColors = palette.colors;
		for (let key in allColors) {
			shades = shades.concat(
				allColors[key].filter(color => color.id === colorToFilterBy)
			);
		}
		return shades.slice(1);
	}

	changeFormat(val) {
		this.setState({ format: val });
	}

	render() {
		const { format } = this.state;
		const { paletteName, emoji, id } = this.props.palette;
		const { classes } = this.props;
		const colorBoxes = this._shades.map(color => (
			<ColorBox
				showingFullPalette={false}
				key={color.hex}
				name={color.name}
				background={color[format]}
			/>
		));
		return (
			<div className={classes.Palette}>
				<Navbar handleChange={this.changeFormat} showSlider={false} />
				<div className={classes.PaletteColors}>
					{colorBoxes}
					<div className={classes.goBack}>
						<Link to={`/palette/${id}`} className={classes.backButton}>
							Go Back
						</Link>
					</div>
				</div>
				<PaletteFooter paletteName={paletteName} emoji={emoji} />
			</div>
		);
	}
}

export default withStyles(styles)(SingleColorPalette);
