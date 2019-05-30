import React from 'react';
import { withStyles } from '@material-ui/styles';
import { SortableElement } from 'react-sortable-hoc';
import DeleteIcon from '@material-ui/icons/Delete';
import chroma from 'chroma-js';
import sizes from '../../sizes';

const styles = {
	root: {
		width: '20%',
		height: '25%',
		margin: '0 auto',
		display: 'inline-block',
		position: 'relative',
		marginBottom: '-6px',
		cursor: 'pointer',

		'&:hover svg': {
			color: 'white',
			transform: 'scale(1.)'
		},
		[sizes.down('lg')]: {
			width: '25%',
			height: '20%'
		},
		[sizes.down('md')]: {
			width: '50%',
			height: '10%'
		},
		[sizes.down('xs')]: {
			width: '100%',
			height: '5%'
		}
	},
	boxContent: {
		position: 'absolute',
		width: '100%',
		left: '0px',
		bottom: '0px',
		padding: '10px',
		color: props =>
			chroma(props.color).luminance() <= 0.2
				? 'rgba(255,255,255.8)'
				: 'rgba(0,0,0,.6)',
		letterSpacing: '1px',
		textTransform: 'uppercase',
		fontSize: '12px',
		display: 'flex',
		justifyContent: 'space-between',
		[sizes.down('xs')]: {
			padding: '0'
		}
	},
	deleteIcon: {
		color: props =>
			chroma(props.color).luminance() >= 0.08
				? '#2B2B2B'
				: 'rgba(255,255,255.8)',
		transition: 'all .2s'
	}
};

const DraggableColorBox = SortableElement(props => {
	const { classes, color, name, deleteBox } = props;

	function handleClick() {
		deleteBox(name);
	}

	return (
		<div style={{ backgroundColor: color }} className={classes.root}>
			<div className={classes.boxContent}>
				<span>{name}</span>
				<DeleteIcon className={classes.deleteIcon} onClick={handleClick} />
			</div>
		</div>
	);
});

export default withStyles(styles)(DraggableColorBox);
