import React, { useState } from 'react';
import { createWorker } from 'tesseract.js';

import '../index.css';
import Navbar from './Navbar';

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
        setText(text);
        return text;
    };
    const handleClick = async () => {
        let ocr = await doOCR();
        console.log(ocr);
    }


    return (
        <>
            <Navbar/>
            <div className="App">
                <main className="App-main">
                    <h3>Actual imagePath uploaded</h3>
                    <img
                        src={imagePath} className="App-image" alt="logo" />
                    <h3>Extracted text</h3>
                    <div className="text-box">
                        <p> {text} </p>
                    </div>
                    <input type="file" onChange={handleChange} />
                    <button onClick={handleClick} className="p-1 bg-red-400 rounded">Convert</button>
                </main>
            </div>
        </>
    );
}

export default Ocr;