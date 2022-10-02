import React, { useEffect, useState } from 'react';
import { createWorker } from 'tesseract.js';
import * as THREE from '../libs/three.js-r132/build/three.module.js'
import { GLTFLoader } from '../libs/three.js-r132/examples/jsm/loaders/GLTFLoader.js'
// import { ARButton } from './libs/three.js-r132/examples/jsm/webxr/ARButton.js'

import '../index.css';
import { Helmet } from 'react-helmet';

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

    useEffect(() => {
        const script = document.createElement('script');

        script.src = "../libs/mindar/mindar-image-three.prod.js"
        script.async = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, ["../libs/mindar/mindar-image-three.prod.js"])

    document.addEventListener('DOMContentLoaded', () => {
        const initialize = async () => {
            const arButton = document.querySelector("#ar-button");

            // check and request webxr session 
            const supported = navigator.xr && await navigator.xr.isSessionSupported('immersive-ar');
            if (!supported) {
                arButton.textContent = "Not Supported";
                arButton.disabled = true;
                return;
            }

            // build three.js scene
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera();

            const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(window.devicePixelRatio);
            document.body.appendChild(renderer.domElement);

            const loader = new GLTFLoader();

            let ocrWord = text;
            switch (ocrWord) {
                case 'duck':
                    loader.load('./assets/models/Duck.gltf', function (gltf) {
                        let duck = gltf.scene.children[0];
                        duck.scale.set(0.01, 0.01, 0.01);
                        duck.position.set(0, -5, -5);
                        scene.add(gltf.scene);
                    });
                    break;
                case 'fox':
                    loader.load('./assets/models/Fox.gltf', function (gltf) {
                        let fox = gltf.scene.children[0];
                        fox.scale.set(0.01, 0.01, 0.01);
                        fox.position.set(0, -5, -5);
                        scene.add(gltf.scene);
                    });
                    break;
            }

            const light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);
            scene.add(light);

            renderer.xr.addEventListener("sessionstart", (e) => {
                console.log("session start");
            });

            renderer.xr.addEventListener("sessionend", () => {
                console.log("session end");
            });

            let currentSession = null;
            const start = async () => {
                currentSession = await navigator.xr.requestSession('immersive-ar', {
                    optionalFeatures: ['dom-overlay'],
                    domOverlay: { root: document.body }
                });

                renderer.xr.enabled = true;


                renderer.xr.setReferenceSpaceType('local');


                await renderer.xr.setSession(currentSession);
                arButton.textContent = "End";

                renderer.setAnimationLoop(() => {
                    renderer.render(scene, camera);

                });

            }
            const end = async () => {
                currentSession.end();
                renderer.setAnimationLoop(null);
                renderer.clear();
                arButton.style.display = "none";
            }
            arButton.addEventListener('click', () => {
                if (currentSession) {
                    end();
                } else {
                    start();
                }
            });
        }
        initialize();

    });




    return (
        <>
            <Helmet>
                <script src="../libs/mindar/mindar-image-three.prod.js"></script>
                <button id="ar-button">Start</button>
            </Helmet>
        </>
    );
}

export default Ocr;