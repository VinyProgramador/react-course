import './App.css';
import MyComponent from './components/MyComponent';
import Title from './components/Title';

function App() {

  const n = 15;
  const redTitle = true;

  return (
    <div className="App">
      {/* CSS GLOBAL */}
      <h1>React com css</h1>
      {/* CSS DE COMPONENTE */}
      <MyComponent />
      <p>Este paragrafo é do app.js</p>
      {/* CSS INLINE */}
      <p style={{ color: "blue", padding: "25px,", backgroundColor: "gray" }}>Este elemento foi estilizado de forma inline</p>
      {/* CSS INLINE DINAMICO*/}
      <h2 style={n < 10 ? ({ backgroundColor: "red" }) : ({ backgroundColor: "green" })}>Css dinamico</h2>
      <h2 style={n > 10 ? ({ backgroundColor: "red" }) : ({ backgroundColor: "green" })}>Css dinamico</h2>
      {/* CLASSES DINAMICAS */}
      <h2 className={redTitle ? "red-title" : "title"}>Classe dinâmica</h2>
      {/* Css modules */}
      <Title />
    </div>
  );
}

export default App;
