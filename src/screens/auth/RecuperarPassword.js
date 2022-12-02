import React from 'react'
import { logologin } from '../../assets/img'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { Image } from 'react-bootstrap'
import { useForm } from '../../hooks/useForm'
import { recoveryPassword } from '../../services/services'
import Swal from 'sweetalert2'

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
            const data = await recoveryPassword(id,password);
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
        <div className="Login-Screen">
            <div className="login">
                <div className="login__container animate__animated animate__bounce animate__delay-2s w-50 ">
                    {/* <div className="xln-contentImage-login">
          <Image src={imagenlogin} alt="imagen-login" />
        </div> */}
                    <div className="login__container-content">
                        <div className="login__content-header">
                            <div className="login__header-logo-title">
                                <NavLink to='/login'>
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
                            {/* <p className="login__content-title">Bienvenido a Xlearn</p> */}
                            <form
                                className="login__content-form "
                                onSubmit={forgotPassword}
                            >
                                <input
                                    type="password"
                                    name="password"
                                    value={password}
                                    placeholder="password"
                                    onChange={handleInputChange}
                                    className="login__email w-50 mx-auto"
                                />
                                <input
                                    type="password"
                                    name="password"
                                    value={password2}
                                    placeholder="confirmar password"
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
