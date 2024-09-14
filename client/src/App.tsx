import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginView from './Views/LoginView';
import { NavBar } from './NavBar/Index';
import RegisterView from './Views/RegisterView';


function App() {
  return (
   
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <RegisterView/>
        <Routes>
          <Route path='/login' element={<LoginView/>}/>
        </Routes>
      </BrowserRouter>
    </div>
   
  );
}

export default App;
