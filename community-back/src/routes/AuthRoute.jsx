import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Join from '../Pages/Auth/Join/Join';
import Login from '../Pages/Auth/Login/Login';
import NotFound from '../Pages/NotFound/NotFound';


function AuthRoute(props) {
    return (
        <Routes>
            <Route path='/join' element={<Join />} />
            <Route path='/login' element={<Login />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    );
}

export default AuthRoute;