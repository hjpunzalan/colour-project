import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './Palette.css';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

export default class Pallete extends Component {
	constructor(props) {
		super(props);
		this.state = { level: 500 };
		this.changeLevel = this.changeLevel.bind(this);
	}

	changeLevel(level) {
		this.setState({ level });
	}

	render() {
		const colors = this.props.palette.colors;
		const { level } = this.state;
		const colorBoxes = colors[level].map(box => (
			<ColorBox background={box.hex} name={box.name} />
		));
		return (
			<div className="Palette">
				<Slider
					defaultValue={level}
					min={100}
					max={900}
					step={100}
					onAfterChange={this.changeLevel}
				/>
				{/* Navbar goes here */}
				<div className="Palette-colors">{colorBoxes}</div>
				{/* footer */}
			</div>
		);
	}
}
