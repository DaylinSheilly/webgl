import React from 'react'

const Lights = () => {
  return (
      <>
          //agrega luz en todas las direcciones
          <ambientLight
              color={"#000000"}
              intensity={0.2} 
          />
      </>
  )
}

export default Lights