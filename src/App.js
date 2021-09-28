import './App.scss';
import React, { Component } from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Card from './components/card/Card';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      filteredData: [],
      searchValue: '',
      alert: false,
      alertInfo: '',
    };
  }
  handleAlert = (process) => {
    this.setState({ alert: true, alertInfo: process });
    setTimeout(() => {
      this.setState({ alert: false, alertInfo: '' });
    }, 3000);
  };

  // filtering data with search value. It comes header searchbar
  handleSearch = (searchValue) => {
    const filteredData = this.state.data.filter((value) =>
      value.name.toLowerCase().includes(searchValue)
    );
    this.setState({ filteredData, searchValue });
  };
  handleDelete = (id) => {
    const data = this.state.data.filter((value) => value.id !== id);
    const filteredData = this.state.data.filter(
      (value) =>
        value.id !== id &&
        value.name.toLowerCase().includes(this.state.searchValue)
    );
    this.setState({ data, filteredData });
    this.handleAlert('MOVIE DELETED');
  };
  componentDidMount() {
    fetch('https://808d78e8-427b-4170-8a00-267b532e31c1.mock.pstmn.io/movies')
      .then((response) => response.json())
      .then((data) => {
        this.setState({ data, filteredData: data });
      });
  }

  render() {
    return (
      <>
        <Header filterData={this.handleSearch} />
        <div className="App">
          <Card
            data={this.state.filteredData}
            deleteCard={this.handleDelete}
            alert={this.handleAlert}
          />
          {this.state.alert && (
            <div className="alert">{this.state.alertInfo}</div>
          )}
        </div>
        <Footer />
      </>
    );
  }
}

export default App;
