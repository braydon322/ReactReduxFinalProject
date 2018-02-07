import React, { Component } from 'react';
import '../App.css';


class Loading extends Component {

  render() {
    var NewLoader = require('halogen/ScaleLoader');



    return (
      <div className="loading">
        <NewLoader color="black" size="16px" margin="4px"/>
      </div>
    );
  }
};

export default Loading
