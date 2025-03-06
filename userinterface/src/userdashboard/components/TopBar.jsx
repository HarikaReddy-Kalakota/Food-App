import React from 'react'
import { Link } from 'react-router-dom'

const TopBar = () => {
  return (
   <section className="topBarSection">
        <div className="companyTitle">
            <Link to='/' className='link'>
            <h2>FOOD FIESTA</h2>
            </Link>
        </div>
        <div className="userAuth">
            Login / SignUp
        </div>
   </section>
  )
}

export default TopBar