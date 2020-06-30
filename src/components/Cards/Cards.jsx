import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import styles from './Cards.module.css';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return 'Loading...';
  }
  console.log(lastUpdate);
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Infecté</Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={confirmed.value}
                separator=" "
              />
            </Typography>
            <Typography variant="body2" gutterBottom>Nombre de cas actifs de COVID-19</Typography>
            <Typography color="textSecondary">Dernière mise à jour: {new Date(lastUpdate).toLocaleString()}</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Guéri</Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={recovered.value}
                separator=" "
              />
            </Typography>
            <Typography variant="body2" gutterBottom>Nombre de cas guéri de COVID-19</Typography>
            <Typography color="textSecondary">Dernière mise à jour: {new Date(lastUpdate).toLocaleString()}</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Décès</Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={deaths.value}
                separator=" "
              />
            </Typography>
            <Typography variant="body2" gutterBottom>Nombre de décès de COVID-19</Typography>
            <Typography color="textSecondary">Dernière mise à jour: {new Date(lastUpdate).toLocaleString()}</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
