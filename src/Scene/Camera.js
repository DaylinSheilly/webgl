import React from 'react'
import {PerspectiveCamera} from '@react-three/drei'

const Camera = () => {
    return (
        < PerspectiveCamera
            //makeDefault
            //angulo de la camara
            position={[-20, 50, -15]}
            //zoom de la camara
            fov={25}
        /> 
  )
}

export default Camera