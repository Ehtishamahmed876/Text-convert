// import logo from './logo.svg';
import About from './components/About';

import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route
  
} from "react-router-dom";



function App() {
  const [mode,setmode] = useState("light");
  const [alert, setalert] = useState(null);
  const showalert =(massage,type)=>{
   setalert({
     massage:massage,
     type:type
    })
    setTimeout(() => {
      setalert(null);
    }, 1000);

  }
  const togglemode =()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor = '#214d75';
      showalert("dark mode is enable","success");
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showalert("light mode is enable","success");


    }
  }
  return (
    <>
    <Router>
   <Navbar link="about us"   mode = {mode}   togglemode = {togglemode}  />
   <Alert   alert={alert}/>
     <div className="container">
     <Switch>
          <Route exact path="/about">
            <About  mode = {mode} />
          </Route>
         
          <Route exact path="/">
          <Textform   showalert = {showalert} heading="Enter a Text to convert"  mode = {mode}/> 
          </Route>
        </Switch>
       
    
     
  
    </div> 
    </Router>
  
    </>
  )
}

export default App;
