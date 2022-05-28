import logo from './logo.svg';
import './App.css';
import { EmptyDiv } from './Components/Div';
import { Circle } from './Components/Circles';

function App() {
  return (
    <div style={{display:"flex",justifyContent:"space-around"}} className="App">
      <EmptyDiv/>
      <Circle/>
    </div>
  );
}

export default App;
