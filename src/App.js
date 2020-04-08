import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function User(props,AppFunction){
    const[name,setName]=useState('ashutosh');
    const [surname,setSurname]=useState('pandey');
    const [title,setTitle]=useState('App');
    const namechangeHandler=function (e) {
        setName(e.target.value);
        setTitle(name+surname);
    }
    const surnamechangeHandler=function (e) {
        setSurname(e.target.value);
        setTitle(name + surname);
    }
    useEffect(()=>{
        document.title=name+' '+surname;
    })
  return(
      <div>
      <div className="App">
        <p> Name</p>
          <input
              value={name}
              onChange={namechangeHandler}
          />
      </div>
      <div className="App">
        <p> SurName</p>
            <input
                value={surname}
                onChange={surnamechangeHandler}
            />
        </div>
          <div className="App">
              <button
                  onClick={props.AppFunction}
              >
                  click me
              </button>
          </div>
      </div>

  );
}

function App() {
    const AppFunction=()=>{
        console.log('parent class App ');
    }
  return (
    <div className="App">
      <header className="App">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <User name="Ashutosh" AppFunction={AppFunction}/>
    </div>
  );
}

export default App;
