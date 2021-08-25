import React, { useState, useEffect } from 'react';
import { useTheme } from '@material-ui/core/styles';
import { makeStyles, Grid, Typography } from '@material-ui/core';
import { darken, lighten } from 'polished';
import ImageOfHandsomeDude from '../../assets/images/bIdrLKK.jpeg'
import './home.css';
export default function Home() {
    const [state, setState] = useState({
        mobileView: false,
        drawerOpen: false
    });
    const { mobileView, drawerOpen } = state;
    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 900
                ? setState(prevState => ({ ...prevState, mobileView: true }))
                : setState(prevState => ({ ...prevState, mobileView: false }));
        };

        setResponsiveness();

        window.addEventListener('resize', () => setResponsiveness());

        return () => {
            window.removeEventListener('resize', () => setResponsiveness());
        };
    }, []);

    const theme = useTheme();
    console.log(theme);
    const useStyles = makeStyles({
        homeTitlesLeft: theme.typography.homeTitlesLeft,
        homeTitlesRight: theme.typography.homeTitlesRight
    });

    const classes = useStyles();
    return (
        <React.Fragment>
            <Grid container direction="row">
                <Grid item xs>
                    <Typography className={'homeTitlesLeft'}>
                        <span className={classes.homeTitlesLeft}>full stack engineer</span>
                    </Typography>
                </Grid>
                <img style={{borderRadius: 150, paddingTop: 40,  height: 500, width: 400}} src={ImageOfHandsomeDude} alt="handsome dude"/>
                <Grid item xs>
                    <Typography className={'homeTitlesRight'}>
                        <span className={classes.homeTitlesRight}>web developer</span>
                    </Typography>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
