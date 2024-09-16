import React from 'react'
import { NavBar } from '../../NavBar/Index'
import HomeCategory from '../Category/HomeCategory'
import HomePageProducts from '../HomePageProducts/HomePageProducts'

function HomeView() {
  return (
    <div>
      <HomeCategory/>
      <HomePageProducts/>
    
    </div>
  )
}

export default HomeView