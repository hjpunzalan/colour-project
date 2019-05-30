import React, { useState } from 'react';
import clsx from 'clsx';
import arrayMove from 'array-move';

import PaletteFormNav from './Nav/PaletteFormNav';
import useStyles from './NewPaletteFormStyles';
import DraggableColorList from './DraggableColorBox/DraggableColorList';
import DrawerForm from './Drawer/DrawerForm';

import { MAX_COLORS } from '../constants/constants';
import seedColors from '../SeedColors/seedColors';

NewPaletteForm.defaultProps = {
	maxColors: MAX_COLORS
};

function NewPaletteForm(props) {
	const classes = useStyles();
	const [open, setOpen] = useState(false);
	const [currentColor, setCurrentColor] = useState('teal');
	const [colors, setColor] = useState(seedColors[0].colors);
	const [newColorName, setNewColorName] = useState('');
	const [newPaletteName, setNewPaletteName] = useState('');
	const paletteIsFull = colors.length >= props.maxColors;
	const [isFormOpen, setIsFormOpen] = useState(false);
	function formOpen() {
		setIsFormOpen('form');
	}

	function formEmoji() {
		setIsFormOpen('emoji');
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
		const allColors = seedColors.map(palette => palette.colors).flat();
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
	function handleSubmit(emoji) {
		let name = newPaletteName;
		const newPalette = {
			paletteName: name,
			id: name.replace(/\s+/g, '-').toLowerCase(),
			emoji: emoji.native,
			colors: colors
		};
		props.savePalette(newPalette);
		formClose();
		props.history.push('/colour-project');
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
				formEmoji={formEmoji}
				{...props}
			/>
			<DrawerForm
				handleDrawerClose={handleDrawerClose}
				clearColors={clearColors}
				addRandomColor={addRandomColor}
				paletteIsFull={paletteIsFull}
				updateCurrentColor={updateCurrentColor}
				addNewColor={addNewColor}
				handleNewColorName={handleNewColorName}
				colors={colors}
				newColorName={newColorName}
				currentColor={currentColor}
				open={open}
				classes={classes}
			/>
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
					distance={10}
				/>
			</main>
		</div>
	);
}

export default NewPaletteForm;
