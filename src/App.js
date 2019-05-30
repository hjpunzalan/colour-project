import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Page from './Page';
import Palette from './Palette/Palette';
import NewPaletteForm from './NewPalette/NewPaletteForm';
import SingleColorPalette from './Palette/SingleColorPalette/SingleColorPalette';

import seedColors from './SeedColors/seedColors';
import generatePalette from './SeedColors/colorHelpers';
import PaletteList from './PaletteList/PaletteList';
import './App.css';

export default class App extends Component {
	constructor(props) {
		super(props);
		const savedPalettes = JSON.parse(window.localStorage.getItem('palettes'));
		this.state = {
			palettes: savedPalettes || seedColors,
			open: false,
			page: 'paletteForward'
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

	paletteBack = () => {
		this.setState({ page: 'paletteBack' });
	};

	paletteForward = () => {
		this.setState({ page: 'paletteForward' });
	};

	render() {
		return (
			<Route
				render={({ location }) => (
					<TransitionGroup>
						<CSSTransition key={location.key} classNames="page" timeout={500}>
							<Switch location={location}>
								<Route
									exact
									path="/colour-project"
									render={routeProps => (
										<Page page={'paletteList'}>
											<PaletteList
												deletePalette={this.deletePalette}
												palettes={this.state.palettes}
												open={this.state.open}
												openDialog={this.openDialog}
												closeDialog={this.closeDialog}
												{...routeProps}
												paletteForward={this.paletteForward}
											/>
										</Page>
									)}
								/>
								<Route
									exact
									path="/colour-project/palette/new"
									render={routeProps => (
										<Page page={'newPalette'}>
											<NewPaletteForm
												{...routeProps}
												savePalette={this.savePalette}
												palettes={this.state.palettes}
											/>
										</Page>
									)}
								/>
								<Route
									exact
									path="/colour-project/palette/:id"
									render={routeProps => (
										<Page page={this.state.page}>
											<Palette
												palette={generatePalette(
													this.findPalette(routeProps.match.params.id)
												)}
												goBack={this.goBack}
											/>
										</Page>
									)}
								/>
								<Route
									path="/colour-project/palette/:paletteId/:colorId"
									render={routeProps => (
										<Page page={'singleColorPalette'}>
											<SingleColorPalette
												paletteBack={this.paletteBack}
												colorId={routeProps.match.params.colorId}
												palette={generatePalette(
													this.findPalette(routeProps.match.params.paletteId)
												)}
											/>
										</Page>
									)}
								/>
								<Redirect to="/colour-project" />
							</Switch>
						</CSSTransition>
					</TransitionGroup>
				)}
			/>
			// {/* <div>
			// 	<Palette palette={generatePalette(seedColors[4])} />
			// </div> */}
		);
	}
}
