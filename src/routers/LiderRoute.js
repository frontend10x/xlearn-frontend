import React from 'react';
import { Navigate, Outlet} from "react-router-dom";
import { DashboardLider } from '../screens/dashboards/DashboardLider';


export const LiderRoute = ({token, roles}) => {
    return token && roles === 2 ? <Outlet/> : <Navigate to='/login' />
}