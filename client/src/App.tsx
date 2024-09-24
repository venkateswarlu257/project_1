import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import './App.css';
import LoginForm from './components/LoginForm';
import NotFound from './components/NotFound';
import MasterAdminPage from './components/MasterAdminPage';
import ProtectedRoute from './components/ProtectedRoute';
import CreateAdminPage from './components/CreateAdminPage';
import AdminPage from './components/AdminPage';
import CreateEmployee from './components/CreateEmployee';
import EmployeePage from './components/EmployeePage';
import AddProduct from './components/AddProduct';
import SignUpForm from './components/SignUpForm';



function App() {
  return (
   
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<LoginForm/>}/>
          <Route path='/signup' element={<SignUpForm/>}/>

          <Route path='/masteradmin' element={<ProtectedRoute requiredRole="masteradmin">
                <MasterAdminPage />
              </ProtectedRoute>}/>
          <Route path='masteradmin/createadmin' element={<CreateAdminPage/>} />

          <Route path='/admin' element={<ProtectedRoute requiredRole="admin">
                <AdminPage/>
              </ProtectedRoute>}/>
          <Route path='admin/createemployee' element={<CreateEmployee/>} />
          
          <Route path='/employee' element={<ProtectedRoute requiredRole="employee">
                <EmployeePage/>
              </ProtectedRoute>}/>
          <Route path='employee/addproduct' element={<AddProduct/>} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
   
  );
}

export default App;
