import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { HeaderDashboard } from "../../componentes/dashboards/HeaderDashboard";
import { NavegacionDashboard } from "../../componentes/dashboards/NavegacionDashboard";
import { useForm } from "../../hooks/useForm";
import { makePayment, validateRut } from "../../services/services";
import { Footer } from "../../componentes/Footer";
import WebCheckout from "../../componentes/Commons/Wompi/WebCheckout";
import { Col, Row } from "react-bootstrap";
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
  const [disabled, setDisabled] = useState(false)
  const [formValues, handleInputChange] = useForm({
    name: name,
    email: email,
    amount_user: '',
    amount_time: '',
    NIT: '',
    coupon: '',
    subcompanie_id: subcompanie_id
  });

  const [file,setDoc] = useState(); //recibe el valor del input 
  const [payment,setPayment] = useState(true);

  let { amount_user, amount_time, coupon } = formValues

  const uploadRut = async () => {
    try {
      const data = await validateRut(token,subcompanie_id,file); //se envia la peticion para cargar el rut
      setPayment(false); // condicional para evitar ir a pagar si el rut no esta cargado
    } catch (error) {
      console.log(error,'error');
      setPayment(true);      
    }
    
  }

  const calculatePrice = async (e) => {
    setDisabled(true);
    e.preventDefault();
    const data = await makePayment(token, name, email, amount_user, amount_time, coupon, subcompanie_id);
    setPrice(data.payment_details);
    uploadRut();
    setTimeout(() => {
      setDisabled(false);
    }, 3000);
  }

  const [buyConfirm, setBuyConfirm] = useState(false)

  const toPay = () => setBuyConfirm(true)

  return (
    <>
      {buyConfirm && (
        <WebCheckout dataPayment={price} onSubmit={buyConfirm} />
      )}
      <div className="compra-usuarios__section">
        <HeaderDashboard />
        <div className="compra-usuarios__container-nav">
          <NavegacionDashboard />
        </div>
        <div className="compra-usuarios__container">
          <div className="compra-usuarios__title" >
            <h1>Gestion de cupos</h1>
            <p>Gestiona y administra tus cupos</p>
          </div>
          <div className="compra-usuarios__form">
            <form className="compra-usuarios__form-payment">
              <div className="compra-usuarios__form-inputs" >
                <label>Número de usuarios</label>
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
                  {/* <button>+ 20 usuarios</button> */}
                </div>
                <label>Tiempo de suscripción</label>

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
                  {/* <button>+ 24 Meses</button> */}
                </div>
                <div className="compra-usuarios__form-inputs__data" >
                  {/* <div className="compra-usuarios__form-inputs__data-container" >
                  <label>NIT</label>
                  <input type='text' placeholder="Escribe tu NIT" name="NIT"
                    onChange={handleInputChange}
                  />
                </div> */}
                  <div className="compra-usuarios__form-inputs__data-container" >
                    <label>Cupón de descuento</label>
                    <input type='text' placeholder="Ingresa tu cupon si tienes uno"
                      name="coupon"
                      onChange={handleInputChange}
                    />
                    <div className="" >
                      <p className="mt-2">Compartenos tu rut</p>
                      <input type="file" 
                        onChange={e => setDoc(e.target.files[0])}
                      />
                    </div>
                  </div>
                </div>
                <button className="compra-usuario__calculate-price-button" disabled={disabled} style={disabled ? { backgroundColor: '#31fb8550' } : { backgroundColor: '#31fb84' }} onClick={calculatePrice} >
                  Calcular
                </button>
              </div>
            </form>
          </div>
          <div className="compra-usarios__container-price">
            <div className="compra-usuarios__container-price__content">
              <p>Pago anual del curso</p>
              <hr />
              <h2>Pago total:</h2>
              {price?.amount_pesos ?
                <p className="xln_price_GDC">$ {price.amount_pesos} COP</p>
                :
                <p className="xln_price_GDC">$ 0 COP</p>
              }
            </div>
            <div className="compra-usuarios__container-price__content-total" >
              {/* <div className="container__price-total" >
              <p>Pago total</p>
              <p>
                COP 0.00
              </p>
            </div> */}
              <button className="compra-usuarios__container-price__content-total__button" onClick={toPay} disabled={payment} >
                Confirmar compra
              </button>
              <p className="container__price-total__terms" >
                Tus datos personales se utilizarán para procesar tu pedido, mejorar tu experiencia en esta web y otros propósitos descritos en nuestra política de privacidad. He leído y estoy de acuerdo con los<a type="button" className="ms-1" data-bs-toggle="modal" data-bs-target="#pagoModal" rel="noreferrer"> términos y condiciones </a> de la web.
              </p>
            </div>


          </div>
        </div>


        <div className="modal fade" id="pagoModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-fullscreen">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Politica de uso de los cursos y del portal Xlearn</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body h-100 ">
                POLITICA DE USO DEL PORTAL WEB XLEARN 10X THINKING S.A.S. (en adelante 10X THINKING), en condición de propietaria del portal web bajo el dominio www.dashboard.xlearn.com.co y en su condición de Responsable de los datos personales que son aquí recolectados y tratados, procede a informar a sus grupos de interés la política de uso de este portal y tratamiento de datos personales que se realizan en este, actuando así de forma responsable, legítima, transparente y ética, directrices que habrán de regular la operación de nuestro portal, constituyéndose éstas en su marco regulador.
                <br />
                <br />
                Nuestra presencia empresarial en Internet, además de adoptar medidas informáticas para propender por una navegación segura, incorpora buenas prácticas para el tratamiento seguro de la información, entre ellas la protección de datos personales. Rogamos leer con detenimiento esta política de uso que incorpora las condiciones y términos de uso de este portal web (en adelante LA POLITICA), sea que una persona se registre, use y/o visite este portal web para realizar trámites y/o transacciones o sea un mero visitante, en tanto el carácter regulador que tiene este documento para las partes a las cuales se dirige. Este portal web permite que los usuarios, clientes, prospectos, estudiantes, empresas y demás miembros de los grupos de interés puedan usar este portal web según las funcionalidades actuales y/o futuras que se incorporen en el mismo. En cuanto a los datos personales suministrados por titulares a través de este portal web 10X THINKING en condición de responsable, expresa que se obtienen los consentimientos por parte de los titulares de acuerdo con las formas permitidas en el régimen de protección de datos personales vigentes en Colombia.
                <br />
                <br />
                1. La no aceptación de esta Política por parte de los titulares impedirá el registro de los titulares en el portal y en consecuencia la realización de trámites, esto en la medida que la información solicitada y términos contenidos en este documento constituyen el marco regulador de las relaciones a la luz de la autonomía de la voluntad privada. Así mismo, cualquier infracción a estos términos podrá acarrear como consecuencia la exclusión o salida del infractor dentro del sistema de información que soporta nuestro portal web, sin perjuicio de otras decisiones que se llegaren a adoptar a la luz del principio de legalidad.
                <br />
                <br />
                2. Objetivo del Portal Web 10X THINKING como empresa que presta servicios de consultoría especializada en materia de innovación y gestión de tecnología, y en ejecución de su objeto social permite a través de este portal web ofrecer cursos, capacitación, formación y consultoría en las temáticas que constituyen los servicios de 10X THINKING, en este orden de ideas este portal web incorpora las siguientes funcionalidades en general: Gestión para la inscripción y desarrollo de programas de formación y/o capacitación y/o consultoría en las áreas y temáticas en el descritas. Disponer formas de pago a través de medios electrónicos, como lo son pasarelas de pago que se parametrizan a este portal. Atención de PQR´s por parte de los usuarios. Gestionar y mantener una comunicación permanente con los usuarios del portal que les permita recibir actualizaciones del portal, newsletter, noticias, información comercial de descuentos, promociones, vacantes de trabajo, oportunidades laborales, entre otras relacionadas con estos aspectos.
                <br />
                <br />
                3. Definiciones Para efectos de contribuir a la interpretación de esta Política, se incorporan, sin perjuicio de otras definicionales legales y/o doctrinales, las siguientes definiciones: Aliado. Es la persona con la cual existe una alianza para ofrecer productos, bienes y/o servicios a los usuarios; y/o que participa en alguna de las actividades que ejecuta 10X THINKING en ejecución del objeto social. Calidad de la información. Es un atributo de la información personal recolectada, que implica que los datos sean adecuados, pertinentes y no excesivos, conforme la estrategia de nuestro portal web. Comercio Electrónico. Comprende el envío, transmisión, recepción, almacenamiento de mensajes de datos por vía electrónica. Las dudas que surjan respecto de la eficacia y validez de los mensajes de datos y demás actividades vinculadas al comercio electrónico se interpretarán de conformidad con la ley 527 de 1999. Consumidor: Toda persona natural que adquiera un producto para su consumo y satisfacción de necesidades personales y/o familiares. 10X THINKING. Es la sociedad responsable de operar la plataforma informática que soporta el portal web: www.xlearn.com.co. Datos personales. Es toda información que permite identificar o hacer identificable a una persona. Datos Sensibles. Es información personal íntima relacionada con ideas políticas, creencias religiosas, vida sexual, origen racial, datos de salud, biometría, entre otros así catalogados. Encargado del Tratamiento. Es la persona natural o jurídica que, de manera autónoma o conjunta, realiza tratamientos sobre la información de carácter personal por cuenta del responsable. Finalidad. Principio que consiste en el uso o fin para el cual se recolecta la información solicitada a los visitantes, usuarios y/o consumidores durante el proceso de registro, trámites o con posterioridad a éste. El usuario del portal, en el momento del registro, será informado de la finalidad a otorgarse a sus datos personales, sin perjuicio de las otras finalidades que sean puestas en su conocimiento durante una determinada interacción en este portal web. Mayor de edad. Persona física mayor de dieciocho (18) años que tiene capacidad para contratar. Mensaje de Datos. Información generada, enviada, recibida, almacenada o comunicada por medios electrónicos, ópticos o similares, como pudieran ser, entre otros, el Intercambio Electrónico de Datos (EDI), Internet, el correo electrónico, el telegrama, el télex o el telefax. Tratamiento de la Información. Operaciones y procedimientos técnicos de carácter automatizado o no, que permiten la recogida, grabación, conservación, elaboración, modificación, bloqueo y cancelación de información de carácter personal, así como las cesiones de datos que resulten de comunicaciones, consultas, interconexiones y transferencias. Publicidad. Es toda forma de comunicación realizada de forma directa o indirecta por 10X THINKING, con el fin de informar sobre su objeto social y comunicar estrategias, oferta de productos, bienes, servicios o campañas publicitarias o de mercadeo. La publicidad podrá realizarse mediante correspondencia física, electrónica o al teléfono telefónico, sea en forma independiente y/o en alianza con terceros. Responsable del Tratamiento. Es la persona jurídica que determina la finalidad, contenido o uso de la información de carácter personal recolectada, en este caso, 10X THINKING. Sistema de información. Se entenderá por tal todo programa informático utilizado para generar, enviar, recibir, archivar o procesar de cualquier forma los mensajes de datos que contienen información vinculada al portal web: www.xlearn.com Producto: Bien o servicio corporal o incorporal que ha sido adquirido por el consumidor a través del portal web web : www.xlearn.com Usuario del portal web. Es la persona que, una vez registre sus datos personales en nuestro portal web, queda habilitada para participar en los programas dispuestos en el portal y/o desplegar actividades de acuerdo a las funcionalidades existentes en este. Visitantes. Son las personas que navegan en nuestro portal sin necesidad de registro, haciéndolo solo a partir de la digitación en un explorador del nombre de dominio: www.dashboard..xlearn.com
                <br />
                <br />
                4. Ámbito de aplicación Esta Política contiene los términos y condiciones de uso del portal, así como el acuerdo de voluntades que regula la realización de programas y/o adquisición de productos, bienes o servicios, en un marco de legalidad y comportamiento ético por parte de quienes se relacionan con 10X THINKING. Así mismo regula el proceso de tratamiento de datos de las personas que se registren, realicen tramites, adquieran productos, bienes, servicios y/o visiten el portal. Así mismo, 10X THINKING se compromete a promover que la información que se comunique en el portal web sea respetuosa de los derechos de propiedad intelectual, así como de la dignidad humana, la moral y las buenas costumbres. Es obligación de toda persona que interactúe con nuestro portal web hacer un uso honesto de la información a la que se acceda.
                <br />
                <br />
                5. Registro en el portal web La realización de programas u otras actividades en este portal web requiere registro previo por parte de los usuarios con el fin de iniciar la gestión de estos. En el registro de la información solicitada, 10X THINKING en virtud del principio de la buena fe, presume que los datos suministrados son veraces y son registrados por quien es titular de la información y tiene certeza de que la información corresponde con la realidad. La información recolectada en este portal web deberá ser actualizada por el titular de esta si se presentan cambios en ella, caso en el cual deberá realizar la actualización a través del siguiente correo: xlearnby10x@gmail.com. En caso de presentarse cambios en la información suministrada por el titular de la información y no haberse notificado por estos tales cambios a 10X THINKING, se entiende que la información suministrada corresponde a la realidad y que la decisión del titular es mantener los datos suministrados vigentes para todos los efectos precontractuales, contractuales y postcontractuales.
                <br />
                <br />
                6. Acceso a funcionalidades específicas dentro del portal web 10X THINKING, respecto de los usuarios, consumidores y/o otros terceros podrá habilitar acceso a determinadas funcionalidades dentro de este portal web con el fin de facilitar el relacionamiento de estos. Para el efecto, se otorgará un derecho de acceso mediante un nombre de usuario y una contraseña temporal que deberá cambiarse una vez se realice el primer ingreso. Esta contraseña podrá contener uno o dos factores de autenticación para el acceso al portal web. La nueva contraseña deberá contener letras mayúsculas y minúsculas, números y otros caracteres. 10X THINKING definirá de forma autónoma las políticas de modificación de contraseñas las cuales son vinculantes para los usuarios, consumidores, los proveedores u otros terceros. 10X THINKING informa que cada tercero autorizado para acceder a determinadas funcionalidades presentes en este portal web que cada uno es el único responsable del nombre de usuario y contraseña, los cuales tienen el carácter de información confidencial y restringida, motivo por el cual todo acceso al portal web se presume que ha sido realizado por estas personas; por tanto, salvo prueba el contrario, todo acceso y/o tramite se presume valido y realizado por el titular del nombre de usuario. El portal web dispone de la funcionalidad para recuperar contraseña en caso de olvido. En caso de pérdida de control del nombre de usuario y/o contraseña, por cualquier situación, es responsabilidad del titular del nombre de usuario y contraseña reportar este incidente y realizar los cambios en la contraseña correspondiente.
                <br />
                <br />
                7. Obligaciones y prohibiciones
                <br />
                <br />
                7.1. Son obligaciones de 10X THINKING
                <br />
                7.1.1. Gestionar de forma segura este portal web en un marco orientado a mitigar los riesgos que se identifiquen.
                <br />
                7.1.2. Gestionar los datos personales recolectados en el marco del régimen de protección de datos personales vigente en Colombia
                <br />
                7.1.3. Suministrar información clara y veraz en este portal web
                <br />
                7.1.4. Cumplir esta política que contiene los términos y condiciones de uso
                <br />
                7.1.5. Cumplir con las normas en materia de propiedad intelectual e inmaterial
                <br />
                7.2. Obligaciones de los usuarios, consumidores y/o otros terceros que usen este portal web
                <br />
                7.2.1. Suministrar información veraz al registrarse.
                <br />
                7.2.2. Mantener actualizada la información personal suministrada.
                <br />
                7.2.3. Usar este portal de acuerdo con los términos y condiciones de uso presentes en esta política.
                <br />
                7.2.4. Dar seguridad al nombre de usuario y contraseña asignada, cuando sea el caso.
                <br />
                7.2.5. Usar el portal solo para las funcionalidades autorizadas.
                <br />
                7.2.6. Respetar la propiedad intelectual propia de cada obra, contenido y/o creaciones intelectuales presentes en el portal web.
                <br />
                7.2.7. Usar este portal y/o las funcionalidades de comunicación habilitadas en este de forma respetuosa, ética y buenas prácticas sociales.
                <br />
                7.2.8. Informar cualquier pedida de control respecto de los nombres de usuarios y/o contraseñas, caso en el cual deberá informar de manera inmediata una vez tenga conocimiento de tal situación.
                <br />
                7.2.9. Informar cualquier situación anómala que observe, irregular o mal funcionamiento que observe de este portal web.
                <br />
                7.2.10. Cumplir con las medidas de seguridad que sean informadas por 10X THINKING.
                <br />
                7.3. Prohibiciones
                <br />
                7.3.1. Se prohíbe compartir con terceros el nombre de usuario y contraseña de acceso al portal web, pues estos tienen carácter confidencial.
                <br />
                7.3.2. Se prohíbe realizar actos que atenten contra la seguridad de este portal web y/o de los usuarios de este portal.
                <br />
                7.3.3. Se prohíbe realizar actividades de ingeniería inversa a este portal web.
                <br />
                7.3.4. Se prohíbe realizar las conductas descritas en la ley 1273 de 2009 o cualquiera otra que implique indebido uso de la información propia o de terceros.
                <br />
                7.3.5. Se prohíbe realizar actos contrarios a la propiedad intelectual y/o cualquier otra norma legal. De forma particular, está prohibido copiar o hacer fotografías de los videos y material académico dispuesto en este portal al cual se accede únicamente por los usuarios debidamente registrados, bien sea para su propio uso o para el uso de terceros.
                <br />
                7.3.6. Se prohíbe realizar accesos desde redes públicas y/o equipos personales no seguros.
                <br />
                7.3.7. Se prohíbe realizar conductas contrarias a la moral y al buen trato con las demás personas que acceden al portal y con las que puede compartirse en foros o espacios virtuales de encuentro. Entienden los terceros que usen este portal y aquellos a los cuales se autorice el acceso a ciertas funcionalidades presentes en este portal web que, en caso de incumplimiento de los deberes, obligaciones y prohibiciones aquí enunciados, según su gravedad, 10X THINKING podrá dar lugar a las acciones contractuales y/o legales a que haya lugar, dentro de las cuales 10X THINKING se reserva el derecho a bloquear o dar de baja al usuario que incurra en violación e incumplimiento de sus obligaciones. Lo anterior, sin perjuicio de las acciones que terceros afectados puedan iniciar contra quien incumpla lo aquí dispuesto. En estos casos o bien por la violación de las prohibiciones aquí expuestas, no se dará reembolso del precio pagado por el usuario y/o por su empresa, ni cualquiera otro emolumento que se haya entregado a favor de 10X THINKING.
                <br />
                <br />
                8. Propiedad Intelectual. 10X THINKING expresa a través de esta política su respeto y acatamiento a las normas de propiedad intelectual y en este sentido, exigirá a toda persona que use este portal web el respeto a la propiedad intelectual de las creaciones que estén presentes en este, sea que estén protegidas por el régimen de derechos de autor o propiedad industrial. 10X THINKING declara que está en disposición de recibir cualquier queja relacionada con presuntas infracciones a la propiedad intelectual que terceros identifiquen, esto en su compromiso irrestricto con la protección de toda creación protegidas bajo el mencionado régimen. 10X THINKING, espera un trato respetuoso por parte de terceros que usen este portal web, accedan y/o conozcan las creaciones intelectuales presentes en este portal web, sea derechos de propiedad de terceros y/o de 10X THINKING. Por tanto, se prohíbe que terceros usen, usufructúen y/o aproveche cualquier creación intelectual presente en este portal web, en tanto que todas las presentes en este portal web están protegidas por la propiedad intelectual.
                <br />
                <br />
                9. Comercio Electrónico En cumplimiento de las disposiciones colombianas sobre mensajes de datos según la ley 527 de 1999, se comunica que la legislación nacional reconoce validez a los mensajes de datos y por tanto ellos adquieren carácter y entidad probatoria. En consecuencia, entienden las personas que realizan actividades, tramites y/o transacciones en este portal web que mediante el cruce de mensajes de datos se pueden adquirir obligaciones y/o ejercer derechos, siendo de su resorte exclusivo el contenido, responsabilidades y efectos de la información generada. A través de nuestro portal web podrán anunciarse enlaces o hipervínculos a otros portales web de personas con las cuales puedan existir alguna relación que pueden ser de interés de nuestros grupos de interés. Para efectos de prevenir fraudes informáticos se sugiere que el usuario digite en la URL de su navegador la dirección IP o nombre de dominio del sitio web que desea visitar, no obstante, pueda realizar el acceso desde el portal.
                <br />
                <br />
                10. Publicidad 10X THINKING, o sus aliados de negocio, podrán comunicar información comercial y publicitaria, identificándola como tal a los usuarios del portal que lo hayan autorizado al momento del registro y/o actualización de sus datos. La información comercial y publicitaria que se remita será leal e indicará las condiciones en las cuales proceda una oferta, rebaja, concurso o premio. El mensaje de datos que trasmita información comercial o publicitaria en los términos aquí expresados permitirá la opción de que se excluya el usuario, opción que también se tendrá en cualquier momento para la actualización de los datos de cada usuario en el registro. La información comercial y publicitaria que llegue a comunicarse a los usuarios de nuestro portal estará en marcada en la ley, la moral y las buenas costumbres.
                <br />
                <br />
                11. Registro de menores de edad 10X THINKING en cumplimiento de la ley 1098 de 2006 sobre infancia y adolescencia, y del derecho de asociación y de información, reconoce que los menores de edad tienen la posibilidad eventual de realizar ciertas actividades en este portal web, con las limitaciones que establezca la ley en cada caso. Lo anterior sin perjuicio de las decisiones que adopten sus padres, tutores o representantes. 10X THINKING asume la obligación de respetar y brindar las garantías para que los menores de edad, que tengan la condición de usuarios autorizados de nuestro portal web, puedan ejercer su derecho de libertad de expresión, de libre desarrollo de la personalidad y de información, como lo consagra la ley 1098 de 2006. En cumplimiento de la normatividad colombiana respecto de menores de edad (niños y adolescentes) y del proceder responsable a que está obligada 10X THINKING para con la sociedad, asumimos los siguientes compromisos:
                <br />
                <br />
                11.1. Excluir de nuestro sistema de información a cualquier persona menor de edad, que haya afirmado tener una edad superior a está, en el momento de registrarse como usuario.
                <br />
                11.2. Dar a conocer a las autoridades de cualquier situación delictiva de la que tenga conocimiento que ponga en peligro la integridad de un menor de edad. Para ello brindara toda la colaboración que requieran los órganos de seguridad del estado.
                <br />
                <br />
                12. Responsabilidad de 10X THINKING La información comunicada en este portal web está fundada en la buena fe y hace referencia a aspectos generales relacionados con los servicios que hacen parte del objeto social de 10X THINKING. En este orden de ideas, en caso de que una persona tenga dudas sobre algún aspecto particular se recomienda establecer contacto con 10X THINKING para aclarar cualquier duda y así formar el consentimiento que sea necesario para cualquier actividad, tramite y/o transacción. 10X THINKING no es responsable de los daños que terceros lleguen a causar a las personas, así como tampoco es responsable de las acciones que visitantes, usuarios, proveedores, aliados y/o personas que se registren en este portal web realicen sin autorización expresa de esta organización. 10X THINKING en caso de tener conocimiento o ser informado acerca del comportamiento de personas que remitan mensajes de datos ofensivos, discriminatorios y/o contrarios a la ley, la moral y buenas costumbres procederá a bloquear temporalmente la cuenta de registro de esta persona, hasta tanto no se aclare tal situación. De reincidir en la conducta, 10X THINKING bloqueara el acceso de forma definitiva al infractor.
                <br />
                <br />
                13. Cookies En relación con la política de Cookies esta puede ser consultada en el siguiente enlace: xlearn.com.co.
                <br />
                <br />
                14. Solución de controversias 10X THINKING promoverá que las controversias que surjan como consecuencia de cualquier actividad, tramite y/o transacciones realizadas a través del portal web, sean resueltas de manera amigable, para ello expresa la disposición de atender cualquier queja, petición o reclamo presentado por una persona.
                <br />
                <br />
                15. Colaboración con autoridades 10X THINKING expresa de manera irrevocable su compromiso de colaborar con las autoridades nacionales o internacionales cuando estas lo requieran en virtud de una solicitud expresa de información, evento en el cual procederá en la manera como la ley lo establezca, siempre y cuando ello no viole ninguna garantía constitucional vinculada a las libertades públicas de las personas. En caso de duda, 10X THINKING se someterá a las decisiones que ordenen las autoridades colombianas. En este sentido, cuando las autoridades competentes en cumplimiento de la ley lo soliciten y sea procedente y pertinente la información solicitada, 10X THINKING entregará la requerida, advirtiendo el deber de seguridad que sobre la misma deben asumir estas autoridades.
                <br />
                <br />
                16. Licencia de uso de los programas y cursos dispuestos en este portal. 10X THINKING otorga una licencia de uso temporal, no exclusivo, personal e intransferible a cada uno de los usuarios que se registran en este portal, bien sea de forma independiente o cómo usuarios provenientes de una persona jurídica o ente empresarial, por medio de la cual el usuario podrá acceder al programa y/o curso por el cual se haya efectuado el pago respectivo. Dicha licencia está sujeta a las siguientes condiciones:
                <br />
                <br />
                16.1. Solamente se procederá el acceso al contenido de interés del usuario una vez se haya verificado el pago correspondiente al mismo.
                <br />
                16.2. En caso de que se haya efectuado el pago y no se acceda al programa y/o curso por el cual se haya efectuado dicho pago, no procederá la devolución del dinero y el usuario interesado deberá volver a ser el proceso de registro y/o matrícula respectiva. Si el usuario una vez ha realizado el pago desea la devolución del dinero deberá realizarlo por medio de correo electrónico a xlearnby10x@gmail.com, las condiciones de devolución serán sujetas al tiempo y cantidad de usuarios, si el caso es de solo un mes no se realizará devolución del dinero, si el usuario compra más de un mes, deberá notificar lo más pronto posible donde el mes en vigencia será cobrado y la devolución será correspondiente al mes siguiente y lo restante que quede en el pago.
                <br />
                16.3. El acceso, uso y gestión de los programas y/o cursos objeto de esta licencia, solamente concede el derecho patrimonial de uso temporal, de tal manera que pasado el término previsto para la realización del mencionado programa o curso sin que el usuario interesado haya culminado su proceso de capacitación y/o formación, se procederá al cierre y por ende al acceso al mismo, de manera que el interesado deberá solicitar nuevamente su registro o proceso de matrícula.
                <br />
                16.4. El acceso, uso y gestión de los programas y/o cursos objeto de esta licencia, solamente concede el derecho patrimonial de uso limitado a un solo usuario, de conformidad con los términos del programa y/o curso elegido. En consecuencia, está prohibido que el contenido consistente en el programa y/o curso propia e intelectual de 10X THINKING pueda ser instalado, emitido, copiado o reproducido en cualquier otro dispositivo y de cualquier otra forma que permita el acceso compartido a otro u otros usuarios. para efecto de controlar el respeto por la propiedad intelectual de conformidad con lo aquí expuesto, la plataforma XLEARN podrá realizar seguimientos de navegación de los usuarios y crear logs que le permitan hacer trazabilidad sobre el uso honesto de los contenidos a los cuales se accede en virtud de esta licencia.
                <br />
                16.5. El acceso, uso y gestión de los programas y/o cursos objeto de esta licencia, solamente concede el derecho patrimonial de uso no exclusivo al usuario, de manera que podrán otros usuarios, en cualquier territorio, acceder a los mismos contenidos cuyo uso se otorga a través de esta licencia.
                <br />
                <br />
                17. Renovación automática. En relación con los programas, cursos y cualquier otro contenido cuya oferta esté determinada por suscripciones anuales, y siempre que se presente y se verifique el pago correspondiente, se dará lugar a la renovación automática de la suscripción. No obstante, podrá el licenciatario en los 15 días siguientes al recibo del documento de cobro por esta renovación, manifestar su decisión de no renovarla caso en el que 10X THINKING procederá a inhabilitar a los usuarios registrados hasta ese momento y la clausura de los contenidos a los cuales correspondía dicha suscripción. Si pasados los 15 días antes mencionados, el suscriptor o usuario no manifiesta su intención de dar por terminada esta licencia y por ende su suscripción, 10X THINKING procederá a efectuar el cargo del pago correspondiente a la renovación anual de la suscripción para lo cual el licenciatario, esto es el suscriptor o usuario, autoriza que se utilice el mismo medio de pago que fue utilizado para realizar la suscripción inicial.
                <br />
                <br />
                18. Contraprestación económica. 10X THINKING determinará y publicará en la información correspondiente a cada curso y/o programa la contraprestación económica o precio a pagar por el acceso a los mismos, así como las promociones o descuentos que sean aplicables, determinación de precios que depende únicamente de 10X THINKING quien podrá modificar dichas contraprestaciones económicas cuando lo considere pertinente, respetando los acuerdos que con anterioridad a la nueva fijación de precios de hayan efectuado. De igual manera esta contraprestación económica estará determinada por el número de usuarios que deseen acceder y participar de los cursos y programas dispuestos en la plataforma XLEARN, así como dependiendo de los planes ofertados en esta. Sobre este valor se calcularán los impuestos que sean pertinentes y que apliquen al curso o programa elegido por el usuario, gravámenes y demás erogaciones tributarias que sean aplicables y que deben ser asumidas por los usuarios y/o por 10X THINKING de conformidad con la ley vigente aplicable. La plataforma XLEARN acepta todos los medios de pago de conformidad con la pasarela de pagos que en ella opera, y aplicarán los términos y condiciones propias de los medios utilizados por los usuarios de acuerdo a sus propios planes y acuerdos en este sentido.
                <br />
                <br />
                19. Derecho al Retracto. Procederá el derecho al retracto cuando el adquirente de los cursos y/o programas dispuestos en la plataforma XLEARN haya efectuado su pago a través de la plataforma en forma virtual y no haya iniciado el acceso a los mismos, ni haya comenzado ningún tipo de entrenamiento, dentro de los cinco (5) días hábiles siguientes a la realización de dicho pago, momento en el cual se perfecciona el contrato de prestación de los servicios de acceso a los cursos y/o programas dispuestos en la plataforma XLEARN. En este caso el usuario que ejerza este derecho asumirá los costos y gastos que el retracto genere a 10X THINKING, como pueden serlo los de carácter financiero por la devolución del dinero y demás que sean aplicables.
                <br />
                <br />
                20. Reembolsos. El reembolso de los pagos y contraprestaciones económicas que hayan sido pagadas por los usuarios tendrá lugar en los siguientes casos:
                <br />
                20.1. Antes de que se acceda o se de inicio al respectivo curso o programa cuando el usuario acredite un evento de fuerza mayor o caso fortuito que le impida tomar el curso y/ programa pagado en ese momento y en el futuro. Si es posible posponer el acceso al programa y/o curso en un momento posterior, no se dará lugar a reembolso alguno y se verificará si el acceso queda disponible por un término de 4 meses.
                <br />
                20.2. Cuando se presente una falla sistémica en la plataforma que impida su acceso por más de un mes, y no se haya encontrado solución al problema.
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cerrar</button>
                <button type="button" data-bs-dismiss="modal" className="btn btn-success">Aceptar</button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
