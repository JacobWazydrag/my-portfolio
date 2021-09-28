import React from 'react'
import { makeStyles, Grid, Typography, Card, CardContent, CardActions, Divider, Fade } from '@material-ui/core';

export default function Featured() {
    return (
        <div style={{position: 'absolute', width: '100%', bottom: 0}}>
        <Grid container direction="column" alignItems='center'>
            <Grid item>
                {/* {events.length === 0 ? '...loading' : <HeatMap data={events} />}
                {error ? 'error loading data for heatmap' : null} */}
                {'Featured content here'}
            </Grid>
            {/* <Grid
                id="frontTop" 
                style={{}}
                justifyContent="center"
                container
                direction="row">
                <Slide in direction={'right'} timeout={2500}>
                    <Grid style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }} item xs>
                        <div style={{ display: 'grid' }}>
                            <span style={{ fontSize: '2.5vw', color: '#333333', fontWeight: 650 }}>
                                software engineer
                            </span>
                            <span style={{ fontSize: '1.0vw' }}>
                                multitasking programmer who can handle <br />the complete implementation <br /> of a
                                website or application.
                            </span>
                        </div>
                    </Grid>
                </Slide>
                <Grid item xs>
                    <Fade in timeout={3500}>
                        <img
                            style={{ paddingTop: 40, maxWidth: '100%', height: 'auto' }}
                            src={ImageOfHandsomeDude}
                            alt="handsome dude"
                        />
                    </Fade>
                </Grid>
                <Slide in direction={'left'} timeout={2500}>
                    <Grid
                        style={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            paddingRight: '150px'
                        }}
                        item
                        xs>
                        <div style={{ display: 'grid' }}>
                            <span style={{ fontSize: '2.5vw', color: '#333333', fontWeight: 650 }}>
                                web developer
                            </span>
                            <span style={{ fontSize: '1.0vw', textAlign: 'right' }}>
                                Front end developer who writes<br />clean, elegant <br /> and efficient code
                            </span>
                        </div>
                    </Grid>
                </Slide>
            </Grid> */}
            <div
                style={{
                    backgroundColor: 'whitesmoke',
                    width: '100%',
                    boxShadow: 'inset 0px 4px 4px 0px rgb(0 0 0 / 10%)',
                    placeContent: 'center'
                }}>
                <Fade in timeout={3000}>
                    <Grid
                        id="frontBottom"
                        style={{ marginTop: '100px', paddingBottom: '100px' }}
                        justifyContent="center"
                        container
                        direction="row">
                        <Grid style={{ placeContent: 'center' }} container>
                            {/* <Divider className={classes.divider} /> */}
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
                            {/* <Divider className={classes.divider} /> */}
                        </Grid>
                        Some Content
                        {/* {[
                            { pic: WinfredArtShow, id: 1 },
                            { id: 2, pic: ReminderPro },
                            { id: 3, pic: ArtSpaceLessons }
                        ].map((el, idx) => {
                            return (
                                <Grid key={idx} style={{ paddingLeft: 20 }} item>
                                    <Card className={classes.card}>
                                        <CardContent>
                                            <img
                                                style={{ width: '292.5px', height: '240px' }}
                                                src={el.pic}
                                                alt={'Project pictures'}
                                            />
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
                        })} */}
                    </Grid>
                </Fade>
            </div>
        </Grid>
    </div>
    )
}
