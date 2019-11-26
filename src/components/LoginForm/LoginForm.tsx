import React from 'react';
import useForm from 'react-hook-form';
import { Button, Typography, Grid, Container } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/styles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Avatar from '@material-ui/core/Avatar';
import ValidationTextField from './ValidationTextField/ValidationTextField';

const useStyles = makeStyles(theme =>
    createStyles({
        paper: {
            marginTop: '2rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        form: {
            width: '100%',
            marginTop: '2rem',
        },
        avatar: {
            margin: '10px',
            backgroundColor: 'red',
        },
    })
);

const Login = () => {
    const { register, handleSubmit, errors } = useForm();
    const classes = useStyles();
    const onSubmit = data => console.log(data);

    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>

                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>

                <form className={classes.form} onSubmit={handleSubmit(onSubmit)} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <ValidationTextField
                                type="text"
                                variant="outlined"
                                name="login"
                                ref={register({ required: true })}
                            />
                            {errors.exampleRequired && <span>This field is required</span>}
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <ValidationTextField
                                type="password"
                                label="Password"
                                variant="outlined"
                                name="password"
                                ref={register({ required: true })}
                            />
                            {errors.exampleRequired && <span>This field is required</span>}
                        </Grid>

                        <Button type="submit" color="primary">
                            Submit
                        </Button>
                    </Grid>
                </form>
            </div>
        </Container>
    );
};

export default Login;
