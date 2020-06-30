import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import styles from './Cards.module.css';

const Cards = (props) => {
  return (
    <Grid container spacing={3} justify="center">
      <Grid item component={Card}>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>Infecté</Typography>
          <Typography variant="h5">Data</Typography>
          <Typography variant="body2" gutterBottom>Nombre de cas actifs de COVID-19</Typography>
          <Typography color="textSecondary">Date</Typography>
        </CardContent>
      </Grid>
    </Grid>
  );
};

export default Cards;
