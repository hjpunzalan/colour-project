import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
	root: {
		width: '20%',
		height: '25%',
		margin: '0 auto',
		display: 'inline-block',
		position: 'relative',
		marginBottom: '-4px',
		cursor: 'pointer',

		'&:hover button': {
			opacity: '1',
			transition: 'all.5s',
			cursor: 'pointer'
		}
	}
};

function DraggableColorBox(props) {
	const { classes, color, name } = props;
	return (
		<div style={{ backgroundColor: color }} className={classes.root}>
			{name}
		</div>
	);
}

export default withStyles(styles)(DraggableColorBox);
