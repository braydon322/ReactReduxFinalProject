import fetch from 'isomorphic-fetch';

export function addEmail(email){

  const url = `http://localhost:5000/api/v1/emails`
  var data = {email: email};
/// Sends 'POST' request to API backend and commits into Database.
  return dispatch => {
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(function(response){
      console.log(response)
      return dispatch({type: 'ADD_EMAIL', email: email})
    });
  }
};

export function removeEmail(email){
  return { type: 'REMOVE_EMAIL', email: email };
};

export function fetchEmails(){
  return dispatch => {
    return fetch(`http://localhost:5000/api/v1/emails`).then(
      response => {
        return response.json()
      }).then(emails => {
        return dispatch({type: 'FETCH_EMAILS', emails: emails})
      })
  }
};

export function updateEmail(email){
  const url = `http://localhost:5000/api/v1/emails/` + email
  return dispatch => {
    fetch(url, {
      method: 'PATCH',
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(function(response){
      return dispatch({type: 'UPDATE_EMAILS', emails: response})
    });
  }
}

export function sendEmail(email){
  return { type: 'SEND_EMAIL', email: email };
};
