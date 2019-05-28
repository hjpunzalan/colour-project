import Palette from './Palette';
import { Route, Switch, Redirect } from 'react-router-dom';
import seedColors from './seedColors';
import React, { Component } from 'react';
import generatePalette from './colorHelpers';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = { palettes: seedColors };
		this.findPalette = this.findPalette.bind(this);
	}

	findPalette(id) {
		return this.state.palettes.find(palette => {
			return palette.id === id;
		});
	}

	savePalette = newPalette => {
		this.setState({ palettes: [...seedColors, newPalette] });
	};

	render() {
		return (
			<Switch>
				<Route
					exact
					path="/colour-project"
					render={routeProps => (
						<PaletteList palettes={this.state.palettes} {...routeProps} />
					)}
				/>
				<Route
					exact
					path="/colour-project/palette/new"
					render={routeProps => (
						<NewPaletteForm
							{...routeProps}
							savePalette={this.savePalette}
							palettes={this.state.palettes}
						/>
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
