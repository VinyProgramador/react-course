import React from 'react';
import './Product.css';
import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { Link } from 'react-router-dom';
const Product = () => {

    // rota dinamica
    const { id } = useParams();

    // carregamento do dado individual
    const url = "http://localhost:3000/products/" + id
    const {data: product, loading, error} = useFetch(url);
    console.log(product)
    return (
        <div className='productDiv'>
        <p>Id do produto: {id}</p>
        {error && <p>Ocorreu um erro..</p>}
        {loading && <p>Carregando..</p>}
        {product && (
            <div>
                <h2>{product.name}</h2>
                <h3>Preço: <b>{product.price}</b></h3>
                {/* nested routes */}
                <Link to={`/products/${product.id}/info`}>Mais informações</Link>
            </div>
            
        )}
        </div>
    )
}

export default Product