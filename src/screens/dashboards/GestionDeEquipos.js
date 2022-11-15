import React, { useState, useEffect } from "react";
import { HeaderDashboard } from "../../componentes/dashboards/HeaderDashboard";
import { NavegacionDashboard } from "../../componentes/dashboards/NavegacionDashboard";
import { Footer } from "../../componentes/Footer";
import { Col, Image, Row } from "react-bootstrap";
import { equiposIcon } from "../../assets/img";
import { useForm } from "../../hooks/useForm"
import { creationUser, getEnterpriseGroups, getUsersGroup, typeOfUsers } from "../../services/services";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

export const GestionDeEquipos = () => {

    const { token, roles, subcompanie_id } = useSelector(state => state.auth)
    const [groups, setGroups] = useState([]);
    const [users, setUsers] = useState([]);
    const [ids, setIds] = useState([]); 
    const subCompany = subcompanie_id.subcompanies_id;
    console.log(groups,'crupos')

    useEffect(() => {
        async function getEnterprisesGroup() {
            const data = await getEnterpriseGroups(token, subCompany);
            setGroups(data.groups._embedded.groups)
            console.log(data.groups)
            setIds()
        }

        async function getUserForGroups() {
            const data = await getUsersGroup(token, 64)
            setUsers(data.users)
            console.log(data.users);
        }

        getEnterprisesGroup();
        getUserForGroups()
    }, []);


    return (
        <div className="xlrn__crear-suarios__section" >
            <HeaderDashboard />
            <div className="xlrn__crear-usuarios__container" >
                <div className="xlrn__crear-usuarios__nav" >
                    <NavegacionDashboard />
                </div>
                <div className="xlrn__informacion-equipos-title" >
                    <h1>Gestion de Equipos</h1>
                    <p>Gestiona y administra tus cupos</p>
                </div>
                <div className="xln__content__progress_gestionDeCupos">
                    {groups &&
                        groups.map((item, index) =>
                        (
                            <div className="xlrn__informacion-equipos xlrn__informacion-equipos_interno">
                                <div className="xlrn__informacion-equipos-content" >
                                    <p className="xlrn__informacion-equipos-content_title">Equipo {item.id}</p>
                                    <h2>{item.name}</h2>
                                    <h5>Lider: {item.leader}</h5>
                                    <h5>Inicio: 05/03/2022</h5>
                                    <div className="xlrn__informacion-equipos-content-users" >
                                        <div className="xlrn" >
                                            <div className="xln__content__info_gestionDeCupos" >
                                                <div className="xln_info_gestionDeCupos" >
                                                    <p className="text-center" >
                                                        Usuario
                                                    </p>
                                                    <ul>
                                                        {users &&
                                                            users.map((item, index) => (
                                                                <li>{item.name}</li>
                                                            ))
                                                        }
                                                    </ul>
                                                </div>
                                                <div className="xln_info_gestionDeCupos" >
                                                    <p className="text-center" >
                                                        Progreso
                                                    </p>
                                                    <div className="progress__bar__style">
                                                        <input type="range" className="range" />
                                                    </div>
                                                    <div className="progress__bar__style">
                                                        <input type="range" className="range" />
                                                    </div>
                                                </div>
                                                <div className="xln_info_gestionDeCupos" >
                                                    <p className="text-center" >
                                                        Ultimo Ingreso
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                        )
                    }
                </div>
            </div>
            <Footer />
        </div>
    )
}