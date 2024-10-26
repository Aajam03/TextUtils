
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import About from "./Components/About";
import React, {useState} from 'react'


function App() {
   const [mode, setMode] = useState('light');
   const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = "grey"
      // document.body.style.color = "white"
      
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "white"
      // document.body.style.color = "black"
    }
   };

  return (
   <>
        {/* <Navbar title="TextUtils" AboutText="About TextUtils"/> */}
        {/* <Navbar/> */}
        <Navbar title="TextUtils" AboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
        <div className="container my-3">
        <TextForm heading="Enter the text to analyze below" mode={mode}/>
        </div>
        <About mode={mode}/>
   
   </>

  );
};

export default App;
