import React from 'react';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import LibraryAdd from '@material-ui/icons/LibraryAdd';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import PaletteMetaForm from './MetaForm/PaletteMetaForm';

function PaletteFormNav(props) {
	const {
		handleDrawerOpen,
		handleSubmit,
		handleNewPaletteName,
		open,
		newPaletteName,
		classes,
		isFormOpen,
		formOpen,
		formClose,
		formEmoji
	} = props;

	return (
		<div className={classes.root}>
			<AppBar
				color='default'
				position='fixed'
				className={clsx(classes.appBar, {
					[classes.appBarShift]: open
				})}>
				<Toolbar disableGutters={!open}>
					<IconButton
						color='inherit'
						aria-label='Open drawer'
						onClick={handleDrawerOpen}
						edge='start'
						className={clsx(classes.menuButton, open && classes.hide)}>
						<LibraryAdd />
					</IconButton>
					<Typography className={classes.navTitle} variant='h6' noWrap>
						Create a Palette
					</Typography>
				</Toolbar>
				<div className={classes.navBtns}>
					<PaletteMetaForm
						handleSubmit={handleSubmit}
						newPaletteName={newPaletteName}
						handleNewPaletteName={handleNewPaletteName}
						isFormOpen={isFormOpen}
						formClose={formClose}
						formEmoji={formEmoji}
						classes={classes}
						{...props}
					/>
					<Link to='/colour-project'>
						<Button variant='contained' color='secondary'>
							Go Back
						</Button>
					</Link>
					<Button variant='contained' color='primary' onClick={formOpen}>
						SAVE
					</Button>
				</div>
			</AppBar>
		</div>
	);
}

export default PaletteFormNav;
