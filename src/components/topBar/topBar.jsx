import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '@material-ui/core/styles';
import { AppBar, makeStyles, MenuItem, Toolbar, Drawer, IconButton, Avatar, Grid } from '@material-ui/core';
import { darken, lighten } from 'polished';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';

export default function TopBar() {
  const [path, setPath] = useState(window.location.pathname);
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });
  const { mobileView, drawerOpen } = state;
  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener('resize', () => setResponsiveness());

    return () => {
      window.removeEventListener('resize', () => setResponsiveness());
    };
  }, []);
  const theme = useTheme();
  const useStyles = makeStyles({
    header: {
      backgroundColor: lighten(0.1, theme.header.background),
      color: lighten(0.1, theme.header.color),
      width: '100%',
    },
    currentLink: {
      // backgroundColor: lighten(0.1, theme.header.background),
      color: darken(0.24, theme.sidebar.color),
      paddingLeft: '20px',
      paddingRight: '20px',
      textDecoration: 'none',
    },
    link: {
      // backgroundColor: lighten(0.1, theme.header.background),
      color: theme.sidebar.color,
      paddingLeft: '20px',
      paddingRight: '20px',
      textDecoration: 'none',
      '&:hover': {
        color: darken(0.26, theme.sidebar.color),
      },
      transition: 'color .2s ease-out, background 3s ease-in',
    },
    avatarGrid: {
      textAlign: '-webkit-right',
    },
    linksGrid: {
      textAlign: '-webkit-center',
      alignSelf: 'center',
    },
    socialLinksGrid: {
      textAlign: '-webkit-left',
      alignSelf: 'center',
    },
  });

  const classes = useStyles();
  const displayDesktop = () => {
    return (
      <Toolbar className={classes.header}>
        <Grid container spacing={3}>
          <Grid className={classes.avatarGrid} item xs={3}>
            <h1>J W</h1>
          </Grid>
          <Grid className={classes.linksGrid} item xs={5}>
            {['about', 'featured', 'portfolio', 'blog', 'contact'].map((link, idx) => {
              return (
                <NavLink
                  className={'/' + link === path ? classes.currentLink : classes.link}
                  key={idx}
                  isActive={(match, location) => {
                    if (match) {
                      setPath(location.pathname);
                    }
                  }}
                  to={link}
                >
                  {link}
                </NavLink>
              );
            })}
          </Grid>
          <Grid className={classes.socialLinksGrid} item xs>
            {[<TwitterIcon />, <FacebookIcon/>, <LinkedInIcon />, <InstagramIcon />].map((link, idx) => {
              return (
                <NavLink
                  className={'/' + link === path ? classes.currentLink : classes.link}
                  key={idx}
                  isActive={(match, location) => {
                    if (match) {
                      setPath(location.pathname);
                    }
                  }}
                  to={link}
                >
                  {link}
                </NavLink>
              );
            })}
          </Grid>
        </Grid>
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () => setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () => setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar>
        <Avatar />
        <IconButton
          {...{
            edge: 'start',
            color: 'inherit',
            'aria-label': 'menu',
            'aria-haspopup': 'true',
            onClick: handleDrawerOpen,
          }}
        ></IconButton>

        <Drawer
          className={classes.header}
          {...{
            anchor: 'left',
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          {['about', 'featured', 'portfolio', 'blog', 'contact'].map((link, idx) => {
            return (
              <MenuItem>
                <NavLink
                  className={'/' + link === path ? classes.currentLink : classes.link}
                  key={idx}
                  isActive={(match, location) => {
                    if (match) {
                      setPath(location.pathname);
                    }
                  }}
                  to={link}
                >
                  {link}
                </NavLink>
              </MenuItem>
            );
          })}
        </Drawer>
      </Toolbar>
    );
  };

  return (
    <AppBar position='sticky' elevation={0} className={classes.header}>
      {mobileView ? displayMobile() : displayDesktop()}
    </AppBar>
  );
}
