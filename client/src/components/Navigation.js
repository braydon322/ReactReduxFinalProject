import React, { Component } from 'react';
import '../App.css';
// import AboutSection from './AboutSection';

class Navigation extends Component {


  toggleAbout(){
    this.props.toggleAbout()
  }

  toggleProjects(){
    this.props.toggleProjects()
  }
  toggleContact(){
    this.props.toggleContact()
  }
  toggleHome(){
    this.props.toggleLanding()
  }

  render() {
    return (
      <div>
        <div className="navigation">
          <div className="homeLink" onClick={this.toggleHome.bind(this)}><h5><span>Home</span></h5></div>
          <div className="projectsLink" onClick={this.toggleProjects.bind(this)}><h5><span>Projects</span></h5></div>
          <div className="aboutLink" onClick={this.toggleAbout.bind(this)}><h5><span>About</span></h5></div>
          <div className="contactLink" onClick={this.toggleContact.bind(this)}><h5><span>Contact</span></h5></div>
        </div>
      </div>
    );
  }
};

export default Navigation
