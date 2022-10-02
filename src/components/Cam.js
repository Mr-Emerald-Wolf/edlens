import Webcam from "react-webcam";
import { React, useRef, useState, useCallback } from 'react';
import { useNavigate } from "react-router-dom";
import Ocr from "./Ocr";

export default function Cam() {

    const navigate = useNavigate();

    const webcamRef = useRef(null);
    const [imgSrc, setImgSrc] = useState(null);
    const [captured, setCaptured] = useState(false);

    const capture = useCallback(async () => {
        const imageSrc = await webcamRef.current.getScreenshot();
        setImgSrc(imageSrc);
        setCaptured(true);
        return imageSrc
    }, [webcamRef, setImgSrc]);

    console.log(imgSrc);

    return (
        <>
            {!captured &&
                <div>
                    <Webcam
                        audio={false}
                        ref={webcamRef}
                        screenshotFormat="image/jpeg"
                    />
                    <button onClick={capture}>Capture photo</button>
                </div>
            }
            {captured && <Ocr imgSrc={imgSrc}/>}

        </>
    );

}