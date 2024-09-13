import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Register.css'

function Register() {
    const [data, setData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const changingHandler = (e:any) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const submitHandler = (e:any) => {
        e.preventDefault();

       
        if (data.password !== data.confirmPassword) {
            alert("Password and Confirm Password do not match");
            return;
        }
 
        axios.post('http://localhost:5123/register', data)
            .then(res => alert(res.data))
            .catch(err => {
                console.error("Error in registration:", err);
                alert(err.response.data); 
            });
    };

    return (
        <div className='signupdiv'>
            <form onSubmit={submitHandler}>
                <h3>Register Page</h3>
                <label>Username</label>
                <input type="text" onChange={changingHandler} name="username" placeholder="username" /><br/>
                <label>Email</label>
                <input type="email" onChange={changingHandler} name="email" placeholder="user email" /><br />
                <label>Password</label>
                <input type="password" onChange={changingHandler} name="password" placeholder="password" /><br />
                <label>ConfirmPassword</label>
                <input type="password" onChange={changingHandler} name="confirmpassword" placeholder="confirm password" /><br />
                <button type="submit">Register</button><br />
                <div className='lll'>
                    <h5>If you are already register </h5>
                    <Link  to='/Login'> <h5 className='signUp'>Login</h5></Link>
                </div>
            </form>
           
        </div>
    );
}

export default Register
