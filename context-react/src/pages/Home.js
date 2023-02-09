import { useContext } from 'react'
import { Link } from 'react-router-dom'

import { CounterContext } from '../context/CounterContex'


const Home = () => {  
  const {counter} = useContext(CounterContext)
  return (
    <div>
        Home
        Valor do contador: {counter}
    </div>
  )
}

export default Home