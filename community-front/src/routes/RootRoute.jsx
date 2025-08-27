import React, { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Auth from '../Pages/Auth/Auth';
import MainLayout from '../components/Layout/MainLayout/MainLAyout';
import usePrincipalQuery from '../queries/usePrincipalQuery';
import Loading from '../components/Loading/Loading';
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
                    <Route path="/" element={ <Home /> } />
                    {/* <Route path="/twitter/exlore" element={ <Exlore /> } />
                    <Route path="/notifications" element={<Notifications /> } />
                    <Route path="/messages" element={ <Messages /> } />
                    <Route path="/bookmarks" element={ <Bookmarks /> } />
                    <Route path="/jobs" element={ <Jobs /> } />
                    <Route path="/communities" element={ <Communities /> } />
                    <Route path="/premium" element={ <Premium /> } />
                    <Route path="/profile" element={ <Profile /> } />
                    <Route path="/more" element={ <More /> } /> */}
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