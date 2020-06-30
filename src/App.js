import React from 'react';
import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { getData } from './api';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      country: '',
    };
  }

  async componentDidMount() {
    const receivedData = await getData();
    this.setState({ data: receivedData });
  }

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <Cards data={data} />
        <CountryPicker />
        <Chart />
      </div>
    );
  }
}

export default App;
