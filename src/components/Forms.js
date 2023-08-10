
import React, {useState} from 'react'

export default function Forms(props) {
    
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase Successfully!","success");
    }
    const handlelowClick = () => {
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to lowercase Successfully!","success");
  }
 
  const handleCopyClick = () => {
    let newText = text;
   navigator.clipboard.writeText(newText)
   props.showAlert("Copied to clipboard","primary");
}

  const handleClearClick = () => {
    let newText = '';
    setText(newText);
    props.showAlert("Textarea is cleared","success");
}
    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const [text, setText] = useState(''); 


  return (<>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
  
         <div className="form-group my-5">
         <h3><b>Enter the text below </b></h3>
    <textarea className="form-control my-2 " style={{backgroundColor: props.mode==='dark'?'black':'white', color:props.mode==='dark'?'white':'black'}}  id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnChange} ></textarea>
  </div>
  <button type="button" className="btn btn-primary mx-2" onClick={handleUpClick} >Convert to Uppercase</button>
  <button type="button" className="btn btn-primary mx-2" onClick={handlelowClick} >Convert to Lowercase</button>
  <button type="button" className="btn btn-primary mx-2" onClick={handleClearClick} >Clear text</button>
  <button type="button" className="btn btn-primary mx-2" onClick={handleCopyClick} >Copy text</button>
    </div>
    <div className="container my-5"  style={{color:props.mode==='dark'?'white':'black'}}>
      <h3><b>
        Your Text Summary :- 
        </b></h3>
      <h5>{text.split(" ").length} Words and {text.length} Characters </h5>
      <h3 className='my-3'><b>
        Time required to read :- 
        </b></h3>
        <h5>{(text.split(" ").length)*0.008} mins</h5>
    </div>
<div className='container my-5' style={{color:props.mode==='dark'?'white':'black'}}>
    <div>
        <h4><b>Preview</b></h4>
        <h5>{text}</h5>
      </div>
</div>
    </>
  )
}
