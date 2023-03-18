import React from 'react'
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { useLoader } from "@react-three/fiber";

const Matcap = () => {

    const matcap1 = useLoader(TextureLoader, "./matcaps/matcap3.png");
    const matcap2 = useLoader(TextureLoader, "./matcaps/matcap2.png");

    return (
    <mesh position={[0, 0, 0]}>
      <torusKnotBufferGeometry args={[1, 0.3, 100, 100]} />
      <meshMatcapMaterial matcap={matcap1} />
    </mesh>
  );
}

export default Matcap