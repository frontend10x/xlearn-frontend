import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../actions/loginactions";
import { useForm } from "../hooks/useForm";
import {
  getContent,
  getCountrys,
  getPlans,
  getSize,
  registerPost,
} from "../services/services";

const countries = [{ label: "Argentina", value: "argentina" }];

export const EmpresaFormulario = () => {
  const [countries, setCountries] = useState();
  const [plans, setPlans] = useState();
  const [courses, setCourses] = useState();
  const [sizes, setSizes] = useState();
  const [places, setPlaces] = useState([
    { label: 1, value: 1 },
    { label: 2, value: 2 },
    { label: 3, value: 3 },
    { label: 4, value: 4 },
    { label: 5, value: 5 },
    { label: 6, value: 6 },
    { label: 7, value: 7 },
    { label: 8, value: 8 },
    { label: 9, value: 9 },
    { label: 10, value: 10 },
  ]);
  const dispatch = useDispatch();

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
    website: "",
    size: "",
    country: "",
    content: "",
    plan_id: "",
    quotas: "",
    password:"",
    password_confirmation:"",
    observation: "",
  });

  const {
    name,
    lastname,
    company,
    email,
    website,
    size,
    country,
    content,
    plan_id,
    quotas,
    password,
    password_confirmation,
    observation,
  } = formValues;

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await registerPost(
        name,
        lastname,
        company,
        email,
        website,
        size,
        country,
        content,
        plan_id,
        quotas,
        password,
        password_confirmation,
        observation
      );
      dispatch(
        register(
          name,
          lastname,
          company,
          email,
          website,
          size,
          country,
          content,
          plan_id,
          quotas,
          password,
          password_confirmation,
          observation
        )
      );
      alert(data.message , 'revisa tu correo para validar el registro');
    } catch (error) {
      console.error(error, "error de peticion");
    }
    console.log(formValues, "values");
    console.log(password_confirmation, 'value')
  };

  return (
    <div className="planes__form-content">
      <form className="planes__formulario" onSubmit={handleRegisterSubmit}>
        <h1>Solicitud de Registro</h1>
        <div className="planes__formulario-content">
          <div className="form__group">
            <p>
              Nombre <span>*</span>
            </p>
            <input
              name="name"
              value={name}
              onChange={handleInputChange}
              placeholder="Nombre"
            />
          </div>
          <div className="form__group">
            <p>
              Apellido <span>*</span>
            </p>
            <input
              name="lastname"
              value={lastname}
              onChange={handleInputChange}
              placeholder="Apellido"
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
              Correo <span>*</span>
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
              Website <span>*</span>
            </p>
            <input
              name="website"
              value={website}
              onChange={handleInputChange}
              placeholder="Website"
            />
          </div>
          <div className="form__group">
            <p>
              Tamaño de la Empresa<span>*</span>
            </p>
            <select
              name="size"
              value={size}
              onChange={handleInputChange}
              placeholder="Tamaño"
            >
              <option value="...">select</option>
              {sizes &&
                sizes.map((item, index) => (
                  <option key={index} value={item.id}>
                    {item.range_size}
                  </option>
                ))}
            </select>
          </div>
          <div className="form__container-country_content">
            <div className="form__group">
              <p>
                Selecciona tu pais<span>*</span>
              </p>
              <select
                name="country"
                value={country}
                onChange={handleInputChange}
                placeholder="Pais"
              >
                <option value="...">select</option>
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
                Tamaño de la Empresa<span>*</span>
              </p>
              <select
                name="content"
                value={content}
                onChange={handleInputChange}
                placeholder="Contenido"
              >
                <option value="...">select</option>
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
              Elige tu plan de interes<span>*</span>
            </p>
            <select
              name="plan_id"
              value={plan_id}
              onChange={handleInputChange}
              placeholder="Planes"
            >
              <option value="...">select</option>
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
              Selecciona tus cupos<span>*</span>
            </p>
            <select
              name="quotas"
              value={quotas}
              onChange={handleInputChange}
              placeholder="Cupos"
            >
              <option value="...">select</option>
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
              placeholder="Password"
            />
          </div>
          <div className="form__group">
            <p>
              Confirmacion <span>*</span>
            </p>
            <input
              name="password_confirmation"
              type="password"
              placeholder="Confirm Password"
              value={password_confirmation}
              onChange={handleInputChange}
            />
          </div>
          <div className="form__group">
            <p>
              Cuentanos mas sobre tus necesidades <span>*</span>
            </p>
            <textarea
              name="observation"
              type="password"
              value={observation}
              onChange={handleInputChange}
              cols="53"
              rows="4"
              placeholder="Cuentanos mas"
            />
          </div>
          <button className="planes__formulario-button">Registrarme</button>
        </div>
      </form>
    </div>
  );
};
