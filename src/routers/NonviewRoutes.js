import React from 'react';
import { Navigate, Outlet} from "react-router-dom";


export const NonviewRoutes = ({token, type}) => {
    return token && type ? <Navigate to={`/dashboard/${type}`} /> : < Outlet />
}