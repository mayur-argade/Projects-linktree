import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Lakshya from './components/Lakshya';
import EventTick from './components/EventTick'
import Vrukshavalli from './components/Vrukshavalli'

function App() {
  return (
    <>
<Router>
<Routes>
<Route path='/lakshya'element={<Lakshya />} />
<Route path='/eventtick'element={<EventTick />} />
<Route path='/vrukshavalli'element={<Vrukshavalli />} />
</Routes>
</Router>    
    </>
  );
}

export default App;
