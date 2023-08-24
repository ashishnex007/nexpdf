import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Links from './components/Links';
import Textarea from './components/Textarea';
import { useState } from 'react';
import { jsPDF } from "jspdf";


function App() {
  const [mode,setMode]= useState('light')
  
  const toggleMode=()=>{
    if(mode=='dark'){
      setMode("light")
      document.body.style.backgroundColor='white'
    }
    else{
      setMode("dark")
      document.body.style.backgroundColor='#212529'

    }
  }
  return (
    <div className="App">
    <Links/>
      <Navbar mode={mode} toggleMode={toggleMode}/>
      <Textarea mode={mode} toggleMode={toggleMode}/>
    </div>
  );
}

export default App;
