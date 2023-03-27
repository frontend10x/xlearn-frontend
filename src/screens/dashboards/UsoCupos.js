import React, { useState, useEffect } from "react";
import { HeaderDashboard } from "../../componentes/dashboards/HeaderDashboard";
import { NavegacionDashboard } from "../../componentes/dashboards/NavegacionDashboard";
import { Footer } from "../../componentes/Footer";
import { Image, NavLink } from "react-bootstrap";
import { cuposIcon, equiposIcon, imagenUser, trashIcon } from "../../assets/img";
import { useSelector } from "react-redux";
import { desactivateUser, getRegisteredUsers, getUserByEnterprise } from "../../services/services";
import { useNavigate } from "react-router-dom";
import '../../assets/css/screens/dashboards/StyleUsoCupos.css';

export const UsoCupos = () => {
    const [users, setUsers] = useState();
    const { token, subcompanie_id } = useSelector(state => state.auth);
    const { event } = useSelector(state => state.size);
    const navigate = useNavigate();
    useEffect(() => {
        const getAllUsers = async () => {
            try {
                const data = await getUserByEnterprise(token, subcompanie_id)
                setUsers(data.response._embedded.users);
            } catch (error) {
                console.error(error, 'error')
            }
        }

        getAllUsers();
    }, [])

    const desactivate = async (e) => {
        // const id = e.target.id;
        // console.log(id, 'id del button');
        // try {
        //     const data = await desactivateUser(token,id);
        //     console.log(data);

        // } catch (error) {

        // }
        navigate(`/contact`)
    }

    const adjustClass = event ? "xln_add_menuLateral" : "col-md-10 xln-contentSection-block-empresa";


    return (
        <div className="xlrn__uso-cupos__section" >
            <div className="dashboard__container">
                <HeaderDashboard />

                <div className="container xln-content-dash" >

                    <div className="row">

                        <div className="col-md-2 xln-container-navDashboard" style={{ padding: "0"}}>
                            <NavegacionDashboard />
                        </div>

                        <div className={adjustClass} >
                        {/* <div className="col-md-10 xln-contentSection-block-empresa" > */}
                            <div className="row dashboard__container-nav_banner">
                                <div className="col-md-12 xlrn__uso-cupos__container-titles" >
                                    <div className="xlrn__uso-cupos__titles-content" >
                                        <h1>Gestion de usuarios</h1>
                                        <p className="fw-bold" >Gestiona y administra usuarios</p>
                                    </div>
                                </div>

                                <div className="col-md-12 xlrn__uso-cupos-registered__container" >
                                    <div className="d-flex justify-content-between" >
                                        <h3 className="ms-2 p-3 fw-bold " >Usuarios</h3>
                                        <div className="d-flex" >
                                            <h3 className="ms-2 p-3 fw-bold " >Eliminar</h3>
                                            <h3 className="ms-2 p-3 fw-bold " >Equipo</h3>
                                        </div>
                                    </div>
                                    <div className="xlrn__uso-cupos-registered" >
                                        {users &&
                                            users.map((item, index) => (
                                                <div key={index} className="xlrn__uso-cupos-registered__card" >
                                                    {console.log(item)}
                                                    {/* <img src={imagenUser} className="user__image" /> */}
                                                    <img src={imagenUser} />
                                                    <div className="w-100 d-flex justify-content-between" >
                                                        <div className="xlrn__uso-cupos-registered__card-content" >
                                                            <h1>{item.name}</h1>
                                                            <p>{item.email}</p>
                                                        </div>
                                                        <div className="my-auto d-flex gap-5 me-3" >
                                                                <Image className="me-5 my-auto image_trash" onClick={desactivate} src={trashIcon} />
                                                            <h3>{item.group_id}</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                    {/* <div className="xln__creacion-nuevo-equipo" >
                                        <div className="xln__creacion-nuevo-equipo-content" >
                                            <Image src={equiposIcon} className="ms-5" />
                                            <h2>Nuevo equipo</h2>
                                        </div>
                                        <button onClick={redirect} >Crear equipo</button>
                                    </div> */}
                                </div>

                                <div className="col-md-12" style={{padding:"0"}}>
                                    <Footer />
                                </div>

                            </div>
                        </div>
                    </div>

                </div>

            </div>
         
        </div>
    )
}