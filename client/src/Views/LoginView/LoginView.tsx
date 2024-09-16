import Cookies from 'js-cookie';
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { loginUser } from '../../Services/Service';
import {jwtDecode} from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import './LoginView.css'


const LoginView: React.FC = () => {

  const navigate = useNavigate(); 

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await loginUser(values);
        onSuccess(response);
      } catch (error) {
        console.error('Login failed', error);
      }
    },
  });

  // const onSuccess = (token: string) => {
  //   Cookies.set('Jwt_Token', token, { expires: 100 });
  //   const tokenStr=JSON.stringify(token)
  //   const decoded: any = jwtDecode(tokenStr);
  //   Cookies.set('loginid', decoded.id);
  //   if(decoded.role==='admin'){
  //     Navigate('/MAHomeView');
  //   }
  // };

  const onSuccess = (token: string) => {
    Cookies.set('Jwt_Token', token, { expires: 100 });
    const decoded: any = jwtDecode(JSON.stringify(token)); 
    Cookies.set('loginid', decoded.id);
    if (decoded.role === 'admin') {
      navigate('/MAHomeView');
    }
  };

  return (
    
    <div className='logindiv'>
      <form className='loginForm' onSubmit={formik.handleSubmit}>
      <div>
        <div>
          <h1>Login to your Account</h1>
          <label htmlFor='email'>Email</label>
          <input className='input'
            type="text"
            name='email'
            id='email'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div style={{ color: 'red' }}>{formik.errors.email}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor='password'>Password</label>
          <input className='input'
            type="password"
            name='password'
            id='password'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div style={{ color: 'red' }}>{formik.errors.password}</div>
          ) : null}
        </div>

        <button type='submit'>Submit</button>
      </div>
    </form>
    </div>
  );
};

export default LoginView;
