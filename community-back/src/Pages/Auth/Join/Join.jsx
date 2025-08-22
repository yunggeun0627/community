/** @jsxImportSource @emotion/react */
import * as s from './styles';
import { Button, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { JOIN_REGEX, JOIN_REGEX_ERROR_MESSAGE } from '../../../constants/authRegex';
import api from '../../../api/axios';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';
import { reqJoin } from '../../../api/authApi';


function Join(props) {
    const navigate = useNavigate();
    const [ buttonDisabled, setButtonDisabled ] = useState(true);
    const [ inputValue, setInputValue ] = useState({
        username: "",
        password: "",
        passwordCheck: "",
        fullName: "",
        email: "",
    });

    const [ error, setError ] = useState({
        username: false,
        password: false,
        passwordCheck: false,
        fullName: false,
        email: false,
    });

    const [ helpText, setHelpText ] = useState({
        username: "",
        password: "",
        passwordCheck: "",
        fullName: "",
        email: "",
    });

    useEffect(() => {
        const isEmptyValue = !!Object.values(inputValue).filter(value => !value.trim()).length;
        const isError = !!Object.values(error).filter(value => !!value).length;
        setButtonDisabled(isEmptyValue || isError);

        const errorEntries = Object.entries(error);
        errorEntries.forEach(([key, value]) => {
            setHelpText(prev => ({
                ...prev,
                [key]: !value ? "" : JOIN_REGEX_ERROR_MESSAGE[key],
            }));
        });
    }, [error]);

    const handleOnChange = (e) => {
        setInputValue(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));

        if (!JOIN_REGEX["notEmpty"].test(e.target.value)) {
            setError(prev => ({
                ...prev,
                [e.target.name]: false,
            }));
            return;
        }

        if (e.target.name === "passwordCheck") {
            setError(prev => ({
                ...prev,
                [e.target.name]: e.target.value !== inputValue.password,
            }));
            return;
        }

        setError(prev => ({
            ...prev,
            [e.target.name]: !JOIN_REGEX[e.target.name].test(e.target.value),
        }))
    }

    const handleJoinOnClick = async () => {
        const reqData = {
            username: inputValue.username,
            password: inputValue.password,
            fullName: inputValue.fullName,
            email: inputValue.email,
        }
        try {
            const response = await reqJoin(reqData);
            const {data} = response;
            console.log(data);
            await Swal.fire({
                position: "center",
                icon: "success",
                title: "가입이 완료되었습니다.",
                showConfirmButton: false,
                timer: 1000
            });
            navigate("/auth/login", {
                state: {
                    username: data.body.username,
                }
            });
        } catch(error) {
            console.log(error)
            const {response} = error;
            const {data} = response;
            console.log(data);
            await Swal.fire({
                icon: "error",
                title: data.body.username,
            });
        }
    }

    return (
        <>
            <div css={s.textFieldContainer}>
                <TextField fullWidth={true} error={error.username} label="username" variant="outlined" name='username' value={inputValue.username} onChange={handleOnChange} />
                {
                    error.username &&
                    <p css={s.textFieldHelp}>{helpText.username}</p>
                }
            </div>
            <div css={s.textFieldContainer}>
                <TextField fullWidth={true} error={error.password} type='password' label="password" variant="outlined" name='password' value={inputValue.password} onChange={handleOnChange} />
                {
                    error.password &&
                    <p css={s.textFieldHelp}>{helpText.password}</p>
                }
            </div>
            <div css={s.textFieldContainer}>
                <TextField fullWidth={true} error={error.passwordCheck} type='password' label="password-check" variant="outlined" name='passwordCheck' value={inputValue.passwordCheck} onChange={handleOnChange} />
                {
                    error.passwordCheck &&
                    <p css={s.textFieldHelp}>{helpText.passwordCheck}</p>
                }
            </div>
            <div css={s.textFieldContainer}>
                <TextField fullWidth={true} error={error.fullName} label="full-name" variant="outlined" name='fullName' value={inputValue.fullName} onChange={handleOnChange} />
                {
                    error.fullName &&
                    <p css={s.textFieldHelp}>{helpText.fullName}</p>
                }
            </div>
            <div css={s.textFieldContainer}>
                <TextField fullWidth={true} error={error.email} label="e-mail" variant="outlined" name='email' value={inputValue.email} onChange={handleOnChange} />
                {
                    error.email &&
                    <p css={s.textFieldHelp}>{helpText.email}</p>
                }
            </div>
            <div css={s.submitButtonContainer}>
                <Button fullWidth={true} disabled={buttonDisabled} variant="contained" onClick={handleJoinOnClick}>가입하기</Button>
                <Link to={"/auth/login"}>로그인</Link>
            </div>
        </>
    );
}

export default Join;