import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";

function App() {
  



function handleResponse(response) {
  console.log(response);
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
       
        // location.reload(true);
      }
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}


function profileEditser(user) {
  const requestOptions = {
    method: "GET",
    headers: { "accept": "application/json" },
    body: JSON.stringify(user),
  };
  

 return fetch(`https://newsapi.org/v2/top-headlines/sources?apiKey=20d6d38cb6534dbc897f44e7ea22b50c`, 
  requestOptions)
  .then(handleResponse)
    .then((user) => {
 
      
})
    .catch((error) => {
      
      return error;
    })
  
}





function profileEdit(user) {
  return (dispatch) => {
    dispatch(request(user));

    profileEditser(user).then(
      (user) => {
       console.log("fetch done")
        
      },
      (error) => {
       
        console.log("not done")
      }
    );
  };
  function request(user) {
    return { type: userConstants.EDIT_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.EDIT_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.EDIT_FAILURE, error };
  }
}

function userConstants(){
  return{
    EDIT_REQUEST: 'PROFILE_EDIT_REQUEST',
    EDIT_SUCCESS: 'PROFILE_EDIT_SUCCESS',
    EDIT_FAILURE: 'PROFILE_EDIT_FAILURE',  
  };
}






  function handleChange(e) {
    const { name, value } = e.target;
    setUser((user) => ({ ...user, [name]: value }));
  }
 
  function changeHandler(value) {
    console.log(value,"aagyi value")
    setValue({value:value.value, label: value.label});
  }

  }

  return (
    <div>
      
      
    </div>
  );
}

export default App;







