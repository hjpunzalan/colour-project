import React, { useEffect } from 'react';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Link } from 'react-router-dom';

function PaletteFormNav(props) {
	const {
		handleDrawerOpen,
		handleSubmit,
		handleNewPaletteName,
		open,
		newPaletteName,
		classes
	} = props;

	useEffect(() => {
		ValidatorForm.addValidationRule('isPaletteUnique', value => {
			return props.palettes.every(
				p => p.paletteName.toLowerCase() !== value.toLowerCase()
			);
		});
	}, [props.palettes]);
	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar
				color="default"
				position="fixed"
				className={clsx(classes.appBar, {
					[classes.appBarShift]: open
				})}
			>
				<Toolbar disableGutters={!open}>
					<IconButton
						color="inherit"
						aria-label="Open drawer"
						onClick={handleDrawerOpen}
						edge="start"
						className={clsx(classes.menuButton, open && classes.hide)}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" noWrap>
						Create a Palette
					</Typography>
				</Toolbar>
				<div className={classes.navBtns}>
					<ValidatorForm onSubmit={handleSubmit}>
						<TextValidator
							value={newPaletteName}
							label="Palette Name"
							onChange={handleNewPaletteName}
							validators={['required', 'isPaletteUnique']}
							errorMessages={[
								'Palette name must be entered',
								'Palette Name must be unique'
							]}
						/>
						<Button variant="contained" color="primary" type="submit">
							Add new Palette
						</Button>
					</ValidatorForm>
					<Link to="/">
						<Button variant="contained" color="secondary">
							Go Back
						</Button>
					</Link>
				</div>
			</AppBar>
		</div>
	);
}

export default PaletteFormNav;
