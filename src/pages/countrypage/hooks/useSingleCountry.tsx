import useSWR from 'swr'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { useCountriesStore } from '../../../hooks/useCountriesStore'
import { fetcher } from '../../../utils/fetcher'
import { CountryError, ICountry } from '../../../types/restcountries.type'

export function useSingleCountry(code: string) {
    // Get the countries from the store
    const countries = useCountriesStore((state) => state.data.countries)

    const { data: countryFetched } = useSWR<ICountry[] | CountryError>(
        // If the country is already in the store, don't fetch it again
        countries.length > 0
            ? null
            : `https://restcountries.com/v3.1/alpha/${code}`,
        fetcher
    )

    const navigate = useNavigate()
    useEffect(() => {
        // If the code is wrong or the country is not found, redirect to the homepage
        if (
            (countryFetched as CountryError)?.status !== 200 &&
            countries.length === 0
        ) {
            navigate('/')
            toast.dismiss('country-not-found')
            toast.error('Country not found', {
                id: 'country-not-found',
            })
        }
    }, [countryFetched, countries])

    // Return the country from the store if it's there, otherwise return the fetched country
    return {
        country:
            countries && countries.length > 0
                ? countries.find((c) => c.cca3 === code)
                : (countryFetched as ICountry[])?.[0],
    }
}
