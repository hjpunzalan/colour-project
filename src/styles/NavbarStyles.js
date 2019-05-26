const styles = {
	'@import':
		'url(https://fonts.googleapis.com/css?family=Pacifico&display=swap)',
	Navbar: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-start',
		height: '6vh'
	},

	logo: {
		marginRight: 40,
		padding: '0 13px',
		fontSize: 30,
		fontFamily: 'Pacifico, cursive',
		height: '100%',
		display: 'flex',
		alignItems: 'center',

		'& a': {
			textDecoration: 'none',
			color: 'black'
		}
	},
	slider: {
		width: 340,
		margin: '0 10px',
		display: 'inline-block',

		'& .rc-slider-rail': {
			height: '8px'
		},

		'& .rc-slider-track': {
			backgroundColor: 'transparent'
		},

		'& .rc-slider-handle, .rc-slider-handle:hover, .rc-slider-handle:active, .rc-slider-handle:focus': {
			backgroundColor: 'green',
			outline: 'none',
			border: '2px solid green',
			boxShadow: 'none',
			width: '13px',
			height: '13px',
			marginLeft: '-7px',
			marginTop: '-2px'
		}
	},

	selectContainer: {
		marginLeft: 'auto',
		marginRight: '2rem'
	}
};

export default styles;
