import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SideMenu from './SideMenu';
import Container from './Container';
import '@fontsource/mate-sc';

const menuItems = ['Maps', 'Lore', 'PCs', 'NPCs'];

const useStyles = makeStyles(theme => ({
  menuBtn: {},
  title: {
    position: 'fixed',
    right: theme.spacing(3),
    fontFamily: 'Mate SC',
  },
}));

const Workspace = props => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton className={classes.menuBtn} color="inherit" onClick={() => setOpen(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" noWrap className={classes.title}>
            Into the Shadows
          </Typography>
        </Toolbar>
      </AppBar>
      <SideMenu menuItems={menuItems} open={open} setOpen={setOpen} />
      <Container setOpen={setOpen} />
    </>
  );
};

export default Workspace;
