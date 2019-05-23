import Palette from './Palette';
import { Route, Switch } from 'react-router-dom';
import seedColors from './seedColors';
import React, { Component } from 'react';
import generatePalette from './colorHelpers';

export default class App extends Component {
	render() {
		return (
			<Switch>
				<Route exact path="/" render={() => <h1>PALETTE LIST GOES HERE</h1>} />
				<Route
					exact
					path="/palette/:id"
					render={() => <h1>INDIVIDUAL PALETTE</h1>}
				/>
			</Switch>
			// {/* <div>
			// 	<Palette palette={generatePalette(seedColors[4])} />
			// </div> */}
		);
	}
}
