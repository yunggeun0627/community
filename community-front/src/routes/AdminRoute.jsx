import React, { useEffect } from 'react';
import usePrincipalQuery from '../queries/usePrincipalQuery';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import User from '../pages/User/User';
import NotFound from '../Pages/NotFound/NotFound';
import Home from '../Pages/Home/Home';

function AdminRoute(props) {
    const navigate = useNavigate();
    const principalQuery = usePrincipalQuery();
    const location = useLocation();
    const authorities = principalQuery.isFetched && principalQuery.data.data.body.authorities;

    useEffect(() => {
        const roles = authorities.map(({ authority }) => authority);
        if (!roles.includes("ROLE_ADMIN")) {
            Swal.fire({
                icon: "warning",
                title: "접근 권한이 없습니다.",
                timer: 2000,
                showCancelButton: false,
            }).then(() => {
                navigate("/");
            });
        }

    }, [location.pathname]);

    return (
        <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/user' element={<User />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    );
}

export default AdminRoute;