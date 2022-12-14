import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { registerbanner } from "../../assets/img";
import { HeaderDashboard } from '../../componentes/dashboards/HeaderDashboard';

export const Soporte = () => {

    const [section, setSection] = useState();

    const select = (e) => {
        
        const selector = e.target.value;
        
        if (selector === "Centro de ayuda" ) {
            setSection("Centro de ayuda")
        }else if (selector === "FAQ's") {
            setSection("FAQ's");
        } else if (selector === "Usuarios" ) {
            setSection("Usuarios");
        } else if (selector === "Xlearn") {
           setSection("Xlearn")
        }
    }

    const {type} = useSelector(state => state.auth);

  return (
    <div className='soporte__section' >
        <div className='soporte__section' >
            <HeaderDashboard type={type} />
            <div className='soporte__banner h-100' /* style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.675)), url("${registerbanner}")` }}  */>
                <div className='soporte__banner-content' >
                    <h1>Centro de ayuda | <span className='fw-bold' >FAQ's </span> </h1>
                </div>
                
                <div>
                    <input type="button" value="Centro de ayuda" onClick={select} /> |
                    <input type="button" value="FAQ's" onClick={select} /> |
                    <input type="button" value="Usuarios" onClick={select} /> |
                    <input type="button" value="Xlearn" onClick={select} /> 
                </div>
                {section === "Centro de ayuda" && 
                    <div> 

                    </div>
                }
                {section === "Centro de ayuda" && 
                    <div>

                    </div>
                }
                {section === "Centro de ayuda" && 
                    <div>

                    </div>
                }
                {section === "Xlearn" &&
                    <div className='section__soporte-xlearn' >
                        <div>
                            <h1>¿Qué es Xlearn?</h1>
                            <p>Xlearn es una plataforma especializada en consultoría y contenido de innovación y emprendimiento corporativo, en la cual podrás desarrollar tus proyectos empresariales, entrenar a tus equipos y generar estrategias para el éxito de tu negocio, fortalecimiento del capital humano y desarrollo de las capacidades instaladas de la organización.</p>
                        </div>
                        <div> 
                            <h1>¿Cómo funcionan los cursos?</h1>
                            <p>Los cursos están compuestos por material audiovisual, recursos y herramientas que permiten que tus proyectos y entrenamientos sean desarrollados de manera efectiva y en los tiempos requeridos. Cada curso cuenta con: nivelación (conocimientos básicos para desarrollar el curso), proyecto (elaboración de una herramienta paso a paso de acuerdo al contenido propuesto), Introducción (explicación general del tema), y lecciones (cada uno de los puntos clave del tema a desarrollar divididos en pequeñas cápsulas).</p>
                        </div>
                        <div> 
                            <h1>¿Por dónde empezar?</h1>
                            <p>El primer paso es registrarte, adquiere tu suscripción y comienza a interactuar con la plataforma, explora el contenido, revisa las herramientas y recursos que te ayudarán en tu proceso de aprendizaje.</p>
                        </div>
                        <div> 
                            <h1>¿Entrenamiento o proyecto?</h1>
                            <p>Determina las necesidades de tu organización y establece los focos centrales que son necesarios para iniciar con el entrenamiento; para realizar un proyecto, verifica el estado en el que se encuentra y establece la ruta de aprendizaje que consideres más apropiada en este proceso.</p>
                        </div>
                    </div>
                }

            </div>
        </div>
    </div>
  )
}
