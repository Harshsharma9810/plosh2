// import React from 'react'
// import { Navigate } from 'react-router-dom'
// import Home from '../Pages/Home/Home'

// const ProtectedRoutes = ({isLogin,setIsLogin}) => {
//     console.log(isLogin,"2")
//     return(
//         isLogin? <Home isLogin={isLogin} setIsLogin={setIsLogin}/> : <Navigate to="/" />
//     )
// }

// export default ProtectedRoutes


import React from 'react'
import { Navigate, Route } from 'react-router-dom'
import Home from '../Pages/Home/Home';

const ProtectedRoutes = ({ token, children }) => {
    // console.log(isLogin,"22")
    // console.log(!token,"protect")
    return token!==false ? (
        children
    ) : (
        <Navigate to="/" replace />
    );
}

export default ProtectedRoutes

