import React from 'react';
import { withStyles } from '@material-ui/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import { SortableElement } from 'react-sortable-hoc';

const styles = {
	root: {
		width: '20%',
		height: '25%',
		margin: '0 auto',
		display: 'inline-block',
		position: 'relative',
		marginBottom: '-4px',
		cursor: 'pointer',

		'&:hover svg': {
			color: 'white',
			transform: 'scale(1.)'
		}
	},
	boxContent: {
		position: 'absolute',
		width: '100%',
		left: '0px',
		bottom: '0px',
		padding: '10px',
		color: 'black',
		letterSpacing: '1px',
		textTransform: 'uppercase',
		fontSize: '12px',
		display: 'flex',
		justifyContent: 'space-between'
	},
	deleteIcon: {
		color: '#2B2B2B',
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
				<span>{name}</span>{' '}
				<DeleteIcon className={classes.deleteIcon} onClick={handleClick} />
			</div>
		</div>
	);
});

export default withStyles(styles)(DraggableColorBox);
