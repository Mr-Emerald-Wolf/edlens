import React, { useState } from 'react';
import { createWorker } from 'tesseract.js';

import '../index.css';

function Ocr(props) {
    const worker = createWorker({
        logger: m => console.log(m),
    });

    const [text, setText] = useState("");

    const doOCR = async () => {
        await worker.load();
        await worker.loadLanguage('eng');
        await worker.initialize('eng');
        const { data: { text } } = await worker.recognize(props.imgSrc);
        setText(text);
        console.log(text);
        return text;
    };
    
    doOCR();


    return (
        <>
        </>
    );
}

export default Ocr;