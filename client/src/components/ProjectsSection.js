import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchEmails, fetchRepos } from '../actions/actions'
import { bindActionCreators } from 'redux'
import '../App.css';
import BNT from '../images/bnt.jpg'

class ProjectsSection extends Component {

  componentWillMount() {
    this.result()
  }

  constructor(props){
     super(props);
     this.state = {
       repo: [],
       profPic: "",
       followers: "",
       repos: ""
     };
 }

 result = () => {
    var repoArray = []
    const { repo, profPic, followers, repos } = this.state;
    fetch("https://api.github.com/users/braydon322/repos")
      .then((response) => response.json())
      .then((responseData) => {
        for (let i = 0; i < 5; i++) {
          repoArray.push({
            name: (responseData[i].name).toString(),
            url: responseData[i].html_url,
            id: [i]
          });
        }
        this.setState({repo: repoArray})
      })

    fetch("https://api.github.com/users/braydon322")
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({profPic: responseData.avatar_url})
      })
  }


  getLi(){
  return <div class="repoDiv">
              {this.state.repo.map(function(repository, index){
                    return <a href= {repository.url} key={index}>{repository.name}<br></br></a>
              })}
         </div>
  }

  render() {

    return (
      <div className="projects">
        <div className="individualDesignsDiv">
          <h1>Clients</h1>
          <h4><a href="http://www.thekillersmusic.com/">The Killers</a>, BUDO.ai, <a href="http://www.espn.com/nba/player/_/id/2528327/kyle-collinsworth">Kyle Collinsworth</a>, GDB, <a href="https://www.rvasocialmarketing.com/">RVA Social Marketing</a>, Coastal Marketing Labs, <a href="http://shelbyco.us/">Shelby Company</a>, Myke Metzger,  <a href="http://www.sevasports.com/">SEVA</a>, Review Ninja</h4>
          <h1>Recent Projects</h1>
          <h4><a href="https://github.com/braydon322/Proposal.io">Proposal.io</a>
          <br></br>Smart Proposals for Creative Freelancers and Businesses<br></br>
          <li>- Utilized versatility of Ruby on Rails, allowing an Active Model Serialization JSON Backend.</li>
          <li>- Built custom designed CSS front-end based on jQuery for fluidity in navigation and styling, as well as ability to create and edit proposals.</li>
          <li>- Leveraged jQuery/AJAX requests to render any changes to the DOM in a seamless manner.</li>
          </h4>
          {this.getLi()}
          <h1> Ready to <a href="/contact">work with me?</a></h1>
        </div>
      </div>
    );
  }
};

export default ProjectsSection
