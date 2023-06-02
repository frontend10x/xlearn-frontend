import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { InicioScreen } from "../screens/InicioScreen";
import { CursosScreen } from "../screens/CursosScreen";
import { PlanesScreen } from "../screens/PlanesScreen";
import { EmpresaScreen } from "../screens/EmpresaScreen";
import { ContactoScreen } from "../screens/ContactoScreen";
import { LoginScreen } from "../screens/auth/LoginScreen";
import { EmpresasRegister } from "../screens/auth/EmpresaRegister";
import { DashboardEmpresa } from "../screens/dashboards/DashboardEmpresa";
import { EmpresasRoute } from "./EmpresasRoute";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { DashboardLider } from "../screens/dashboards/DashboardLider";
import { LiderRoute } from "./LiderRoute";
import { DiagnosticoLider } from "../screens/dashboards/DiagnosticoLider";
import { PreguntasDiagnostico } from "../componentes/dashboards/PreguntasDiagnostico";
import { SeleccionProceso } from "../componentes/dashboards/SeleccionProceso";
import { CursosEntrenamiento } from "../screens/dashboards/CursosEntrenamiento";
import { SeleccionDeAreas } from "../screens/dashboards/SeleccionDeAreas";
import { ConfirmarRuta } from "../screens/dashboards/ConfirmarRuta";
import { GestionDeUsuario } from "../screens/dashboards/GestionDeUsuarios";
import { CrearEquipos } from "../screens/dashboards/CrearEquipos";
import { CompraUsuarios } from "../screens/dashboards/CompraUsuarios";
import { UsoCupos } from "../screens/dashboards/UsoCupos";
import { CrearUsuarios } from "../screens/dashboards/CrearUsuarios";
import { ReproduccionDeCursos } from "../screens/dashboards/ReproduccionDeCursos";
import { Evaluacion } from "../screens/dashboards/Evaluacion";
import { DashboardIntegrante } from "../screens/dashboards/DashboardIntegrante";
import { IntegranteRoute } from "./IntegranteRoute";
import { GestionDeEquipos } from "../screens/dashboards/GestionDeEquipos";
import { GestionDeCupos } from "../screens/dashboards/GestionDeCupos";
import { InfoCourse } from "../screens/InfoCourse";
import { DescripcionEvaluacion } from "../screens/dashboards/DescripcionEvaluacion";
import { GenerarCertificado } from "../screens/dashboards/GenerarCertificado";
import { PoliticasPrivacidad } from "../screens/PoliticasPrivacidad";
import { Soporte } from "../screens/dashboards/Soporte";
import { Score } from "../screens/dashboards/Score";
import { TerminosCondiciones } from "../screens/TerminosCondiciones";
import { Ayuda } from "../screens/Ayuda";
import { ForgotPassword } from "../screens/auth/ForgotPassword";
import { RecuperarPassword } from "../screens/auth/RecuperarPassword";
import CoursePlayback from "../screens/dashboards/CoursePlayback";
import { Perfil } from "../screens/dashboards/Perfil";
import { Cookies } from "../screens/Cookies";
import { ErrorScreen } from "../screens/ErrorScreen";
import { CommonRoutes } from "./CommonRoutes";
import { Reportes } from "../screens/dashboards/Reportes";
import { NonviewRoutes } from "./NonviewRoutes";

export const AppRouter = () => {
  const { token, type } = useSelector((state) => state.auth);


  return (
    <Router>
      <Routes>
        <Route element={<NonviewRoutes token={token} type={type} />}  >
          <Route exact path="/" element={<InicioScreen />} />
          <Route exact path="/courses" element={<CursosScreen />} />
          <Route exact path="/plans" element={<PlanesScreen />} />
          <Route exact path="/plans/register" element={<EmpresasRegister />} />
          <Route exact path="/enterprises" element={<EmpresaScreen />} />
          <Route exact path="/login" element={<LoginScreen />} />
          <Route exact path="/course/info/:id" element={<InfoCourse />} />
          <Route exact path="/recuperacion/:id" element={<RecuperarPassword />} />
        </Route>
          <Route exact path="/contact" element={<ContactoScreen />} />
          <Route exact path="/terminos/condiciones" element={<TerminosCondiciones />} />
          <Route exact path="/informacion/ayuda" element={<Ayuda />} />
          <Route exact path="/recuperacion/contrasena" element={<ForgotPassword />} />
          <Route exact path="/politicas/privacidad" element={<PoliticasPrivacidad />} />
          <Route exact path="/cookies/usuario" element={<Cookies />} />



        {/* RUTA DE EMPRESA */}
        <Route element={<EmpresasRoute token={token} type={type} />}>
          <Route
            exact
            path="/dashboard/empresa"
            element={<DashboardEmpresa />}
          />
          <Route exact path="/gestion/cupos" element={<GestionDeUsuario />} />
          <Route exact path="/compra/cupos" element={<CompraUsuarios />} />
          <Route exact path="/gestion/usuarios" element={<UsoCupos />} />
          <Route exact path="/creacion/usuarios" element={<CrearUsuarios />} />
          <Route exact path="/gestion/equipo" element={<CrearEquipos />} />
          <Route exact path="/manejo/equipos" element={<GestionDeEquipos />} />
          <Route exact path="/gestion/cupos/disponibles" element={<GestionDeCupos />} />
          <Route exact path="/reportes" element={<Reportes />} />
          <Route exact path="/soporte" element={<Soporte />} />
        </Route>
        {/* RUTA DE EMPRESA */}

        {/* RUTA DEL LIDER */}
        <Route element={<LiderRoute token={token} type={type} />}>
          <Route
            exact
            path="/inicia/diagnostico"
            element={<DiagnosticoLider />}
          />
          <Route
            exact
            path="/selection/process"
            element={<SeleccionProceso />}
          />
          <Route
            exact
            path="/project/diagnostic/questions"
            element={<PreguntasDiagnostico />}
          />
          <Route
            exact
            path="/project/diagnostic/training"
            element={<CursosEntrenamiento />}
          />
          <Route
            exact
            path="/project/diagnostic/training/areas"
            element={<SeleccionDeAreas />}
          />
          <Route
            exact
            path="/project/diagnostic/confirm_route"
            element={<ConfirmarRuta />}
          />
        </Route>
        {/* RUTA DEL LIDER */}

        {/* RUTA DEL INTEGRANTE */}
        <Route element={<IntegranteRoute token={token} type={type} />}>
          <Route exact path="/dashboard/lider" element={<DashboardLider />} />
          <Route exact path="/dashboard/integrante" element={<DashboardIntegrante />} />
          <Route exact path="/course/videoplayer/:name/:course_id" element={<CoursePlayback />} />
          <Route exact path="/presentacion/evaluacion/:name/:course_id" element={<DescripcionEvaluacion />} />
          <Route exact path="/evaluacion/:name/:course_id" element={<Evaluacion />} />
          <Route exact path="/puntaje/:name/:id/:course_id" element={<Score />} />
          <Route exact path="/certificado/:course_id" element={<GenerarCertificado />} />
          <Route exact path="/politicas/privacidad" element={<PoliticasPrivacidad />} />
          <Route exact path="/soporte" element={<Soporte />} />
        </Route>

        <Route element={<CommonRoutes token={token} />} >
          <Route exact path="/profile/:name" element={<Perfil />} />
        </Route>

        <Route path="*" element={<ErrorScreen />} />

      </Routes>
    </Router>
  );
};
