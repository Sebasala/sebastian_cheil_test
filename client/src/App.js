import React, { Component } from 'react';
import './App.css';

import Hotels from "./components/Hotels";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      starsFilter: 5,
      hotels: []
    };
  }

  componentDidMount() {
    fetch("/api/hotels/stars/" + this.state.starsFilter)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            hotels: result.hotels
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    return (
      <div>
        <Hotels hotels={this.state.hotels} />
      </div>
    );
  }
}

export default App;
