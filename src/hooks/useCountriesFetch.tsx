import useSWR from 'swr'
import { useIsomorphicLayoutEffect } from 'swr/_internal'
import { useCountriesStore } from './useCountriesStore'

import { ICountry } from '../types/restcountries.type'
import { fetcher } from '../utils/fetcher'

export function useCountriesFetch() {
    const { data: rawCountries } = useSWR<ICountry[]>(
        'https://restcountries.com/v3.1/all',
        fetcher
    )

    const setCountries = useCountriesStore(
        (state) => state.actions.setCountries
    )

    useIsomorphicLayoutEffect(() => {
        if (rawCountries) {
            setCountries(rawCountries)
        }
    }, [rawCountries, setCountries])

    return { rawCountries }
}
