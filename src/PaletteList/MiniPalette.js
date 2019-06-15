import React, { memo } from 'react';
import { withStyles } from '@material-ui/styles';
import DeleteIcon from '@material-ui/icons/Delete';

import styles from './MiniPaletteStyles';

const MiniPalette = props => {
	const {
		classes,
		paletteName,
		emoji,
		colors,
		deleteDialog,
		id,
		handleClick
	} = props;
	const miniColorBoxes = colors.map(color => (
		<div
			className={classes.miniColor}
			style={{ backgroundColor: color.color }}
			key={color.name}
		/>
	));

	function handleDelete(e) {
		e.stopPropagation();
		deleteDialog(id);
	}

	return (
		<div className={classes.root} onClick={() => handleClick(id)}>
			<div className={classes.delete}>
				<DeleteIcon className={classes.deleteIcon} onClick={handleDelete} />
			</div>
			<div className={classes.colors}>{miniColorBoxes}</div>
			<h5 className={classes.title}>
				{paletteName} <span className={classes.emoji}>{emoji}</span>
			</h5>
		</div>
	);
};

export default withStyles(styles)(memo(MiniPalette));
