import React from 'react';
import { Grid, Typography, Fade } from '@material-ui/core';
import AboutImage from '../../../src/assets/images/AboutPic.jpg';
import AboutImage1 from '../../../src/assets/images/carousalImage1.jpg';
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
                            <div style={{ paddingBottom: 100 }}>
                                <img style={{ height: '490px', width: '590px', marginTop: '100px' }} src={AboutImage} />
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
                            </Grid>
                            Some Content
                        </Grid>
                    </Fade>
                </div>
            </Grid>
        </div>
    );
}
