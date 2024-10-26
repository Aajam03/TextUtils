import React, {useState} from 'react'

export default function TextForm(props) {
 const handleUpperClick = () =>{
       let newText = text.toUpperCase();
       setText(newText);
  }

  const LowerCaseClick =()=>{
    let newText = text.toLocaleLowerCase();
    setText(newText);
  }
  

  const ClearText =()=>{
    let newText = "";
    setText(newText);
    
  }

  const handleCopy =()=>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    
  }

  const handleExtraSpace = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }


  const handleOnChange = (event) =>{
    // console.log("On chnage");
    setText(event.target.value);
    
}
  const [text, setText] = useState("");
  
 
 
 return (
<> 
   
   <div className='container'>
     <h1 style={{color: props.mode === 'dark' ? 'white' : 'black'}}>{props.heading}</h1>
     <div className="mb-3">
      <textarea className="form-control" id="myBox" rows="10" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode === 'dark' ? 'grey' : 'white' ,
         color: props.mode === 'dark' ? 'white' : 'black' }}></textarea>
     </div>
     <button className={props.mode==='dark'? 'btn btn-dark mx-2 my-2':"btn btn-info mx-2 my-2"} onClick={handleUpperClick}>To-Upper-Case</button>
     <button className={props.mode==='dark'? 'btn btn-dark mx-2 my-2':"btn btn-info mx-2 my-2"} onClick={LowerCaseClick}>To-Lower-Csae</button> 
     <button className={props.mode==='dark'? 'btn btn-dark mx-2 my-2':"btn btn-info mx-2 my-2"} onClick={handleExtraSpace}>Remove-Extra-Space</button>
     <button className={props.mode==='dark'? 'btn btn-dark mx-2 my-2':"btn btn-info mx-2 my-2"} onClick={handleCopy}>Copy-Text</button>
     <button className={props.mode==='dark'? 'btn btn-dark mx-2 my-2':"btn btn-info mx-2 my-2"} onClick={ClearText}>Clear-Text</button>
     
     <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
      <h2>Your Text Summary</h2>
      <h6 className= "my-2"> {text.split(' ').length-1} Words and {text.length} characters.</h6>
      <h6>{0.008 * text.split(' ').length } Minutes take to read.</h6>
      <h2 className='preview my-0'>Preview</h2>
      <p>{text.length>0?text: "Enter Something to preview it here....." }</p>
     </div>
   </div>
</>
  )
}
