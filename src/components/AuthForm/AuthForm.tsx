import React, { useState, useCallback, ChangeEvent } from 'react';
import { Ref, useForm, OnSubmit } from 'react-hook-form';
import { Button, Typography, Grid, Box, Avatar } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import ValidationTextField from './ValidationTextField/ValidationTextField';
import useStyles from './styles';

interface Props {
  doAuthInit: (data: Record<string, string>) => void;
  email: string;
  password: string;
}

const Login = ({ doAuthInit }: Props) => {
  const { register, handleSubmit, errors } = useForm();
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onSubmit = useCallback<OnSubmit<Record<string, string>>>(
    data => {
      doAuthInit(data);
      setEmail('');
      setPassword('');
    },
    [doAuthInit, setEmail, setPassword]
  );
  const handleEmailChange = useCallback(
    (ev: ChangeEvent<HTMLInputElement>) => {
      setEmail(ev.target.value);
    },
    [setEmail]
  );
  const handlePasswordChange = useCallback(
    (ev: ChangeEvent<HTMLInputElement>) => {
      setPassword(ev.target.value);
    },
    [setPassword]
  );

  return (
    <main className={classes.root}>
      <Box component="section" maxWidth="xs" className={classes.wrapper}>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon className={classes.avatarIcon} />
          </Avatar>

          <Typography component="h1" variant="h5" className={classes.title}>
            Log In
          </Typography>

          <form className={classes.form} onSubmit={handleSubmit(onSubmit)} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <ValidationTextField
                  value={email}
                  onChange={handleEmailChange}
                  label="Login"
                  fullWidth
                  autoComplete="off"
                  autoFocus
                  type="email"
                  variant="outlined"
                  name="email"
                  inputRef={register<Ref>({ required: true })}
                />
                {errors.exampleRequired && <span>This field is required</span>}
              </Grid>

              <Grid item xs={12}>
                <ValidationTextField
                  value={password}
                  onChange={handlePasswordChange}
                  label="Password"
                  fullWidth
                  type="password"
                  variant="outlined"
                  name="password"
                  autoComplete="new-password"
                  inputRef={register<Ref>({ required: true })}
                />
                {errors.exampleRequired && <span>This field is required</span>}
              </Grid>

              <Grid item xs={12}>
                <Box display="flex" justifyContent="center" marginTop="30">
                  <Button type="submit" variant="contained" className={classes.submit}>
                    Login
                  </Button>
                </Box>
              </Grid>

              <Grid item xs={12}>
                <Box display="flex" justifyContent="center" marginTop="50">
                  <Typography variant="subtitle2">Forgot password?</Typography>
                </Box>
              </Grid>
            </Grid>
          </form>
        </div>
      </Box>
    </main>
  );
};

export default Login;
