import React, { useEffect } from 'react';
import { SketchPicker } from 'react-color';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Button from '@material-ui/core/Button';

export default function ColorPickerForm(props) {
	const {
		updateCurrentColor,
		addNewColor,
		handleNewColorName,
		currentColor,
		colors,
		newColorName,
		paletteIsFull,
		classes
	} = props;

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

	return (
		<div className={classes.pickerContainer}>
			<SketchPicker
				className={classes.picker}
				color={currentColor}
				onChangeComplete={newColor => updateCurrentColor(newColor)}
			/>
			<ValidatorForm
				instantValidate={false}
				className={classes.formContainer}
				onSubmit={addNewColor}
			>
				<TextValidator
					className={classes.colorNameInput}
					variant="filled"
					placeholder="Color Name"
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
					className={classes.addColor}
					variant="contained"
					color="primary"
					style={{
						backgroundColor: paletteIsFull ? 'grey' : currentColor
					}}
					type="submit"
					defaultProps
					disabled={paletteIsFull}
				>
					{paletteIsFull ? 'Palette Full' : 'Add Color'}
				</Button>
			</ValidatorForm>
		</div>
	);
}
