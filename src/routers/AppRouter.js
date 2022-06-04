import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { InicioScreen } from "../screens/InicioScreen";
import { CursosScreen } from "../screens/CursosScreen";
import { PlanesScreen } from "../screens/PlanesScreen";
import { EmpresaScreen } from "../screens/EmpresaScreen";
import { ContactoScreen } from "../screens/ContactoScreen";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<InicioScreen />} />
        <Route exact path="/courses" element={<CursosScreen />} />
        <Route exact path="/plans" element={<PlanesScreen />} />
        <Route exact path="/enterprises" element={<EmpresaScreen />} />
        <Route exact path="/contact" element={<ContactoScreen />} />
      </Routes>
    </Router>
  );
};
