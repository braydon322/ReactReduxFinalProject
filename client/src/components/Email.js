import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addEmail, fetchEmails, updateEmail } from '../actions/actions';
import '../App.css';

class Email extends Component {

  constructor() {
    super();
    this.state = {
      counter: 0
    };
  }

  componentWillMount(){
    this.setState({
      counter: this.props.email.counter
    })
  }

  onChange(index){
    this.props.updateEmail(index + 1)
    this.props.fetchEmails();
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.email.counter !== this.state.counter){
      this.setState({
        counter: nextProps.email.counter
      })
    } else {
      this.setState({
        counter: this.state.counter
      })
    }
  }

  render() {
    return (
      <div class="individualEmail">
        <h4 key={this.props.index}>{this.props.email.email}
          <button onClick={(event) => {this.onChange(this.props.index)}} className="emailButton">Like</button> - {this.state.counter}
        </h4>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    emails: state.emailReducer.emails,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addEmail,
    fetchEmails,
    updateEmail,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Email);
