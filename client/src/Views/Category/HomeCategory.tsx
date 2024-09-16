import React from 'react'
import './HomeCategory.css'
import { Link } from 'react-router-dom'

function HomeCategory() {
  return (
    <div className='category'>
    <div className='category-items'>
       <Link to='#'>
       <img src='shirts_9284419.png' alt='shirts'/>
       </Link>
      <h6>Cloths</h6>
    </div>

    <div className='category-items'>
       <Link to='#'>
       <img src='grocery.png' alt='grocery'/>
       </Link>
       <h6>Grocery</h6>
    </div>
    <div className='category-items'>
       <Link to='#'>
       <img src='storage-box.png' alt='toys'/>
       </Link>
       <h6>Toys</h6>
    </div>
    <div className='category-items'>
       <Link to='#'>
       <img src='apple_15641998.png' alt='mobile'/>
       </Link>
       <h6>Mobiles</h6>
    </div>
  </div>
  )
}

export default HomeCategory