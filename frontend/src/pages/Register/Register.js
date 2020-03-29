import React from 'react'

import logoImg from "../../assets/logo.svg"
import "./registerStyles.css"
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import { useState } from 'react'

import api from "../../services/api"



function Register() {

    const [formData, setFormData] = useState({});
    const {name, email, whatsapp, city, uf} = formData

    const history = useHistory()

    const handleRegister = async (e) => {
        e.preventDefault()

        try {
            const response = await api.post("ongs", formData)

            alert(`Your access ID: ${response.data.id}`)
            history.push("/profile")
        }
        catch {
            alert("Error, try it again!")
        }

       
    }

    console.log(formData);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })

    }
    
    


    return (
        <div className="register-container">
            <div className="content">
                <section>
                <img src={logoImg} alt="Be the Hero"/>

                <h1>Sign up</h1>
                <p>Sign up and help people to find and contribute for incidents about your NGOs</p>
                <Link to="/" className="back-link">
                    <FiArrowLeft size={16} color="#E02041"/>
                       Already have an account
                    </Link>
                </section>

                <form onSubmit={handleRegister}>
                <input name="name"
                    value={name} 
                    onChange={handleChange}  placeholder="NGO name"/>
                <input 
                    name="email"
                    value={email} 
                    onChange={handleChange} 
                    type="email" 
                    placeholder="E-mail"/>
                <input 
                name="whatsapp"
                    value={whatsapp} 
                    onChange={handleChange} 
                    placeholder="WhatsApp" />
                <div className="input-group">
                    <input 
                    name="city"
                        value={city} 
                        onChange={handleChange} 
                        placeholder="City"/>
                    <input 
                    name="uf"
                        value={uf} 
                        onChange={handleChange} 
                        placeholder="UF" 
                        style={{width: 80}}/>
                </div>

                <button className="button" type="submit">Sign Up</button>
                </form>
            </div>
        </div>
    )
}

export default Register
