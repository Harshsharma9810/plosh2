import React from 'react'
import { Navigate} from 'react-router-dom'

const ProtectedRoutes = ({children }) => {
    const token = localStorage.getItem("token")
    // console.log(token,"protect")
    return token===null ? (
        <Navigate to="/" replace />
        ) : (
            children
            );
}

export default ProtectedRoutes

