import React from 'react'

const CarDetails = ({ marca, km, cor, newCar }) => {
    return (
        <div>
            <h2>Detalhes do caro</h2>
            <ul>
                <li>Marca: {marca}</li>
                <li>Km: {km}</li>
                <li>Cor: {cor}</li>
            </ul>
            {newCar && <p>Este carro é novo</p>}
        </div>
    )
}

export default CarDetails