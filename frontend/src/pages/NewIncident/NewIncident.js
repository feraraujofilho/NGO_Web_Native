import React from 'react'

import "./newIncidentStyles.css"
import { FiArrowLeft } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom'
import logoImg from "../../assets/logo.svg"
import { useState } from 'react'
import api from '../../services/api'

function NewIncident() {

    const [formData, setFormData] = useState({})
    const ongId = localStorage.getItem("ongId")

    const history = useHistory()

    const {title, description, value} = formData

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })

    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            await api.post("incidents", formData, {
                headers: {
                    Authorization: ongId
                }
            })
            history.push("/profile")
        }catch(err){
            alert("Error, try it againd")
        }
    }

    return (
        <div className="new-incident-container">
        <div className="content">
            <section>
            <img src={logoImg} alt="Be the Hero"/>

            <h1>Register new incident</h1>
            <p>Describe the new incident to find a hero to solve that</p>

            <Link to="/profile" className="back-link">
                <FiArrowLeft size={16} color="#E02041"/>
                    Go back to home
                </Link>
            </section>

            <form onSubmit={handleSubmit}>
            <input 
                placeholder="Incident Title"
                value={title}
                name="title"
                onChange={handleChange}
                />
            <textarea 
                placeholder="Description"
                value={description}
                name="description"
                onChange={handleChange}
                />
                <input 
                    placeholder="Value in $"
                    value={value}
                    name="value"
                    onChange={handleChange}
                    />

            <button className="button" type="submit">Register Incident</button>
            </form>
        </div>
    </div>
    )
}

export default NewIncident
