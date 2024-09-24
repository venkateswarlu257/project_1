import {Link} from 'react-router-dom'
import './index.css'
const EmployeeSlideBar = () => {
    return(
        <div className='master-slidebar'>
            <ul>
                <Link to="/employee"><li>Home</li></Link>
                <Link to="/employee/addproduct"><li>Add product </li></Link>
                <Link to=""><li>Update an product</li></Link>
                <Link to=""><li>Delete An product</li></Link>
            </ul>
        </div>
    )
}

export default EmployeeSlideBar