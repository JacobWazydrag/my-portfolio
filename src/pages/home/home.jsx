import React, { useState, useEffect } from 'react';
import { useTheme } from '@material-ui/core/styles';
import {
    makeStyles,
    Grid,
    Typography,
    Card,
    CardContent,
    CardMedia,
    Button,
    CardActions,
    Divider,
    Fade
} from '@material-ui/core';
import ArrowForwardIosSharpIcon from '@material-ui/icons/ArrowForwardIosSharp';
import { darken, lighten, position } from 'polished';
import ArtSpaceLessons from '../../assets/images/ArtSpaceLessons.png';
import ReminderPro from '../../assets/images/ReminderPro.png';
import WinfredArtShow from '../../assets/images/WinfredArtShow.png';
import ImageOfHandsomeDude from '../../assets/images/tempPerson.jpg';
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
        homeTitlesRight: theme.typography.homeTitlesRight,
        homeSubTitlesLeft: theme.typography.homeSubTitlesLeft,
        homeSubTitlesRight: theme.typography.homeSubTitlesRight,
        card: {
            backgroundColor: theme.palette.common.white,
            color: 'black',
            borderRadius: '4px',
            border: '1px solid #f2f8f9',
            boxShadow: '0 1px 4px 0px rgb(0 0 0 / 20%)',
            cursor: 'pointer',
            '&:hover': {
                transition: 'all .3s ease-out',
                boxShadow: '0 2px 4px 0px rgb(0 0 0 / 50%)'
            }
        },
        arrow: {
            color: 'white',
            fontSize: 25,
            justifySelf: '-webkit-right',
            '&:hover': {
                color: 'slategrey'
            }
        },
        divider: {
            width: '100%',
            backgroundColor: 'lightgrey',
            maxWidth: 320,
            marginTop: 10,
            opacity: 0.5
        }
    });

    const classes = useStyles();
    return (
        <React.Fragment>
            <Grid id="frontTop" container direction="column">
                <Grid container direction="row">
                    <Grid item xs>
                        <Typography className={'homeTitlesLeft'}>
                            <span className={classes.homeTitlesLeft}>software engineer</span>
                        </Typography>
                        <Typography className={'homeSubTitlesLeft'}>
                            <span className={classes.homeSubTitlesLeft}>multitasking programmer who can handle <br/>the complete implementation <br/> of a website or application.</span>
                        </Typography>
                    </Grid>
                    <Fade in timeout={3500}>
                        <img
                            style={{paddingTop: 40,}}
                            src={ImageOfHandsomeDude}
                            alt="handsome dude"
                        />
                    </Fade>
                    <Grid item xs>
                        <Typography className={'homeTitlesRight'}>
                            <span className={classes.homeTitlesRight}>web developer</span>
                            {/* <span className={classes.homeSubTitlesRight}>web developer</span> */}
                        </Typography>
                        <Typography className={'homeSubTitlesRight'}>
                            <span className={classes.homeSubTitlesRight}>Front end developer who writes<br/>clean, elegant <br/> and efficient code</span>
                        </Typography>
                    </Grid>
                </Grid>
                <div
                    style={{
                        backgroundColor: 'whitesmoke',
                        width: '100%',
                        boxShadow: 'inset 0px 4px 4px 0px rgb(0 0 0 / 10%)'
                    }}>
                    <Fade in timeout={3000}>
                        <Grid
                            id="frontBottom"
                            style={{ marginTop: '100px', paddingBottom: '100px' }}
                            justifyContent="center"
                            container
                            direction="row">
                            <Grid style={{ placeContent: 'center' }} container>
                                <Divider className={classes.divider} />
                                <Typography
                                    style={{
                                        color: 'grey',
                                        paddingRight: 25,
                                        paddingLeft: 25,
                                        paddingBottom: 25,
                                        fontFamily: `"proxima nova semibold", "Helvetica Neue", Helvetica, Arial, Sans-serif`
                                    }}
                                    variant="h6"
                                    component="p">
                                    SOME OF MY LATEST WORK
                                </Typography>
                                <Divider className={classes.divider} />
                            </Grid>
                            {[
                                { pic: WinfredArtShow, id: 1 },
                                { id: 2, pic: ReminderPro },
                                { id: 3, pic: ArtSpaceLessons }
                            ].map((el, idx) => {
                                return (
                                    <Grid style={{ paddingLeft: 20 }} item>
                                        <Card className={classes.card}>
                                            <CardContent>
                                                <img style={{ width: '292.5px', height: '240px' }} src={el.pic} />
                                                <div style={{ display: 'flex' }}>
                                                    <div>
                                                        <Typography
                                                            style={{ color: 'grey' }}
                                                            variant="h6"
                                                            component="p">
                                                            Creating a lean design system
                                                        </Typography>
                                                        <Typography
                                                            style={{ color: 'lightgrey' }}
                                                            variant={'body2'}
                                                            component="p">
                                                            {'a benevolent smile'}
                                                        </Typography>
                                                    </div>
                                                    <div>
                                                        <CardActions>
                                                            <ArrowForwardIosSharpIcon className={classes.arrow}>
                                                                Learn More
                                                            </ArrowForwardIosSharpIcon>
                                                        </CardActions>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                );
                            })}
                        </Grid>
                    </Fade>
                </div>
            </Grid>
        </React.Fragment>
    );
}
