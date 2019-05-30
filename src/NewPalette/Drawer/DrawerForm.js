import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Button from '@material-ui/core/Button';

import ColorPickerForm from '../Drawer/ColorForm/ColorPickerForm';

export class DrawerForm extends Component {
	render() {
		const {
			classes,
			open,
			handleDrawerClose,
			clearColors,
			addRandomColor,
			paletteIsFull,
			updateCurrentColor,
			addNewColor,
			handleNewColorName,
			colors,
			newColorName,
			currentColor
		} = this.props;
		return (
			<div>
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
			</div>
		);
	}
}

export default DrawerForm;
