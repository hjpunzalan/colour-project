import React from 'react';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { SketchPicker } from 'react-color';
import Button from '@material-ui/core/Button';
import useStyles from './styles/NewPaletteFormStyles';

function NewPaletteForm() {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);
	const [currentColor, setCurrentColor] = React.useState('teal');
	const [colors, setColor] = React.useState(['purple', 'red']);

	function handleDrawerOpen() {
		setOpen(true);
	}

	function handleDrawerClose() {
		setOpen(false);
	}

	function updateCurrentColor(newColor) {
		setCurrentColor(newColor.hex);
	}

	function addNewColor() {
		setColor([...colors, currentColor]);
	}

	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar
				position="fixed"
				className={clsx(classes.appBar, {
					[classes.appBarShift]: open
				})}
			>
				<Toolbar>
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
						Persistent drawer
					</Typography>
				</Toolbar>
			</AppBar>
			<Drawer
				className={classes.drawer}
				variant="persistent"
				anchor="left"
				open={open}
				classes={{
					paper: classes.drawerPaper
				}}
			>
				<div className={classes.drawerHeader}>
					<IconButton onClick={handleDrawerClose}>
						<ChevronLeftIcon />
					</IconButton>
				</div>
				<Divider />
				<Typography variant="h4">Design Your Palette</Typography>
				<div className="buttons">
					<Button variant="contained" color="secondary">
						Clear Palette
					</Button>
					<Button variant="contained" color="primary">
						Random Colour
					</Button>
				</div>
				<SketchPicker
					color={currentColor}
					onChangeComplete={newColor => updateCurrentColor(newColor)}
				/>
				<Button
					variant="contained"
					color="primary"
					style={{ backgroundColor: currentColor }}
					onClick={addNewColor}
				>
					Add Color
				</Button>
			</Drawer>
			<main
				className={clsx(classes.content, {
					[classes.contentShift]: open
				})}
			>
				<div className={classes.drawerHeader} />
				<ul>
					{colors.map(color => (
						<li>{color}</li>
					))}
				</ul>
			</main>
		</div>
	);
}

export default NewPaletteForm;
