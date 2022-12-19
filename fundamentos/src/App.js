import './App.css';
import Challenge from './components/Challenge';
import ComponentTest from './components/ComponentTest';
import Events from './components/Events';
import FirstComponent from './components/FirstComponent';

function App() {
  return (
    <div>
      <FirstComponent/>
      <ComponentTest/>
      <Events />
      <Challenge />
    </div>
  );
}

export default App;
