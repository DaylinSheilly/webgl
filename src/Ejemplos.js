import React, { Suspense } from "react";
import ThreeScene from "./Scene/ThreeScene";
import Sphere from "./components/Sphere";
import Box from "./components/Box";
import Camera from "./Scene/Camera";
import { OrbitControls, Stars } from "@react-three/drei";
import Models from "./components/Models";
import Matcap from "./Textures/Matcap";
import Bricks from "./Textures/Bricks";

const ejemplos = () => {
  return (
    <div style={{ height: "100vh", overflow: "hidden" }}>
      <ThreeScene>
        <Camera />
        <color attach="background" args={["#161c24"]} />
        <Sphere color="#00ff00" position={[-2.7, 0, 0]} />
        <Sphere color="#ff0000" position={[3, 0, 0]} />
        <Suspense fallback={null}>
          <Models />
         </Suspense>
        <Box color="#ff0000" position={[0.1, 0, 0]} size={[0.1, 0.1, 0.1]} />
        <Box
          color="#ff0000"
          position={[0.1, 0, 0]}
          size={[3.5, 3.5, 3.5]}
          bool={true}
        />
        <Box
          color="#ff0000"
          position={[0.1, 0, 0]}
          size={[8, 8, 8]}
          bool={true}
        />

        <Suspense fallback={null}>
          <Matcap />
          <Bricks />
        </Suspense>

        <ambientLight />
        <OrbitControls />
        <Stars count={1000} />
      </ThreeScene>
    </div>
  );
};

export default ejemplos;
