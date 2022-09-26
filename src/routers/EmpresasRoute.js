import React from 'react';
import { Navigate, Outlet} from "react-router-dom";


export const EmpresasRoute = ({token, type}) => {
    return token && type === "Empresa" ? <Outlet /> : <Navigate to='/login' />
}
