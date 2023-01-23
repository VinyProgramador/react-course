import './App.css';

// pacotes do react router
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NavBar from './components/NavBar';
import Product from './pages/Product';
import Info from './pages/Info';

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          {/* rota dinamica */}
          <Route path='/products/:id' element={<Product />}/>
          {/* nested routes */}
          <Route path='/products/:id/info' element={<Info />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
