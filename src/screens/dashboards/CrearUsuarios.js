import React, { useState ,useEffect } from "react";
import { HeaderDashboard } from "../../componentes/dashboards/HeaderDashboard";
import { NavegacionDashboard } from "../../componentes/dashboards/NavegacionDashboard";
import { Footer } from "../../componentes/Footer";
import { Image } from "react-bootstrap";
import { equiposIcon } from "../../assets/img";
import { useForm } from "../../hooks/useForm"
import { creationUser, getEnterpriseQuotas, typeOfUsers } from "../../services/services";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

export const CrearUsuarios = () => {
    
    const {token, roles,subcompanie_id} = useSelector(state => state.auth)
    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        email_confirmation:'',
        phone: '',
        type_id: roles,
        rol_id:'',
        area:"",
        password:'',
        password_confirmation:''
    });
    const [disabled, setDisabled] = useState(true);

    const [areaTelf, setAreaTelf] = useState([
        {label:"Gestión humana", value:1},
        {label:"Comercial", value:2},
        {label:"Mercadeo", value:3},
        {label:"Finanzas", value:4},
        {label:"Administración", value:5},
        {label:"TI", value:6},
        {label:"Compras", value:7},
        {label:"Legal", value:8},
        {label:"Producción", value:9},
        {label:"Innovación", value:10},
        {label:"Dirección", value:11},
        {label:"Diseño", value:12},
        {label:"Calidad", value:13},
        {label:"Transformación digital", value:14},
        {label:"Contabilidad", value:15},
        {label:"Logística", value:16},
        {label:"Otro", value:17},
    ]);


    const {name, email, email_confirmation,phone, type_id, rol_id, area ,password, password_confirmation} = formValues;


    useEffect(() => {
       async function validateQuotas() {
        try {
            const data = await getEnterpriseQuotas(token,subcompanie_id);
            if (data.quotas > 0) {
                setDisabled(false);
            }
        } catch (error) {
            console.error(error,'error')
        }
       }
       validateQuotas();
    },[token,subcompanie_id])

    const createUser = async () => {
        try {
            const data = await creationUser( token,name, email, email_confirmation,phone, type_id, rol_id, area , password, password_confirmation, subcompanie_id);
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
        console.log(formValues,'valores');
    }

    return (
        <div className="xlrn__crear-suarios__section" >
            <HeaderDashboard />
            <div className="xlrn__crear-usuarios__container" >

                {/* <div className="xlrn__crear-usuarios__nav" >
                    <NavegacionDashboard />
                </div> */}
                <div className="xln-content-dash">
                    <div className="xln__content__nav">
                        <NavegacionDashboard />
                    </div>
        
                    <div className="xln-contentSection-block-empresa">
                        <div className="xlrn__crear-usuarios__content-titles" >
                            <h1>Gestion de cupos</h1>
                            <p>Gestiona y administra tus cupos</p>
                        </div>

                        <div className="xlrn__crear-usuarios__container-form" >
                            <div className="xlrn__crear-usuarios__container-form-content" >
                                <Image src={equiposIcon} />
                                <h1>Crear usuarios</h1>
                                <p>Crea los usuarios, entrena tus equipos y desarrolla tu proyecto</p>
                            </div>
                            <div className="xlrn__crear-usuarios__form" >
                                <div className="xlrn__crear-usuarios__form-content">
                                    <input onChange={handleInputChange} name="name" placeholder="Nombre y Apellido" />
                                    <input onChange={handleInputChange} name="email" placeholder="Correo (Usuario)" />
                                    <input onChange={handleInputChange} name="email_confirmation" placeholder="Confirmar correo" />
                                    <div className="d-flex gap-2" >
                                        <input onChange={handleInputChange} name="phone" placeholder="Telefono" className="input__phone" />
                                        <select onChange={handleInputChange} name="area" className="input__rol" >
                                            <option value="..." >Seleccionar área</option>
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

                                <button onClick={createUser} disabled={disabled} style={disabled ? {backgroundColor:'#31fb8550'} : {backgroundColor:'#31fb84'}} >Confirmar</button>
                            </div>
                        </div>
                    </div>
                    

                </div>

            </div>
            <div className="xln-contentSection-block-empresa">
                <Footer />
            </div>
        </div>
    )
}