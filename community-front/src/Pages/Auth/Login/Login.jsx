/** @jsxImportSource @emotion/react */
import * as s from './styles';
import { Button, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import api from '../../../api/axios';
import Swal from 'sweetalert2';
import { reqLogin } from '../../../api/authApi';
import { QueryClient } from '@tanstack/react-query';

function Login(props) {
    const navigate = useNavigate();
    const location = useLocation();
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [inputValue, setInputValue] = useState({
        username: location.state?.username || "",
        password: "",
    });

    useEffect(() => {
        setButtonDisabled(!!Object.values(inputValue).filter(value => !value.trim()).length);
    }, [inputValue]);

    const handleOnChange = (e) => {
        setInputValue(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    }

    const handleLoginOnClick = async () => {
        try {
            const response = await reqLogin(inputValue);
            const { accessToken } = response.data.body;
            localStorage.setItem("AccessToken", `Bearer ${accessToken}`);
            await Swal.fire({
                icon: "success",
                title: "로그인 성공",
                showConfirmButton: false,
                timer: 1000,
            });
            await QueryClient.inval
            navigate("/");
        } catch (error) {
            const { response } = error;
            await Swal.fire({
                icon: "error",
                title: response.data.body.errorMessage,
            });
        }
    }

    const handleOnKeyDown = (e) => {
        if (e.KeyDown === 13 && e.target.name === `password`) {
            handleLoginOnClick();
        }
    }

    return (
        <>
            <div css={s.textFieldContainer}>
                <TextField fullWidth={true} label="username" variant="outlined" name='username' value={inputValue.username} onChange={handleOnChange} />
            </div>
            <div css={s.textFieldContainer}>
                <TextField fullWidth={true} type='password' label="password" variant="outlined" name='password' value={inputValue.password} onChange={handleOnChange} onKeyDown={handleOnKeyDown} />
            </div>
            <div css={s.submitButtonContainer}>
                <Button fullWidth={true} disabled={buttonDisabled} variant="contained" onClick={handleLoginOnClick}>로그인</Button>
                <Link to={"/auth/join"}>회원가입</Link>
            </div>
        </>
    );
}

export default Login;