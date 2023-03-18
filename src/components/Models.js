import React from 'react'
//threejs
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { useLoader } from '@react-three/fiber';
import model from "../assets/Anime.fbx";

const Models = () => {
    const geom = useLoader(FBXLoader, model);
  return (
      <primitive object={geom} />
  )
}
export default Models