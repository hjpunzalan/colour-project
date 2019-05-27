import React, { Component } from 'react';
import MiniPalette from './MiniPalette';
import { withStyles } from '@material-ui/styles';
import styles from './styles/PaletteListStyles';
import { Link } from 'react-router-dom';

class PaletteList extends Component {
	goToPalette(id) {
		this.props.history.push(`/colour-project/palette/${id}`);
	}

	render() {
		const { palettes, classes } = this.props;
		return (
			<div className={classes.root}>
				<div className={classes.container}>
					<nav className={classes.nav}>
						<h1>
							<span className={classes.logo}>Color Picker</span> &mdash; with
							React
						</h1>
						<Link to="/colour-project/palette/new">Create Palette</Link>
					</nav>
					<div className={classes.palettes}>
						{palettes.map(p => (
							<MiniPalette
								key={p.id}
								{...p}
								handleClick={() => this.goToPalette(p.id)}
							/>
						))}
					</div>
				</div>
			</div>
		);
	}
}

export default withStyles(styles)(PaletteList);
