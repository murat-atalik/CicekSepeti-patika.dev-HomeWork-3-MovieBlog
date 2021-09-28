import React from 'react';
import './Header.scss';
import { AiOutlineSearch } from 'react-icons/ai';
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchValue: '' };
  }
  handleSearch = (event) => {
    // seting search value
    this.setState({ searchValue: event.target.value.toLowerCase() });
    // filtering card
    this.props.filterData(event.target.value);
  };
  handleGithub = () => {
    window.open('https://github.com/murat-atalik', '_blank');
  };
  handleTrainerGithub = () => {
    window.open('https://github.com/CaglayanYanikoglu', '_blank');
  };
  render() {
    return (
      <div className="header">
        <div className="logo" onClick={this.handleTrainerGithub}>
          {/* IMDb :P */}
          <p>IMBd</p>
        </div>
        <div className="search-bar">
          <input
            className="search-input"
            value={this.state.searchValue}
            onChange={this.handleSearch}
            type="search"
          />
          <div className="search-icon">
            <AiOutlineSearch color="#fed34d" size="2rem" />
          </div>
        </div>
        <div className="avatar">
          <img
            src={'https://cdn-icons-png.flaticon.com/64/924/924874.png'}
            alt="avatar"
            onClick={this.handleGithub}
          />
        </div>
      </div>
    );
  }
}

export default Header;
