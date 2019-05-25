import Palette from './Palette';
import { Route, Switch, Redirect } from 'react-router-dom';
import seedColors from './seedColors';
import React, { Component } from 'react';
import generatePalette from './colorHelpers';
import PaletteList from './PaletteList';

export default class App extends Component {
	findPalette(id) {
		return seedColors.find(palette => {
			return palette.id === id;
		});
	}

	render() {
		return (
			<Switch>
				<Route
					exact
					path="/"
					render={routeProps => (
						<PaletteList palettes={seedColors} {...routeProps} />
					)}
				/>
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
				<Route
					path="/palette/:paletteId/:colorId"
					render={() => <h1>Single color page</h1>}
				/>
				<Redirect to="/" />
			</Switch>
			// {/* <div>
			// 	<Palette palette={generatePalette(seedColors[4])} />
			// </div> */}
		);
	}
}
