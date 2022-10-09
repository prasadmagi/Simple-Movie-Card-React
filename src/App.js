
import './App.css';
import Main from './Components/Main';
import { Route, Routes } from "react-router-dom"
import Moviedetalil from './Components/Moviedetalil';
function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Main />}/>
        <Route path='/movie?movieId=id' element={<Moviedetalil />} />
      </Routes>
      
    </div>
  );
}

export default App;
