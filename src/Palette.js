import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './Palette.css';

export default class Pallete extends Component {
	render() {
		const colorBoxes = this.props.colors.map(box => (
			<ColorBox background={box.color} name={box.name} />
		));
		return (
			<div className="Palette">
				{/* Navbar goes here */}
				<div className="Palette-colors">{colorBoxes}</div>
				{/* footer */}
			</div>
		);
	}
}