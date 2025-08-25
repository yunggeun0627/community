import React, { useEffect } from 'react';
import { Route, Routes, useNavigate, useSearchParams } from 'react-router-dom';
import Join from '../Pages/Auth/Join/Join';
import Login from '../Pages/Auth/Login/Login';
import NotFound from '../Pages/NotFound/NotFound';
import { useQueryClient } from '@tanstack/react-query';


function AuthRoute(props) {
    return (
        <Routes>
            <Route path='/join' element={<Join />} />
            <Route path='/login' element={<Login />} />
            <Route path='/oauth2/login' element={<OAuth2Login />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    );
}

function OAuth2Login() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    useEffect(() => {
        const accessToken = searchParams.get("accessToken");
        if (!!accessToken) {
            localStorage.setItem("AccessToken", `Bearer ${accessToken}`);
            queryClient.invalidateQueries({
                queryKey: ["principal"],
            }).then(() => {
                navigate("/");
            })
        } else {
            navigate("/");
        }
    }, []);
}

export default AuthRoute;