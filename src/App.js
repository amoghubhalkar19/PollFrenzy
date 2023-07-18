import './App.css';
import Create from './Components/Create';
import Lander from './Components/Lander';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Monitor from './Components/Monitor';
import Vote from './Components/Vote';
import { useState } from 'react';

function App() {
  const [Data, setData] = useState([]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Lander/>} />
        <Route path='/create' element={<Create data={Data} setdata={setData}/>}/>
        <Route path='/monitor' element={<Monitor/>}/>
        <Route path='/vote' element={<Vote/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
