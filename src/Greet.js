import React from 'react'

function Greet({movie,name}){
  return(
    <div>
    <h1>{name} is {movie}</h1>
    </div>
  )
}

export default Greet