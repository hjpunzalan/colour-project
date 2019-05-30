import sizes from '../../sizes';

const styles = {
	Navbar: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-start',
		height: '7vh',
		width: '100%'
	},

	logo: {
		marginRight: '40px',
		padding: '0 13px',
		fontSize: '30px',
		fontFamily: 'Pacifico, cursive',
		height: '100%',
		display: 'flex',
		alignItems: 'center',

		'& a': {
			textDecoration: 'none',
			color: 'black'
		},
		[sizes.down('sm')]: {
			fontSize: '20px',
			margin: '0'
		},
		[sizes.down('xs')]: {
			display: 'none'
		}
	},
	sliderContainer: {
		[sizes.down('xs')]: {
			display: 'flex',
			fontSize: '.7rem',
			padding: '0 .5rem'
		}
	},
	slider: {
		width: '340px',
		margin: '0 10px',
		display: 'inline-block',
		[sizes.down('xs')]: {
			width: '7rem'
		},

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
		marginLeft: 'auto'
	}
};

export default styles;
