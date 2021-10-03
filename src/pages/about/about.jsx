import React from 'react';
import { makeStyles, Grid, Typography, Card, CardContent, CardActions, Divider, Fade } from '@material-ui/core';
import AboutImage from '../../../src/assets/images/AboutPic.jpg';
import AboutImage1 from '../../../src/assets/images/carousalImage1.jpg';
import AboutImage2 from '../../../src/assets/images/carousalImage2.jpeg';
import AboutImage3 from '../../../src/assets/images/carousalImage3.jpeg';
import AboutImage4 from '../../../src/assets/images/dog.jpg';
import AboutImage5 from '../../../src/assets/images/climbing.jpg';
import AboutImage6 from '../../../src/assets/images/46635.jpg';
import SmallCardWithImage from '../../components/cards/smallCardWithImage';

export default function About() {
    return (
        <div>
            <Grid container direction="column" alignItems="center">
                <Grid id="frontTop" style={{}} justifyContent="center" container direction="row">
                    <Grid container direction="column" style={{ alignItems: 'center' }}>
                        <div style={{ display: 'flex', flexDirection: 'row', placeItems: 'flex-end' }}>
                            <div style={{ height: '590px', width: '440px' }}>
                                <h1
                                    style={{
                                        fontSize: '7.2rem',
                                        margin: '0',
                                        color: '#333333',
                                        textRendering: 'optimizelegibility',
                                        fontWeight: 'normal',
                                        fontFamily:
                                            '"proxima nova bold", "Helvetica Neue", Helvetica, Arial, Sans-serif'
                                    }}>
                                    about.
                                </h1>
                                <h3>I'm a software engineer based in Chicago, Illinois</h3>
                                <h4>
                                    <div>I enjoy turning complex problems into simple, beautiful</div>
                                    <div style={{ marginTop: '10px' }}>
                                        and intuitive designs. When I'm not pushing pixels, you'll{' '}
                                    </div>
                                    <div style={{ marginTop: '10px' }}>
                                        find me cooking, gardening or working out in the park.
                                    </div>
                                </h4>
                            </div>
                            <div>
                                <img style={{ height: '490px', width: '590px' }} src={AboutImage} />
                            </div>
                        </div>
                        <div style={{ flexDirection: 'row', display: 'flex', borderTop: '#dddddd 1px solid' }}>
                            {[
                                AboutImage1,
                                AboutImage4,
                                AboutImage5,
                                AboutImage4,
                                AboutImage5,
                                AboutImage6
                            ].map((el, idx) => {
                                return (
                                    <div style={{ paddingLeft: 25, marginTop: 20, marginBottom: 20 }}>
                                        <SmallCardWithImage key={el + idx} src={el} />
                                    </div>
                                );
                            })}
                        </div>
                    </Grid>
                </Grid>
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
    );
}
