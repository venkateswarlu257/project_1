import Cookies from 'js-cookie'
import React, { useState } from 'react'
import { loginUser } from '../Services/LoginService'
import { jwtDecode } from 'jwt-decode'


function LoginView() {
  const [data,setData] = useState({
    email:"",
     password: ''
  })

  const handleChange=(e:any)=>{
     setData({...data,[e.target.name]:e.target.value})
    
  }

  const onSuccess = (token:any) => {
    Cookies.set('Jwt_Token', token, { expires:100 });
    
    const tokenStr=JSON.stringify(token)

     const decoded:any = jwtDecode(tokenStr);
     Cookies.set('loginid', decoded.id)
     console.log(decoded.id)
  
};

  const handleonSubmit=async (e:any)=>{
    e.preventDefault();
   const response = await loginUser(data)
   onSuccess(response)
  }

return (
 <form onSubmit={(e)=>handleonSubmit(e)}>
     <div>
        <div>
         <label htmlFor='UserName'>UserName</label>
         <input type="text" name='email' id='UserName' onChange={(e)=>handleChange(e)} />
        </div>

        <div>
         <label htmlFor='Password'>Password</label>
         <input type="Password" name='password' id='Password' onChange={(e)=>handleChange(e)} />
        </div>
        <button type='submit'>Submit</button>
     </div>
 </form>
)

}

export default LoginView