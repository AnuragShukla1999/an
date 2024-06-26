// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link } from "react-router-dom";


const SignIn = () => {

    return (
        <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', maxWidth: '400px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', backgroundColor: '#f9f9f9', marginTop: '50px' }} >
            <div style={{ width: '100%', marginBottom: '15px' }}>
                <label htmlFor="email" style={{ display: 'block', marginBottom: '5px', color: '#333', fontWeight: 'bold' }}>Email</label>
                <input
                    type="email"
                    name="email"
                    placeholder="enter email"
                    style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', boxSizing: 'border-box' }}
                />
            </div>

            <div style={{ width: '100%', marginBottom: '15px' }}>
                <label htmlFor="password" style={{ display: 'block', marginBottom: '5px', color: '#333', fontWeight: 'bold' }}>Password</label>
                <input
                    type="password"
                    name="password"
                    placeholder="enter password"
                    style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', boxSizing: 'border-box' }}
                />
            </div>

            <button type="submit" style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                Sign In
            </button>

            <Link to="/">
                SignUp
            </Link>
        </form>
    );
}

export default SignIn;