import { create } from "zustand";

export const useSearchUserStore = create(set => ({
    searchOptions: {
        page: 1,
        size: 20,
        searchText: "",
    },
    setPageOption: (page) => set((prev) => ({
        searchOptions: {
            ...prev.searchOptions,
            page,
        }
    })),
    setSearchTextOption: (searchText) => set((prev) => ({
        searchOptions: {
            ...prev.searchOptions,
            searchText,
        }
    })),
}));