const styles = {
	root: {
		backgroundColor: 'blue',
		height: '100vh',
		display: 'flex',
		alignItems: 'flex-start',
		justifyContent: 'center'
	},
	container: {
		width: '50%',
		height: '100%',
		display: 'flex',
		alignItems: 'flex-start',
		flexDirection: 'column',
		flexWrap: 'wrap'
	},
	nav: {
		display: 'flex',
		width: '100%',
		justifyContent: 'space-between',
		color: 'white',
		alignItems: 'center',
		margin: '1rem 0',

		'& h1': {
			fontSize: '1rem'
		},

		'& a': {
			color: 'white'
		}
	},
	palettes: {
		boxSizing: 'border-box',
		width: '100%',
		display: 'grid',
		gridTemplateColumns: 'repeat(auto-fit, minmax(min-content, 30%))',
		gridGap: '5%'
	},
	logo: {
		fontFamily: 'Pacifico, cursive',
		fontWeight: '200',
		fontSize: '2rem'
	}
};

export default styles;
