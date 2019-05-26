import chroma from 'chroma-js';

const styles = {
	copyText: {
		color: props =>
			chroma(props.background).luminance() >= 0.6
				? 'rgba(90, 88, 88, 0.822)'
				: 'white'
	},
	colorName: {
		color: props =>
			chroma(props.background).luminance() <= 0.2
				? 'white'
				: 'rgba(90, 88, 88, 0.822)'
	},
	seeMore: {
		color: props =>
			chroma(props.background).luminance() >= 0.65
				? 'rgba(90, 88, 88, 0.822)'
				: 'white',
		background: 'rgba(255, 255, 255, 0.3)',
		position: 'absolute',
		border: 'none',
		right: '0px',
		bottom: '0px',
		width: '60px',
		height: '30px',
		textAlign: 'center',
		lineHeight: '30px',
		textTransform: 'uppercase'
	},

	ColorBox: {
		width: '20%',
		height: props => (props.showingFullPalette ? '25%' : '50%'),
		margin: '0 auto',
		display: 'inline-block',
		position: 'relative',
		marginBottom: '-4px',
		cursor: 'pointer',

		'&:hover button': {
			opacity: '1',
			transition: 'all.5s',
			cursor: 'pointer'
		}
	},

	copyButton: {
		width: '100px',
		height: '30px',
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
		color: props =>
			chroma(props.background).luminance() <= 0.2
				? 'white'
				: 'rgba(90, 88, 88, 0.822)',
		textDecoration: 'none',
		opacity: '0'
	},

	boxContent: {
		position: 'absolute',
		width: '100%',
		left: '0px',
		bottom: '0px',
		padding: '10px',
		color: 'black',
		letterSpacing: '1px',
		textTransform: 'uppercase',
		fontSize: '12px'
	},
	copyOverlay: {
		opacity: '0',
		zIndex: '0',
		width: '100%',
		height: '100%',
		transform: 'scale(.1)',
		transition: 'transform 0.6s ease-in-out'
	},
	copyMsg: {
		position: 'fixed',
		left: '0px',
		right: '0px',
		top: '0px',
		bottom: '0px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column',
		fontSize: '4rem',
		transform: 'scale(0.1)',
		opacity: '0',
		color: 'white',

		'& h1': {
			fontWeight: '400',
			textShadow: '1px 2px black',
			background: 'rgba(255, 255, 255, .2)',
			width: '100%',
			textAlign: 'center',
			marginBottom: '0',
			padding: '1rem'
		},

		'& p': {
			fontSize: '2rem',
			fontWeight: '100'
		}
	},
	showOverlay: {
		opacity: '1',
		transform: 'scale(50)',
		zIndex: '10',
		position: 'absolute'
	},
	showMsg: {
		transition: 'all .4s ease-in-out .3s',
		opacity: '1',
		transform: 'scale(1)',
		zIndex: '20'
	}
};

export default styles;
