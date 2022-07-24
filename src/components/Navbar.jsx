import React from 'react'
import { Link } from 'react-router-dom'
import NavStyle from "./Navbar.module.css"


const Navbar = () => {
  return (
    <>
      <div className={NavStyle.navbar}>
        <div>
          <Link className={NavStyle.logo} to="/">
            <div>SkinStore</div>
            <div>part of the LOOKFANTASTIC group</div>
          </Link>
        </div>
        <input className={NavStyle.search} type ="text" placeholder="Search for a product or brand"></input>
        <div className={NavStyle.profile}>
          <div className={NavStyle.account}><Link to="/Login">Account</Link></div>
          <Link className={NavStyle.cart} to="/cart">Cart</Link>
        </div>
        
      </div>
      <div className={NavStyle.menubar}>
        <div><p>Brands</p></div>
        <div><p>Summer Shop</p></div>
        <div><p>Sale</p></div>
        <div><p>Build a Routine</p></div>
        <div><p>Skin Care</p></div>
        <div><p>Hair</p></div>
        <div><p>Makeup</p></div>
        <div><p>Tools</p></div>
        <div><p>Bath & Body</p></div>
        <div><p>Self-Care</p></div>
        <div><p>Fragrance</p></div>
        <div><p>News & Trending</p></div>
        <div><p>Advice</p></div>
      </div>
    </>
  )
}

export default Navbar