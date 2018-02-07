import React, { Component } from 'react';
import '../App.css';
import Pic1 from '../images/designs/designs-01.gif';
import Pic2 from '../images/designs/designs-02.gif';
import Pic3 from '../images/designs/designs-03.svg';
import Pic4 from '../images/designs/designs-04.svg';
import Pic5 from '../images/designs/designs-05.svg';
import Pic6 from '../images/designs/designs-06.svg';
import Pic7 from '../images/designs/designs-07.gif';
import Pic8 from '../images/designs/designs-08.svg';
import Pic9 from '../images/designs/designs-09.svg';
import Pic10 from '../images/designs/designs-10.gif';
import Pic11 from '../images/designs/designs-11.svg';
import Pic12 from '../images/designs/designs-12.svg';
import Pic13 from '../images/designs/designs-13.svg';
import Pic14 from '../images/designs/designs-14.svg';
import Pic15 from '../images/designs/designs-15.svg';
import Pic16 from '../images/designs/designs-16.svg';
import Pic17 from '../images/designs/designs-17.svg';
import Pic18 from '../images/designs/designs-18.svg';
import Pic19 from '../images/designs/designs-19.svg';
import Pic20 from '../images/designs/designs-20.svg';
import Pic21 from '../images/designs/designs-21.svg';
import Pic22 from '../images/designs/designs-22.svg';
import Pic23 from '../images/designs/designs-23.gif';
import Pic24 from '../images/designs/designs-24.svg';
import Pic25 from '../images/designs/designs-25.gif';
import Pic26 from '../images/designs/designs-26.svg';
import Pic27 from '../images/designs/designs-27.svg';
import Pic28 from '../images/designs/designs-28.svg';
import Pic29 from '../images/designs/designs-29.svg';
import Pic30 from '../images/designs/designs-30.gif';
import Pic31 from '../images/designs/designs-31.svg';
import Pic32 from '../images/designs/designs-32.gif';
import Pic33 from '../images/designs/designs-33.gif';
import Pic34 from '../images/designs/designs-34.svg';
import Pic35 from '../images/designs/designs-35.svg';
import Pic36 from '../images/designs/designs-36.svg';
import Pic37 from '../images/designs/designs-37.svg';
import Pic38 from '../images/designs/designs-38.svg';
import Pic39 from '../images/designs/designs-39.svg';
import Pic40 from '../images/designs/designs-40.gif';
import Pic41 from '../images/designs/designs-41.svg';
import Pic42 from '../images/designs/designs-42.svg';
import Pic43 from '../images/designs/designs-43.svg';
import Pic44 from '../images/designs/designs-44.svg';
import Pic45 from '../images/designs/designs-45.svg';
import Pic46 from '../images/designs/designs-46.svg';
import Pic47 from '../images/designs/designs-47.png';

class Artwork extends Component {

  getRandomX() {
    let max = window.innerWidth
    let number = Math.floor(Math.random() * Math.floor(max));
    let pixels = -number.toString() + "px"
    return pixels
  }

  getRandomY() {
    let max = window.innerHeight
    let number = Math.floor(Math.random() * Math.floor(max));
    let pixels = -number.toString() + "px"
    return pixels
  }

  getDesigns(){
    let designArray = [Pic1,Pic2,Pic3,Pic4,Pic5,Pic6,Pic7,Pic8,Pic9,Pic10,Pic11,Pic12,Pic13,Pic14,Pic15,Pic16,Pic17,Pic18,Pic19,Pic20,Pic21,Pic22,Pic23,Pic24,Pic25,Pic26,Pic27,Pic28,Pic29,Pic30,Pic31,Pic32,Pic33,Pic34,Pic35,Pic36,Pic37,Pic38,Pic39,Pic40,Pic41,Pic42,Pic43,Pic44,Pic45,Pic46, Pic47]
    let divs = [];
      for (let i = 0; i < designArray.length; i++) {
        let style = {
          top: this.getRandomX(),
          left: this.getRandomY(),
        }
        divs.push(<img src={designArray[i]} key={i} alt="" style={style}></img>)
      }
    return divs;
  }


  render() {
    return (
      <div className="designs">
        {this.getDesigns()}
      </div>
    );
  }
};

export default Artwork
