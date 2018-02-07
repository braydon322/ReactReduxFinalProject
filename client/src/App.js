import React, { Component } from 'react';
import Loading from './components/Loading';
import Content from './components/Content';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions/actions';
import './App.css';

class App extends Component {

  constructor() {
   super();
   this.state = {
     loading: true
   }
 }

componentDidMount(){
    setTimeout(()=> {
      this.setState({loading: false})
    },1000)
}

  render() {
      let page = this.state.loading ? <Loading /> : <Content />
    return (
      <div>
        {page}
      </div>
    );
  }
};

function mapStateToProps(state) {
  return { emails: state.emails };
};

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
};

export default connect(mapStateToProps, mapDispatchToProps)(App)
