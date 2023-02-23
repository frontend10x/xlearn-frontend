import React from 'react'
import { logologin } from '../../assets/img'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { Image } from 'react-bootstrap'
import { useForm } from '../../hooks/useForm'
import { recoveryPassword } from '../../services/services'
import Swal from 'sweetalert2'

import '../../assets/css/screens/public/StyleForgotPassword.css';

export const RecuperarPassword = () => {

    const [formValues,handleInputChange] = useForm({
        password:"",
        password2:""
    })

    const {password,password2} = formValues;
    const {id} = useParams();

    const navigate = useNavigate();

    const forgotPassword = async (e) => {
        e.preventDefault()
        try {
            const data = await recoveryPassword(id,password,password2);
            Swal.fire({
                icon: 'success',
                title: 'Felicidades',
                text: `${data.message}`,
                // footer: '<a href="">Why do I have this issue?</a>'
              })

              navigate('/login');
        } catch (error) {
            console.error(error,'message')            
        }
        
    }

    return (


        <div className="Login-Screen_forgotPassword">
            <div className='recuperar-contrasena'>
                <div className='row' style={{ width: "100%" }}>
                    <div className='col-md-7 mx-auto'>
                        <div className="login__container-content">

                            <div className="login__content-header">
                                <div className="login__header-logo-title">
                                    <NavLink to='/'>
                                        <Image
                                            src={logologin}
                                            className="login__logo"
                                            alt="imagen-login"
                                        />
                                    </NavLink>

                                    <p>
                                    Ingresa tu nueva contraseña
                                </p>

                                </div>
                            </div>

                            <div className="login__content-inputs  ">
                                <div className='row'>
                                    <div className='col-md-8 mx-auto'>
                                        <form
                                            className="login__content-form "
                                            onSubmit={forgotPassword}
                                        >
                                            <input
                                                type="password"
                                                name="password"
                                                value={password}
                                                placeholder="Contraseña"
                                                onChange={handleInputChange}
                                                className="login__email"
                                            />
                                            <input
                                                type="password"
                                                name="password2"
                                                value={password2}
                                                placeholder="Confirmar contraseña"
                                                onChange={handleInputChange}
                                                className="login__email"
                                            />

                                            <button
                                                className="login__button-entrar"
                                            >
                                                Enviar
                                            </button>
                                        </form>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
