import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';

const styles = {
	Palette: {
		height: '100vh',
		overflow: 'hidden',
		display: 'flex',
		flexDirection: 'column'
	},

	PaletteColors: {
		height: '90%'
	},

	PaletteFooter: {
		backgroundColor: '#fff',
		height: '5vh',
		display: 'flex',
		justifyContent: 'flex-end',
		alignItems: 'center',
		fontWeight: 'bold'
	},

	emoji: {
		fontSize: '1.5rem',
		margin: '0 1rem'
	},
	goBack: {
		backgroundColor: 'black',
		width: '20%',
		height: '50%',
		margin: '0 auto',
		display: 'inline-block',
		position: 'relative',
		marginBottom: '-4px',
		cursor: 'pointer'
	},
	backButton: {
		width: '100px',
		height: ' 30px',
		position: 'absolute',
		display: 'inline-block',
		top: '50%',
		left: '50%',
		marginLeft: '-50px',
		marginTop: '-15px',
		textAlign: 'center',
		outline: 'none',
		background: 'rgba(255, 255, 255, .3)',
		fontSize: '1rem',
		lineHeight: '30px',
		textTransform: 'uppercase',
		border: 'none',
		color: 'white',
		textDecoration: 'none'
	}
};

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
				<PaletteFooter
					PaletteFooter={classes.PaletteFooter}
					paletteName={paletteName}
					emoji={emoji}
					emojiClass={classes.emoji}
				/>
			</div>
		);
	}
}

export default withStyles(styles)(SingleColorPalette);
