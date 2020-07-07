import React from 'react';
import { Grid } from '@material-ui/core';
import CardExample from './Card';
import styles from './Cards.module.css';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return 'Loading...';
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">

        <CardExample
          className={styles.confirmed}
          cardTitle="Confirmés"
          value={confirmed.value}
          cardDiscription="Nombre de cas actifs de COVID-19"
          lastUpdate={lastUpdate}
        />

        <CardExample
          className={styles.recovered}
          cardTitle="Guérisons"
          value={recovered.value}
          cardDiscription="Nombre de cas guéri de COVID-19"
          lastUpdate={lastUpdate}
        />

        <CardExample
          className={styles.deaths}
          cardTitle="Décès"
          value={deaths.value}
          cardDiscription="Nombre de décès de COVID-19"
          lastUpdate={lastUpdate}
        />

      </Grid>
    </div>
  );
};

export default Cards;
