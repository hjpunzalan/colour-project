import React, { Component } from 'react';
import ColorBox from './ColorBox';

export default class SingleColorPalette extends Component {
	// might change color format so we need state

	constructor(props) {
		super(props);
		this._shades = this.gatherShades(this.props.palette, this.props.colorId);
		console.log(this._shades);
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

	render() {
		const colorBoxes = this._shades.map(color => (
			<ColorBox
				showLink={false}
				key={color.hex}
				name={color.name}
				background={color.hex}
			/>
		));
		return (
			<div className="Palette">
				<h1>SingleColorPalette</h1>
				<div className="Palette-colors">{colorBoxes}</div>
			</div>
		);
	}
}
