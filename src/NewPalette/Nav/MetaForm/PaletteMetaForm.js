import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';

export class PaletteMetaForm extends Component {
	componentDidMount() {
		ValidatorForm.addValidationRule('isPaletteUnique', value => {
			return this.props.palettes.every(
				p => p.paletteName.toLowerCase() !== value.toLowerCase()
			);
		});
	}

	render() {
		const {
			handleSubmit,
			newPaletteName,
			handleNewPaletteName,
			isFormOpen,
			formClose,
			formEmoji
		} = this.props;
		return (
			<div>
				<Dialog open={isFormOpen === 'emoji'} onClose={formClose}>
					<DialogTitle id="form-dialog-title">
						Choose a Palette Emoji
					</DialogTitle>
					<Picker
						title="Pick a palette emoji"
						emoji="point_up"
						onSelect={handleSubmit}
						set="emojione"
					/>
				</Dialog>
				<Dialog
					open={isFormOpen === 'form'}
					onClose={formClose}
					aria-labelledby="form-dialog-title"
				>
					<DialogTitle id="form-dialog-title">
						Choose a Palette Name{' '}
						<span role="img" aria-label="emoji palette name">
							🎨
						</span>
					</DialogTitle>

					<ValidatorForm onSubmit={formEmoji}>
						<DialogContent>
							<DialogContentText>
								Please enter a name for the new palette. Make sure that the name
								is unique and not left blank.
							</DialogContentText>
							<TextValidator
								value={newPaletteName}
								label="Palette Name"
								onChange={handleNewPaletteName}
								fullWidth
								margin="normal"
								validators={['required', 'isPaletteUnique']}
								errorMessages={[
									'Palette name must be entered',
									'Palette Name must be unique'
								]}
							/>
						</DialogContent>
						<DialogActions>
							<Button onClick={formClose} color="primary">
								Cancel
							</Button>
							<Button variant="contained" color="primary" type="submit">
								Save New Palette
							</Button>
						</DialogActions>
					</ValidatorForm>
				</Dialog>
			</div>
		);
	}
}

export default PaletteMetaForm;
