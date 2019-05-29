import React, { useState } from 'react';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import PaletteFormNav from './PaletteFormNav';
import Button from '@material-ui/core/Button';
import useStyles from './styles/NewPaletteFormStyles';
import DraggableColorList from './DraggableColorList';
import arrayMove from 'array-move';
import ColorPickerForm from './ColorPickerForm';

NewPaletteForm.defaultProps = {
	maxColors: 20
};

function NewPaletteForm(props) {
	const classes = useStyles();
	const [open, setOpen] = useState(false);
	const [currentColor, setCurrentColor] = useState('teal');
	const [colors, setColor] = useState(props.palettes[0].colors);
	const [newColorName, setNewColorName] = useState('');
	const [newPaletteName, setNewPaletteName] = useState('');
	const paletteIsFull = colors.length >= props.maxColors;
	const [isFormOpen, setIsFormOpen] = useState(false);
	// 	handleClickOpen() {
	// 	this.setState({ open: true });
	// }

	// handleClose() {
	// 	this.setState({ open: false });
	// }

	function formOpen() {
		setIsFormOpen(true);
	}

	function formClose() {
		setIsFormOpen(false);
	}

	function handleDrawerClose() {
		setOpen(false);
	}

	function updateCurrentColor(newColor) {
		setCurrentColor(newColor.hex);
	}

	function addNewColor() {
		const newColor = { color: currentColor, name: newColorName };
		setColor([...colors, newColor]);
		setNewColorName('');
	}

	function handleNewColorName(e) {
		setNewColorName(e.target.value);
	}

	function deleteBox(colorName) {
		setColor(colors.filter(color => color.name !== colorName));
	}
	function onSortEnd({ oldIndex, newIndex }) {
		setColor(arrayMove(colors, oldIndex, newIndex));
	}

	function clearColors() {
		setColor([]);
	}
	function addRandomColor() {
		// pick random color from existing palettes
		const allColors = props.palettes.map(palette => palette.colors).flat();
		const randomIndex = Math.floor(Math.random() * allColors.length);
		const randomColor = allColors[randomIndex];
		if (
			colors.every(
				color =>
					color.name !== randomColor.name && color.color !== randomColor.color
			)
		) {
			setColor([...colors, randomColor]);
		} else {
			addRandomColor();
		}
	}

	function handleDrawerOpen() {
		setOpen(true);
	}

	function handleSubmit() {
		let name = newPaletteName;
		const newPalette = {
			paletteName: name,
			id: name.replace(/\s+/g, '-').toLowerCase(),
			emoji: '🏃‍',
			colors: colors
		};
		props.savePalette(newPalette);
		props.history.push('/');
	}
	function handleNewPaletteName(e) {
		setNewPaletteName(e.target.value);
	}

	return (
		<div className={classes.root}>
			<PaletteFormNav
				handleDrawerOpen={handleDrawerOpen}
				handleSubmit={handleSubmit}
				handleNewPaletteName={handleNewPaletteName}
				open={open}
				newPaletteName={newPaletteName}
				classes={classes}
				isFormOpen={isFormOpen}
				formOpen={formOpen}
				formClose={formClose}
				{...props}
			/>
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
				<div className={classes.container}>
					<Typography variant="h4" gutterBottom>
						Design Your Palette
					</Typography>
					<div className={classes.buttons}>
						<Button
							className={classes.button}
							variant="contained"
							color="secondary"
							onClick={clearColors}
						>
							Clear Palette
						</Button>
						<Button
							className={classes.button}
							variant="contained"
							color="primary"
							onClick={addRandomColor}
							disabled={paletteIsFull}
						>
							Random Colour
						</Button>
					</div>
					<ColorPickerForm
						updateCurrentColor={updateCurrentColor}
						addNewColor={addNewColor}
						handleNewColorName={handleNewColorName}
						colors={colors}
						newColorName={newColorName}
						currentColor={currentColor}
						paletteIsFull={paletteIsFull}
						classes={classes}
					/>
				</div>
			</Drawer>
			<main
				className={clsx(classes.content, {
					[classes.contentShift]: open
				})}
			>
				<div className={classes.drawerHeader} />
				<DraggableColorList
					axis="xy"
					colors={colors}
					deleteBox={deleteBox}
					onSortEnd={onSortEnd}
				/>
			</main>
		</div>
	);
}

export default NewPaletteForm;
