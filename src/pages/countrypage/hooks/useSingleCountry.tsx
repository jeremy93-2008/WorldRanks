import useSWR from 'swr'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { useCountriesStore } from '../../../hooks/useCountriesStore'
import { fetcher } from '../../../utils/fetcher'
import { CountryError, ICountry } from '../../../types/restcountries.type'

export function useSingleCountry(code: string) {
    // Get the countries from the store
    const countries = useCountriesStore((state) => state.data.countries)

    const { data: countryFetched, isLoading } = useSWR<
        ICountry[] | CountryError
    >(
        // If the country is already in the store, don't fetch it again
        countries.length > 0
            ? null
            : `https://restcountries.com/v3.1/alpha/${code}`,
        fetcher
    )

    // Find the country in the store or the fetched country
    const country =
        countries && countries.length > 0
            ? countries.find((c) => c.cca3 === code)
            : (countryFetched as ICountry[])?.[0]

    // If the country is not found, show an error message and redirect to the 404 page
    if (!country && !isLoading) {
        toast.dismiss('country-not-found')
        toast.error('Country not found', {
            id: 'country-not-found',
        })
        const navigate = useNavigate()
        navigate('/404')
    }

    // Fetch the borders of the country
    const { data: countryBordersFetched, isLoading: isLoadingBorder } = useSWR<
        ICountry[]
    >(
        // If the country is already in the store, don't fetch it again
        countries.length > 0 || !country?.borders
            ? null
            : `https://restcountries.com/v3.1/alpha?codes=${country?.borders?.join(',')}`,
        fetcher
    )

    // Return the country and borders countries from the store if it's there, otherwise return the fetched country and fetched borders
    return {
        country,
        borders: countryBordersFetched
            ? countryBordersFetched ?? undefined
            : countries
              ? countries.filter((c) => country?.borders?.includes(c.cca3))
              : undefined,
        isLoading,
        isLoadingBorder,
    }
}
