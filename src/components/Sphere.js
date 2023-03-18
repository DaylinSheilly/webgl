import React from 'react'
import { Mesh } from 'three'

const Sphere = ({ color, position }) => {
  return (
    <mesh position={position}>
        <sphereGeometry />
        <meshNormalMaterial flatShading={true} color={color} />
    </mesh>
  )
}

export default Sphere