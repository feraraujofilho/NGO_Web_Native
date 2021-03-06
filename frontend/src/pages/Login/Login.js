import React, { useState } from 'react'
import {FiLogIn} from "react-icons/fi"
import "./logonStyles.css"

import heroesImg from "../../assets/heroes.png"
import logoImg from "../../assets/logo.svg"
import { Link, useHistory } from 'react-router-dom'

import api from "../../services/api"

function Login() {
    const [id, setId] = useState("")
    const history = useHistory()

    const handleLogin = async (e) => {
        e.preventDefault();

        try{
            const response = await api.post("sessions", {id})

            localStorage.setItem("ongId", id)
            localStorage.setItem("ongName", response.data.name)

            history.push("/profile")

        }catch(err){
            alert("Login failed, try again")
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="logo"/>

                <form onSubmit={handleLogin}>
                    <h1>Credentials</h1>
                    <input placeholder="Your ID"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    />
                    <button className="button" type="submit">Login</button>

                    <Link to="/register" className="back-link">
                        <FiLogIn size={16} color="#E02041"/>
                       Don't have an account yet
                    </Link>
                </form>

            </section>

            <img src={heroesImg} alt="heroes" />
        </div>
    )
}

export default Login
