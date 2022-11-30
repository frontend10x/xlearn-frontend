import React,{useEffect} from "react";
import { useSelector } from 'react-redux'
import { HeaderDashboard } from '../componentes/dashboards/HeaderDashboard'
import { Footer } from '../componentes/Footer'

export const PoliticasPrivacidad = () => {

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    const {name} = useSelector(state => state.auth)
    console.log(name)
    return (
        <div className='politicas__prvacidad-section' >
            <HeaderDashboard />
            <div className='politicas__privacidad-container' >
                <div className='text-politicas' >
                    <h1>Política de privacidad</h1>
                    <p>En cumplimiento del marco legal vigente en materia de Protección de Datos Personales y de su política de privacidad, 10X THINKING le comunica los siguientes términos y condiciones de privacidad y protección de los datos personales que las empresas y/o usuarios deberán registrar en esta plataforma para efecto de acceder a los servicios contratados. Clic aquí para conocer más</p>
                </div>
                <div className='text-politicas' >
                    <h1>Aviso de privacidad y uso de datos</h1>
                    <p>10X THINKING S.A.S., en Adelante 10X THINKING, le comunica que sus datos personales se tratan en esta plataforma por la entrega que de ellos hizo la empresa y/o usted directamente al momento de registrarse en los programas de consultoría y/o entrenamiento que se ofrecen a través de nuestra plataforma XLEARN, para la finalidad principal de prestarle los servicios contratados y ofrecerle una experiencia de aprendizaje distinta y que sea de su interés. A continuación, se relacionan las finalidades del tratamiento de sus datos con el fin de que, de manera previa e informada, usted conozca sobre dichos tratamientos. Clic aquí para conocer más</p>
                </div>
                <div className='text-politicas' >
                    <h1>Política de cookies</h1>
                    <p>Utilizamos cookies propias y de terceros para mejorar su experiencia, lo que hace necesario comprender sus preferencias y hábitos de navegación. Al navegar en nuestro sitio usted acepta los terminos de uso y el tratamiento de tu información personal. Si deshabilitas las cookies es posible que algunas funcionalidades no esten disponibles. Clic aquí para conocer más</p>
                </div>
                <div className='text-politicas' >
                    <h1>Protección de datos personales</h1>
                    <p>Se presentan a continuación en la siguiente tabla, los hallazgos y adecuaciones requeridas, siguiendo como metodología el siguiente ciclo de vida de los datos personales:</p>
                    <ol className='text-start'>
                        <li>Recolección de los datos.</li>
                        <li>Tratamiento que se realiza durante la permanencia de los datos en la plataforma.</li>
                        <li>Eliminación y/o archivo o conservación de los datos al finalizar el servicio contratado en la plataforma. Clic aquí para conocer más</li>
                    </ol>
                </div>
                <div className='text-politicas' >
                    <h1>Aurtorización de uso de imagen en video y fotos</h1>
                    <p>Yo, {name}, identificado con cédula de ciudadanía No. {1036692349}, obrando en mi propio nombre y representación, por medio del presente documento y a través de mi rúbrica en el mismo, expreso y consiento en lo siguiente:</p>
                    <ol>
                        <li>Que he sido informado por 10 X THINKING S.A.S, en adelante 10X THINKING de la toma de fotografías y/o grabación de videos en los cuales ha sido grabada mi imagen personal en el marco de las actividades de docencia y/o consultoría a través de la plataforma XLEARN.</li>
                        <li>En consecuencia, autorizo de manera expresa y de forma gratuita a 10X THINKING, para que use mi imagen contenida en las fotografías y/o en cualquiera otro medio utilizado por 10X THINKING, bien sea en medio físico, digital o virtual para la promoción de sus actividades a través de la plataforma XLEARN y en todo caso, actividades relacionadas directa o indirectamente con su objeto social como lo son las educativas, culturales, profesionales, entre otras.</li>
                        <li>Que así mismo autorizo de manera expresa a 10X THINKING para que mi imagen pueda ser reproducida, divulgada y distribuida en medios impresos (revistas, folletos, afiches, volantes, etc.), así como a través de Internet a través de los portales web de 10X THINKING, tanto en Colombia como en cualquier otro lugar del mundo, siempre que tales acciones estén directa o indirectamente relacionadas con alguna de las actividades en desarrollo del objeto social de 10X THINKING. Continúa leyendo aquí</li>
                    </ol>
                </div>
            </div>
            <Footer />
        </div>
    )
}
