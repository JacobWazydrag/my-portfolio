import React from 'react';
import { makeStyles, Grid, Typography, Fade, TextField, Button, FormControlLabel } from '@material-ui/core';
import { alpha } from '@material-ui/core/styles';

export default function Contact() {
    const useStylesTextField = makeStyles((theme) => ({
        root: {
            'border': '#949494 solid 1px',
            'color': 'black',
            'fontSize': '20px',
            // 'overflow': 'hidden',
            'height': '52px',
            'width': '500px',
            'borderRadius': 4,
            'backgroundColor': '#fcfcfb',
            'transition': theme.transitions.create(['border-color', 'box-shadow']),
            '&:hover': {
                backgroundColor: '#fff',
            },
            '&$focused': {
                backgroundColor: '#fff',
                boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
                borderColor: '#233044',
            },
        },
        focused: {},
    }));
    const useStylesTextFieldMulti = makeStyles((theme) => ({
        root: {
            'border': '#949494 solid 1px',
            'color': 'black',
            'fontSize': '20px',
            // 'overflow': 'hidden',
            'minHeight': '152px',
            'width': '500px',
            'borderRadius': 4,
            'backgroundColor': '#fcfcfb',
            'transition': theme.transitions.create(['border-color', 'box-shadow']),
            '&:hover': {
                backgroundColor: '#fff',
            },
            '&$focused': {
                backgroundColor: '#fff',
                boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
                borderColor: '#233044',
            },
        },
        focused: {},
    }));

    function TextFieldWithStyles(props) {
        const classes = useStylesTextField();

        return <TextField inputProps={{ style: {padding: '10px'} }} InputProps={{ classes, disableUnderline: true }} {...props} />;
    }
    function TextFieldWithStylesMulti(props) {
        const classes = useStylesTextFieldMulti();

        return <TextField multiline={true} inputProps={{ style: {padding: '10px', alignSelf: 'start'} }} InputProps={{ classes, disableUnderline: true }} {...props} />;
    }

    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        margin: {
            margin: theme.spacing(1),
        },
    }));
    const classes = useStyles();
    return (
        <div style={{ position: 'absolute', width: '100%', bottom: 0 }}>
            <Grid container direction='column' alignItems='center'>
                <Grid item>{'Contact content here'}</Grid>

                <div
                    style={{
                        backgroundColor: 'whitesmoke',
                        width: '100%',
                        boxShadow: 'inset 0px 4px 4px 0px rgb(0 0 0 / 10%)',
                        placeContent: 'center',
                    }}
                >
                    <Fade in timeout={3000}>
                        <Grid
                            id='frontBottom'
                            style={{ marginTop: '100px', paddingBottom: '100px' }}
                            justifyContent='center'
                            container
                            direction='row'
                        >
                            <Grid style={{ placeContent: 'center' }} container direction='row'>
                                <Grid item direction='column'>
                                    <Typography
                                        style={{
                                            color: 'black',
                                            paddingRight: 25,
                                            paddingLeft: 25,
                                            paddingBottom: 25,
                                        }}
                                        variant='h1'
                                    >
                                        Send me an Email
                                    </Typography>
                                    <Grid container direction='column'>
                                        <FormControlLabel
                                            style={{ cursor: 'default' }}
                                            control={<TextFieldWithStyles variant='filled' id='reddit-input' />}
                                            label={
                                                <div style={{ marginRight: '440px', padding: '5px', fontSize: '18px' }}>
                                                    Name
                                                </div>
                                            }
                                            labelPlacement='top'
                                        />
                                        <FormControlLabel
                                            style={{ cursor: 'default' }}
                                            control={<TextFieldWithStyles variant='filled' id='reddit-input' />}
                                            label={
                                                <div style={{ marginRight: '440px', padding: '5px', fontSize: '18px' }}>
                                                    Email
                                                </div>
                                            }
                                            labelPlacement='top'
                                        />
                                    </Grid>
                                </Grid>
                                <Grid style={{ marginTop: '64px' }} item direction='column'>
                                    <Grid container direction='column'>
                                        <FormControlLabel
                                            style={{ cursor: 'default' }}
                                            control={<TextFieldWithStylesMulti variant='filled' id='reddit-input' />}
                                            label={
                                                <div style={{ marginRight: '425px', padding: '5px', fontSize: '18px' }}>
                                                    Message
                                                </div>
                                            }
                                            labelPlacement='top'
                                        />

                                        <Button
                                            style={{
                                                backgroundColor: '#233044',
                                                color: 'white',
                                                width: '100px',
                                                marginLeft: '420px',
                                                marginTop: '25px',
                                                fontSize: '18px',
                                                whiteSpace: 'nowrap',
                                            }}
                                            size={'medium'}
                                            variant={'contained'}
                                        >
                                            Send Email
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Fade>
                </div>
            </Grid>
        </div>
    );
}
