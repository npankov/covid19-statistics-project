import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';
import styles from './Cards.module.css';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return 'Loading...';
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.confirmed)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Confirmés</Typography>
            <Typography variant="h5" component="h2">
              <CountUp
                start={0}
                end={confirmed.value}
                separator=" "
              />
            </Typography>
            <Typography variant="body2" component="p" gutterBottom>Nombre de cas actifs de COVID-19</Typography>
            <Typography color="textSecondary">Dernière mise à jour: {new Date(lastUpdate).toLocaleString()}</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Guérisons</Typography>
            <Typography variant="h5" component="h2">
              <CountUp
                start={0}
                end={recovered.value}
                separator=" "
              />
            </Typography>
            <Typography variant="body2" component="p" gutterBottom>Nombre de cas guéri de COVID-19</Typography>
            <Typography color="textSecondary">Dernière mise à jour: {new Date(lastUpdate).toLocaleString()}</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Décès</Typography>
            <Typography variant="h5" component="h2">
              <CountUp
                start={0}
                end={deaths.value}
                separator=" "
              />
            </Typography>
            <Typography variant="body2" component="p" gutterBottom>Nombre de décès de COVID-19</Typography>
            <Typography color="textSecondary">Dernière mise à jour: {new Date(lastUpdate).toLocaleString()}</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
