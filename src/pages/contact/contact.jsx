import React, { useState } from 'react';
import {
    makeStyles,
    Grid,
    Typography,
    Fade,
    TextField,
    Button,
    FormControlLabel,
    FormControl
} from '@material-ui/core';
import { alpha } from '@material-ui/core/styles';
import emailjs from 'emailjs-com';
import '../../components/spinner/spinner.css';

const useStylesTextField = makeStyles(theme => ({
    root: {
        border: '#949494 solid 1px',
        color: 'black',
        fontSize: '20px',
        height: '52px',
        width: '500px',
        borderRadius: 4,
        backgroundColor: '#fcfcfb',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        '&:hover': {
            backgroundColor: '#fff'
        },
        '&$focused': {
            backgroundColor: '#fff',
            boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
            borderColor: '#233044'
        }
    },
    focused: {}
}));
const useStylesTextFieldMulti = makeStyles(theme => ({
    root: {
        border: '#949494 solid 1px',
        color: 'black',
        padding: '0px',
        fontSize: '20px',
        minHeight: '142px',
        width: '500px',
        borderRadius: 4,
        backgroundColor: '#fcfcfb',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        '&:hover': {
            backgroundColor: '#fff'
        },
        '&$focused': {
            backgroundColor: '#fff',
            boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
            borderColor: '#233044'
        }
    },
    focused: {}
}));

function TextFieldWithStyles(props) {
    const classes = useStylesTextField();

    return (
        <TextField
            inputProps={{ style: { padding: '10px' } }}
            InputProps={{ classes, disableUnderline: true }}
            {...props}
        />
    );
}
function TextFieldWithStylesMulti(props) {
    const classes = useStylesTextFieldMulti();

    return (
        <TextField
            multiline={true}
            inputProps={{ style: { padding: '10px', alignSelf: 'start' } }}
            InputProps={{ classes, disableUnderline: true }}
            {...props}
        />
    );
}

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [result, setResult] = useState('');
    const [loading, setLoading] = useState(false);
    const handleChange = event => {
        setForm({ ...form, [event.target.name]: event.target.value });
    };

    const handleSubmit = event => {
        event.preventDefault();
        setLoading(true);
        const validator = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!validator.test(String(form.email).toLowerCase())) {
            setLoading(false);
            setResult('Please enter a valid email');
            return;
        }

        emailjs
            .sendForm(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                '#ContactForm',
                process.env.REACT_APP_EMAILJS_USER_ID
            )
            .then(res => {
                if (res.status === 200) {
                    setLoading(false);
                    setForm({ name: '', email: '', message: '' });
                    setResult('Email sent!');
                } else {
                    setLoading(false);
                    setForm({ name: '', email: '', message: '' });
                    setResult(res.status);
                }
            })
            .catch(err => {
                setLoading(false);
                setForm({ name: '', email: '', message: '' });
                setResult(`Uh Oh: Error ${err.status}!`);
            });
    };

    return (
        <div style={{ position: 'absolute', width: '100%', bottom: 0 }}>
            <Grid container direction="column" alignItems="center">
                <Grid item>
                    {'Contact content here'}
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
                            <form id="ContactForm">
                                <Grid style={{ placeContent: 'center' }} container direction="row">
                                    <Grid item direction="column">
                                        <Typography
                                            style={{
                                                color: 'black',
                                                paddingRight: 25,
                                                paddingLeft: 25,
                                                paddingBottom: 25
                                            }}
                                            variant="h1">
                                            Contact
                                        </Typography>
                                        <Grid container direction="column">
                                            <FormControlLabel
                                                value={form.name}
                                                style={{ cursor: 'default' }}
                                                control={
                                                    <TextFieldWithStyles
                                                        onChange={event => {
                                                            handleChange(event);
                                                        }}
                                                        variant="filled"
                                                        id="Name"
                                                        name={'name'}
                                                    />
                                                }
                                                label={
                                                    <div
                                                        style={{
                                                            marginRight: '440px',
                                                            padding: '5px',
                                                            fontSize: '18px'
                                                        }}>
                                                        Name
                                                    </div>
                                                }
                                                labelPlacement="top"
                                            />
                                            <FormControlLabel
                                                value={form.email}
                                                style={{ cursor: 'default' }}
                                                control={
                                                    <TextFieldWithStyles
                                                        onChange={handleChange}
                                                        name={'email'}
                                                        variant="filled"
                                                        id="email"
                                                    />
                                                }
                                                label={
                                                    <div
                                                        style={{
                                                            marginRight: '440px',
                                                            padding: '5px',
                                                            fontSize: '18px'
                                                        }}>
                                                        Email
                                                    </div>
                                                }
                                                labelPlacement="top"
                                            />
                                        </Grid>
                                        <Typography
                                            variant={'h4'}
                                            style={{
                                                border:
                                                    result === 'Email sent. Thanks.'
                                                        ? '#bce68a 1px solid'
                                                        : '#EFBBB9 1px solid',
                                                borderRadius: '3px',
                                                backgroundColor:
                                                    result === 'Email sent. Thanks.' ? '#ebf9dd' : '#f8efef',
                                                color: result === 'Email sent. Thanks.' ? '#317F39' : '#bf2727',
                                                marginTop: '20px',
                                                marginLeft: '15px',
                                                height: '32px',
                                                width: '94%',
                                                paddingTop: '10px',
                                                textAlign: 'center',
                                                visibility: result === '' ? 'hidden' : 'visible'
                                            }}>
                                            {result}
                                        </Typography>
                                    </Grid>
                                    <Grid style={{ marginTop: '65px' }} item direction="column">
                                        <Grid container direction="column">
                                            <FormControlLabel
                                                style={{ cursor: 'default' }}
                                                control={
                                                    <TextFieldWithStylesMulti
                                                        value={form.message}
                                                        name={'message'}
                                                        onChange={event => {
                                                            handleChange(event);
                                                        }}
                                                        variant="filled"
                                                        id="message-input"
                                                    />
                                                }
                                                label={
                                                    <div
                                                        style={{
                                                            marginRight: '425px',
                                                            padding: '5px',
                                                            fontSize: '18px'
                                                        }}>
                                                        Message
                                                    </div>
                                                }
                                                labelPlacement="top"
                                            />
                                            {loading
                                                ? <div
                                                      style={{
                                                          marginLeft: '450px',
                                                          marginTop: '49.9px'
                                                      }}
                                                      className={'sp sp-3balls'}
                                                  />
                                                : <Button
                                                      onClick={event => {
                                                          handleSubmit(event);
                                                      }}
                                                      style={{
                                                          backgroundColor: '#233044',
                                                          color: 'white',
                                                          width: '100px',
                                                          marginLeft: '420px',
                                                          marginTop: '25px',
                                                          fontSize: '18px',
                                                          whiteSpace: 'nowrap'
                                                      }}
                                                      size={'medium'}
                                                      variant={'contained'}>
                                                      Send Email
                                                  </Button>}
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </form>
                        </Grid>
                    </Fade>
                </div>
            </Grid>
        </div>
    );
}
