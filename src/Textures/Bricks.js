import React from 'react'
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three"

const Bricks = () => {
    const stone = useLoader(TextureLoader, "./block/stone.png");
    stone.minFilter = THREE.NearestFilter
    stone.magFilter = THREE.NearestFilter
  return (
      <mesh position={[-8, -1.7, 0]}>
          <boxBufferGeometry args={[2, 2, 2]} />
          <meshBasicMaterial map={stone} />
          
    </mesh>
  )
}

export default Bricks