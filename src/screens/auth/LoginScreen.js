import React from "react";
import { Image } from "react-bootstrap";
import { imagenlogin, logologin } from "../../assets/img";
import { useForm } from "../../hooks/useForm";
import { NavLink } from "react-router-dom";
import { loginPost } from "../../services/services";
import { login } from "../../actions/loginactions";
import { useDispatch, useSelector} from "react-redux/es/exports";
import { useNavigate } from "react-router-dom";

export const LoginScreen = () => {
  
  const {roles} = useSelector(state => state.auth);
  const [formValues, handleInputChange] = useForm({
    email: "",
    password: "",
  });
  const { email, password } = formValues;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(roles, 'roles');
  
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await loginPost(email, password);
      dispatch(login(email, password, data.token, data.datosUsuario.name, data.datosUsuario.roles.id, data.datosUsuario.id ));
      console.log(data);
    } catch (error) {
      console.error(error);
    }
    if (roles === 1) {
      navigate('/dashboard/empresa');
    }else if (roles === 2 ) {
      navigate('/inicia/diagnostico');
    } /* Logica de redireccion */
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
                <NavLink to='/'>

                <Image
                  src={logologin}
                  className="login__logo"
                  alt="imagen-login"
                  />
                  </NavLink>
                <p>
                  Sumate a la experiencia Xlearn y desarrolla tu proyecto empresarial
                </p>
              </div>
            </div>
            <div className="login__content-inputs">
              <p className="login__content-title">Bienvenido a Xlearn</p>
              <form 
                className="login__content-form" 
                onSubmit={handleLogin}
              >
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  value={email}
                  onChange={handleInputChange}
                  className="login__email"
                />
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  value={password}
                  onChange={handleInputChange}
                  className="login__password"
                />

                <input type="checkbox" className="login__input-reminder" />
                <div className="d-flex login__content-remind ">
                  <p>Recordarme</p>
                  <button className="login__remind-button">
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
                <p>¿Aun no estas Registrado?</p>
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
