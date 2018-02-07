import App from './App'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/reducers';
import thunk from 'redux-thunk';
import EmailPage from './components/EmailPage'
import ContactSection from './components/ContactSection'
import AboutSection from './components/AboutSection'
import ProjectsSection from './components/ProjectsSection'
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

const Nav = () => {
  return (
      <Provider store={store}>
        <Router>
          <div>
            <Route exact path="/" component={App} />
            <Route exact path="/emails" component={EmailPage} />
            <Route exact path="/contact" component={ContactSection} />
            <Route exact path="/about" component={AboutSection} />
            <Route exact path="/projects" component={ProjectsSection} />
          </div>
        </Router>
      </Provider>
  );
};

ReactDOM.render(
   <Nav store={store}/>,
  document.getElementById('root')
);
