import React, { useState, useEffect } from "react";
import { HeaderDashboard } from "../../componentes/dashboards/HeaderDashboard";
import { NavegacionDashboard } from "../../componentes/dashboards/NavegacionDashboard";
import { Footer } from "../../componentes/Footer";
import { Image, NavLink } from "react-bootstrap";
import { cuposIcon, equiposIcon, imagenUser } from "../../assets/img";
import { useSelector } from "react-redux";
import { getRegisteredUsers } from "../../services/services";

export const UsoCupos = () => {


    const [users, setUsers] = useState();
    const { token } = useSelector(state => state.auth);

    useEffect(() => {
        const getAllUsers = async () => {
            const data = await getRegisteredUsers(token)
            setUsers(data.response._embedded.users);
        }

        getAllUsers();

    }, [])

    const addToGroup = (e) => {
        alert(e.target.value)
    }

    return (
        <div className="xlrn__uso-cupos__section" >
            <HeaderDashboard />
            <div className="xlrn__uso-cupos__section-container d-flex" >
                <div className="xlrn__uso-cupos__nav" >
                    {/* <NavegacionDashboard /> */}
                </div>
                <div className="xlrn__uso-cupos__container-titles" >
                    <div className="xlrn__uso-cupos__titles-content" >
                        <h1>Gestion de cupos</h1>
                        <p>Gestiona y administra tus cupos</p>
                    </div>
                </div>

                <div className="xlrn__uso-cupos__container-blocks" >
                    <div className="xlrn__uso-cupos-registered__container" >
                        <p>Usuarios</p>
                        <div className="xlrn__uso-cupos-registered" >
                            {users &&
                                users.map((item, index) => (
                                    <div key={index} className="xlrn__uso-cupos-registered__card" >
                                        {/* <img src={imagenUser} className="user__image" /> */}
                                            <input type='checkbox' value={item.id} onClick={addToGroup} />
                                        <div className="xlrn__uso-cupos-registered__card-content" >
                                            <h1>{item.name}</h1>
                                            <p>{item.email}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    )
}