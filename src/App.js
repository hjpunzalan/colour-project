import Palette from './Palette';
import seedColors from './seedColors';
import React, { Component } from 'react';

export default class App extends Component {
	render() {
		return (
			<div>
				<Palette {...seedColors[4]} />
			</div>
		);
	}
}
