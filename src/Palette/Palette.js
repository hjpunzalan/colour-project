import React, { Component } from 'react';
import ColorBox from './ColorBox/ColorBox';
import Navbar from './Nav/Navbar';
import PaletteFooter from './Footer/PaletteFooter';
import { withStyles } from '@material-ui/styles';
import styles from './PaletteStyles';

class Pallete extends Component {
	constructor(props) {
		super(props);
		this.state = { level: 500, format: 'hex' };
		this.changeLevel = this.changeLevel.bind(this);
		this.changeFormat = this.changeFormat.bind(this);
	}

	changeLevel(level) {
		this.setState({ level });
	}

	changeFormat(val) {
		this.setState({ format: val });
	}

	render() {
		const { colors, paletteName, emoji, id } = this.props.palette;
		const { classes } = this.props;
		const { level, format } = this.state;
		const colorBoxes = colors[level].map(box => (
			<ColorBox
				key={box.id}
				background={box[format]}
				name={box.name}
				moreUrl={`/colour-project/palette/${id}/${box.id}`}
				showingFullPalette={true}
			/>
		));
		return (
			<div className={classes.Palette}>
				<Navbar
					handleChange={this.changeFormat}
					level={level}
					changeLevel={this.changeLevel}
					showSlider={true}
				/>
				<div className={classes.PaletteColors}>{colorBoxes}</div>
				<PaletteFooter id={id} paletteName={paletteName} emoji={emoji} />
			</div>
		);
	}
}
export default withStyles(styles)(Pallete);
