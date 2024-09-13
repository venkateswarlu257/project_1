import { Link } from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => {
  return (
    <div className='Nav'>
      <img className="proyogaImg" src="proyogaLogo.jpg" alt="Pro Yoga Logo" />
     
       <div className="items">
            {/* <h5><Link className="item" to="/addproduct">Add Products</Link></h5> */}
            <Link to="/"><h5 className="item">Home</h5></Link> 
            <h5 className="item">Cart</h5>
            <div className="Circle">0</div>
            <Link to='/login'> Login</Link>
        </div>
    </div>
  );
};
