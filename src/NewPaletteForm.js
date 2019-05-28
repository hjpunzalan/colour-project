import React, { useEffect, useState } from 'react';
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
	const [newPaletteName, setNewPaletteName] = useState('');
	const paletteIsFull = colors.length >= props.maxColors;

	useEffect(() => {
		ValidatorForm.addValidationRule('isColorNameUnique', value => {
			return colors.every(
				color => color.name.toLowerCase() !== value.toLowerCase()
			);
		});

		ValidatorForm.addValidationRule('isColorUnique', value => {
			return colors.every(c => c.color !== currentColor);
		});

		ValidatorForm.addValidationRule('isPaletteUnique', value => {
			return props.palettes.every(
				p => p.paletteName.toLowerCase() !== value.toLowerCase()
			);
		});
	}, [colors, currentColor, props.palettes]);

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
		const newColor = { color: currentColor, name: newColorName };
		setColor([...colors, newColor]);
		setNewColorName('');
	}

	function handleNewColorName(e) {
		setNewColorName(e.target.value);
	}
	function handleNewPaletteName(e) {
		setNewPaletteName(e.target.value);
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
						<Button variant="contained" color="secondary" type="submit">
							Add new Palette
						</Button>
					</ValidatorForm>
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
