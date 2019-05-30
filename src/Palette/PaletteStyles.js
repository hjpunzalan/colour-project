import sizes from '../sizes';
const styles = {
	Palette: {
		height: '100vh',
		display: 'flex',
		flexDirection: 'column'
	},

	PaletteColors: {
		height: '88%'
	},
	goBack: {
		backgroundColor: 'black',
		width: '20%',
		height: '50%',
		margin: '0 auto',
		display: 'inline-block',
		position: 'relative',
		marginBottom: '-4px',
		cursor: 'pointer',
		[sizes.down('lg')]: {
			width: '75%',
			height: '33.3333%'
		},
		[sizes.down('md')]: {
			width: '50%',
			height: '20%'
		},
		[sizes.down('xs')]: {
			width: '100%',
			height: '10%'
		}
	},
	backButton: {
		width: '100px',
		height: ' 30px',
		position: 'absolute',
		display: 'inline-block',
		top: '50%',
		left: '50%',
		marginLeft: '-50px',
		marginTop: '-15px',
		textAlign: 'center',
		outline: 'none',
		background: 'rgba(255, 255, 255, .3)',
		fontSize: '1rem',
		lineHeight: '30px',
		textTransform: 'uppercase',
		border: 'none',
		color: 'white',
		textDecoration: 'none'
	}
};

export default styles;
