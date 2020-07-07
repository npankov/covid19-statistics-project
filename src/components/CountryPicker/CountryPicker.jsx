import React, { useState, useEffect } from 'react';
import { FormControl, FormHelperText, NativeSelect } from '@material-ui/core';
import { getCountries } from '../../api';
import styles from './CountryPicker.module.css';

const CountryPicker = ({ handleCountryChange }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const receivedCountries = async () => {
      const allCountries = await getCountries();
      setCountries(allCountries);
    };

    receivedCountries();
  }, []);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
        <option value="">Monde entier</option>
        {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
      </NativeSelect>
      <FormHelperText>Lieu</FormHelperText>
    </FormControl>
  );
};

export default CountryPicker;
