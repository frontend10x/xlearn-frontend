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
import { useNavigate } from "react-router-dom";

export const GestionDeEquipos = () => {

    const { token, roles, subcompanie_id } = useSelector(state => state.auth)
    const [groups, setGroups] = useState([]);
    const [users, setUsers] = useState([]);
    const [ids, setIds] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        async function getEnterprisesGroup() {
            const data = await getEnterpriseGroups(token, subcompanie_id);
            setGroups(data.groups._embedded.groups)
            console.log(data.groups)
            console.log(data, 'structura')
        }

        getEnterprisesGroup();
    }, []);

    const redirect = () => {
        navigate('/gestion/equipo');
    }

    return (
        <div className="xlrn__crear-suarios__section lxn__manejo__equipos" >
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
                            <div className="xlrn__informacion-equipos xlrn__informacion-equipos_interno" key={index} >
                                <div className="xlrn__informacion-equipos-content" >
                                    <p className="xlrn__informacion-equipos-content_title">Equipo {index + 1}</p>
                                    <h2>{item.name}</h2>
                                    <h5>Lider: {item.leader}</h5>
                                    <h5>Inicio: {item.created_at}</h5>
                                    <div className="xlrn__informacion-equipos-content-users" >
                                        <div className="xlrn" >
                                            <div className="xln__content__info_gestionDeCupos " >
                                                <div className="xln_info_gestionDeCupos" >
                                                    <div className="d-flex gap-5 " >
                                                        <p className="fw-bold me-5 w-25 " >
                                                            Usuarios
                                                        </p>
                                                        <p className=" w-25 ms-5 fw-bold  " >
                                                            Progreso
                                                        </p>
                                                        {/* <p className=" text-end w-25 fw-bold ">
                                                            Ultimo Ingreso
                                                        </p> */}
                                                    </div>
                                                    {
                                                        item.users.map((items, index) => (
                                                            <div key={index} className="d-flex" >
                                                                <h6 className="w-50" >{items.name}</h6>
                                                                <div className="xln_info_gestionDeCupos" >
                                                                    <div className="progress__bar__style ms-5 w-50 ">
                                                                        <input type="range" className="range" value={items['progress:porcentage']} />
                                                                    </div>
                                                                </div>
                                                                {/* <div className="me-5" >
                                                                    time
                                                                </div> */}
                                                            </div>
                                                        ))
                                                    }
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
            <div className="xln__creacion-nuevo-equipo" >
                <div className="xln__creacion-nuevo-equipo-content" >
                    <Image src={equiposIcon} className="ms-5" />
                    <h2>Nuevo equipo</h2>
                </div>
                <button onClick={redirect} >Crear equipo</button>
            </div>
            <Footer />
        </div>
    )
}