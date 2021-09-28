import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '@material-ui/core/styles';
import { makeStyles, Grid } from '@material-ui/core';
import { darken } from 'polished';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

export default function Footer() {
    const [path, setPath] = useState(window.location.pathname);
    // const [state, setState] = useState({
    //     mobileView: false,
    //     drawerOpen: false
    // });
    // // const { mobileView, drawerOpen } = state;
    // useEffect(() => {
    //     const setResponsiveness = () => {
    //         return window.innerWidth < 900
    //             ? setState(prevState => ({ ...prevState, mobileView: true }))
    //             : setState(prevState => ({ ...prevState, mobileView: false }));
    //     };

    //     setResponsiveness();

    //     window.addEventListener('resize', () => setResponsiveness());

    //     return () => {
    //         window.removeEventListener('resize', () => setResponsiveness());
    //     };
    // }, []);
    const theme = useTheme();
    const useStyles = makeStyles({
        footer: {
            backgroundColor: '#f5f5f5',
            padding: '40px 5% 0 5%',
            color: '#757575',
            fontSize: '16px',
            textAlign: 'center',
            position: 'absolute',
            width: '100%',
            height: '2.5rem',
            opacity: 1,
            boxShadow: 'inset 0px 1px 4px 0px rgb(0 0 0 / 10%)'
        },
        footerSprite: {
            // position: 'absolute',
            width: '100%',
            height: '50px',
            top: '-50px',
            left: '0px',
            backgroundColor: 'whitesmoke',
            backgroundImage:
                '-webkit-gradient(linear, left bottom, left top, color-stop(0, #ffffff), color-stop(1, rgba(255, 255, 255, 0)))'
        },
        footerThing: {
            backgroundColor: '#f5f5f5',
            // background: 'transparent url(images/sprite.png) 0 -217px',
            width: '130px',
            height: '120px',
            display: 'block',
            position: 'absolute',
            left: '50%',
            marginLeft: '-59px',
            // bottom: '-40px',
            // textIndent: '-9999px',
            zIndex: 9999,
            opacity: 1,
            boxShadow: 'inset 0px 1px 1px 0px rgb(0 0 0 / 10%)',
            borderRadius: '250px 250px 250px 250px',
            textAlign: '-webkit-center',
            marginTop: '0px',
            transition: 'margin-top ease 0.5s',
            '&:hover': {
                marginTop: '-5px'
            }
        },
        currentLink: {
            // backgroundColor: lighten(0.1, theme.header.background),
            color: darken(0.24, theme.sidebar.color),
            paddingLeft: '20px',
            paddingRight: '20px',
            textDecoration: 'none'
        },
        link: {
            // backgroundColor: lighten(0.1, theme.header.background),
            color: '#757575',
            paddingLeft: '20px',
            paddingRight: '20px',
            textDecoration: 'none',
            '&:hover': {
                color: darken(0.26, theme.sidebar.color)
            },
            transition: 'color .2s ease-out, background 3s ease-in',
            flex: 'auto',
            textAlign: 'center',
            paddingTop: 15
        },
        avatarGrid: {
            textAlign: '-webkit-left'
        },
        linksGrid: {
            textAlign: '-webkit-left',
            alignSelf: 'center',
            marginTop: '15px'
        },
        socialLinksGrid: {
            textAlign: '-webkit-left',
            alignSelf: 'center'
        }
    });
    const classes = useStyles();
    return (
        <div>
            <div className={classes.footerSprite}>
                <div className={classes.footerThing}>
                    <ArrowForwardIosIcon
                        onClick={() => window.scrollTo({ top: 0, bottom: 0, behavior: 'smooth' })}
                        style={{
                            marginTop: 5,
                            fontSize: 60,
                            color: 'white',
                            cursor: 'pointer',
                            transform: 'rotate(-90deg)'
                        }}
                    />
                </div>
            </div>
            <div className={classes.footer} />
            <Grid style={{ position: 'absolute', zIndex: 999, placeContent: 'flex-end' }} container spacing={3}>
                <NavLink to="/" className={classes.link}>
                    <h4 style={{ fontWeight: 200 }}>© 2021 Jacob Wazydrag</h4>
                </NavLink>
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
                                to={link}>
                                {link}
                            </NavLink>
                        );
                    })}
                </Grid>
            </Grid>
        </div>
    );
}
