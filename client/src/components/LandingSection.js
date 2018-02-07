import React, { Component } from 'react';
import '../App.css';
import Artwork from './Artwork'
import BWZY from '../images/bwzy.svg';


export default class LandingSection extends Component {

  render() {
    return (
          <div className="landingSection">
            <Artwork />
            <img className="logo" src={BWZY} alt=""></img>
          </div>
    );
  }
};
