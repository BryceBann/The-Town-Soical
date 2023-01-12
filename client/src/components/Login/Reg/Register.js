import React, { useState } from 'react'
// import "./Login.css"


export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div>
             <h1
        className='logo'
        >The Townie</h1>
        <div className='auth-form-container'>
            <h2>Register</h2>
        <form className='register-form' onSubmit={handleSubmit}>
            <label htmlFor='name'>Full Name</label>
            <input value={name} name='name' id='name' placeholder='Full Name' />
            <label htmlFor='email'>Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='test123@email.com' id='email' name='email' />
            <label htmlFor='password'>Password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type='password' placeholder='Password' id='password' name='password' />
            <button className='login-btn' type='submit'>Register</button>
        </form>
        <button className='link-btn' onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
        </div>
        </div>
    )
}