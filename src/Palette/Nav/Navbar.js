import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'rc-slider';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import { IconButton } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

import 'rc-slider/assets/index.css';
import styles from './NavbarStyles';

class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = { format: 'hex', open: false };
		this.handleFormatChange = this.handleFormatChange.bind(this);
		this.closeSnackBar = this.closeSnackBar.bind(this);
	}

	handleFormatChange(e) {
		this.setState({ format: e.target.value, open: true });
		this.props.handleChange(e.target.value);
	}

	closeSnackBar() {
		this.setState({ open: false });
	}

	render() {
		const { changeLevel, level, showSlider, classes } = this.props;
		const { format } = this.state;
		return (
			<nav className={classes.Navbar}>
				<div className={classes.logo}>
					<Link to="/colour-project">Colour Picker</Link>
				</div>
				{showSlider && (
					<div className={classes.sliderContainer}>
						<span>Level: {level}</span>
						<div className={classes.slider}>
							<Slider
								defaultValue={level}
								min={100}
								max={900}
								step={100}
								onAfterChange={changeLevel}
							/>
						</div>
					</div>
				)}

				<div className={classes.selectContainer}>
					<Select value={format} onChange={this.handleFormatChange}>
						<MenuItem value="hex">HEX - #ffffff</MenuItem>
						<MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
						<MenuItem value="rgba">RGBA - rgb(255,255,255,1.0)</MenuItem>
					</Select>
				</div>
				<Snackbar
					anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
					open={this.state.open}
					autoHideDuration={3000}
					message={
						<span id="message-id">
							Format Changed to {format.toUpperCase()}
						</span>
					}
					ContentProps={{
						'aria-describedby': 'message-id'
					}}
					action={[
						<IconButton
							onClick={this.closeSnackBar}
							color="inherit"
							key="close"
							aria-label="close"
						>
							<CloseIcon />
						</IconButton>
					]}
					onClose={this.closeSnackBar}
				/>
			</nav>
		);
	}
}

export default withStyles(styles)(Navbar);
