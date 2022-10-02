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
    
    let word = doOCR();

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

        let ocrResult = "Duck"

        switch (ocrResult) {
            case 'DUCK ':
            case 'Duck':
            case 'duck':
                loader.load('./assets/models/Duck.gltf', function (gltf) {
                    let duck = gltf.scene.children[0];
                    duck.scale.set(0.01, 0.01, 0.01);
                    duck.position.set(0, -5, -5);
                    scene.add(gltf.scene);
                });
                break;
            case 'BEAR':
            case 'Bear':
            case 'bear':
                loader.load('./assets/models/musicband-bear/scene.gltf', function (gltf) {
                    let bear = gltf.scene.children[0];
                    bear.scale.set(0.3, 0.3, 0.3);
                    bear.position.set(0, -5, -5);
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
    initialize(word);






    return (
        <>
            <Helmet>
                <script src="../libs/mindar/mindar-image-three.prod.js"></script>
                <script data-consolejs-channel="b404953f-42f3-47f6-c81c-35138bd834f0" src="https://remotejs.com/agent/agent.js"></script>
                <script src="./main.js" type="module"></script>
            </Helmet>
            <button id="ar-button" onClick={initialize}>Start</button>
        </>
    );
}

export default Ocr;