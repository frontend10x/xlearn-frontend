import React, { useEffect } from "react";
import { Image } from "react-bootstrap";
import { imagenlogin, logologin } from "../../assets/img";
import { useForm } from "../../hooks/useForm";
import { NavLink } from "react-router-dom";
import { loginPost } from "../../services/services";
import { login } from "../../actions/loginactions";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


export const LoginScreen = () => {

  const { type, diagnostic } = useSelector(state => state.auth);
  const [formValues, handleInputChange] = useForm({
    email: "",
    password: "",
  });
  const { email, password } = formValues;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  
  useEffect(()=>{
    if (type === "Empresa") {
      navigate('/dashboard/empresa');
    } 
    // else if (type === "Lider" && diagnostic === true ) {
    //   navigate('/dashboard/lider');
    // }
    else if (type === "Lider") {
      navigate('/inicia/diagnostico');
    }else if (type === "Integrante") {
      navigate('/dashboard/integrante');
    }
  },[navigate, type, diagnostic])

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await loginPost(email, password);
      Swal.fire({
        icon: 'success',
        title: 'Bienvenido',
        text: `${data.message}`,
        // footer: '<a href="">Why do I have this issue?</a>'
      })


      localStorage.setItem('user_is_login', JSON.stringify({
        login: true, 
        user_name: data?.datosUsuario?.name
      }))
      
      dispatch(login(
        email, 
        password, 
        data?.token, 
        data?.datosUsuario?.name, 
        data?.datosUsuario?.roles.id, 
        data?.datosUsuario?.id, 
        data?.datosUsuario?.subcompanies_id, 
        data?.datosUsuario?.groups['0']?.group_id, 
        data?.datosUsuario?.roles?.name,
        data?.datosUsuario?.diagnostic.status));
      
    } catch (error) {
          Swal.fire({
            icon: 'error',
            title: 'Revisa que los datos sean correctos',
            text: `${error?.response?.data?.message}`,
            // footer: '<a href="">Why do I have this issue?</a>'
          })
    }
  };

  const redirect = () => {
    navigate('/recuperacion/contrasena')
  }


  return (
    <div className="Login-Screen">
      <div className="login">
        <div className="login__container animate__animated animate__bounce animate__delay-2s">
          <div className="xln-contentImage-login">
            <Image src={imagenlogin} alt="imagen-login" />
          </div>
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
                  Súmate a la experiencia Xlearn y desarrolla tu proyecto empresarial
                </p>
              </div>
            </div>
            <div className="login__content-inputs">
              {/* <p className="login__content-title">Bienvenido a Xlearn</p> */}
              <form
                className="login__content-form"
                onSubmit={handleLogin}
              >
                <input
                  type="text"
                  name="email"
                  value={email}
                  placeholder="Email"
                  onChange={handleInputChange}
                  className="login__email"
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Contraseña"
                  value={password}
                  onChange={handleInputChange}
                  className="login__password"
                />


                <div className="d-flex login__content-remind ">
                  <input type="checkbox" className="login__input-reminder" />
                  <p className="xln-textRecordarme-aling">Recordarme</p>
                  <button className="login__remind-button" onClick={redirect} >
                    {" "}
                    ¿Olvidaste Tu Contraseña?
                  </button>
                </div>

                <button
                  className="login__button-entrar"
                >
                  Entrar
                </button>
              </form>
              <div className="d-flex login__register">
                <p className="xln_loginText_bottom">¿Aún no estás registrado? </p>
                <NavLink
                  to="/plans/register"
                  className="login__register-button"
                >
                  Crea una cuenta
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
