import React from 'react';
import { withStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';

import styles from './PaletteFooterStyles';

function PaletteFooter(props) {
	const { paletteName, emoji, classes, id } = props;
	return (
		<Link
			to={`/colour-project/palette/${id}`}
			className={classes.PaletteFooter}
		>
			<footer>
				{paletteName}
				<span className={classes.emoji}>{emoji}</span>
			</footer>
		</Link>
	);
}

export default withStyles(styles)(PaletteFooter);
