import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const getData = async (country) => {
  let dynamicUrl = url;
  if (country) {
    dynamicUrl = `${url}/countries/${country}`;
  }
  try {
    const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(dynamicUrl);
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
      deaths: el.deaths.total,
      date: el.reportDate,
    }));
    return newData;
  } catch (error) {
    return error;
  }
};

export const getCountries = async () => {
  try {
    const { data: { countries } } = await axios.get(`${url}/countries`);
    return countries.map((country) => country.name);
  } catch (error) {
    return error;
  }
};

