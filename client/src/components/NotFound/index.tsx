import {Link} from 'react-router-dom'
import './index.css'

const NotFound = () => {
  return(
      <div>
          <div className="not-found-container">
  <img
    src="https://assets.ccbp.in/frontend/react-js/not-found-blog-img.png"
    alt="not-found"
    className="not-found-img"
  />
  <p>Ooops!!! The page you are looking for is not found</p>
  <button className='back-to-home'><Link to="/" >BACK TO HOME</Link></button>
</div>
      </div>
  )
}

export default NotFound