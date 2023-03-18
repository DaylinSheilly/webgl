import React from 'react'

const Box = ({ color, position, size, bool, matcap}) => {
  return (
      <mesh position={position}>
          <boxBufferGeometry args={size} />
          <meshMatcapMaterial wireframe={bool} matcap={matcap} />
    </mesh>
  )
}

export default Box