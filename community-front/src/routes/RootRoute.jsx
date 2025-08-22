import React, { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Auth from '../Pages/Auth/Auth';
import MainLayout from '../components/Layout/MainLayout/MainLAyout';
import usePrincipalQuery from '../queries/usePrincipalQuery';
import Loading from '../components/Loading/Loading';
import NotFound from '../Pages/NotFound/NotFound';
import AdminRoute from './AdminRoute';
import Compass from '../Pages/Compass/Compass';
import Made from '../Pages/Made/Made';
import Message from '../Pages/Message/Message';
import Updata from '../Pages/Updata/Updata';
import Home from '../Pages/Home/Home';


function RootRoute(props) {
    const location = useLocation();
    const navigate = useNavigate();
    const pathname = location.pathname;
    const principalQuery = usePrincipalQuery();

    useEffect(() => {
        if (principalQuery.isFetched && principalQuery.isError && !pathname.startsWith("/auth")) {
            navigate("/auth/login", {
                replace: true,
            });
        }
    }, [principalQuery.isFetched])

    if (!principalQuery.isFetched) {
        return <Loading />
    }

    if (principalQuery.isFetched && principalQuery.isSuccess) {
        return (
            <MainLayout>
                <Routes>
                    <Route path='/auth/*' element={<Auth />} />
                    <Route path='/compass' element={<Compass />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/made' element={<Made />} />
                    <Route path='/message' element={<Message />} />
                    <Route path='/updata' element={<Updata />} />
                    <Route path='/admin/*' element={<AdminRoute />} />
                    <Route path='*' element={ <NotFound /> } />
                </Routes>
            </MainLayout>
        );
    }
    return (
        <Routes>
            <Route path='/auth/*' element={<Auth />} />
        </Routes>
    )

}

export default RootRoute;