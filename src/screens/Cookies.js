import React, { useEffect } from "react";
import { Container } from 'react-bootstrap'
import { HeaderDashboard } from '../componentes/dashboards/HeaderDashboard'
import { Footer } from '../componentes/Footer'

export const Cookies = () => {
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);
    return (
        <div className='cookies__section' >
            <HeaderDashboard />
            <Container>

                <h3 className="fw-bold" >Politica de cookies</h3>
                Términos de la Política de Cookies

                Aviso de Cookies

                Utilizamos cookies propias y de terceros para mejorar su experiencia, lo que hace necesario comprender sus preferencias y hábitos de navegación. Al navegar en nuestro sitio usted acepta los terminos de uso y el tratamiento de tu información personal. Si deshabilitas las cookies es posible que algunas funcionalidades no esten disponibles. Mayor información puedes consultarla en el siguiente link xlearn.com.co

                Política de Privacidad

                10X THINKING informa la Política de Privacidad adoptada para dar cumplimiento al régimen de protección de datos personales. Con base en esta política trataremos tus datos personales.

                Cookies

                Son necesarias para facilitar la navegación y mejorar la experiencia de usuario que se almacenan en el dispositivo del usuario.

                Tipos de Cookies

                Hemos dispuesto Cookies propias y de terceros, las cuales facilitan el inicio de sesión, el registro, almacenamiento de los productos seleccionados, seguridad, gestión de la identidad y ágil transaccionalidad.

                Datos y Personalización de la experiencia

                Este portal web propende por crear una experiencia personal mediante el análisis de sus preferencias en nuestro sitio, lo que permite mantener la información sobre cursos, actividades y programas dispuestos a través de Internet en este portal.

                Datos anónimos recolectados

                Nuestro sitio recopila cierta información de forma automática, ya que la dirección IP es reconocida por los servidores. Es importante darle tranquilidad e informarle que no identificamos usuarios por su nombre ni almacenamos datos de contacto de forma automática. Solo recolectaremos y trataremos la información que directamente nos suministre para identificarle cuando así sea necesario.

                Transacciones

                La información de tus transacciones económicas, de realizarse estas, se hace de forma segura por tanto estos datos son protegidos de forma rigurosa, los cuales no son recolectados mediante Cookies.

                Uso de datos personales

                Recopilamos información personal respecto de la navegación, consulta y uso que realizan las personas en nuestro portal web con el fin de conocer la forma como se relacionan con él. También podemos utilizar esta información para personalizar su experiencia de navegación en nuestro sitio web. Es posible que se compartan información con terceras partes que sean anunciantes y/o aliados de algunas actividades que comuniquemos y/o publicitemos a través de nuestro potal web.

                Navegación Anónima

                Los navegadores dan la opción de navegar de forma anónima, sin embargo, es posible que algunas Cookies puedan ser persistentes y/o necesarias para navegar en nuestro portal. Navegar de forma anónima puede afectar la funcionalidad de nuestro portal.

                Deshabilitación de las Cookies

                Las Cookies pueden ser desactivadas, averigüe en la sección “ayuda” de su navegador como desactivar los Cookies.

                Al desahabilitar las Cookies es posible que algunas de las funcionalidades de nuestro sitio no esten disponibles o bien puede suceder que deterioren los tiempos de respuestas. En caso de que ello ocurra y desee habilitarlos, averigüe en la sección “ayuda” de su navegador como activar los Cookies.

                Divulgación a terceros

                Es posible que terceros proveedores y/o aliados accedan a sus datos para mejorar su experiencia y suministrarle información y/o publicidad según sus preferencias y hábitos.

                Es posible que compartamos información con autoridades nacionales y/o internacionales cuando estas lo soliciten; o que decidamos usar la información recolectada para investigar conductas ilegales que infrinjan la ley nacional o internacional.

                Sitios webs de terceras personas

                Nuestro sitio web puede contener enlaces a otros portales web. Nuestra Política de Privacidad solo aplica en este ámbito. En caso de dirigirse a través de estos enlaces a sitios de terceros deberá consultar allá los términos aplicables. Los sitios de terceros son los responsables de su propio entorno, asi como nosotros lo somos de este.

                Conservación de los datos

                Podrémos conservar la información dejada al navegar, sin embargo, como usuario puede configurar tu navegador para borrar cookies.

                Cambios en la política de privacidad y cookies

                La dinámica de los negocios digitales, así como el estado del arte puede dar lugar a realizar cambios en la Política de Privacidad y en los términos de uso de esta página. Cuando ocurran velaremos por notificarlos. La navegación en nuestro portal cuanto esto ocurra implica una conducta inequivoca que acepta estas modificaciones o cambios.

                Derechos del interesado

                Como titular de los datos personales en nuestra Política de Privacidad encontrará los canales mediante los cuales puede ejercer el derecho al Habeas Data. Canal de Habeas Data: xlearnby10x@gmail.com
            </Container>
            <Footer/>
        </div>
    )
}
