import React from 'react';
import './App.css';
import WeekForecast from './components/WeekForecast';
import Header from './components/Header';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: null,
      state: null,
      forecast: [],
      isLoading: false,
    };

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(zip) {
    this.setState({ isLoading: true })

    fetch(`https://api.weatherbit.io/v2.0/forecast/daily?key=ed9dd8d639494194b3d4b3c1013a284c&postal_code=${zip}&days=5&units=I`)
      .then(response => response.json())
      .then(data => this.setState({ city: data.city_name, state: data.state_code, forecast: data.data, isLoading: false }));
  }

  render() {
    const { isLoading, forecast, state, city } = this.state;

    const elementToShow = isLoading ? 
      <p>Loading...</p> :
      <WeekForecast forecast={forecast} />;

    return (
      <div>
        <Header city={city} state={state} onSearchClick={this.handleSearch} />
        {elementToShow}
      </div>
    );
  }
  
}
