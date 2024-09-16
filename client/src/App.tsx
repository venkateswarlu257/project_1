import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginView from './Views/LoginView/LoginView';
import HomeView from './Views/HomeView/HomeView';
import MARegisterView from './Views/MARegisterView/MARegisterView';
import MAHomeView from './Views/MAHomeView/MAHomeView';
import { NavBar } from './NavBar/Index';

function App() {
  return (
   
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<HomeView/>}/>
          <Route path='/login' element={<LoginView/>}/>
          <Route path='/MAHomeView' element={<MAHomeView/>}/>
          <Route path='/MARegisterView' element={<MARegisterView/>}/>
        </Routes>
      </BrowserRouter>
    </div>
   
  );
}

export default App;
