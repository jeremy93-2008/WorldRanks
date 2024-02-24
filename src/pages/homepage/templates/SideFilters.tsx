import { SortBy } from './SideFilters/SortBy'
import { RegionFilter } from './SideFilters/RegionFilter'
import { StatusFilter } from './SideFilters/StatusFilter'

interface SideFiltersProps {
    sortByOptions: string[]
    selectedRegionOptions: string[]
}

export function SideFilters(props: SideFiltersProps) {
    const { sortByOptions, selectedRegionOptions } = props

    return (
        <section className="sideFilters flex flex-col flex-0 w-[300px] px-2">
            <SortBy sortByOptions={sortByOptions} />
            <RegionFilter selectedRegionOptions={selectedRegionOptions} />
            <StatusFilter />
        </section>
    )
}
