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
    };
  }
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

    console.log(data);
    this.setState({ data, filteredData });
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
          <Card data={this.state.filteredData} deleteCard={this.handleDelete} />
        </div>
        <Footer />
      </>
    );
  }
}

export default App;
