import React, { useEffect } from 'react'
import { handlePassword } from '../../services/services'
import { useForm } from '../../hooks/useForm';
import { Image } from 'react-bootstrap';
import { imagenlogin, logologin } from '../../assets/img';
import { NavLink, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

import '../../assets/css/screens/public/StyleForgotPassword.css';

export const ForgotPassword = () => {

    const [formValues, handleInputChange] = useForm({
        email: "",
    });
    const navigate = useNavigate();
    const { email } = formValues;

    const forgotPassword = async (e) => {
        e.preventDefault();
        try {
            const data = await handlePassword(email);

            Swal.fire({
                icon: 'success',
                title: 'Revisa tu correo',
                text: `${data.message}`,
            })
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Algo salio mal',
                text: `${error.response.data.message}`,
            })
            console.error(error, 'error de peticion');
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

                                </div>
                            </div>

                            <div className="login__content-inputs  ">
                                <div className='row'>
                                    <div className='col-md-10 mx-auto'>
                                        <form
                                            className="login__content-form "
                                            onSubmit={forgotPassword}
                                        >
                                            <h2 className='title_contrasena_olvido'>¿Olvidaste tu contraseña?</h2>
                                            <p className='xln__text_Forgot_description'>
                                                Ingresa tu email para recuperar tu contraseña
                                            </p>
                                            <br />
                                            <input
                                                type="text"
                                                name="email"
                                                value={email}
                                                placeholder="Email"
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
