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

export const AppRouter = () => {
  const { token, roles } = useSelector((state) => state.auth);
  
  console.log(roles, "roles");
  
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<InicioScreen />} />
        <Route exact path="/courses" element={<CursosScreen />} />
        <Route exact path="/plans" element={<PlanesScreen />} />
        <Route exact path="/plans/register" element={<EmpresasRegister />} />
        <Route exact path="/enterprises" element={<EmpresaScreen />} />
        <Route exact path="/login" element={<LoginScreen />} />
        <Route exact path="/contact" element={<ContactoScreen />} />
        {/* Empresa Route */}
        <Route element={<EmpresasRoute token={token} roles={roles} />}>
          <Route
            exact
            path="/dashboard/empresa"
            element={<DashboardEmpresa />}
          />
          <Route exact path="/gestion/cupos" element={<GestionDeUsuario />} />
          <Route exact path="/gestion/equipo" element={<CrearEquipos />} />
          <Route exact path="/compra/cupos" element={<CompraUsuarios />} />
        </Route>
        <Route element={<LiderRoute token={token} roles={roles} />}>
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
          <Route exact path="/dashboard/lider" element={<DashboardLider />} />
          <Route exact path="/comprar/cupos" element={<CompraUsuarios />} />
        </Route>
      </Routes>
    </Router>
  );
};
