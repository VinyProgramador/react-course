import './App.css';
import { ConditionalRender } from './components/ConditionalRender';
import { ListRender } from './components/ListRender';
import { ManageData } from './components/ManageData';

function App() {
  return (
   <div>
    <ManageData />
    <ListRender />
    <ConditionalRender />
   </div>
  );
}

export default App;
