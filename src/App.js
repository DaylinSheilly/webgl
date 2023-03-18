import React, { Suspense } from "react";
import ThreeScene from "./Scene/ThreeScene";
import Sphere from "./components/Sphere";
import Box from "./components/Box";
import Camera from "./Scene/Camera";
import { OrbitControls, Stars } from "@react-three/drei";
import Models from "./components/Models";
import Matcap from "./Textures/Matcap";
import Bricks from "./Textures/Bricks";
import Lights from "./Scene/Lights";

function App() {

  return (
    <div style={{ height: "100vh", overflow: "hidden" }}>
      <ThreeScene>
        <color attach="background" args={["#ffffff"]} />

        <planeBufferGeometry color={"#ffffff"} />
        <Suspense fallback={null}>
          <Bricks />
        </Suspense>
        <Lights />
        <ambientLight color={"#0000ff"} intensity={0.2} />
        <OrbitControls />
      </ThreeScene>
    </div>
  );
}

export default App;
