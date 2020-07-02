import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const getData = async () => {
  try {
    const { data } = await axios.get(url);
    const { confirmed, recovered, deaths, lastUpdate } = data;
    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    return error;
  }
};

export const getDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);
    const newData = data.map((el) => ({
      confirmed: el.confirmed.total,
      recovered: el.recovered.total,
      deaths: el.deaths.total,
      date: el.reportDate,
    }));
    return newData;
  } catch (error) {
    return error;
  }
};

