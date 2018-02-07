import { combineReducers } from 'redux';

export function emailReducer(state = {
  emails: []
}, action) {
  switch(action.type) {

    case 'ADD_EMAIL':
      console.log("Email Added", {...state.emails, emails: state.emails.concat(action.email)})
      return { ...state.emails, emails: state.emails.concat(action.email) };

    case 'REMOVE_EMAIL':
      const emails = state.emails.filter(email => email.id !== action.id);
      console.log("Email Removed", emails)
      return  { emails }

    case 'FETCH_EMAILS':
      return Object.assign({...state}, {emails: action.emails})

    case 'UPDATE_EMAILS':
      return Object.assign({...state}, {emails: action.emails})

    default:
      return state;
  }
}


export function correspondenceReducer(state = {
  emails: []
}, action) {
  switch(action.type) {

    case 'SEND_EMAIL':
      console.log("Email Sent")
      return { ...state.emails, emails: state.emails.concat(action.email) };

    default:
      return state;
  }
}


const rootReducer = combineReducers({emailReducer, correspondenceReducer})

export default rootReducer;
