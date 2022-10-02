import Webcam from "react-webcam";
import { React, useRef, useState, useCallback } from 'react';
import Ocr from "./Ocr";

export default function Cam() {

    const FACING_MODE_USER = "user";
    const FACING_MODE_ENVIRONMENT = "environment";

    const videoConstraints = {
        facingMode: FACING_MODE_USER
    };

    const [facingMode, setFacingMode] = useState(FACING_MODE_USER);

    const handleClick = useCallback(() => {
        setFacingMode(
            prevState =>
                prevState === FACING_MODE_USER
                    ? FACING_MODE_ENVIRONMENT
                    : FACING_MODE_USER
        );
    }, []);

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
                <div className="min-h-screen bg-slate-700 grid grid-cols-1 content-center">
                    <Webcam
                        audio={false}
                        ref={webcamRef}
                        screenshotFormat="image/jpeg"
                        className="mx-auto rounded-lg w-3/4 md:w-1/2"
                        videoConstraints={FACING_MODE_ENVIRONMENT}
                    />
                    <button className="p-2 w-1/4 mx-auto text-lg text-slate-700 rounded bg-red-400 m-2" onClick={capture}>Capture photo</button>
                </div>
            }
            {captured && <Ocr imgSrc={imgSrc} />}

        </>
    );

}