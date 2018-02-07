import React, { Component } from 'react';
import '../App.css';
import LandingSection from './LandingSection';
import AboutSection from './AboutSection';
import ContactSection from './ContactSection';
import ProjectsSection from './ProjectsSection';
import Navigation from './Navigation';


export default class Content extends Component {
  constructor() {
    super();
    this.state = {
      visibleDiv: "landing",
    };
  }

  toggleAbout(){
    this.setState({
      visibleDiv: "about",
    })
    this.render()
  }

  toggleProjects(){
    this.setState({
      visibleDiv: "projects",
    })
    this.render()
  }

  toggleLanding(){
    this.setState({
      visibleDiv: "landing",
    })
    this.render()
  }

  toggleContact(){
    this.setState({
      visibleDiv: "contact",
    })
    this.render()
  }

  renderDiv(value){
    switch(value) {
    case 'landing':
      return <LandingSection />
    case 'contact':
      return <ContactSection />
    case 'about':
      return <AboutSection />
    case 'projects':
      return <ProjectsSection />
    default:
      return <LandingSection />
    }
  }

  render() {

    return (
      <div>
        <Navigation
          toggleAbout={this.toggleAbout.bind(this)}
          toggleContact={this.toggleContact.bind(this)}
          toggleProjects={this.toggleProjects.bind(this)}
          toggleLanding={this.toggleLanding.bind(this)}
        />
        {this.renderDiv(this.state.visibleDiv)}
      </div>
    );
  }
};
