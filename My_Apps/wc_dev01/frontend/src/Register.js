import React from 'react'
import { useState, useEffect } from 'react'
import Axios from "axios"

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
    })

    const { name, email, password, password2 } = formData

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
        Axios.defaults.baseURL = 'http://localhost:3000';
        Axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
        Axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
        Axios.post("http://localhost:8888/api/users", {
            name: formData.name,
            email: formData.email,
            password: formData.password,
            password2: formData.password2,
        })
    }

  return (
    <section className="main">
        <div className="container grid_login_register">
            <div className="register-form card">
                <h2>Register</h2>
                <p>please create an account</p>
                <form onSubmit={onSubmit}>
                    <div className="form-control">
                        <input type="text" className="form-control" id="name" name="name" value={name} placeholder="Enter your name" onChange={onChange}/>
                    </div>
                    <div className="form-control">
                        <input type="email" className="form-control" id="email" name="email" value={email} placeholder="Enter your email" onChange={onChange}/>
                    </div>
                    <div className="form-control">
                        <input type="password" className="form-control" id="password" name="password" value={password} placeholder="Enter your password" onChange={onChange}/>
                    </div>
                    <div className="form-control">
                        <input type="password2" className="form-control" id="password2" name="password2" value={password2} placeholder="Confirm your password" onChange={onChange}/>
                    </div>
                    <input type="submit" value="Submit" className="btn btn-primary"/>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Register