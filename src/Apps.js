import React, { useState } from "react";
import { Login } from "./login/Login";
import { Register } from "./login/register";
import './Style.css';

function Apps() {
  const [currentForm, setCurrentForm] = useState('login');


  const toggleForm = (formName) =>{
    setCurrentForm(formName);
  } 

  return <div className="Apps">
    {
        currentForm === 'login'? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>
    }
  </div>;
}

export default Apps;
