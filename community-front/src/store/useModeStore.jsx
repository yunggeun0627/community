import React from 'react';
import { create } from 'zustand';
import { MODE_NAME } from '../constants/mode';

export const useModeStore = create(set => ({
    mode: MODE_NAME.NONE,
    setRegisterMOde: () => set(() => ({ mode: MODE_NAME.REGISTER })),
    setModifyMode: () => set(() => ({ mode: MODE_NAME.MODIFY })),
    setDeleteMode: () => set(() => ({ mode: MODE_NAME.DELETE })),
    setNoneMode: () => set(() => ({ mode: MODE_NAME.NONE })),
}));