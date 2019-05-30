import Palette from './Palette/Palette';
import { Route, Switch, Redirect } from 'react-router-dom';
import seedColors from './SeedColors/seedColors';
import React, { Component } from 'react';
import generatePalette from './SeedColors/colorHelpers';
import PaletteList from './PaletteList/PaletteList';
import SingleColorPalette from './Palette/SingleColorPalette/SingleColorPalette';
import NewPaletteForm from './NewPalette/NewPaletteForm';

export default class App extends Component {
	constructor(props) {
		super(props);
		const savedPalettes = JSON.parse(window.localStorage.getItem('palettes'));
		this.state = {
			palettes: savedPalettes || seedColors,
			open: false
		};
		this.findPalette = this.findPalette.bind(this);
		this.deletePalette = this.deletePalette.bind(this);
		this.openDialog = this.openDialog.bind(this);
		this.closeDialog = this.closeDialog.bind(this);
	}
	deletePalette(id) {
		const deletedPalette = this.state.palettes.filter(p => p.id !== id);
		this.setState({ palettes: deletedPalette }, this.syncLocalStorage);
	}

	findPalette(id) {
		return this.state.palettes.find(palette => {
			return palette.id === id;
		});
	}

	savePalette = newPalette => {
		this.setState(
			{ palettes: [...this.state.palettes, newPalette] },
			this.syncLocalStorage
		);
	};

	syncLocalStorage() {
		window.localStorage.setItem(
			'palettes',
			JSON.stringify(this.state.palettes)
		);
	}
	openDialog() {
		this.setState({ open: true });
	}

	closeDialog() {
		this.setState({ open: false });
	}

	render() {
		return (
			<Switch>
				<Route
					exact
					path="/colour-project"
					render={routeProps => (
						<PaletteList
							deletePalette={this.deletePalette}
							palettes={this.state.palettes}
							open={this.state.open}
							openDialog={this.openDialog}
							closeDialog={this.closeDialog}
							{...routeProps}
						/>
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
