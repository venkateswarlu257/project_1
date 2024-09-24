import Cookies from 'js-cookie'
import {jwtDecode} from "jwt-decode";
import {Link} from 'react-router-dom'
import { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom'
import './index.css'

const NavBar = () => {
    const navigate = useNavigate()

    const onClickLogout = () => {
        Cookies.remove('jwt_token')
        navigate('/login')
      }

    interface CustomJwtPayload {
        role: string;
      }
      const [role,setRole] = useState<CustomJwtPayload | null>(null);

      useEffect(()=>{
        const jwtToken = JSON.stringify(Cookies.get('jwt_token'))
        if (jwtToken && jwtToken !== 'string'){
            const decoded = jwtDecode<CustomJwtPayload>(jwtToken);
            setRole(decoded)
        }else{
            setRole(null)
        }
      },[])
       
    return(
        <div className='m-nav'>
            <div>
                <img className='logo' src="https://cdn.dribbble.com/users/3615144/screenshots/7076764/media/b3efbee1a944c1b2dc127ecd6d653faa.png?resize=800x600&vertical=center" alt="logo"/>
            </div>
            <div className='nav-option'>
                <ul className="nav-menu">
                    <Link to="/" className="nav-link">
                        <li className="nav-menu-item">Home</li>
                    </Link>
                    <Link to="/products" className="nav-link">
                        <li className="nav-menu-item">Products</li>
                    </Link>
                    <Link to="/cart" className="nav-link">
                        <li className="nav-menu-item">Cart</li>
                    </Link>
                </ul>
                <div>
                    {role && (role.role === "masteradmin" || role.role === "admin" || role.role === "employee") ? (
                        <Link to={role.role}>
                        <button>Login</button>
                        </Link>
                    ):(
                        role && role.role === "user" ? (
                            <button onClick={onClickLogout}>Logout</button>
                        ) : (
                            <Link to="/login">
                        <button>Login</button>
                        </Link>
                        )
                    )}
                </div>
            </div>
        </div>
    )
}

export default NavBar