import React, { useState, useEffect } from "react";
import { Image } from "react-bootstrap";
import { HeaderPublic } from "../componentes/HeaderPublic";
import { getCountrys } from "../services/services";

export const ContactoScreen = () => {

    const [countries, setCountries] = useState()

    useEffect(() => {
        async function countries() {
            try {
                const data = await getCountrys();
                setCountries(data);
            } catch (error) {
                console.error(error);
            }
        }

        countries();
    }, [])



    return (
        <div className="xlrn-contacto__section" >
            <HeaderPublic />
            <div className="xlrn-contacto__section-container" >
                <div className="xlrn-contacto__section-banner" >
                    <Image src="" alt="image__banner" />
                    <div className="xlrn-contacto__section-banner__content" >
                        <h1>¡Ponte en contacto con nosotros y entrena a tu equipo!</h1>
                        <p>Es el momento de crear, proponer , generar ingresos y, sobre todo ,de innovar. Descubre y aprovecha el potencial de tu organización y desarrolla un plan de acción en torno al entrenamiento ¡Contáctanos!</p>
                        <div className="xlrn__contacto-formulario-container" >
                            <form className="xlrn__contacto-formulario d-flex flex-column" >
                                <div className="xlrn__contacto-formulario-group d-flex gap-3" >
                                    <div className="xlrn__contacto-formulario-inputs d-flex flex-column" >
                                        <label >Nombre</label>
                                        <input type='text' />
                                    </div>
                                    <div className="xlrn__contacto-formulario-inputs d-flex flex-column " >
                                        <label >Apellidos</label>
                                        <input type='text' />
                                    </div>
                                </div>
                                <div className="xlrn__contacto-formulario-group d-flex gap-3" >
                                    <div className="xlrn__contacto-formulario-inputs d-flex flex-column" >
                                        <label >Empresa</label>
                                        <input type='text' />
                                    </div>
                                    <div className="xlrn__contacto-formulario-inputs d-flex flex-column " >
                                        <label >Correo Electronico</label>
                                        <input type='text' />
                                    </div>
                                </div>
                                <div className="xlrn__contacto-formulario-group d-flex gap-3" >
                                    <div className="xlrn__contacto-formulario-inputs d-flex flex-column" >
                                        <label >Web site</label>
                                        <input type='text' />
                                    </div>
                                    <div className="xlrn__contacto-formulario-inputs d-flex flex-column " >
                                        <label >Pais</label>
                                        <select className="h-75 w-75" >
                                            <option value="" >select</option>
                                            {countries &&
                                                countries.map((item, index) => (
                                                    <option key={index} value={item.id}>
                                                        {item.name}
                                                    </option>
                                                ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="xlrn__contacto-formulario-group d-flex" >
                                    <div className="xlrn__contacto-formulario-inputs d-flex flex-column" >
                                        <label >Que plan de Xlearn te interesa</label>
                                        <select className="w-100" >
                                            <option value="" >select</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="xlrn__contacto-formulario-group d-flex" >
                                    <div className="xlrn__contacto-formulario-inputs d-flex flex-column" >
                                        <label >cuantos cupos estas buscando</label>
                                        <select className="w-100" >
                                            <option value="" >select</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="xlrn__contacto-formulario-group d-flex" >
                                    <div className="xlrn__contacto-formulario-inputs d-flex flex-column" >
                                        <label >Dejanos saber un poco mas de ti</label>
                                        <textarea rows="7" cols="45" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}