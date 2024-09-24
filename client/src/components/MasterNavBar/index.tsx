import Cookies from 'js-cookie'
import {useNavigate} from 'react-router-dom'
import './index.css'

const MasterNavBar = () => {
    const navigate = useNavigate()
    const onClickLogout = () => {
        Cookies.remove('jwt_token')
        navigate('/login')
      }
    return(
        <div className='m-nav'>
            <div>
                <img className='logo' src="https://cdn.dribbble.com/users/3615144/screenshots/7076764/media/b3efbee1a944c1b2dc127ecd6d653faa.png?resize=800x600&vertical=center" alt="logo"/>
            </div>
            <div className='nav-option'>
                <div>
                    <button onClick={onClickLogout}>Logout</button>
                </div>
            </div>
        </div>
    )
}

export default MasterNavBar