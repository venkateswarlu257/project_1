import {Link} from 'react-router-dom'
import './index.css'
const AdminSlideBar = () => {
    return(
        <div className='master-slidebar'>
            <ul>
                <Link to="/admin"><li>Home</li></Link>
                <Link to="/admin/createemployee"><li>Create an employee </li></Link>
                <Link to=""><li>Update an employee</li></Link>
                <Link to=""><li>Delete An employee</li></Link>
            </ul>
        </div>
    )
}

export default AdminSlideBar