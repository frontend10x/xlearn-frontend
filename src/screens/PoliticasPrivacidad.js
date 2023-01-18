import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useSelector } from 'react-redux'
import { HeaderDashboard } from '../componentes/dashboards/HeaderDashboard'
import { Footer } from '../componentes/Footer'

export const PoliticasPrivacidad = () => {

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    const { name } = useSelector(state => state.auth)
    console.log(name)
    return (
        <div className='politicas__prvacidad-section' >
            <HeaderDashboard />
            <Container className="politicas__privacidad-container" >

                <h3 className="fw-bold" >
                    Aviso de privacidad para los usuarios
                </h3>


                10X THINKING S.A.S., en Adelante 10X THINKING, le comunica que sus datos personales se tratan en esta plataforma por la entrega que de ellos hizo la empresa y/o usted directamente al momento de registrarse en los programas de consultoría y/o entrenamiento que se ofrecen a través de nuestra plataforma XLEARN , para la finalidad principal de prestarle los servicios contratados y ofrecerle una experiencia de aprendizaje distinta y que sea de su interés.
<br/>
<br/>
A continuación, se relacionan las finalidades del tratamiento de sus datos con el fin de que, de manera previa e informada, usted conozca sobre dichos tratamientos: 
<br/>
<br/>
Análisis de datos, perfilamiento basado en herramientas de analítica que nos permiten inscribirlo como participante en las rutas y/o cursos de entrenamiento que sean de su interés y le permitan por ende concentrarse en ello. Con esta misma finalidad, podrá recolectarse la información de sus interacciones con la plataforma y/o asistencia a los cursos a través de herramientas prediseñadas como los chats bots. 
<br/>
<br/>
Participar en programas de acumulación de puntos con el fin de obtener beneficios con terceras empresas dentro del mercado. Participar en grupos y comunidades a través de la plataforma. Acceso a sus datos a través de aliados caza talentos. 
<br/>
<br/>
Oferta de nuevos cursos, contenidos y servicios por parte de 10X THINKING o de sus aliados, siempre dentro del ámbito de los intereses del usuario detectados a través del uso de la plataforma por él. Previamente informado de las anteriores finalidades en el tratamiento de sus datos personales, al momento de dar clic y continuar con el cambio de su clave y/o con su participación en los programas y entrenamientos para los cuales usted fue registrado, 10X THINKING entiende que autoriza el tratamiento de sus datos e información personal para las finalidades antes expuestas, no sin antes reiterarle nuestro compromiso por la protección de sus datos y la confidencialidad en la cual se mantendrán los mismos. 
<br/>
<br/>
Una vez culminado su programa y mientras no se trate del cumplimiento de una obligación legal por nuestra parte, puede solicitar la exclusión de sus datos o bien oponerse a cualquier tratamiento que no desee, o bien actualizar, rectificar, modificar y en términos generales conocer sobre el tratamiento de sus datos personales para lo cual puede dirigir una comunicación a través del siguiente canal de habeas data: xlearnby10x@gmail.com de igual manera puede consultar nuestra política de privacidad en el siguiente link dashboard.xlearn.com.co 
<br/>
<br/>
En relación con los datos e información personal a la cual usted puede acceder a través de la plataforma XLEARN, contenida en los cursos, videos, blogs o comunidades virtuales, es preciso que tenga en cuenta que dicha información está protegida por las normas sobre Protección de datos Personales vigentes en Colombia, y por ende, no debe darse un uso indebido o distinto al que resulte pertinente para los fines educativos de los cursos y/o programas de su interés. 
<br/>
<br/>
<h3 className="fw-bold" >Aviso para la encuesta de satisfacción</h3> 
<br/>
Confiamos en que su participación en nuestros programas y entrenamiento haya sido de su gusto e interés y por eso le agradecemos haber diligenciado esta encuesta de satisfacción. En este sentido contamos con su autorización para poder enviarle ofertas personalizadas de otros eventos, programas, cursos u entrenamientos que sean de su interés, y que lidere nuestra empresa a través de alguna de nuestras marcas, o bien nuestras filiales o aliados, siempre en el marco de portafolios relacionados con la innovación y la gestión de tecnología. 
<br/>
<br/>
Le recordamos que en cualquier momento puede oponerse al tratamiento de datos que aquí se menciona y por ende excluirse del envío de invitaciones alrededor del tema que nos convoca, o bien actualizar, rectificar, modificar y en términos generales conocer sobre el tratamiento de sus datos personales para lo cual puede dirigir una comunicación a través del siguiente canal de habeas data: xlearnby10x@gmail.com de igual manera puede consultar nuestra política de privacidad en el siguiente link dashboard.xlearn.com.co
            </Container>

            <Footer />
        </div>
    )
}
