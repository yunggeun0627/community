import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import usePrincipalQuery from '../../queries/usePrincipalQuery';
import AuthRoute from '../../routes/AuthRoute';
import AuthLayout from '../../components/Layout/AuthLayout/AuthLayout';

function Auth(props) {
    const navigate = useNavigate();
    const principalQuery = usePrincipalQuery();

    console.log(principalQuery.isFetched);

    useEffect(() => {
        if (principalQuery.isFetched && principalQuery.isSuccess) {
            navigate("/", {
                replace: true,
            });
        }
    }, [principalQuery.isFetched])

    if (principalQuery.isFetched && principalQuery.isError) {
        return (
            <AuthLayout>
                <AuthRoute />
            </AuthLayout>
        );
    }

    return <></>
}

export default Auth;