import React from 'react';
import { Navigate, Outlet} from "react-router-dom";


export const EmpresasRoute = ({token, roles}) => {
    return token && roles === 1 ? <Outlet /> : <Navigate to='/login' />
}
