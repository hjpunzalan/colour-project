import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './Palette.css';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
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
	}
};

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
				moreUrl={`/palette/${id}/${box.id}`}
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
export default withStyles(styles)(Pallete);
