import React from 'react';
import { Bar } from 'react-chartjs-2';
// import { getDailyData } from '../../api';
import styles from './Chart.module.css';

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
// temporairement dysfonctionnement api/daily
// const [dailyData, setDailyData] = useState([]);
  //
  // useEffect(() => {
  //   const receiveDailyData = async () => {
  //     setDailyData(await getDailyData());
  //   };
  //
  //   receiveDailyData();
  // }, []);

  // const lineChart = (
  //   dailyData.length
  //     ? (
  //       <Line
  //         data={{
  //           labels: dailyData.map(({ date }) => date),
  //           datasets: [{
  //             data: dailyData.map(({ confirmed }) => confirmed),
  //             label: 'Confirmés',
  //             borderColor: 'rgba(255, 0, 0)',
  //             fill: true,
  //           },
  //           {
  //             data: dailyData.map(({ deaths }) => deaths),
  //             label: 'Décès',
  //             borderColor: 'rgba(87, 68, 50)',
  //             fill: true,
  //           }],
  //         }}
  //         options={{
  //           title: { display: true, position: 'bottom', text: 'Le graphique de tous les cas dans le monde' },
  //         }}
  //       />
  //     ) : null
  // );

  const barChart = (
    confirmed
      ? (
        <Bar
          data={{
            labels: ['Infecté', 'Guéri', 'Décès'],
            datasets: [{
              data: [confirmed.value, recovered.value, deaths.value],
              label: 'Hommes',
              backgroundColor: ['rgba(255, 0, 0, 0.6)', 'rgba(159, 83, 231, 0.6)', 'rgba(87, 68, 50, 0.6)'],
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
      {barChart}
    </div>
  );
};

export default Chart;
