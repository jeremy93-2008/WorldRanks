import { ICountry } from '../../../types/restcountries.type'
import { useCountriesStore } from '../../../hooks/useCountriesStore'
import { useNavigate } from 'react-router-dom'
import { formatNumber } from '../../../utils/formatNumber'
import { Pagination } from '../components/Pagination'
import { useTablePagination } from '../hooks/useTablePagination'

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

    const { currentPage, itemsPerPage, pageCount, handlePageChange } =
        useTablePagination(countries.length)

    return (
        <section className="listOfCountries flex-1 overflow-x-auto">
            <table className="min-w-[600px] w-full table-fixed text-sm text-left rtl:text-right text-gray-500">
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
                    {countries
                        .slice(
                            currentPage * itemsPerPage,
                            currentPage * itemsPerPage + itemsPerPage
                        )
                        .map((country) => (
                            <tr
                                onClick={handleRowClick(country)}
                                key={country.name.common}
                                className="cursor-pointer border-b border-modal hover:bg-modalBorder hover:bg-opacity-10 transition-colors"
                            >
                                <td className="px-6 py-4">
                                    <img
                                        src={country.flags.png}
                                        alt={country.name.common}
                                        className="w-9 h-6 rounded-sm"
                                    />
                                </td>
                                <td className="px-6 py-4">
                                    <span className="flex text-nowrap font-medium text-ellipsis w-[140px]">
                                        {country.name.common}
                                    </span>
                                </td>
                                <td className="px-6 py-4 min-w-[150px] w-[150px]">
                                    {formatNumber(country.population)}
                                </td>
                                <td className="px-6 py-4 min-w-[130px] w-[130px]">
                                    {formatNumber(country.area)}
                                </td>
                                <td className="px-6 py-4 min-w-[130px] w-[130px]">
                                    {country.region}
                                </td>
                            </tr>
                        ))}
                    {countries.length === 0 && (
                        <tr>
                            <td colSpan={5} className="text-center py-4">
                                No countries found
                            </td>
                        </tr>
                    )}
                    <tr>
                        <td colSpan={5} className="py-4">
                            <Pagination
                                currentPage={currentPage}
                                pageCount={pageCount}
                                itemsPerPage={itemsPerPage}
                                onPreviousPage={() => {
                                    if (currentPage > 0) {
                                        handlePageChange(currentPage - 1)
                                    }
                                }}
                                onNextPage={() => {
                                    if (currentPage < pageCount - 1) {
                                        handlePageChange(currentPage + 1)
                                    }
                                }}
                                onPageChange={handlePageChange}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
    )
}
