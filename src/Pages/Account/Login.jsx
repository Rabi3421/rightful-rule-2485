import React from 'react';
import { Link } from 'react-router-dom';
import login from "./Login.module.css";

const Login=()=>{
  return (
    <div className={login.container}>
      <div className={login.header}>
        <Link className={login.logo} to="/">
          <div>SkinStore</div>
          <div>part of the LOOKFANTASTIC group</div>
        </Link>
      </div>
      <div className={login.credentials}>
        <div className={login.left}>
          <h3>Existing Customers</h3>
          <h2>*Email address</h2>
          <input type="mail"/>
          <h2>*Password</h2>
          <input type="password"/>
          <div className={login.anchor}>
            <a href="SignUp.jsx">FORGOTTEN YOUR PASSWORD?</a>
          </div>
          
          <button>SIGN IN</button>
          <p>Or, Continue with</p>
          <div>
            <button>FACEBOOK</button>
            <button>Google</button>
          </div>
        </div>
        <div className={login.right}>
          <h3>New Customers</h3>
          <button>CONTINUE</button>
        </div>
      </div>
    </div>
  )
}

export default Login