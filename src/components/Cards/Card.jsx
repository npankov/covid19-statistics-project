import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';
import styles from './Cards.module.css';

const CardExample = ({ className, cardTitle, value, cardDiscription, lastUpdate }) => (
  <Grid item component={Card} xs={12} md={3} className={cx(styles.card, className)}>
    <CardContent>
      <Typography color="textSecondary" gutterBottom>{cardTitle}</Typography>
      <Typography variant="h5" component="h2">
        <CountUp
          start={0}
          end={value}
          separator=" "
        />
      </Typography>
      <Typography variant="body2" component="p" gutterBottom>{cardDiscription}</Typography>
      <Typography color="textSecondary">Dernière mise à jour: {new Date(lastUpdate).toLocaleString()}</Typography>
    </CardContent>
  </Grid>
);

export default CardExample;
