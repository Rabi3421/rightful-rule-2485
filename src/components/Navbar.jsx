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
        <div className={NavStyle.account}>Account</div>
        <Link className={NavStyle.cart} to="/cart">Cart</Link>
      </div>
      <div className={NavStyle.menubar}>
        <p>Brands</p>
        <p>Summer Shop</p>
        <p>Sale</p>
        <p>Build a Routine</p>
        <p>Skin Care</p>
        <p>Hair</p>
        <p>Makeup</p>
        <p>Tools</p>
        <p>Bath & Body</p>
        <p>Self-Care</p>
        <p>Fragrance</p>
        <p>News & Trending</p>
        <p>Advice</p>
      </div>
    </>
  )
}

export default Navbar