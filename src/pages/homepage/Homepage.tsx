import { useMemo } from 'react'
import { Wait } from '../../components/Wait'
import { Search } from './templates/Content/Search'
import { SideFilters } from './templates/SideFilters'
import { ListOfCountries } from './templates/ListOfCountries'
import { useCountriesFilteredSorted } from '../../hooks/useCountriesFilteredSorted'
import { useDocumentTitle } from '../../hooks/useDocumentTitle'
import { useCountriesFetch } from './hooks/useCountries'

export function Homepage() {
    const { rawCountries } = useCountriesFetch()

    const sortByOptions = useMemo(
        () => ['name', 'flag', 'population', 'area', 'region'],
        []
    )

    const selectedRegionOptions = useMemo(
        () => [
            ...new Set(rawCountries?.map((country) => country.region) ?? []),
        ],
        [rawCountries]
    )

    useDocumentTitle('World Ranks')

    const { countries } = useCountriesFilteredSorted(rawCountries ?? [])

    return (
        <section className="content min-h-[450px] bg-base border-modal border-[1px] rounded-2xl mx-8 p-8">
            <Wait isLoading={!rawCountries || rawCountries.length === 0}>
                <section className="content-header flex flex-1 items-center justify-between">
                    <span className="flex flex-1 text-primary">
                        Found {countries?.length} countries
                    </span>
                    <Search />
                </section>
                <section className="content-body flex flex-1 mt-8">
                    <SideFilters
                        sortByOptions={sortByOptions}
                        selectedRegionOptions={selectedRegionOptions}
                    />
                    <ListOfCountries countries={countries!} />
                </section>
            </Wait>
        </section>
    )
}
