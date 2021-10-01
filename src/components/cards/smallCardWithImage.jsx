import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { makeStyles, Card } from '@material-ui/core';

export default function SmallCardWithImage(props) {
    const { src } = props;
    const theme = useTheme();
    const useStyles = makeStyles({
        card: {
            'backgroundColor': 'white',
            'color': 'black',
            'borderRadius': '8px',
            'border': '1px solid #f2f8f9',
            'boxShadow': '0 1px 4px 0px rgb(0 0 0 / 20%)',
            'cursor': 'pointer',
            '&:hover': {
                transition: 'all .3s ease-out',
                boxShadow: '0 2px 4px 0px rgb(0 0 0 / 50%)',
            },
            'width': '150px',
            'height': '110px',
        },
    });
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <img
                style={{ width: '100%', height: 100, margin: '3%', borderRadius: '4px' }}
                src={src}
                alt={JSON.stringify(src)}
            />
        </Card>
    );
}
