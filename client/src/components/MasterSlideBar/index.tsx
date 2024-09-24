import {Link} from 'react-router-dom'
import './index.css'
const MasterSlideBar = () => {
    return(
        <div className='master-slidebar'>
            <ul>
                <Link to="/masteradmin"><li>Home</li></Link>
                <Link to="/masteradmin/createadmin"><li>Create an Admin </li></Link>
                <Link to=""><li>Update an Admin</li></Link>
                <Link to=""><li>Delete An admin</li></Link>
            </ul>
        </div>
    )
}

export default MasterSlideBar