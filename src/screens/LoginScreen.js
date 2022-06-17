import React, { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import { imagenlogin, logologin } from "../assets/img";
import { useForm } from "../hooks/useForm";
import { NavLink } from "react-router-dom";
import { baseURL } from "../utils/route";
import axios from "axios";

export const LoginScreen = () => {
    
    const [formValues, handleInputChange] = useForm({
        email:'',
        password:''
    });

    const { email, password } = formValues;

    const handleLogin = (e) => {
        e.preventDefault();
        axios.post(baseURL + '/api/v1/login' , {
            email,
            password
        })
        .then(res => console.log(res, 'con token'))
        .catch(err => console.log(err))
    };


    return (
        <div className="Login-Screen">
            <div className="login">
                <div className="login__container animate__animated animate__bounce animate__delay-2s">
                    <div>
                        <Image src={imagenlogin} alt="imagen-login" />
                    </div>
                    <div className="login__container-content">
                        <div className="login__content-header">
                            <div className="login__header-logo-title">

                            <Image
                                src={logologin}
                                className="login__logo"
                                alt="imagen-login"
                                />
                            <p>
                                Feugiat pretium nib ipsum consequa vida tru quisque non tellus
                                orci ac strud ctor tellus mauris.
                            </p>
                            </div>
                        </div>
                        <div className="login__content-inputs">
                            <p className="login__content-title" >Bienvenido a Xlearn</p>
                            <form className="login__content-form" onClick={handleLogin}>
                                <input
                                    type="text"
                                    name="email"
                                    placeholder="email"
                                    value={email}
                                    onChange={handleInputChange}
                                    className='login__email'
                                />
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="password"
                                    value={password}
                                    onChange={handleInputChange}
                                    className='login__password'
                                />

                                    <input type="checkbox" checked={false} className="login__input-reminder" />
                                <div className="d-flex login__content-remind ">
                                    <p>Recordarme</p>
                                    <button className="login__remind-button" > ¿Olvidaste Tu Contraseña?</button>
                                </div>

                                <button className="login__button-entrar" >Entrar</button>
                            </form>
                            <div className="d-flex login__register">
                                <p>¿Aun no estas Registrado?</p>
                                <NavLink to="/plans/register" className="login__register-button" >Crea una cuenta</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
