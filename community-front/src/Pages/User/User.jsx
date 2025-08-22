import { Autocomplete, Button, ButtonGroup, FormLabel, Input, Pagination, PaginationItem, Stack, TextField } from '@mui/material';
import Grid from '@mui/material/Grid';
import { DataGrid, useGridApiRef } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';
import useSearchUserQuery from '../../queries/useSearchUserquery';
import Loading from '../../components/Loading/Loading';
import { MODE_NAME } from '../../constants/mode';
import { useModeStore } from '../../store/useModeStore';
import { useInputDataStore } from '../../store/useInputStore';
import Swal from 'sweetalert2';
import { reqDeleteUser, reqRegisterUser } from '../../api/userApi';
import { useQueryClient } from '@tanstack/react-query';
import { useSearchUserStore } from '../../store/useSearchUserStore';

function HeaderButtons() {
    const [mode, setMode] = useState(MODE_NAME.NONE);
    const { setRegisterMode, setModifyMode, setDeleteMode } = useModeStore();
    const { inputData, setData } = useInputDataStore();
    const [searchText, setSearchText] = useState("");
    const { searchOptions, setPageOption, setSearchTextOption } = useSearchUserStore();
    const queryClient = useQueryClient();

    useEffect(() => {
        switch (mode) {
            case MODE_NAME.REGISTER: setRegisterMode(); break;
            case MODE_NAME.MODIFY: setModifyMode(); break;
            case MODE_NAME.DELETE: setDeleteMode(); break;
            case MODE_NAME.NONE: setNoneMode(); break;
        }
    }, [mode]);

    const handleModeOnClick = (e) => {
        setMode(e.target.value);
    }

    const register = async () => {
        const formData = new FormData();
        const inputValues = inputData.userManagementPageInputData;
        formData.append('username', inputValues.username);
        formData.append('password', inputValues.password);
        formData.append('fullName', inputValues.fullName);
        formData.append('email', inputValues.email);
        formData.append('roleIds', inputValues.roles.map(role => role.roleId));
        if (!!inputValues.file) {
            formData.append('file', inputValues.file);
        }

        try {
            const response = await reqRegisterUser(formData);
            await queryClient.invalidateQueries({
                // queryKey: ["searchUser"], 키값이 정확히 일치
                predicate: (query) => query.queryKey.includes("searchUser"),
            });
            setMode(MODE_NAME.NONE);
        } catch (error) {
            const response = error.response;
            await Swal.fire({
                icon: "error",
                title: response.data.body,
                showConfirmButton: false,
                timer: 1000,
            });
        }
    }

    const modify = async () => {
        const formData = new FormData();
        const inputValues = inputData.userManagementPageInputData;
        const modifyData = inputData.modifyInputData;

        console.log(inputValues);
        console.log(modifyData);

        if (inputValues.fullName !== modifyData.fullName) {
            formData.append('fullName', inputValues.fullName);
        }
        if (inputValues.email !== modifyData.email) {
            formData.append('email', inputValues.email);
        }
        if (inputValues.roles !== modifyData.rolse) {
            formData.append('roleIds', inputValues.roles.map(role => role.roleId));
        }
        if (!!inputValues.file) {
            formData.append('oldFilePath', modifyData.file.name);
            if (inputValues.file?.size) {
                formData.append('file', inputValues.file);
            }
        }

        if (!formData.values().next().done) {
            handleCanceOnClick();
            return;
        }

        formData.append('userId', inputValues.userId);

        try {
            const response = await reqRegisterUser(formData);
            await queryClient.invalidateQueries({
                // queryKey: ["searchUser", 1,  20, "name"], 키값이 정확히 일치
                predicate: (query) => query.queryKey.includes("searchUser"),
            });
            setMode(MODE_NAME.NONE);
        } catch (error) {
            const response = error.response;
        }
    }

    const remove = async () => {
        const deleteIds = inputData.deleteIds || [];

        if (deleteIds.length === 0) {
            setMode(MODE_NAME.NONE);
            return;
        }

        try {
            await reqDeleteUser(inputData.deleteIds);
            await queryClient.invalidateQueries({
                predicate: (query) => query.queryKey.includes("searchUser"),
            });
        } catch (error) {
            const reponse = error.response;
        }
        setData("deleteIds", [])
        setMode(MODE_NAME.NONE);
    }

    const handleOkOnClick = async () => {
        switch (mode) {
            case MODE_NAME.REGISTER: await register(); break;
            case MODE_NAME.MODIFY: await modify(); break;
            case MODE_NAME.DELETE: await remove(); break;
        }
    }

    const handleCanceOnClick = () => {
        setMode(MODE_NAME.NONE);
    }

    const handleSearchTextOnChange = (e) => {
        setSearchText(e.target.value);
    }

    const handleSearchOnClick = () => {
        setPageOption(1);
        setSearchTextOption(searchText);
    }

    useEffect(() => {
    }, [searchOptions.searchText]);

    if (mode === MODE_NAME.NONE) {
        return <Grid container={true} direction={"row"} justifyContent={"flex-end"} width={"100%"} marginBottom={1} >
            <ButtonGroup sx={{ marginRight: "1rem" }}>
                <Button value={MODE_NAME.REGISTER} onClick={handleModeOnClick} sx={{ width: "6rem" }} color="primary">등록</Button>
                <Button value={MODE_NAME.MODIFY} onClick={handleModeOnClick} sx={{ width: "6rem" }} color="warning">수정</Button>
                <Button value={MODE_NAME.DELETE} onClick={handleModeOnClick} sx={{ width: "6rem" }} color="error">삭제</Button>
            </ButtonGroup>
            <TextField size="small" value={searchText} onChange={handleSearchTextOnChange} />
            <Button variant="outlined" onClick={handleSearchOnClick}>조회</Button>
        </Grid>
    }

    if (mode === MODE_NAME.NONE) {
        return <Grid container={true} direction={"row"} justifyContent={"flex-end"} width={"100%"} marginBottom={1} >
            <ButtonGroup sx={{ marginRight: "1rem" }}>
                <Button onClick={handleOkOnClick} sx={{ width: "6rem" }} color="success">확인</Button>
                <Button onClick={handleCanceOnClick} sx={{ width: "6rem" }} color="error">취소</Button>
            </ButtonGroup>
            <TextField size="small" value={searchText} onChange={handleSearchTextOnChange} />
            <Button variant="outlined" onClick={handleSearchOnClick}>조회</Button>
        </Grid>
    }
}


function HeaderInputs() {
    const { mode } = useModeStore();
    const disabled = mode === MODE_NAME.NONE || mode === MODE_NAME.DELETE;

    const roles = [
        { title: "ROLE_ADMIN", roleId: 1 },
        { title: "ROLE_USER", roleId: 2 },
    ];

    const [values, setValues] = useState({
        username: "",
        password: "",
        fullName: "",
        email: "",
        roles: [roles[1]],
        file: "",
    });

    const { inputData, setData } = useInputDataStore();

    useEffect(() => {
        if (mode === MODE_NAME.NONE) {
            setValues({
                username: "",
                password: "",
                fullName: "",
                email: "",
                roles: [roles[1]],
                file: "",
            });
        }
    }, [mode]);

    useEffect(() => {
        setData("userManagementPageInputData", values);
    }, [values]);

    useEffect(() => {
        if (mode === MODE_NAME.MODIFY) {
            setValues(inputData.modifyInputData);
        }
    }, [inputData.modifyInputData])

    const handleInputOnChange = (e, value) => {
        if (!!value) {
            setValues(prev => ({
                ...prev,
                roles: [],
            }));
            return;
        }

        setValues(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    }

    const handleFileLoadOnClick = () => {
        const fileInput = document.createElement('input');
        fileInput.setAttribute("type", "file");
        fileInput.Click();
        fileInput.onChange = (e) => {
            setValues(prev => ({
                ...prev,
                file: e.target.files[0],
            }))
        }
    }

    return <Grid container sx={{ marginBottom: "2rem", border: "0.1rem solid #dbdbdb", borderRadius: "0.4rem", padding: "1rem" }}>
        <Grid container alignItems={"center"} spacing={2} sx={{ width: "100%", marginBottom: "1rem" }}>
            <FormLabel sx={{ width: "6rem", textAlign: "center" }}>사용자이름</FormLabel>
            <TextField disable={disabled || mode === MODE_NAME.MODIFY} name="username" value={values.username} onChange={handleInputOnChange} size="small" sx={{ flexGrow: 1 }} />
            <FormLabel sx={{ width: "6rem", textAlign: "center" }}>비밀번호</FormLabel>
            <TextField disable={disabled || mode === MODE_NAME.MODIFY} name="password" value={values.password} onChange={handleInputOnChange} size="small" sx={{ flexGrow: 1 }} />
        </Grid>
        <Grid container alignItems={"center"} spacing={2} sx={{ width: "100%", marginBottom: "1rem" }}>
            <FormLabel sx={{ width: "6rem", textAlign: "center" }}>성명</FormLabel>
            <TextField disable={disabled} name="fullName" value={values.fullName} onChange={handleInputOnChange} size="small" sx={{ flexGrow: 1 }} />
            <FormLabel sx={{ width: "6rem", textAlign: "center" }}>이메일</FormLabel>
            <TextField disable={disabled} name="email" value={values.email} onChange={handleInputOnChange} size="small" sx={{ flexGrow: 1 }} />
        </Grid>
        <Grid container alignItems={"center"} spacing={2} sx={{ width: "100%" }}>
            <FormLabel sx={{ width: "6rem", textAlign: "center" }}>권한</FormLabel>
            <Autocomplete
                name="roles"
                onChange={handleInputOnChange}
                sx={{ flexGrow: 1, width: "11rem" }}
                size="small"
                multiple
                id="roles"
                options={roles}
                getOptionLabel={(option) => option.title}
                value={values.roles}
                disabled={disabled}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        variant="outlined"
                        label="사용자 권한 선택"
                    />
                )}
            />
            <FormLabel sx={{ width: "6rem", textAlign: "center" }}>프로필이미지</FormLabel>
            <Grid container spacing={0} sx={{ flexGrow: 0.3 }}>
                <Button disable={disabled} variant="contained" onClick={handleFileLoadOnClick}>불러오기</Button>
                <TextField value={values.file?.name} disabled size="small" sx={{ flexGrow: 1 }} />
            </Grid>
        </Grid>
    </Grid>
}

function DataTable({ apiRef }) {
    const [page, setPage] = useState(1);
    const { searchOptions, setPageOption } = useSearchUserStore();
    const searchUserQuery = useSearchUserQuery(searchOptions.page, searchOptions.size, searchOptions.searchText);
    const rows = searchUserQuery.isFetching ? [] : searchUserQuery?.data?.data.body.contents;
    const totalPages = searchUserQuery.isFetching ? 0 : searchUserQuery?.data?.data.body.totalPages;
    const { mode } = useModeStore();
    const { setData } = useInputDataStore();

    const columns = [
        { field: "userId", headerName: "ID", width: 70 },
        { field: "username", headerName: "사용자 이름", width: 120 },
        { field: "passwordReset", headerName: "비밀번호 초기화", width: 100 },
        { field: "fullName", headerName: "성명", width: 100 },
        { field: "email", headerName: "이메일", width: 200 },
        { field: "profileImgPath", headerName: "프로필이미지경로", width: 200 },
        { field: "roleNames", headerName: "권한", width: 200 },
    ]

    useEffect(() => {
        setPage(searchOptions.page);
    }, [searchOptions.searchText]);

    useEffect(() => {
        setPageOption(page);
    }, [page]);

    const handleRowSelectionOnChange = (e) => {
        const ids = [...e.ids];
        if (mode === MODE_NAME.DELETE) {
            setData("deleteIds", ids);
            return;
        }

        if (mode === MODE_NAME.MODIFY) {
            const modifyId = ids[0];
            const selectedRow = rows.find(row => row.userId === modifyId)
            console.log(selectedRow);
            if (!!selectedRow) {
                const roles = [
                    { title: "ROLE_ADMIN", roleId: 1 },
                    { title: "ROLE_USER", roleId: 2 },
                ];
                const roleNames = selectedRow.roleNames.split(",");
                setData("modifyInputData", {
                    userId: selectedRow.userId,
                    username: selectedRow.username,
                    fullName: selectedRow.fullName,
                    email: selectedRow.email,
                    roles: roleNames.map(roleNames.map(roleName => roles.find(role => role.title === roleName))),
                    file: { name: selectedRow.profileImgPath },
                })
            }
        }
    }

    const handlePageOnChange = (e, page) => {
        setPage(page);
    }

    if (searchUserQuery.isFetching) {
        return <Loading />
    }

    return <Grid container width={"100%"} height={"56rem"}>
        <DataGrid
            columns={columns}
            rows={rows}
            getRowId={row => row.userId}
            hideFooter
            checkboxSelection={mode === MODE_NAME.MODIFY || mode === MODE_NAME.DELETE}
            disableMultipleRowSelection={mode === MODE_NAME.MODIFY}
            apiRef={apiRef}
            onRowSelectionModelChange={handleRowSelectionOnChange}
        />
        <Stack direction={"row"} width={"100%"} justifyContent={"center"} marginTop={1}>
            <Pagination count={totalPages} page={page} onChange={handlePageOnChange} />
        </Stack>
    </Grid>
}

function User(props) {
    const apiRef = useGridApiRef();
    return (
        <>
            <Grid container={true} direction={"column"} padding={3}>
                <HeaderButtons />
                <HeaderInputs />
                <DataTable apiRef={apiRef} />
            </Grid>
        </>
    );
}

export default User;