import React from 'react';
import { Cards, Chart, CountryPicker, Header } from './components';
import { getData } from './api';
import styles from './App.module.css';

class App extends React.Component {
    state = {
      data: {},
      country: '',
    };

  async componentDidMount() {
    const receivedData = await getData();
    this.setState({ data: receivedData });
  }

  handleCountrychange = async (country) => {
    const receivedData = await getData(country);
    this.setState({ data: receivedData, country });
  }

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <Header />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountrychange}/>
        <Chart data={data} country={country}/>
      </div>
    );
  }
}

export default App;
