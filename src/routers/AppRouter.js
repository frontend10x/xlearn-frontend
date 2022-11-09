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
import CorusePlayback from "../screens/dashboards/CoursePlayback";
import { DashboardIntegrante } from "../screens/dashboards/DashboardIntegrante";
import { IntegranteRoute } from "./IntegranteRoute";
import { GestionDeEquipos } from "../screens/dashboards/GestionDeEquipos";
import { GestionDeCupos } from "../screens/dashboards/GestionDeCupos";
import { InfoCourse } from "../screens/InfoCourse";
import { DescripcionEvaluacion } from "../screens/dashboards/DescripcionEvaluacion";
import { GenerarCertificado } from "../screens/dashboards/GenerarCertificado";

export const AppRouter = () => {
  const { token, type } = useSelector((state) => state.auth);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<InicioScreen />} />
        <Route exact path="/courses" element={<CursosScreen />} />
        <Route exact path="/plans" element={<PlanesScreen />} />
        <Route exact path="/plans/register" element={<EmpresasRegister />} />
        <Route exact path="/enterprises" element={<EmpresaScreen />} />
        <Route exact path="/login" element={<LoginScreen />} />
        <Route exact path="/login/:id" element={<LoginScreen />} />
        <Route exact path="/contact" element={<ContactoScreen />} />
        <Route exact path="/course/info/:id" element={<InfoCourse />} />

        {/* RUTA DE EMPRESA */}
        <Route element={<EmpresasRoute token={token} type={type} />}>
          <Route
            exact
            path="/dashboard/empresa"
            element={<DashboardEmpresa />}
          />
          <Route exact path="/gestion/cupos" element={<GestionDeUsuario />} />
          <Route exact path="/compra/cupos" element={<CompraUsuarios />} />
          <Route exact path="/asignacion/cupos" element={<UsoCupos />} />
          <Route exact path="/creacion/usuarios" element={<CrearUsuarios />} />
          <Route exact path="/gestion/equipo" element={<CrearEquipos />} />
          <Route exact path="/manejo/equipos" element={<GestionDeEquipos />} />
          <Route exact path="/gestion/cupos/disponibles" element={<GestionDeCupos />} />
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
            path="/project/diagnostic/confirm_route"
            element={<ConfirmarRuta />}
          />
          <Route
            exact
            path="/project/diagnostic/training/areas"
            element={<SeleccionDeAreas />}
          />
          <Route
            exact
            path="/course/videoplayer/:name/:id"
            element={<ReproduccionDeCursos />}
          />
          <Route exact path="/dashboard/lider" element={<DashboardLider />} />
          <Route exact path="/presentacion/evaluacion/:course_id" element={<DescripcionEvaluacion/>} />
          <Route exact path="/evaluacion/:course_id" element={<Evaluacion />} />
          <Route exact path="/certificado/:course_id" element={<GenerarCertificado/>} />

        </Route>
        {/* RUTA DEL LIDER */}

        {/* RUTA DEL INTEGRANTE */}
        <Route element={<IntegranteRoute token={token} type={type} />}>
         <Route exact path="/dashboard/integrante" element={<DashboardIntegrante />} />
        </Route>

      </Routes>
    </Router>
  );
};
