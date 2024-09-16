import React from 'react'
import { Link } from 'react-router-dom'
import './MASideBar.css'

function MASideBar() {
  return (
    <div className='MASB'>
        <ul>
        <Link to='/MAHomeView'><li>Home</li></Link>
        <Link to='/MARegisterView'><li>Create Admin or Employee</li></Link>
        </ul>
    </div>
  )
}

export default MASideBar