import useSWR from 'swr'
import { useIsomorphicLayoutEffect } from 'swr/_internal'
import { useCountriesStore } from '../../../hooks/useCountriesStore'

import { ICountry } from '../../../types/restcountries.type'
import { fetcher } from '../../../utils/fetcher'

export function useCountriesFetch() {
    // Fetch the countries from the API
    const { data: rawCountries } = useSWR<ICountry[]>(
        'https://restcountries.com/v3.1/all',
        fetcher
    )

    // Get the setCountries action from the store
    const setCountries = useCountriesStore(
        (state) => state.actions.setCountries
    )

    // Set the countries in the store
    useIsomorphicLayoutEffect(() => {
        if (rawCountries) {
            setCountries(rawCountries)
        }
    }, [rawCountries, setCountries])

    // Return the fetched countries
    return { rawCountries }
}
