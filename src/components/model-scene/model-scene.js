import React, { useEffect, useRef } from 'react';
import { Engine, Scene, SceneLoader } from '@babylonjs/core';
import '@babylonjs/loaders';
import '@babylonjs/loaders/glTF/2.0/glTFLoader';
import './model-scene.scss'

//gltf files should be put in dist folder

function BabylonScene() {
  const canvasRef = useRef(null);
  const modelPath = "models/scene.gltf"

  useEffect(() => {
    const canvas = canvasRef.current;
    const engine = new Engine(canvas, true);

    const scene = new Scene(engine);
    scene.createDefaultCameraOrLight(true, true, true);
    scene.createDefaultEnvironment();

    // Load the model
    SceneLoader.Append("", modelPath, scene, (meshes) => {
      console.log(meshes)
    });

    engine.runRenderLoop(() => {
      scene.render();
    });

    return () => {
      scene.dispose();
      engine.dispose();
    };
  }, [modelPath]);

  return (
    <div className="canvas__container">
        <div className="canvas__detector-container">
            <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }} />;
        </div>
    </div>
  )
}

export default BabylonScene;