const styles = {
	root: {
		backgroundColor: 'white',
		border: '1px solid  black',
		borderRadius: '5px',
		padding: '0.5rem',
		position: 'relative',
		overflow: 'hidden',
		cursor: 'pointer',

		'&:hover svg': {
			opacity: 1
		}
	},
	colors: {
		backgroundColor: '#dae1e4',
		display: 'grid',
		gridTemplateColumns: 'repeat(5,1fr)',
		gridTemplateRows: 'repeat(4,1fr)',
		height: '10rem',
		width: '100%',
		borderRadius: '5px',
		overflow: 'hidden'
	},
	title: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		margin: '0',
		color: '#000',
		paddingTop: '0.5rem',
		fontSize: '1rem',
		position: 'relative'
	},
	emoji: {
		marginLeft: '0.5rem',
		fontSize: '1.5rem'
	},
	miniColor: {
		width: '100%',
		display: 'inline-block',
		margin: '0 auto',
		position: 'relative',
		marginBottom: '0'
	},
	delete: {},
	deleteIcon: {
		color: 'white',
		backgroundColor: '#eb3d30',
		width: '40px',
		height: '40px',
		position: 'absolute',
		top: '0px',
		right: '0px',
		padding: '10px',
		zIndex: '10',
		opacity: '0',
		transition: 'all 0.3s'
	}
};

export default styles;
