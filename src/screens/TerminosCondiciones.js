import React, { useEffect } from "react";
import { Footer } from "../componentes/Footer";
import { useSelector } from "react-redux";
import { Header } from "../componentes/Header";

export const TerminosCondiciones = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const { name } = useSelector((state) => state.auth);
  console.log(name);

  return (
    <div className="politicas__prvacidad-section">
      <Header />
      <div className="container">
        <div className="row d-flex align-items-center justify-content-center mt-5 pt-5 mb-5" >

          <div className="col-md-10">

         
          <h1>
            Términos y condiciones de privacidad y protección de datos
            personales.
          </h1>
          <p>
            En cumplimiento del marco legal vigente en materia de Protección de
            Datos Personales y de su política de privacidad, 10X THINKING le
            comunica los siguientes términos y condiciones de privacidad y
            protección de los datos personales que las empresas y/o usuarios
            deberán registrar en esta plataforma para efecto de acceder a los
            servicios contratados.{" "}
          </p>

          <p className="">
            En cumplimiento del marco legal vigente en materia de Protección de
            Datos Personales y de su política de privacidad, 10X THINKING le
            comunica los siguientes términos y condiciones de privacidad y
            protección de los datos personales que las empresas y/o usuarios
            deberán registrar en esta plataforma para efecto de acceder a los
            servicios contratados.
            <br />
            <br />
            1. La necesidad de otorgar seguridad a ciertas actividades que se
            realicen en nuestro portal web exige la plena identificación de las
            personas para realizar estas, datos además necesarios para la
            gestión de estos y la prevención de fraudes. El proceso de
            recolectar y tratar datos personales en este portal web respeta el
            derecho a la intimidad y garantiza el ejercicio del habeas data de
            quienes usan, visitan y/o se registran en este portal web, actividad
            que se realiza con sujeción a la Constitución Política de Colombia y
            prácticas internacionales en materia de protección de datos
            personales.
            <br />
            2. Los datos personales que usted reporta en esta plataforma
            correspondientes a la empresa, entidad o usuario que adquiere los
            servicios de 10X THINKING a través de su plataforma XLEARN,
            Consisten básicamente en los datos de identificación, ubicación y de
            contabilidad, cuyo tratamiento se realizará básicamente para cumplir
            con las obligaciones provenientes de la adquisición de los servicios
            a través de esta plataforma. <br />
            3. Es obligación de la empresa, entidad o usuario que accede a los
            servicios de la plataforma XLEARN, registrar los usuarios que por su
            cuenta y riesgo habrán de participar en los programas y/o
            entrenamiento adquirido en la plataforma. En consecuencia, dichos
            datos personales se reciben por 10X THINKING en condición de usuario
            de tales datos, y por ello se procederá a informar a los titulares
            de esos datos sobre el tratamiento que de ellos se realizará en la
            plataforma consecuencia de la participación en los programas y/o
            entrenamiento en los que han sido registrados. <br />
            4. En caso de que los usuarios reportados tengan la condición de
            menores de edad, esta circunstancia deberá ser previamente informada
            a 10X THINKING con la finalidad de tomar las precauciones exigidas
            por la ley frente a los datos de niños, niñas y adolescentes. <br />
            5. Los datos personales que se tratan en la plataforma XLEARN gozan
            de confidencialidad y reserva. En consecuencia, así los mantendrá
            10X THINKING y proveerá las medidas de seguridad necesarias y
            pertinentes a este tipo de datos tales como firewall, certificados
            SSL, conexión cifrada, entre otras medidas de seguridad. <br />
            6. Se advierte a la empresa o entidad que registra los datos de sus
            usuarios y/o participantes en esta plataforma, que el registro de
            estos supone que se cuenta previamente con la autorización por parte
            de los titulares de los datos para hacerlos partícipes de los cursos
            y/o programas en los cuales quedarán inscritos, y bajo este
            entendido los recibe 10X THINKING a través de su plataforma. <br />
            7. 10X THINKING como titular de este portal web se reserva el
            derecho de mantener vigente el registro de un usuario cuando este no
            haya suministrado información veraz, cuando trate la información en
            forma contraria a los usos honestos que debe darse a ella o cuando
            incumpla los términos y condiciones aquí contenidos o cualquiera de
            las obligaciones, deberes y cargas que adquiere al momento de
            registrarse en el portal web. <br />
            8. 10X THINKING informa de manera debida a las empresas, entidades
            y/o usuarios que tengan interés en registrarse en nuestro portal web
            para tomar los cursos y/o programas a través de él, que el
            suministro de los datos solicitados es de su entera responsabilidad,
            razón por la cual éstos deben ser veraces y fidedignos. Este acto de
            registro, bien se trate de un acto propio de cada persona o del
            registro que se hace por una empresa o entidad, exime de cualquier
            responsabilidad a 10X THINKING por la calidad de la información
            personal registrada. 10X THINKING asume de buena fe que la
            información suministrada es provista por el titular del dato, esta
            actualizada, es exacta, veraz y fidedigna. <br />
            9. Las personas que se registren serán responsables por cualquier
            dato inexacto, falso o carente de veracidad que suministre,
            circunstancia que podrá dar lugar a resarcir los perjuicios que
            llegare a causar con este comportamiento a 10X THINKING o terceros.{" "}
            <br />
            10. El usuario registrado en el portal web dashboard.xlearn.com.co
            podrá ejercer su derecho de conocer, actualizar, modificar, oponerse
            y eliminar los datos personales existentes en las bases de datos
            asociadas a nuestro portal web. Este derecho podrá realizarlo a
            través del siguiente correo electrónico: xlearnby10x@gmail.com
            <br />
            11. 10X THINKING es responsable del tratamiento de la información
            personal recolectada a través del portal web, responsabilidad que
            podrá delegar en un tercero, asegurando contractualmente la
            seguridad de la información personal entregada para el respectivo
            tratamiento conforme a una finalidad concreta. <br />
            12. Los datos e información recolectada por 10X THINKING en sus
            bases de datos podrán ser objeto de análisis para fines de mejorar
            la estrategia educativa y orientar al usuario en los programas de su
            interés, apoyada en herramientas de inteligencia de negocios,
            minería de datos y analítica, que permiten adquirir conocimientos
            prospectivos para fines de predicción, clasificación y segmentación,
            cuando así se considere necesario a la luz de un interés legítimo.
            El análisis de la información y el valor agregado que se genere a
            ésta se hará con estricto respeto a los derechos de las personas y
            creación de valor para nuestros grupos de interés.
          </p>
        
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
