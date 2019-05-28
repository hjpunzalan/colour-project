import React, { useEffect } from 'react';
import { SketchPicker } from 'react-color';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

export default function ColorPickerForm(props) {
	const {
		updateCurrentColor,
		addNewColor,
		handleNewColorName,
		currentColor,
		colors,
		newColorName,
		paletteIsFull
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
		<div>
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
