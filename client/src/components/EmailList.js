import React from 'react';

export default function EmailList({emails}) {

  const emptyMessage = (
    <h5> There are no emails currently on this list. </h5>
  );

  const emailList = (
    emails.map(function(email, index){
      if (email.email === "" || email.email === null){
        return ""
      }
      else {
        return <h4 key={index}>{email.email}</h4>
      }
    })

  );

  return (
    <div className="emailList">
        {emails.length === 0 ? emptyMessage : emailList}
    </div>
  );

};
