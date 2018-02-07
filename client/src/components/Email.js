import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addEmail, fetchEmails, updateEmail } from '../actions/actions';
import '../App.css';

class Email extends Component {

  onChange(index){
    this.props.updateEmail(index + 1)
  }

  render() {
    return (
      <div class="individualEmail">
        <h4 key={this.props.index}>{this.props.email.email}
          <button onClick={(event) => {this.onChange(this.props.index)}} className="emailButton">Like</button> - {this.props.email.counter}
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
