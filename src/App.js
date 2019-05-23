import Palette from './Palette';
import { Route, Switch, Redirect } from 'react-router-dom';
import seedColors from './seedColors';
import React, { Component } from 'react';
import generatePalette from './colorHelpers';

export default class App extends Component {
	findPalette(id) {
		return seedColors.find(palette => {
			return palette.id === id;
		});
	}

	render() {
		return (
			<Switch>
				<Route exact path="/" render={() => <h1>PALETTE LIST GOES HERE</h1>} />
				<Route
					exact
					path="/palette/:id"
					render={routeProps => (
						<Palette
							palette={generatePalette(
								this.findPalette(routeProps.match.params.id)
							)}
						/>
					)}
				/>
				<Redirect path="/" />
			</Switch>
			// {/* <div>
			// 	<Palette palette={generatePalette(seedColors[4])} />
			// </div> */}
		);
	}
}
