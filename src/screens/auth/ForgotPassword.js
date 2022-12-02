import React, { useEffect } from 'react'
import { handlePassword } from '../../services/services'
import { useForm } from '../../hooks/useForm';
import { Image } from 'react-bootstrap';
import { imagenlogin, logologin } from '../../assets/img';
import { NavLink, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

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
            console.error(error, 'error de peticion');
        }
    }

    return (
        <div className="Login-Screen">
            <div className="login">
                <div className="login__container animate__animated animate__bounce animate__delay-2s w-50 ">
                    {/* <div className="xln-contentImage-login">
              <Image src={imagenlogin} alt="imagen-login" />
            </div> */}
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
                                    Ingresa tu email para recuperar tu contraseña
                                </p>
                            </div>
                        </div>
                        <div className="login__content-inputs  ">
                            {/* <p className="login__content-title">Bienvenido a Xlearn</p> */}
                            <form
                                className="login__content-form "
                                onSubmit={forgotPassword}
                            >
                                <input
                                    type="text"
                                    name="email"
                                    value={email}
                                    placeholder="Email"
                                    onChange={handleInputChange}
                                    className="login__email w-50 mx-auto"
                                />

                                <button
                                    className="login__button-entrar w-50 mx-auto"
                                >
                                    Enviar
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
