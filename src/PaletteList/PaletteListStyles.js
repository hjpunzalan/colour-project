import sizes from '../sizes';
import bg from '../bg.svg';
export default {
	'@global': {
		'.palette-exit': {
			opacity: 1
		},

		'.palette-exit-active': {
			opacity: 0,
			transition: 'opacity 500ms ease-in'
		}
	},
	root: {
		backgroundColor: '#3915bb',
		backgroundImage: `url(${bg})`,
		height: '100vh',
		display: 'flex',
		alignItems: 'flex-start',
		justifyContent: 'center',
		overflow: 'scroll'
		// /* background by SVGBackgrounds.com */
	},
	container: {
		width: '100%',
		maxWidth: '1100px',
		height: '100%',
		display: 'flex',
		alignItems: 'flex-start',
		flexDirection: 'column',
		[sizes.down('xs')]: {
			width: '100%'
		}
	},
	nav: {
		display: 'flex',
		width: '100%',
		justifyContent: 'space-between',
		fontSize: '1.2rem',
		color: 'white',
		alignItems: 'center',
		margin: '1rem 0',

		[sizes.down('xs')]: {
			flexDirection: 'column'
		},
		'& h1': {
			fontSize: '1rem'
		},

		'& a': {
			color: 'white',
			[sizes.down('xs')]: {
				fontSize: '1rem',
				textDecoration: 'none',
				backgroundColor: '#e01b5c',
				padding: '.5rem',
				borderRadius: '2px'
			}
		}
	},

	link: {
		fontSize: '1.2rem'
	},
	palettes: {
		boxSizing: 'border-box',
		width: '100%',
		display: 'grid',
		gridTemplateColumns: 'repeat(auto-fill,minmax(300px, 1fr))',
		justifyItems: 'center'
	},
	logo: {
		fontFamily: 'Pacifico, cursive',
		fontWeight: '200',
		fontSize: '2rem',

		[sizes.down('xs')]: {
			fontSize: '3rem',
			display: 'initial'
		}
	},
	label: {
		[sizes.down('xs')]: {
			display: 'none'
		}
	}
};
