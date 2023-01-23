import React from 'react'
import { useParams } from 'react-router-dom'


const Info = () => {

    const {id} = useParams();

  return (
    <div>
        <h2>Mais inormações sobre o Produto: {id}</h2>
    </div>
  )
}

export default Info