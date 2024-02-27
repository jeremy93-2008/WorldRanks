import { useNavigate } from 'react-router-dom'
import { Wait } from '../../../components/Wait'
import { ICountry } from '../../../types/restcountries.type'

interface NeighbouringCountriesProps {
    borders?: ICountry[]
    isLoadingBorder: boolean
}

export function NeighbouringCountries(props: NeighbouringCountriesProps) {
    const { borders, isLoadingBorder } = props

    const navigate = useNavigate()

    return (
        <Wait
            isLoading={!borders || isLoadingBorder}
            className="!flex-row flex-wrap w-full"
        >
            {borders!.map((border) => (
                <section
                    onClick={() => navigate(`/country/${border.cca3}`)}
                    className="flex flex-col items-center justify-center cursor-pointer hover:bg-modal px-3 pt-4 pb-2 rounded-md"
                >
                    <img
                        src={border.flags?.png}
                        alt={border.name.common}
                        className="w-20 h-12 rounded-md"
                    />
                    <p key={border.cca3} className="mt-2 text-xs md:text-sm">
                        {border.name.common}
                    </p>
                </section>
            ))}
            {borders!.length === 0 && (
                <p className="flex w-full justify-center">
                    No neighbouring countries
                </p>
            )}
        </Wait>
    )
}
