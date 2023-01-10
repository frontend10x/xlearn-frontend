import React from 'react';
import { Navigate, Outlet} from "react-router-dom";


export const CommonRoutes = ({token}) => {
    return token ? <Outlet /> : <Navigate to='/login' />
}