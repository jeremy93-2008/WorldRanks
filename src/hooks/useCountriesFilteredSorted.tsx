import { useMemo } from 'react'
import { useCountriesStore } from './useCountriesStore'
import { ICountry } from '../types/restcountries.type'

export function useCountriesFilteredSorted(rawCountries: ICountry[]) {
    const { searchText, sortBy, selectedRegion, statusOfCountry } =
        useCountriesStore((state) => state.data)

    const countries = useMemo(() => {
        // Filter by Status of Country
        const filteredByStatus = rawCountries.filter(
            (country) =>
                country.independent === statusOfCountry.independent &&
                country.unMember === statusOfCountry.un
        )
        // Filter by Region
        const filteredByRegionAndStatus = filteredByStatus.filter((country) =>
            selectedRegion.includes(country.region)
        )
        // Filter by Search Text
        const filteredBySearchAndRegionAndStatus =
            filteredByRegionAndStatus.filter((country) => {
                const searchTextLowerCase = searchText.toLowerCase()
                const countryName = country.name.common.toLowerCase()
                const countryRegion = country.region.toLowerCase()
                const countrySubregion = country.subregion.toLowerCase()
                return (
                    countryName.includes(searchTextLowerCase) ||
                    countryRegion.includes(searchTextLowerCase) ||
                    countrySubregion.includes(searchTextLowerCase)
                )
            })
        // Sort by Sort By
        const sortedBySortByAndFilteredBySearchAndRegionAndStatus =
            filteredBySearchAndRegionAndStatus.sort((a, b) => {
                if (sortBy === 'population') {
                    return b.population - a.population
                }
                if (sortBy === 'area') {
                    return b.area - a.area
                }
                return a.name.common.localeCompare(b.name.common)
            })
        return sortedBySortByAndFilteredBySearchAndRegionAndStatus
    }, [searchText, sortBy, selectedRegion, statusOfCountry, rawCountries])

    return { countries }
}
