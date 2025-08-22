import { useQuery } from '@tanstack/react-query';
import { reqSearchUser } from '../api/userApi';
import React from 'react';

function useSearchUserQuery(page, size, searchText) {
    return useQuery({
        queryKey: ["searchUser", page, size, searchText],
        queryFn: async () => await reqSearchUser({ page, size, searchText }),
    })
}

export default useSearchUserQuery;