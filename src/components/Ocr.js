import React, { useEffect, useState } from 'react';
import { createWorker } from 'tesseract.js';

import '../index.css';

function Ocr() {
  const worker = createWorker({
    logger: m => console.log(m),
  });

  const [imagePath, setImagePath] = useState("");
  const [text, setText] = useState("");
 
  const handleChange = (event) => {
    setImagePath(URL.createObjectURL(event.target.files[0]));
  }
  const doOCR = async () => {
    await worker.load();
    await worker.loadLanguage('eng');
    await worker.initialize('eng');
    const { data: { text } } = await worker.recognize(imagePath);
    setOcr(text);
  };
  const [ocr, setOcr] = useState('Recognizing...');
  const handleClick = () => {
  
   
      doOCR()
    .catch (err => {
      console.error(err);
    })
    .then(result => {
      // Get Confidence score     
      setText(text);
  
    })
  }

  
  return (
    <div className="App">
    <main className="App-main">
      <h3>Actual imagePath uploaded</h3>
      <img 
         src={imagePath} className="App-image" alt="logo"/>
      
        <h3>Extracted text</h3>
      <div className="text-box">
        <p> {ocr} </p>
      </div>
      <input type="file" onChange={handleChange} />
      <button onClick={handleClick} style={{height:50}}> convert to text</button>
    </main>
  </div>
  );
}

export default Ocr;