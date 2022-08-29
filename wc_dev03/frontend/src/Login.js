import React from 'react'
import { useState, useEffect } from 'react'

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const { email, password } = formData

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
    }

  return (
    <section className="main">
        <div className="container grid_login_register">
            <div className="login-form card">
                <h2>Login</h2>
                <p>Login with your accout</p>
                <form onSubmit={onSubmit}>
                    <div className="form-control">
                        <input type="email" className="form-control" id="email" name="email" value={email} placeholder="Enter your email" onChange={onChange}/>
                    </div>
                    <div className="form-control">
                        <input type="password" className="form-control" id="password" name="password" value={password} placeholder="Enter your password" onChange={onChange}/>
                    </div>
                    <input type="submit" value="Submit" className="btn btn-primary"/>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Login