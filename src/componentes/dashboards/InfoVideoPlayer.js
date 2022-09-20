import React, { useState } from "react";

export const InfoVideoPlayer = () => {

    const [pages, setPages] = useState();

    const pageSelected = (e) => {
        alert(e.target.value)
    }

    return (
        <div className="xlrn__infovideoplayer-section" >
            <div className="xlrn__infovideoplayer-container" >
                <div className="xlrn__infovideo-nav d-flex justify-content-around" >
                    <div className="xlrn__infovideo-nav-container-buttons mt-5 d-flex gap-3 h-25" >
                        <input type="button" className="xlrn__infovideo-nav__button" value="Proyecto" onClick={pageSelected} />
                        <input type="button" className="xlrn__infovideo-nav__button" value="Recursos" onClick={pageSelected} />
                        <input type="button" className="xlrn__infovideo-nav__button" value="Glosario" onClick={pageSelected} />
                    </div>
                    <div className="xlrn__infovideo-nav-buttons-makereport mt-5 "  >
                        <input type="button" className="xlrn__infovideo-nav__button" value="Hacer un reporte" />
                    </div>
                </div>
                <div className="xlrn__infovideoplayer-container-content" >
                    <div className="xlrn__infovideoplayer-content d-flex gap-5" >
                        <h3 className="w-50 ms-5" >En este curso desarrollaremos un prototipo de nuestra idea de negocio, que nos servirá para comunicarla a clientes potenciales y recibir su retroalimentación. Una técnica muy útil para crear prototipos de ideas de negocios es la “landing page”, o página de aterrizaje. Esta técnica consiste en crear un sitio web que contiene la información mínima necesaria para que una persona entienda una idea de negocio y se motive a querer conocer o investigar más. Revisaremos los contenidos que debemos crear para cada sección de la landing page y luego, veremos cómo subirlos a internet y crear nuestro propio sitio web usando la herramienta gratuita Google Sites. Los acompañaremos a lo largo de todo el proceso, realizando el ejercicio paso a paso con un caso ejemplo. Este caso consistirá en una empresa que vende planes alimenticios para ciclistas, que hemos llamado Power Eat. Con este proyecto lograremos desarrollar la capacidad de contar nuestra idea de negocio de una forma corta y visual, que resulte atractiva para un cliente potencial. La landing page que tendremos al final será un excelente instrumento para validar con estos clientes potenciales su posible interés en nuestra solución, y que nos den una retroalimentación valiosa con sus preguntas, críticas constructivas, e ideas. Esto fortalecerá nuestra solución y nos ayudará a prepararnos para los pasos siguientes en el desarrollo de nuestro nuevo negocio.</h3>
                    <div className="xlrn__infovideoplayer-content-users" >
                        <div>
                            CUADRICULA DE USUARIOS
                        </div>
                    </div>
                    </div>
                </div>

            </div> {/* Contenedor fin */}
        </div>
    )
}