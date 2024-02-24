import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { ICountry } from '../types/restcountries.type'

export interface CountriesStore {
    data: {
        countries: ICountry[]
        searchText: string
        sortBy: string
        selectedRegion: string[]
        statusOfCountry: StatusOfCountry
    }
    actions: {
        setCountries: (countries: ICountry[]) => void
        setSearchText: (searchText: string) => void
        setSortBy: (sortBy: string) => void
        setSelectedRegion: (selectedRegion: string[]) => void
        setStatusOfCountry: (statusOfCountry: StatusOfCountry) => void
    }
}

interface StatusOfCountry {
    independent: boolean
    un: boolean
}

export const useCountriesStore = create<
    CountriesStore,
    [['zustand/devtools', never]]
>(
    devtools((set, get) => ({
        data: {
            countries: [],
            searchText: '',
            sortBy: 'population',
            selectedRegion: ['Africa', 'Americas', 'Asia', 'Europe'],
            statusOfCountry: {
                independent: true,
                un: true,
            },
        },
        actions: {
            setCountries: (countries: ICountry[]) =>
                set({ data: { ...get().data, countries } }),
            setSearchText: (searchText: string) =>
                set({ data: { ...get().data, searchText } }),
            setSortBy: (sortBy: string) =>
                set({ data: { ...get().data, sortBy } }),
            setSelectedRegion: (selectedRegion: string[]) =>
                set({
                    data: {
                        ...get().data,
                        selectedRegion,
                    },
                }),
            setStatusOfCountry: (statusOfCountry: StatusOfCountry) =>
                set({ data: { ...get().data, statusOfCountry } }),
        },
    }))
)
