import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginView from './Views/LoginView';
import { NavBar } from './NavBar/Index';
import Register from './Register/Register';


function App() {
  return (
   
    <div className="App">
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path='/login' element={<LoginView/>}/>
        </Routes>
      </BrowserRouter>
    </div>
   
  );
}

export default App;
