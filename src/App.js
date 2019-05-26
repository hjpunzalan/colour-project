import Palette from './Palette';
import { Route, Switch, Redirect } from 'react-router-dom';
import seedColors from './seedColors';
import React, { Component } from 'react';
import generatePalette from './colorHelpers';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';

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
					path="/colour-project"
					render={routeProps => (
						<PaletteList palettes={seedColors} {...routeProps} />
					)}
				/>
				<Route
					exact
					path="/colour-project/palette/:id"
					render={routeProps => (
						<Palette
							palette={generatePalette(
								this.findPalette(routeProps.match.params.id)
							)}
						/>
					)}
				/>
				<Route
					path="/colour-project/palette/:paletteId/:colorId"
					render={routeProps => (
						<SingleColorPalette
							colorId={routeProps.match.params.colorId}
							palette={generatePalette(
								this.findPalette(routeProps.match.params.paletteId)
							)}
						/>
					)}
				/>

				<Redirect to="/colour-project" />
			</Switch>
			// {/* <div>
			// 	<Palette palette={generatePalette(seedColors[4])} />
			// </div> */}
		);
	}
}
