import React from 'react';
import { Navigate, Outlet} from "react-router-dom";

export const LiderRoute = ({token, type}) => {
    return token && type === "Lider" ? <Outlet/> : <Navigate to='/login' />
}