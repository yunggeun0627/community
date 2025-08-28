import React, { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Auth from '../Pages/Auth/Auth';
import MainLayout from '../components/Layout/MainLayout/MainLayout';
import usePrincipalQuery from '../queries/usePrincipalQuery';
import Loading from '../components/Loading/Loading';
import Home from '../Pages/Home/Home';
import Explore from '../Pages/Explore/Explore';
import Notification from '../Pages/Notification/Notification';
import Message from '../Pages/Message/Message';
import BookMark from '../Pages/BookMark/BookMark';
import Job from '../Pages/Job/Job';
import Communites from '../Pages/Communites/Communites';
import Premium from '../Pages/Premium/Premium';
import Profile from '../Pages/Profile/Profile';
import More from '../Pages/More/More';


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
                    <Route path="/twitter/exlore" element={ <Explore /> } />
                    <Route path="/notifications" element={<Notification /> } />
                    <Route path="/messages" element={ <Message /> } />
                    <Route path="/bookmarks" element={ <BookMark /> } />
                    <Route path="/jobs" element={ <Job /> } />
                    <Route path="/communities" element={<Communites /> } />
                    <Route path="/premium" element={ <Premium /> } />
                    <Route path="/profile" element={ <Profile /> } />
                    <Route path="/more" element={ <More /> } />
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