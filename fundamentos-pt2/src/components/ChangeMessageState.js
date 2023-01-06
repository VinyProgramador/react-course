import React from 'react'

const ChangeMessageState = ({handleMessage}) => {
    const messages =["Oi","Olá", "Tudo bem?"];
  return (
    <div>
        <button onClick={() => handleMessage(messages[0])}>1</button><br/>
        <button onClick={() => handleMessage(messages[1])}>2</button><br/>
        <button onClick={() => handleMessage(messages[2])}>3</button><br/>
    </div>
  )
}

export default ChangeMessageState