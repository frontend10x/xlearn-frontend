import React from 'react';
import { Navigate, Outlet} from "react-router-dom";


export const IntegranteRoute = ({token, type}) => {
    return token && type === "Integrante" || token && type === "Lider" ? <Outlet /> : <Navigate to='/login' />
}
