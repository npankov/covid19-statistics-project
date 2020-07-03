import React, { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { getDailyData } from '../../api';
import styles from './Chart.module.css';

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const receiveDailyData = async () => {
      setDailyData(await getDailyData());
    };

    receiveDailyData();
  }, []);

  const lineChart = (
    dailyData.length
      ? (
        <Line
          data={{
            labels: dailyData.map(({ date }) => date),
            datasets: [{
              data: dailyData.map(({ confirmed }) => confirmed),
              label: 'Confirmés',
              borderColor: '#ff0000',
              fill: true,
            },
            {
              data: dailyData.map(({ deaths }) => deaths),
              label: 'Décès',
              borderColor: '#574432',
              fill: true,
            }],
          }}
          options={{
            title: { display: true, position: 'bottom', text: 'Le graphique de tous les cas dans le monde' },
          }}
        />
      ) : null
  );

  const barChart = (
    confirmed
      ? (
        <Bar
          data={{
            labels: ['Infecté', 'Guéri', 'Décès'],
            datasets: [{
              data: [confirmed.value, recovered.value, deaths.value],
              label: 'Hommes',
              backgroundColor: ['#ff0000', '#9f53e7', '#574432'],
            }],
          }}
          options={{
            legend: { display: false },
            title: { display: true, text: `Le graphique de tous les cas de pays: ${country}` },
          }}
        />
      ) : null
  );

  return (
    <div className={styles.container}>
      {country ? barChart : lineChart}
    </div>
  );
};

export default Chart;
