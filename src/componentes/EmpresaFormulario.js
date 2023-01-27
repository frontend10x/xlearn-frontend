import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../actions/loginactions";
import { useForm } from "../hooks/useForm";
import { useNavigate } from "react-router-dom"; 
import {
  getContent,
  getCountrys,
  getPlans,
  getSize,
  registerPost,
} from "../services/services";
import Swal from "sweetalert2";


export const EmpresaFormulario = () => {
  const [countries, setCountries] = useState();
  const [plans, setPlans] = useState();
  const [courses, setCourses] = useState();
  const [sizes, setSizes] = useState();
  const [places, setPlaces] = useState([
    // { label: 1, value: 1 },
    // { label: 2, value: 2 },
    // { label: 3, value: 3 },
    { label: 4, value: 4 },
    // { label: 5, value: 5 },
    // { label: 6, value: 6 },
    // { label: 7, value: 7 },
    // { label: 8, value: 8 },
    // { label: 9, value: 9 },
    // { label: 10, value: 10 },
  ]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    async function countries() {
      try {
        const data = await getCountrys();
        setCountries(data);
      } catch (error) {
        console.error(error);
      }
    }

    async function plans() {
      try {
        const data = await getPlans();
        console.log(data)
        setPlans(data);
      } catch (error) {
        console.error(error);
      }
    }

    async function content() {
      try {
        const data = await getContent();
        setCourses(data);
        console.log(data, "content");
      } catch (error) {
        console.error(error);
      }
    }

    async function size() {
      try {
        const data = await getSize();
        console.log(data,'structure')
        setSizes(data);
      } catch (error) {
        console.error(error);
      }
    }

    countries();
    plans();
    content();
    size();
  }, []);

  const [formValues, handleInputChange] = useForm({
    name: "",
    lastname: "",
    company: "",
    email: "",
    email_confirmation:"",
    phone:"",
    website: "",
    size: "",
    country: "",
    content: "",
    plan_id: "",
    quotas: "",
    password:"",
    password_confirmation:"",
    observation: "",
    nit: ""
  });

  const {
    name,
    lastname,
    company,
    email,
    email_confirmation,
    phone,
    website,
    size,
    country,
    content,
    plan_id,
    quotas,
    password,
    password_confirmation,
    observation,
    nit
  } = formValues;

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    console.log('se disparo')
    try {
      const data = await registerPost(
        name,
        lastname,
        company,
        email,
        email_confirmation,
        phone,
        website,
        size,
        country,
        content,
        plan_id,
        quotas,
        password,
        password_confirmation,
        observation,
        nit
      );
      Swal.fire({
        icon: 'success',
        title: 'Registro hecho',
        text: `${data.message}`,
        // footer: 'Revisa tu correo para confirmar la cuenta'
      });
      dispatch(
        register(
          name,
          lastname,
          company,
          email,
          email_confirmation,
          phone,
          website,
          size,
          country,
          content,
          plan_id,
          quotas,
          password,
          password_confirmation,
          observation,
          nit
        )
      );
      
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops Algo salio mal',
        text: `${error.response.data.message}`,
        // footer: '<a href="">Why do I have this issue?</a>'
      })
    }
  };

  const privacidad = () => {
    navigate('/politicas/privacidad')
  }

  return (
    <div className="planes__form-content">
      <form className="planes__formulario" onSubmit={handleRegisterSubmit}>
        <h1>Solicitud de registro</h1>
        <div className="planes__formulario-content">
          <div className="form__group">
            <p>
              Nombre(s) <span>*</span>
            </p>
            <input
              name="name"
              value={name}
              onChange={handleInputChange}
              placeholder="Nombre(s)"
            />
          </div>
          <div className="form__group">
            <p>
              Apellido(s) <span>*</span>
            </p>
            <input
              name="lastname"
              value={lastname}
              onChange={handleInputChange}
              placeholder="Apellido(s)"
            />
          </div>
          <div className="form__group">
            <p>
              NIT <span>*</span> (Sin digito de verificacion)
                </p>
            <input
              name="nit"
              value={nit}
              onChange={handleInputChange}
              placeholder="NIT Ej:00000000"
            />
          </div>
          <div className="form__group">
            <p>
              Empresa <span>*</span>
            </p>
            <input
              name="company"
              value={company}
              onChange={handleInputChange}
              placeholder="Empresa"
            />
          </div>
          <div className="form__group">
            <p>
              Correo electrónico <span>*</span>
            </p>
            <input
              name="email"
              value={email}
              onChange={handleInputChange}
              placeholder="Correo"
            />
          </div>
          <div className="form__group">
            <p>
              Corfirmacion de correo <span>*</span>
            </p>
            <input
              name="email_confirmation"
              value={email_confirmation}
              onChange={handleInputChange}
              placeholder="Corfirmar correo"
            />
          </div>
          <div className="form__group">
            <p>
              Contacto<span>*</span>
            </p>
            <input
              name="phone"
              value={phone}
              onChange={handleInputChange}
              placeholder="Telefono"
            />
          </div>
          <div className="form__group">
            <p>
              Website empresa 
            </p>
            <input
              name="website"
              value={website}
              onChange={handleInputChange}
              placeholder="Website (Opcional)"
            />
          </div>
          <div className="form__group form__group__xln">
            <p>
              Tamaño de la Empresa<span>*</span>
            </p>
            <select
              name="size"
              value={size}
              onChange={handleInputChange}
              placeholder="Tamaño"
            >
              <option value="...">Ingresa tamaño</option>
              {sizes &&
                sizes.map((item, index) => (
                  <option key={index} value={item.id}>
                    {item.tag}
                  </option>
                ))}
            </select>
          </div>
          <div className="form__container-country_content">
            <div className="form__group">
              <p>
                Selecciona tu país<span>*</span>
              </p>
              <select
                name="country"
                value={country}
                onChange={handleInputChange}
                placeholder="Pais"
              >
                <option value="...">Selecciona opción</option>
                {countries &&
                  countries.map((item, index) => (
                    <option key={index} value={item.id}>
                      {item.name}
                    </option>
                  ))}
              </select>
            </div>
            <div className="form__group">
              <p>
                ¿Qué tipo de contenido estás buscando?<span>*</span>
                <p className="xln__note__text">Tenga en cuenta: Todos los planes de Xlearn por equipos brindan acceso ilimitado a toda nuestra biblioteca de cursos.</p>
              </p>
              <select
                name="content"
                value={content}
                onChange={handleInputChange}
                placeholder="Contenido"
              >
                <option value="...">Selecciona una opción</option>
                {courses &&
                  courses.map((item, index) => (
                    <option key={index} value={item.id}>
                      {item.name}
                    </option>
                  ))}
              </select>
            </div>
          </div>
          <div className="form__group">
            <p>
              Selecciona tu plan de interés<span>*</span>
            </p>
            <select
              name="plan_id"
              value={plan_id}
              onChange={handleInputChange}
              placeholder="Planes"
            >
              <option value="...">Selecciona opción</option>
              {plans &&
                plans.map((item, index) => (
                  <option key={index} value={item.id}>
                    {item.name}
                  </option>
                ))}
            </select>
          </div>
          <div className="form__group">
            <p>
              ¿Cuántos cupos necesitas?<span>*</span>
            </p>
            <select
              name="quotas"
              value={quotas}
              onChange={handleInputChange}
              placeholder="Cupos"
            >
              <option value="...">Ingresa numero cupos</option>
              {places &&
                places.map((item, index) => (
                  <option key={index} value={item.value}>
                    {item.label}
                  </option>
                ))}
            </select>
          </div>
          <div className="form__group">
            <p>
              Contraseña<span>*</span>
            </p>
            <input
              name="password"
              type="password"
              value={password}
              onChange={handleInputChange}
              placeholder="Contraseña"
            />
          </div>
          <div className="form__group">
            <p>
              Confirmacion <span>*</span>
            </p>
            <input
              name="password_confirmation"
              type="password"
              placeholder="Confirmar contraseña"
              value={password_confirmation}
              onChange={handleInputChange}
            />
          </div>
          <div className="form__group form__group__xln">
            <p className="form__group__text">
              Cuéntanos más sobre tus necesidades 
            </p>
            <textarea
              name="observation"
              type="password"
              value={observation}
              onChange={handleInputChange}
              cols="53"
              rows="4"
              placeholder="Cuéntanos más"
            />
          </div>
          <button className="planes__formulario-button">Registrarme</button>
          <p className="xln__register_text_TyC">Tus datos personales se utilizarán para procesar tu pedido, mejorar tu experiencia en esta plataforma y otros propósitos descritos en nuestra <a href="#" onClick={privacidad}>Política de privacidad.</a></p>
        </div>
      </form>
    </div>
  );
};
