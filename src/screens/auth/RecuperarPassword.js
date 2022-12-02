import React from 'react'
import { logologin } from '../../assets/img'
import { NavLink } from 'react-router-dom'
import { Image } from 'react-bootstrap'
import { useForm } from '../../hooks/useForm'

export const RecuperarPassword = () => {

    const [formValues,handleInputChange] = useForm({
        email:""
    })

    const {email} = formValues;

    const forgotPassword = () => {

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
                                    name="password"
                                    value={email}
                                    placeholder="Email"
                                    onChange={handleInputChange}
                                    className="login__email w-50 mx-auto"
                                />
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
