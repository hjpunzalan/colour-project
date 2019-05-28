import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import PaletteFormNav from './PaletteFormNav';
import { SketchPicker } from 'react-color';
import Button from '@material-ui/core/Button';
import useStyles from './styles/NewPaletteFormStyles';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import DraggableColorList from './DraggableColorList';
import arrayMove from 'array-move';

NewPaletteForm.defaultProps = {
	maxColors: 20
};

function NewPaletteForm(props) {
	const classes = useStyles();
	const [open, setOpen] = useState(false);
	const [currentColor, setCurrentColor] = useState('teal');
	const [colors, setColor] = useState(props.palettes[0].colors);
	const [newColorName, setNewColorName] = useState('');
	const paletteIsFull = colors.length >= props.maxColors;
	const [newPaletteName, setNewPaletteName] = useState('');

	useEffect(() => {
		ValidatorForm.addValidationRule('isColorNameUnique', value => {
			return colors.every(
				color => color.name.toLowerCase() !== value.toLowerCase()
			);
		});

		ValidatorForm.addValidationRule('isColorUnique', value => {
			return colors.every(c => c.color !== currentColor);
		});
	}, [colors, currentColor]);

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
				<Typography variant="h4">Design Your Palette</Typography>
				<div className="buttons">
					<Button variant="contained" color="secondary" onClick={clearColors}>
						Clear Palette
					</Button>
					<Button
						variant="contained"
						color="primary"
						onClick={addRandomColor}
						disabled={paletteIsFull}
					>
						Random Colour
					</Button>
				</div>
				<SketchPicker
					color={currentColor}
					onChangeComplete={newColor => updateCurrentColor(newColor)}
				/>
				<ValidatorForm onSubmit={addNewColor}>
					<TextValidator
						value={newColorName}
						onChange={handleNewColorName}
						validators={['required', 'isColorNameUnique', 'isColorUnique']}
						errorMessages={[
							'Please enter a color name',
							'Color name must be unique',
							'Color was already used'
						]}
					/>
					<Button
						variant="contained"
						color="primary"
						style={{ backgroundColor: paletteIsFull ? 'grey' : currentColor }}
						type="submit"
						defaultProps
						disabled={paletteIsFull}
					>
						{paletteIsFull ? 'Palette Full' : 'Add Color'}
					</Button>
				</ValidatorForm>
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
