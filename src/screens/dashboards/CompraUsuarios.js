import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { HeaderDashboard } from "../../componentes/dashboards/HeaderDashboard";
import { NavegacionDashboard } from "../../componentes/dashboards/NavegacionDashboard";
import { useForm } from "../../hooks/useForm";
import { makePayment } from "../../services/services";
import { Footer } from "../../componentes/Footer";
import WebCheckout from "../../componentes/Commons/Wompi/WebCheckout";
// import {WidgetCheckout} from "../../Wompi/wompi";

export const CompraUsuarios = () => {
  const { token, name, email, subcompanie_id } = useSelector(state => state.auth)

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
    // { label: 11, value: 11 },
    // { label: 12, value: 12 },
    // { label: 13, value: 13 },
    // { label: 14, value: 14 },
    // { label: 15, value: 15 },
    // { label: 16, value: 16 },
    // { label: 17, value: 17 },
    // { label: 18, value: 18 },
    // { label: 19, value: 19 },
    // { label: 20, value: 20 },
  ]);

  const [time, setTime] = useState([
    // { label: "1 Mes", value: 1 },
    // { label: "2 Meses", value: 2 },
    { label: "3 Meses", value: 3 },
    // { label: "4 Meses", value: 4 },
    // { label: "5 Meses", value: 5 },
    // { label: "6 Meses", value: 6 },
    // { label: "7 Meses", value: 7 },
    // { label: "8 Meses", value: 8 },
    // { label: "9 Meses", value: 9 },
    // { label: "10 Meses", value: 10 },
    // { label: "11 Meses", value: 11 },
    // { label: "12 Meses", value: 12 },
    // { label: "13 Meses", value: 13 },
    // { label: "14 Meses", value: 14 },
    // { label: "15 Meses", value: 15 },
    // { label: "16 Meses", value: 16 },
    // { label: "17 Meses", value: 17 },
    // { label: "18 Meses", value: 18 },
    // { label: "19 Meses", value: 19 },
    // { label: "20 Meses", value: 20 },
    // { label: "21 Meses", value: 21 },
    // { label: "22 Meses", value: 22 },
    // { label: "23 Meses", value: 23 },
    // { label: "24 Meses", value: 24 },
  ]);

  const [price, setPrice] = useState();

  const [formValues, handleInputChange] = useForm({
    name: name,
    email: email,
    amount_user: '',
    amount_time: '',
    NIT: '',
    coupon: '',
    subcompanie_id: subcompanie_id
  });

  let { amount_user, amount_time, coupon } = formValues

  const calculatePrice = async (e) => {
    e.preventDefault();
    const data = await makePayment(token, name, email, amount_user, amount_time, coupon, subcompanie_id)
    setPrice(data.payment_details);
  }

  const [buyConfirm, setBuyConfirm] = useState(false)

  const toPay = () => setBuyConfirm(true)  

  return (
    <>
    {buyConfirm && (
      <WebCheckout dataPayment={price} onSubmit={buyConfirm}/>
    )}
    <div className="compra-usuarios__section">
      <HeaderDashboard />
      <div className="compra-usuarios__container-nav">
        <NavegacionDashboard />
      </div>
      <div className="compra-usuarios__container">
        <div className="compra-usuarios__title" >
          <h1>Gestion De Cupos</h1>
          <p>Gestiona y administra tus cupos</p>
        </div>
        <div className="compra-usuarios__form">
          <form className="compra-usuarios__form-payment">
            <div className="compra-usuarios__form-inputs" >
              <label>Numero de Usuarios</label>
              <div className="compra-usuarios__form-inputs__container" >
                <select name="amount_user"
                  onChange={handleInputChange}
                >
                  <option value='...' >Selecciona</option>
                  {places &&
                    places.map((item, index) => (
                      <option key={index} value={item.value} >
                        {item.label}
                      </option>
                    ))
                  }
                </select>
                <button>+ 20 usuarios</button>
              </div>
              <label>Tiempo de Suscripcion</label>

              <div className='compra-usuarios__form-inputs__container'>
                <select name="amount_time"
                  onChange={handleInputChange}
                >
                  <option value='...' >Selecciona</option>
                  {time &&
                    time.map((item, index) => (
                      <option key={index} value={item.value} >
                        {item.label}
                      </option>
                    ))
                  }
                </select>
                <button>+ 24 Meses</button>
              </div>
              <div className="compra-usuarios__form-inputs__data" >
                <div className="compra-usuarios__form-inputs__data-container" >
                  <label>NIT</label>
                  <input type='text' placeholder="Escribe tu NIT" name="NIT"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="compra-usuarios__form-inputs__data-container" >
                  <label>Cupon De Descuento</label>
                  <input type='text' placeholder="Ingresa tu cupon si tienes uno"
                    name="coupon"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <button className="compra-usuario__calculate-price-button" onClick={calculatePrice} >
                Calcular
              </button>
            </div>
          </form>
        </div>
        <div className="compra-usarios__container-price">
          <div className="compra-usuarios__container-price__content">
            <p>Pago anual del curso</p>
            
            {price?.amount &&
            <p>$ {price.amount} USD/Año</p>            
            }

          </div>
          <div className="compra-usuarios__container-price__content-total" >
            {/* <div className="container__price-total" >
              <p>Pago total</p>
              <p>
                COP 0.00
              </p>
            </div> */}
            <button className="compra-usuarios__container-price__content-total__button" onClick={toPay} >
              Confirmar compra
            </button>
            <p className="container__price-total__terms" >
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
    </>
  );
}
