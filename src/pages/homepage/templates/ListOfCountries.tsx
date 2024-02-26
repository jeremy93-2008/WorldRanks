import { ICountry } from '../../../types/restcountries.type'
import { useCountriesStore } from '../../../hooks/useCountriesStore'
import { useNavigate } from 'react-router-dom'

interface ListProps {
    countries: ICountry[]
}

export function ListOfCountries(props: ListProps) {
    const { countries } = props
    const sortBy = useCountriesStore((state) => state.data.sortBy)
    const setSortBy = useCountriesStore((state) => state.actions.setSortBy)

    const navigate = useNavigate()

    const handleRowClick = (country: ICountry) => {
        return (_evt: React.MouseEvent<HTMLTableRowElement, MouseEvent>) => {
            navigate(`/country/${country.cca3}`)
        }
    }

    return (
        <section className="listOfCountries flex-1">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                <thead className="text-sm border-b border-modal">
                    <tr>
                        <th
                            onClick={() => setSortBy('flag')}
                            scope="col"
                            className={`cursor-pointer px-6 py-3  ${sortBy === 'flag' ? 'font-extrabold' : 'font-normal'}`}
                        >
                            Flag
                        </th>
                        <th
                            onClick={() => setSortBy('name')}
                            scope="col"
                            className={`cursor-pointer px-6 py-3 ${sortBy === 'name' ? 'font-extrabold' : 'font-normal'}`}
                        >
                            Name
                        </th>
                        <th
                            onClick={() => setSortBy('population')}
                            scope="col"
                            className={`cursor-pointer px-6 py-3  ${sortBy === 'population' ? 'font-extrabold' : 'font-normal'}`}
                        >
                            Population
                        </th>
                        <th
                            onClick={() => setSortBy('area')}
                            scope="col"
                            className={`cursor-pointer px-6 py-3  ${sortBy === 'area' ? 'font-extrabold' : 'font-normal'}`}
                        >
                            Area(km<sup>2</sup>)
                        </th>
                        <th
                            onClick={() => setSortBy('region')}
                            scope="col"
                            className={`cursor-pointer px-6 py-3  ${sortBy === 'region' ? 'font-bold' : 'font-normal'}`}
                        >
                            Region
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {countries.map((country) => (
                        <tr
                            onClick={handleRowClick(country)}
                            key={country.name.common}
                            className="cursor-pointer border-b border-modal hover:bg-modalBorder hover:bg-opacity-10 transition-colors"
                        >
                            <td className="px-6 py-4">
                                <img
                                    src={country.flags.png}
                                    alt={country.name.common}
                                    className="w-10 rounded-md"
                                />
                            </td>
                            <td className="px-6 py-4">
                                <span className="font-medium">
                                    {country.name.common}
                                </span>
                            </td>
                            <td className="px-6 py-4">
                                {new Intl.NumberFormat(
                                    navigator.language ?? 'en-US'
                                ).format(country.population)}
                            </td>
                            <td className="px-6 py-4">
                                {new Intl.NumberFormat(
                                    navigator.language ?? 'en-US'
                                ).format(country.area)}
                            </td>
                            <td className="px-6 py-4">{country.region}</td>
                        </tr>
                    ))}
                    {countries.length === 0 && (
                        <tr>
                            <td colSpan={5} className="text-center py-4">
                                No countries found
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </section>
    )
}
