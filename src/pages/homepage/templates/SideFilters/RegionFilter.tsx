import { Tag } from '../../../../components/Tag'
import { useCountriesStore } from '../../../../hooks/useCountriesStore'

interface RegionProps {
    selectedRegionOptions: string[]
}

export function RegionFilter(props: RegionProps) {
    const { selectedRegionOptions } = props

    const selectedRegion = useCountriesStore(
        (state) => state.data.selectedRegion
    )

    const setSelectedRegion = useCountriesStore(
        (state) => state.actions.setSelectedRegion
    )

    return (
        <section className="regionFilter">
            <span className="text-primary text-sm block mt-8 mb-3">Region</span>
            <section className="flex flex-wrap gap-x-3 gap-y-2 items-center">
                {selectedRegionOptions.map((region) => (
                    <Tag
                        key={region}
                        isSelected={selectedRegion.includes(region)}
                        onClick={() => {
                            const newSelectedRegion = selectedRegion.includes(
                                region
                            )
                                ? selectedRegion.filter((r) => r !== region)
                                : [...selectedRegion, region]
                            setSelectedRegion(newSelectedRegion)
                        }}
                    >
                        {region}
                    </Tag>
                ))}
            </section>
        </section>
    )
}
