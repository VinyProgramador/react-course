import React from 'react'
import { Link } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'

import './Home.css'

const Home = () => {
  // carregando dados

  const url = "http://localhost:3000/products"

  const{data: items, loading, error} = useFetch(url)

  
  return (
    <div>
      <h2>Produtos</h2>
      {error && <p>{error}</p>}
      <ul className='products'>
      {items &&
          items.map((item) => (
            <li key={item.id}>
              <h3>{item.name}</h3>
              <p>R$: {item.price}</p>
              {/* Rota dinamica  */}
              <Link to={`/products/${item.id}`}>Detalhes</Link>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default Home