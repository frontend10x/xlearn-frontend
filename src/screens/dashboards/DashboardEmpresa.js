import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/loginactions";
import { vistaEmpresa } from "../../assets/img";
import { Image } from "react-bootstrap";

export const DashboardEmpresas = () => {
  const { name } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div className="dashboard__section">
      <div className="dashboard__container">
        <div className="dashboard__banner">
          <img src={vistaEmpresa} alt="banner" className="dashboard__image" />
          <div>
            <h1 className="dashboard__banner-content" >¡Hola {name}! </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
