import React, { useState } from "react";

export default function Textform(props) {
  const Uppercase = () => {
    let newText = text.toUpperCase();
    setText(newText);
     props.showalert("text conveted to upperccase","success")
  };
  const lowercase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showalert("text conveted to lowercase","success")

  };
  const cleartext = () => {
    let newText = "";
    setText(newText);
    props.showalert("clear text","primary")

    
  };
  const Onchannge = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <>
      <h1 style={{color:props.mode==='dark'?'white':'black'}}>{props.heading}</h1>

      <div className="mb-3 my-3"  >
        <textarea
          className="form-control"
          style={{backgroundColor:props.mode==='dark'?'#214d75':'white',color:props.mode==='dark'?'white':'black'}}
          value={text}
          onChange={Onchannge}
          id="textarea"
          rows="8"
        ></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-danger mx-2" onClick={Uppercase} >
        Uppercase
        
       
      </button>
      <button disabled={text.length===0} className="btn btn-danger mx-2" onClick={lowercase}>
        Lowercase
      </button>
      <button disabled={text.length===0} className="btn btn-danger mx-2" onClick={cleartext}>
       Clear
      </button>
       <div style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>Text Summary</h1>
      <p>
        
        {text.split(" ").filter((element)=>{
         return element.length!==0

        }).length} words and {text.length} character
      </p>
      <p>{0.008 * text.split(/\s+/).filter((element)=>{
         return element.length!==0

        }).length} Minute to read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter in the test box to preview here"}</p>
      </div>
    </>
  );
}
