import React, { useState, useEffect }  from 'react'
import "./profileStyles.css"
import logoImg from "../../assets/logo.svg"
import { Link, useHistory } from 'react-router-dom'
import { FiPower, FiTrash2 } from 'react-icons/fi'

import api from "../../services/api"


function Profile() {
    const [incidents, setIncidents] = useState([])

    const history = useHistory()

    const ongId = localStorage.getItem("ongId")
    const ongName = localStorage.getItem("ongName")

    const getIncidents = () => api.get("/profile", {
        headers: {
            Authorization: ongId
        }
    }).then(res => {
        setIncidents(res.data)
    })

    useEffect(() => {
        getIncidents()
    })

    const handleDeleteInstance = async (id) => {
        try {
            await api.delete(`incidents/${id}` , {
                headers: {
                    Authorization: ongId
                }
            })
            getIncidents()
        } catch(err) {
            alert("Error, try it again")
        }
    }

    const handleLogout = () => {
        localStorage.clear()

        history.push("/")
    }

    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be the Hero"/>
                <span>Welcome, {ongName}</span>

                <Link className="button" to="/incidents/new">Register new incident</Link>
                <button onClick={handleLogout} type="button">
                    <FiPower size={18} color="#e02041" />
                </button>
            </header>
            <h1>Registered Incidents</h1>
            <ul>
                {incidents.map(incident => {
                    const {title, description, value, id} = incident

                    return (
                    <li key={id}>
                    <strong>Incident:</strong>
                    <p>{title}</p>
                    <strong>Description</strong>
                    <p>{description}</p>
                    <strong>Value</strong>
                    <p>{Intl.NumberFormat("en-US",{style: "currency", currency: "USD"}).format(value)}</p>
                    <button onClick={() => handleDeleteInstance(id)} type="button">
                        <FiTrash2 size={20} color="#a8b8b3" />
                    </button>
                    </li>
                    )
                })}
                
            </ul>
        </div>
    )
}

export default Profile
