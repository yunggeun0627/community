import { create } from "zustand";

export const useInputDataStore = create(set => ({
    inputData: {},
    setData: (key, vlaue) => set(prev => ({
        inputData: {
            ...prev.inputData,
            [key]: vlaue,
        }
    })),
}))