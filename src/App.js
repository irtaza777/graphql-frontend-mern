import { Route, Routes } from 'react-router-dom';
import './App.css';
import Records from './components/Records/Records';
import Addrecord from './components/Addrecords/Addrecord';
import Updaterecord from './components/Updaterecord/Updaterecord';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/Allrecord" element={<Records/>}></Route>
        <Route path="/Addrecord" element={<Addrecord/>}></Route>
        <Route path="/Updaterecord/:id" element={<Updaterecord/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
