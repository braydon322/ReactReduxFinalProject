import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addEmail, fetchEmails, updateEmail } from '../actions/actions';
import Email from './Email'
import '../App.css';

class ContactSection extends Component {

  constructor() {
    super();
    this.state = {
      text: '',
      submitted: false
    };
  }

  handleChange(event){
    this.setState({
      text: event.target.value
    });
  }


  handleSubmit(event) {
    event.preventDefault();
    this.props.addEmail(this.state.text);
    this.setState({
      text: '',
      submitted: true
    });

  }

  componentWillMount(){
    this.props.fetchEmails()
  }

  componentDidMount(){

  }

  emails() {


    let emails = this.props.emails;

    console.log(emails)
    return emails.map(function(email, index){
      if (email.email === "" || email.email === null){
        return ""
      }
      else {
        return <Email className="emailsOnTop" email={email} index={index} />
      }
    })
  }

  checkSubmit(){
    if (!this.state.submitted) {
      return <div className="contactSection"><b><h1>Enter your email, and lets get to it.</h1></b>
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <p>
                  <input
                    type="text"
                    value={this.state.text}
                    onChange={(event) => this.handleChange(event)} />
                </p>
                <br></br>
             </form>
             <div id="emailDiv">
              Previously entered emails:
                  {this.emails()}
             </div>
             </div>
   } else {
     return <div className="contactSection"><b><h1>Your Email has been submitted!</h1></b> </div>
   }
  }
  render() {
    return (
      <div>
        {this.checkSubmit()}
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    emails: state.emailReducer.emails
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addEmail,
    fetchEmails,
    updateEmail,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactSection);
