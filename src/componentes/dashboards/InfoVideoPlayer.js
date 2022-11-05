import React, { useState } from "react";
import { ImageProyectos } from "../../assets/img";
export const InfoVideoPlayer = ({ proffesor }) => {

    const [pages, setPages] = useState("Proyecto");

    const pageSelected = (e) => {
        setPages(e.target.value);
    }

    console.log(pages)

    return (
        <div className="xlrn__infovideoplayer-section" >
            <div className="xlrn__infovideoplayer-container" >
                <div className="xlrn__infovideo-nav d-flex justify-content-around" >
                    <div className="xlrn__infovideo-nav-container-buttons mt-5 d-flex gap-3 h-25" >
                        <input type="button" className="xlrn__infovideo-nav__button" value="Proyecto" onClick={pageSelected} />
                        {/* <input type="button" className="xlrn__infovideo-nav__button" value="Recursos" onClick={pageSelected} />
                        <input type="button" className="xlrn__infovideo-nav__button" value="Glosario" onClick={pageSelected} /> */}
                    </div>
                    {/* <div className="xlrn__infovideo-nav-buttons-makereport mt-5 "  >
                        <input type="button" className="xlrn__infovideo-nav__button" value="Hacer un reporte" />
                    </div> */}
                </div>
                {pages === "Proyecto" &&
                    <div className="xlrn__infovideoplayer-container-content" >
                        <div className="xlrn__infovideoplayer-content" >
                            <div className="xlnPlayer__content__proyectos" >
                                <div className="proyectos__text">
                                    <p>A lo largo del curso desarrollaremos una herramienta llamada Foco de Negocio que nos permitirá definir el foco de negocio y sintetizar los resultados clave del análisis del entorno.</p>
                                    <p>El Foco de Negocio resume los hallazgos más importantes de cada lección. En la primera lección, la creación del ecosistema de oportunidades, analizaremos el panorama el de todas oportunidades de negocio recolectando primeros datos del entorno del que alimentan el componente de tendencias, cifras y referentes. Iremos profundizando en los elementos en el transcurso de las lecciones de selección de oportunidades de negocio y análisis de las 4A.</p>
                                    <p>El objetivo es que lleguemos al final del curso con los conceptos claros sobre el Foco de Negocio y que reflejen el análisis del entorno de hasta las 2 oportunidades de negocio y, con ello, podremos priorizar y definir los datos objetivos y vincularlos a la visión estratégica de la organización, es decir, el foco del negocio.</p>
                                    <p>Finalmente, lograremos desarrollar las capacidades para analizar integralmente el entorno de negocio de la temática de interés y definir un foco de negocio con una base de datos objetiva.</p>
                                </div>
                                <div className="proyectos__img">
                                    <h3>Estudiantes 1.540</h3>
                                    <img src={ImageProyectos}/>
                                </div>
                            </div>
                            <div className="xlrn__infovideoplayer-content-users" >
                                <div>
                                    {proffesor}
                                </div>
                            </div>
                        </div>
                    </div>
                }
                {/* {pages === "Recursos" &&
                    <div className="xlrn__infovideoplayer-container-content" >
                    <div className="xlrn__infovideoplayer-content" >
                        <div className="xlnPlayer__content__proyectos" >
                            <div className="proyectos__text">
                                <h3>Recursos</h3>
                            </div>
                            <div className="proyectos__img">
                                <h3>Estudiantes 1.540</h3>
                                <img src={ImageProyectos}/>
                            </div>
                        </div>
                        <div className="xlrn__infovideoplayer-content-users" >
                            <div>
                                {proffesor}
                            </div>
                        </div>
                    </div>
                </div>

                } */}
                {/* {pages === "Glosario" &&
                   <div className="xlrn__infovideoplayer-container-content" >
                   <div className="xlrn__infovideoplayer-content" >
                       <div className="xlnPlayer__content__proyectos" >
                           <div className="proyectos__text">
                              <h3>glosario</h3>
                           </div>
                           <div className="proyectos__img">
                               <h3>Estudiantes 1.540</h3>
                               <img src={ImageProyectos}/>
                           </div>
                       </div>
                       <div className="xlrn__infovideoplayer-content-users" >
                           <div>
                               {proffesor}
                           </div>
                       </div>
                   </div>
               </div>

                } */}

        </div> {/* Contenedor fin */ }
        </div >
    )
}