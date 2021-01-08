import React, { useState,useEffect } from "react";
import HashLoader from "react-spinners/HashLoader";
import logo from './logo.svg';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
 
useEffect(() => {
  setLoading(true);
  setTimeout(()=>{
    setLoading(false);
  }, 8000);
}, []);
  return (
    <div className="App">
      {
        loading ? (
        <HashLoader color={'#D2ECE7'} loading={loading} size={50} />
        ) : (
         <header className="App-header">
           <img src={logo} className="App-logo" alt="logo" />
          </header> )
      }
    </div>  );
}

export default App;