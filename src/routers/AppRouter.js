import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { InicioScreen } from "../screens/InicioScreen";
import { CursosScreen } from "../screens/CursosScreen";
import { PlanesScreen } from "../screens/PlanesScreen";
import { EmpresaScreen } from "../screens/EmpresaScreen";
import { ContactoScreen } from "../screens/ContactoScreen";
import { LoginScreen } from "../screens/auth/LoginScreen";
import { EmpresasRegister } from "../screens/auth/EmpresaRegister";
import { DashboardEmpresas } from "../screens/dashboards/DashboardEmpresa";
import { PrivateRoute } from "./PrivateRoute";
import { useSelector } from "react-redux/es/hooks/useSelector";


export const AppRouter = () => {
  
  const {token} = useSelector(state => state.auth)  
  
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
        {/* Private Route */}
        <Route element={<PrivateRoute token={token} />}>
          <Route
            exact
            path="/dashboard/enterprise"
            element={<DashboardEmpresas  />}
          />
        </Route>
      </Routes>
    </Router>
  );
};
