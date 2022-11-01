import React, { useState ,useEffect } from "react";
import { HeaderDashboard } from "../../componentes/dashboards/HeaderDashboard";
import { NavegacionDashboard } from "../../componentes/dashboards/NavegacionDashboard";
import { Footer } from "../../componentes/Footer";
import { Image } from "react-bootstrap";
import { equiposIcon } from "../../assets/img";
import { useForm } from "../../hooks/useForm"
import { creationUser, typeOfUsers } from "../../services/services";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

export const CrearUsuarios = () => {
    
    const {token, roles,subcompanie_id} = useSelector(state => state.auth)
    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        phone: '',
        type_id: roles,
        rol_id:'',
        password:'',
        password_confirmation:''
    });


    const [users, setUsers] = useState();
    const [areaTelf, setAreaTelf] = useState([
        {label:"integrante", value:1}
    ]);

    const {name, email, phone, type_id, rol_id, password, password_confirmation} = formValues;


    useEffect(() => {
        async function typeUsers() {
            const data = await typeOfUsers(token)
            setUsers(data.types_users);
        }

        typeUsers()
    },[])

    const createUser = async () => {
        try {
            const data = await creationUser( token,name, email, phone, type_id, rol_id, password, password_confirmation, subcompanie_id);
            Swal.fire({
                icon: 'success',
                title: 'Usuario creado con exito',
                text: `${data.message}`,
                // footer: '<a href="">Why do I have this issue?</a>'
              })
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Algo Salio Mal',
                text: `${error.response.data.message}`,
                // footer: '<a href="">Why do I have this issue?</a>'
              })   
        }
    }

    return (
        <div className="xlrn__crear-suarios__section" >
            <HeaderDashboard />
            <div className="xlrn__crear-usuarios__container" >
                <div className="xlrn__crear-usuarios__nav" >
                    <NavegacionDashboard />
                </div>
                <div className="xlrn__crear-usuarios__content-titles" >
                    <h1>Gestion de cupos</h1>
                    <p>Gestiona y administra tus cupos</p>
                </div>
                <div className="xlrn__crear-usuarios__container-form" >
                    <div className="xlrn__crear-usuarios__container-form-content" >
                        <Image src={equiposIcon} />
                        <h1>Crear usuarios</h1>
                        <h3>Crea los usuarios, entrena tus equipos y desarrolla tu proyecto</h3>
                    </div>
                    <div className="xlrn__crear-usuarios__form" >
                        <div className="xlrn__crear-usuarios__form-content">
                            <input onChange={handleInputChange} name="name" placeholder="Nombre y Apellido" />
                            <input onChange={handleInputChange} name="email" placeholder="Correo (Usuario)" />
                            <div className="d-flex gap-2" >
                                <input onChange={handleInputChange} name="phone" placeholder="Telefono" className="input__phone" />
                                <select onChange={handleInputChange} name="rol_id" className="input__rol" >
                                    <option value="..." >selecciona</option>
                                    {areaTelf&&
                                        areaTelf.map((item, index) => (
                                            <option key={index} value={item.value} >{item.label}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div className="xlrn__crear-usuario__input-password">
                                <input placeholder="Contraseña" onChange={handleInputChange} type='text' name="password"/>
                                <input placeholder="Confirmar Contraseña" onChange={handleInputChange} type='text' name="password_confirmation" />
                            </div>
                            {/* O
                            <div className="xlrn__crear-usuarios__massive-charge" >
                                <input type='range' className="xlrn__crear-usuarios__massive-charge__input "/>
                            </div> */}
                        </div>

                        <button onClick={createUser} >Confirmar</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}