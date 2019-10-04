import { makeStyles } from '@material-ui/core/styles';
import { DRAWER_WIDTH } from '../constants/constants';
import sizes from '../sizes';

const drawerWidth = DRAWER_WIDTH;
const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		alignItems: 'center'
	},
	appBar: {
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		}),
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	appBarShift: {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: drawerWidth,
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen
		})
	},
	menuButton: {
		margin: theme.spacing(2),
		[sizes.down('xs')]: {
			margin: theme.spacing(0)
		}
	},
	hide: {
		display: 'none'
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0
	},
	drawerPaper: {
		width: drawerWidth,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		overflow: 'hidden'
	},
	drawerHeader: {
		alignSelf: 'flex-end',
		display: 'flex',
		alignItems: 'center',
		padding: '0 8px',
		...theme.mixins.toolbar,
		justifyContent: 'flex-end'
	},
	content: {
		flexGrow: 1,
		height: 'calc(100vh - 64px) ',
		padding: 0,
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		}),
		marginLeft: -drawerWidth
	},
	contentShift: {
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen
		}),
		marginLeft: 0
	},
	navBtns: {
		marginRight: '1rem',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',

		'& button': {
			margin: '0 0.5rem',
			[sizes.down('xs')]: {
				padding: '.3rem',
				fontSize: '.6rem',
				margin: '.2rem'
			}
		},

		'& a': {
			textDecoration: 'none'
		},
		[sizes.down('xs')]: {
			marginRight: '.5rem'
		}
	},
	container: {
		width: '90%',
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center'
	},
	buttons: {
		width: '100%',
		marginBottom: '1rem'
	},
	button: {
		width: '50%',
		[sizes.down('xs')]: {
			fontSize: '.6rem'
		}
	},
	picker: {
		width: '80% !important',
		marginTop: '2rem'
	},
	pickerContainer: {
		height: '80%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-around',
		alignItems: 'center'
	},
	addColor: {
		width: '80%',
		padding: '1rem',
		margin: '2rem 0',
		fontSize: '1.2rem'
	},
	colorNameInput: {
		width: '80%',
		height: '20px',
		margin: '1rem 0 2rem 0'
	},
	formContainer: {
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-around',
		alignItems: 'center'
	},
	navTitle: {
		[sizes.down('xs')]: {
			fontSize: '.8rem'
		},
		'@media only screen and (max-width: 450px)': {
			fontSize: '.8rem'
		}
	}
}));

export default useStyles;
