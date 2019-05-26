import React from 'react';

export default function PaletteFooter(props) {
	const { paletteName, emoji, PaletteFooter, emojiClass } = props;
	return (
		<footer className={PaletteFooter}>
			{paletteName}
			<span className={emojiClass}>{emoji}</span>
		</footer>
	);
}
