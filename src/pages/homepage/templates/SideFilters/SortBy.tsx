import { useCountriesStore } from '../../../../hooks/useCountriesStore'
import { capitalize } from '../../../../utils/capitalize'
import { Dropdown } from '../../../../components/Dropdown'

interface SortByProps {
    sortByOptions: string[]
}

export function SortBy(props: SortByProps) {
    const { sortByOptions } = props

    const sortBy = useCountriesStore((state) => state.data.sortBy)
    const setSortBy = useCountriesStore((state) => state.actions.setSortBy)

    return (
        <section className="sortBy mr-4">
            <div className="flex flex-col flex-1">
                <label className="text-primary text-sm mb-3">Sort by</label>
                <Dropdown
                    options={sortByOptions.map((option) => ({
                        label: capitalize(option),
                        value: option,
                    }))}
                    selectedValue={sortBy}
                    onChange={(val) => setSortBy(val)}
                />
            </div>
        </section>
    )
}
