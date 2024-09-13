import { useState } from "react";
import axios from "axios";
import Cookies from 'js-cookie';
import { Link, useNavigate } from "react-router-dom";
import './Login.css'

function Login() {
    const navigate = useNavigate()
    

    const [data, setData] = useState({
        email: '',
        password: ''
    });

    const changingHandlear = (e:any) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };
      

    const onSuccess = (token:any) => {
        Cookies.set('Jwt_Token', token, { expires:100 });
        navigate('/myprofile')
    };

    const submitHandler = (e:any) => {
        e.preventDefault();
        axios.post('http://localhost:5123/login', data).then(
            res => {
                onSuccess(res.data.token);
            }
        ).catch(err => console.error(err));
    };
    

    return (
        <div className='logindiv'>
            <form onSubmit={submitHandler}>
                <h3>Login Page</h3>
                <input type="email" onChange={changingHandlear} name="email" placeholder="user email" /><br />
                <input type="password" onChange={changingHandlear} name="password" placeholder="password" /><br />
                <button type="submit">Login</button><br />
                <div className='lll'> <h5>If you are not user </h5><Link to='/register'><h5 className='signUp'>Sign Up</h5></Link></div>
            </form>
        </div>
    );
};


export default Login