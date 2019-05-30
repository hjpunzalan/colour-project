import sizes from '../sizes';
const styles = {
	root: {
		backgroundColor: 'blue',
		backgroundSize: 'cover',
		height: '100%',
		display: 'flex',
		alignItems: 'flex-start',
		justifyContent: 'center'
	},
	container: {
		width: '90%',
		height: '100vh',
		display: 'flex',
		alignItems: 'flex-start',
		flexDirection: 'column'
	},
	nav: {
		display: 'flex',
		[sizes.down('xs')]: {
			flexDirection: 'column'
		},
		width: '100%',
		justifyContent: 'space-between',
		color: 'white',
		alignItems: 'center',
		margin: '1rem 0',

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
	palettes: {
		boxSizing: 'border-box',
		width: '100%',
		display: 'grid',
		gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
		gridColumnGap: '5%',
		gridRowGap: '2%'
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

export default styles;
