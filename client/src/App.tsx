import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Admin from './Admin/Admin';
import { NavBar } from './NavBar/Index';
import Home from './Home/Home';


function App() {
  return (
   
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/addproduct' element={<Admin/>}/>
        </Routes>
      </BrowserRouter>
    </div>
   
  );
}

export default App;
