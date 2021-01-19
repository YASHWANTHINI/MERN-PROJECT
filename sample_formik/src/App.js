//import React, { useState, useEffect } from 'react';
import { Container, AppBar, Grow, Grid } from '@material-ui/core';
//import { useDispatch } from 'react-redux';
import Typical from "react-typical";
import logo from "./logo-wide.png";
import useStyles from './styles';
import React from 'react'
import LoginPage from './components/LoginPage'
import AcademicRegister from './components/AcademicRegister'
import './App.css';

const App =()=>{
 const classes = useStyles();
return (
<Container maxWidth='lg'>
  <AppBar className={classes.appBar} position="static" color="inherit" spacing={2}>
    <img src={logo} className={classes.appLogo} alt="logo"/>
  </AppBar>
  <Grow in>
    <Container>
        <Grid container  direction="row"  justify="space-evenly" alignItems="baseline">
        <Grid item xs={12} alignItems="baseline"><h1><center><Typical 
          loop={Infinity}
          steps={['Repository for managing mentee details.',1000]}/></center></h1></Grid>
        <Grid item xs={12} sm={2}>
            <LoginPage/>
          </Grid>
          <Grid item xs={12} sm={2}>
            <AcademicRegister />
          </Grid>
        </Grid> 
    </Container>
  </Grow>
</Container>

);
};

export default App
