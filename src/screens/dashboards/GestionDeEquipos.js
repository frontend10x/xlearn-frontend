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

    console.log(groups, 'grupos')

    useEffect(() => {
        async function getEnterprisesGroup() {
            const data = await getEnterpriseGroups(token, subcompanie_id);
            setGroups(data.groups._embedded.groups)
            console.log(data.groups)
            console.log(data, 'structura')
        }

        getEnterprisesGroup();
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
                                                                        <p className="text-center" >
                                                                            Progreso
                                                                        </p>
                                                    <ul>
                                                        {
                                                            item.users.map((items, index) => (
                                                                <div key={index} className="d-flex" >
                                                                    <h4>{items.name}</h4>
                                                                    <div className="xln_info_gestionDeCupos" >
                                                                        <div className="progress__bar__style">
                                                                            <input type="range" className="range" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            ))
                                                        }
                                                    </ul>
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