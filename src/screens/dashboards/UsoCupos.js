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
                    <NavegacionDashboard />
                </div>
                <div className="xlrn__uso-cupos__container-titles" >
                    <div className="xlrn__uso-cupos__titles-content" >
                        <h1>Gestion de cupos</h1>
                        <p>Gestiona y administra tus cupos</p>
                    </div>
                </div>

                <div className="xlrn__uso-cupos__container-blocks" >
                    <div className="d-flex gap-5">

                        <div className="xlrn__uso-cupos__block" >
                            <div className="xlrn__uso-cupos__block-function" >
                                <Image src={cuposIcon} />
                                <NavLink href="/creacion/usuarios" className="xlrn__uso-cupos__block-button" >Ingresar</NavLink>
                            </div>
                            <div className="xlrn__uso-cupos__content-users" >
                                <h3>Cupos disponibles</h3>
                                <p>Ingresa tus usuarios</p>
                            </div>

                        </div>

                        <div className="xlrn__uso-cupos__block" >
                            <div className="xlrn__uso-cupos__block-function" >
                                <Image src={equiposIcon} />
                                <NavLink href="/gestion/equipo" className="xlrn__uso-cupos__block-button" >Ingresar</NavLink>
                            </div>
                            <div className="xlrn__uso-cupos__content-users" >
                                <h3>en uso</h3>
                                <p>cupos sin usuarios asignados</p>
                            </div>
                        </div>
                    </div>

                    <div className="xlrn__uso-cupos-registered__container" >
                        <div className="xlrn__uso-cupos-registered" >
                            {users &&
                                users.map((item, index) => (
                                    <div key={index} className="xlrn__uso-cupos-registered__card" >
                                        <Image src={imagenUser} className="user__image" />
                                        <div className="xlrn__uso-cupos-registered__card-content" >
                                            <h1>{item.name}</h1>
                                            <p>{item.email}</p>
                                            <input type='checkbox' value={item.id} onClick={addToGroup} />
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