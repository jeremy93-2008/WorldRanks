import { Checkbox } from '../../../../components/Checkbox'
import { useCountriesStore } from '../../../../hooks/useCountriesStore'

export function StatusFilter() {
    const statusOfCountry = useCountriesStore(
        (state) => state.data.statusOfCountry
    )
    const setStatusOfCountry = useCountriesStore(
        (state) => state.actions.setStatusOfCountry
    )

    return (
        <section className="statusFilter">
            <span className="text-primary text-sm block mt-8 mb-4">Status</span>
            <Checkbox
                label="Member of the United Nations"
                isChecked={statusOfCountry.un}
                onChange={(isChecked) =>
                    setStatusOfCountry({
                        ...statusOfCountry,
                        un: isChecked,
                    })
                }
            />
            <Checkbox
                label="Independent"
                isChecked={statusOfCountry.independent}
                onChange={(isChecked) =>
                    setStatusOfCountry({
                        ...statusOfCountry,
                        independent: isChecked,
                    })
                }
            />
        </section>
    )
}
