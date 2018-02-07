import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';
import EmailList from './EmailList';
import { fetchEmails } from '../actions/actions'
import { bindActionCreators } from 'redux'

class EmailPage extends Component {

  componentWillMount(){
    this.props.fetchEmails()
  }

  render() {

    return (
      <div className="emails">
        <EmailList emails={this.props.emails}/>
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
   return bindActionCreators({fetchEmails: fetchEmails}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(EmailPage)
