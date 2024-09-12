import React from 'react'
import "./index.css"

const Category = () => {
  return (
    <div className='category'>
      <div className='category-items'>
        <img src='shirts_9284419.png' alt='shirts'/>
        <h6>Cloths</h6>
      </div>

      <div className='category-items'>
        <img src='grocery.png' alt='grocery'/>
        <h6>Grocery</h6>
      </div>
      <div className='category-items'>
        <img src='storage-box.png' alt='toys'/>
        <h6>Toys</h6>
      </div>
      <div className='category-items'>
        <img src='apple_15641998.png' alt='mobile'/>
        <h6>Mobiles</h6>
      </div>
    </div>
  )
}

export default Category