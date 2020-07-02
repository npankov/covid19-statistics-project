import React, { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { getDailyData } from '../../api';
import styles from './Chart.module.css';

const Chart = () => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const receiveDailyData = async () => {
      setDailyData(await getDailyData());
    };
    receiveDailyData();
  });

  const lineChart = (
    dailyData.length
      ? (
        <Line
          data={{
            labels: dailyData.map(({ date }) => date),
            datasets: [{
              data: dailyData.map(({ confirmed }) => confirmed),
              label: 'Infecté',
              borderColor: '#ff0000',
              fill: true,
            }, {
              data: dailyData.map(({ recovered }) => recovered),
              label: 'Guéri',
              borderColor: '#9f53e7',
              fill: true,
            },
            {
              data: dailyData.map(({ deaths }) => deaths),
              label: 'Décès',
              borderColor: '#574432',
              fill: true,
            },
            ],
          }}
        />
      ) : null
  );

  return (
    <div className={styles.container}>
      {lineChart}
    </div>
  );
};

export default Chart;
