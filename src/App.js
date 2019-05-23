import Palette from './Palette';
import seedColors from './seedColors';
import React, { Component } from 'react';
import generatePalette from './colorHelpers';

export default class App extends Component {
	render() {
		console.log(generatePalette(seedColors[4]));
		return (
			<div>
				<Palette {...seedColors[4]} />
			</div>
		);
	}
}
