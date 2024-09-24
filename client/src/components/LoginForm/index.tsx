import {ErrorMessage, Field,Form,Formik} from 'formik'
import {Link,useNavigate} from 'react-router-dom'
import { useState } from 'react';
import Cookies from 'js-cookie'
import {jwtDecode} from "jwt-decode";
import * as Yup from 'yup';

import './index.css'

const LoginForm = () => {
  const [errMessage,setErrMessage] = useState(null)

  interface CustomJwtPayload {
    role: string;
  }
  const navigate = useNavigate();

  const onSubmitSuccess = (jwtToken:string) => {
    const decoded = jwtDecode<CustomJwtPayload>(jwtToken);
    if (decoded.role === "masteradmin"){
      Cookies.set('jwt_token', jwtToken, {expires: 1})
      navigate('/masteradmin')
    }
    else if (decoded.role === "admin"){
      Cookies.set('jwt_token', jwtToken, {expires: 1})
      navigate('/admin')
    }
    else if (decoded.role === "employee"){
      Cookies.set('jwt_token', jwtToken, {expires: 1})
      navigate('/employee')
    }
    else{
      Cookies.set('jwt_token', jwtToken, {expires: 30})
      navigate('/')
    }
  }
 
  const initialValues = {
    email:'',
    password: ''
  }

const onSubmit = async (values:any) => {
  const url = 'http://localhost:5000/login'
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(values),
  }
  const response = await fetch(url, options)
  const data = await response.json()
  if (response.ok === true){
    onSubmitSuccess(data.jwtToken)
  }else{
    setErrMessage(data.message)
  }
}

const validationSchema = Yup.object({
  email: Yup.string()
    .email('*Invalid email address')
    .matches(
      /^[a-zA-Z0-9_]+@gmail\.com$/,
      '*Email must only contain letters, numbers before  @gmail.com'
    )
    .matches(
      /^[a-zA-Z0-9_]{2,}@gmail\.com$/,
      '*Email must have at least 2 characters before @gmail.com',
    )
    .required('*Email is required'),
  password: Yup.string()
    .min(6, '*Password must be at least 6 characters long')
    .required('*Password is required'),
});
    
    return(
        <>
        <nav>
            <Link to="/"><img className='logo' src="https://cdn.dribbble.com/users/3615144/screenshots/7076764/media/b3efbee1a944c1b2dc127ecd6d653faa.png?resize=800x600&vertical=center" alt="logo"/></Link>
        </nav>
        <div className="sign-up-container">
        <img className='login-img' src="https://static-assets-web.flixcart.com/pegasus/images/7d491778-LoginAndRegistration.svg" alt="login" />
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      <Form className="sign-up-form">
      <h1 className='head'>Login to your account</h1>
      <p>Please enter in your credentials to login</p>
        <label className="input-label" htmlFor="email">
          EMAIL
        </label>
        <Field 
          type="text"
          id="email"
          name="email"
          placeholder="Email"
          className="input-filed"
        />
        <ErrorMessage component="div" className="error-message" name="email"/>

        <label className="input-label" htmlFor="password">
            PASSWORD
        </label>
        <Field 
            type="password"
            id="password"
            name="password"
            placeholder="password"
            className="input-filed"
        />
        <ErrorMessage component="div" className="error-message" name="password" />

        <button type="submit" className="button">Login</button>
        {errMessage && <div className="error-message">{`*${errMessage}`}</div>}
        <div className='membership'>
        <p>Not a member?<Link to="/signup">SignUp Now</Link></p>
        </div>
      </Form>
      </Formik>
        </div>
        </>
    )
}

export default LoginForm