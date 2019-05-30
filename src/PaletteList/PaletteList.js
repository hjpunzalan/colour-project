import React, { Component } from 'react';
import MiniPalette from './MiniPalette';
import { withStyles } from '@material-ui/styles';
import styles from './PaletteListStyles';
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

class PaletteList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: ''
		};
		this.deleteDialog = this.deleteDialog.bind(this);
		this.handleClose = this.handleClose.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
	}
	goToPalette(id) {
		this.props.history.push(`/colour-project/palette/${id}`);
	}

	deleteDialog(paletteID) {
		this.props.openDialog();
		this.setState({ id: paletteID });
	}

	handleDelete() {
		this.props.deletePalette(this.state.id);
		this.setState({ id: '' });
		this.props.closeDialog();
	}
	handleClose() {
		this.props.closeDialog();
		this.setState({ id: '' });
	}

	render() {
		const { palettes, classes, open } = this.props;
		return (
			<div className={classes.root}>
				<div className={classes.container}>
					<nav className={classes.nav}>
						<h1>
							<span className={classes.logo}>Color Picker</span>{' '}
							<span className={classes.label}>&mdash; with React</span>
						</h1>
						<Link to="/colour-project/palette/new">Create Palette</Link>
					</nav>
					<TransitionGroup className={classes.palettes}>
						{palettes.map(p => (
							<CSSTransition key={p.id} classNames="palette" timeout={500}>
								<MiniPalette
									deleteDialog={this.deleteDialog}
									id={p.id}
									key={p.id}
									{...p}
									handleClick={() => this.goToPalette(p.id)}
								/>
							</CSSTransition>
						))}
					</TransitionGroup>
				</div>
				<Dialog open={open} aria-labelledby="delete-dialog-title">
					<DialogTitle id="delete-dialog-title">Delete Palette?</DialogTitle>
					<List>
						<ListItem button onClick={this.handleDelete}>
							<ListItemAvatar>
								<Avatar
									style={{ backgroundColor: blue[100], color: blue[600] }}
								>
									<CheckIcon />
								</Avatar>
							</ListItemAvatar>
							<ListItemText primary="Delete" />
						</ListItem>
						<ListItem button onClick={this.handleClose}>
							<ListItemAvatar>
								<Avatar style={{ backgroundColor: red[100], color: red[600] }}>
									<CloseIcon />
								</Avatar>
							</ListItemAvatar>
							<ListItemText primary="Cancel" />
						</ListItem>
					</List>
				</Dialog>
			</div>
		);
	}
}

export default withStyles(styles)(PaletteList);
