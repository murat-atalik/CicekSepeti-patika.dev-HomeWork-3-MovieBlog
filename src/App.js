import './App.scss';
import React, { Component } from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Card from './components/card/Card';
const themes = {
  light: {
    backgroundColor: '#f5f5f5',
  },
  night: {
    backgroundColor: 'rgba(0, 0, 0, 0.95)',
  },
};
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      filteredData: [],
      searchValue: '',
      alert: false,
      alertInfo: '',
      nightMode: true,
    };
  }
  timer = () =>
    setTimeout(() => {
      this.setState({ alert: false, alertInfo: '' });
    }, 3000);
  // pozisyonu sabit olan basit bir divi alert olarak kullanmama olanak sagliyor
  handleAlert = (process) => {
    clearTimeout(this.timer());
    this.setState({ alert: true, alertInfo: process });
    this.timer();
  };

  // filtering data with search value. It comes header searchbar
  handleSearch = (searchValue) => {
    const filteredData = this.state.data.filter((value) =>
      value.name.toLowerCase().includes(searchValue)
    );
    this.setState({ filteredData, searchValue });
  };
  handleDelete = (id) => {
    // id ye gore datamizdaki elemani siliyoruz ve filtremizin kaybolmamasi icin statemizideki seacrh value ile tekrardan filtreliyoruz
    const data = this.state.data.filter((value) => value.id !== id);
    const filteredData = this.state.data.filter(
      (value) =>
        value.id !== id &&
        value.name.toLowerCase().includes(this.state.searchValue)
    );
    this.setState({ data, filteredData });
    this.handleAlert('MOVIE DELETED');
  };
  handleEdit = (data) => {
    //shallow copy of items
    const movies = [...this.state.data];
    //finding movie index
    const movieIndex = this.state.data.findIndex(
      (movie) => movie.id === data.id
    );
    //movies in indexindeki datayi edite card uzerinden yolluyoruz ve onunla degistiryoruz
    movies[movieIndex] = data;
    const filteredData = movies.filter((value) =>
      value.name.toLowerCase().includes(this.state.searchValue)
    );
    this.setState({ data: movies, filteredData });
    this.handleAlert('MOVIE EDITED');
  };
  componentDidMount() {
    document.title = 'MoviesBd';
    fetch('https://808d78e8-427b-4170-8a00-267b532e31c1.mock.pstmn.io/movies')
      .then((response) => response.json())
      .then((data) => {
        this.setState({ data, filteredData: data });
      });
  }

  //Toggle night mode
  handleNightMode = () => {
    this.setState({ nightMode: !this.state.nightMode });
    /*  localStorage.setItem('theme', true); */
  };
  /*  
  componentDidUpdate(prevProps, prevState, snapshot, timer) {
    console.log('updated');
    clearTimeout(this.timer); // clear the timeoutID
  } */

  render() {
    return (
      <>
        <Header
          filterData={this.handleSearch}
          handleNightMode={this.handleNightMode}
          theme={this.state.nightMode}
        />
        <div
          className="App"
          style={this.state.nightMode ? themes.night : themes.light}
        >
          <Card
            data={this.state.filteredData}
            deleteCard={this.handleDelete}
            alert={this.handleAlert}
            handleEdit={this.handleEdit}
          />
          {this.state.alert && (
            <div className="alert">{this.state.alertInfo}</div>
          )}
        </div>

        <Footer theme={this.state.nightMode} />
      </>
    );
  }
}

export default App;
