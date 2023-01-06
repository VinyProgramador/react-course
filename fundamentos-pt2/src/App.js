import { Fragment, useState } from 'react';
import './App.css';
import CarDetails from './components/CarDetails';
import { ConditionalRender } from './components/ConditionalRender';
import { ListRender } from './components/ListRender';
import { ManageData } from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import Fragments from './components/Fragments';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';

function App() {

  const name = "Viny";
  const [userName] = useState("Vinicius");
  const cars = [
    { id: 1, marca: "Ferrari", km: 3000, cor: "Verde", newCar: true },
    { id: 2, marca: "Gol", km: 6000, cor: "Rosa", newCar: false },
    { id: 3, marca: "Corsa", km: 2000, cor: "Amerelo", newCar: true }
  ]

  function showMessage(){
    alert("Evento do componente pai");
  }


  const [message, setMessage] = useState("");

  const handleMessage = (msg) =>{
    setMessage(msg);
  }

  return (
    <div>
      {/* <ManageData /> */}
      {/* <ListRender /> */}
      {/* <ConditionalRender /> */}
      {/* props */}
      {/* <ShowUserName name={userName} /> */}
      {/* destructuring */}
      {/* <CarDetails marca="BMW" km={1000} cor="Azul Escuro" newCar={true} /> */}
      {/* Reaproveitando */}
      {/* <CarDetails marca="ford" km={2000} cor="Preto" newCar={false} /> */}
      {/* Loop em array de objetos: */}
      {/* {cars.map((car) => (
        <CarDetails
          marca={car.marca}
          cor={car.cor}
          km={car.km}
          newCar={car.newCar} />
      ))} */}

      {/* Fragments */}
      <Fragments propFragment="teste" />

      {/* children */}
      <Container myValue="10">
        <p>Conteúdo</p>

      </Container>
      {/* Executar função */}
      <ExecuteFunction myFunction={showMessage} />

      {/* state lift */}
      <Message msg={message}/>
      <ChangeMessageState handleMessage={handleMessage}/>
    </div>
  );
}

export default App;
