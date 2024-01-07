import 'aframe';
import React from 'react';

// two swings to right
// add 'stats' to a-scene to see advanced stats
const model = require('../../../public/models/scene.gltf');

const ModelScene = () => {
  return (
    <div className="canvas__container">
      <div className="canvas__detector-container">
        <a-scene>
          <a-entity gltf-model={model} play-all-model-animations position="0 0 10"></a-entity>
        </a-scene>
      </div>
    </div>
  );
}


export default ModelScene;
