import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import { Drawer, Divider, List, ListItem, ListItemText, ListItemIcon, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

const useStyles = makeStyles(theme => ({
  drawer: {
    minWidth: '250px',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
}));

const Sidebar = props => {
  const { menuItems, open, setOpen } = props;
  const classes = useStyles();

  return (
    <Drawer classes={{ paper: classes.drawer }} variant="persistent" anchor="left" open={open}>
      <div className={classes.drawerHeader}>
        <IconButton onClick={() => setOpen(false)}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>
        {menuItems.map(menuItem => (
          <ListItem button key={menuItem}>
            <ListItemIcon>
              <MenuIcon />
            </ListItemIcon>
            <ListItemText primary={menuItem} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
