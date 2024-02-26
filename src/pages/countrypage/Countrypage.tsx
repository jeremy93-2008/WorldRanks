import { useParams } from 'react-router-dom'
import { NeighbouringCountries } from './templates/NeighbouringCountries'
import { Wait } from '../../components/Wait'
import { useDocumentTitle } from '../../hooks/useDocumentTitle'
import { useSingleCountry } from './hooks/useSingleCountry'
import { formatNumber } from '../../utils/formatNumber'

export function Countrypage() {
    const { code } = useParams<{ code: string }>()

    const { country, borders, isLoading, isLoadingBorder } = useSingleCountry(
        code!
    )

    useDocumentTitle(
        country?.name?.common
            ? country?.name?.common + ' - World Ranks'
            : 'World Ranks'
    )

    return (
        <section className="countrypage flex mx-40">
            <section className="content justify-center min-h-[450px] flex-1 bg-base border-modal border-[1px] rounded-2xl mt-6 mx-8">
                <Wait
                    isLoading={!country || isLoading}
                    className="items-center -mt-12"
                >
                    <img
                        src={country?.flags?.png}
                        alt={country?.name?.common}
                        className="w-64 rounded-md"
                    />
                    <section className="flex flex-col flex-1 items-center w-full mt-8">
                        <h1 className="text-3xl font-bold">
                            {country?.name?.common}
                        </h1>
                        <p className="mt-2">{country?.name.official}</p>
                    </section>
                    <section className="flex gap-x-10 mt-8">
                        <div className="flex items-center bg-modal px-6 py-3 rounded-xl">
                            <p className="">Population</p>
                            <div className="border-r-[1px] border-base h-8 ml-4" />
                            <p className="ml-4">
                                {formatNumber(country?.population ?? 0)}
                            </p>
                        </div>
                        <div className="flex items-center bg-modal px-6 py-3 rounded-xl">
                            <p className="">
                                Area (km<sup>2</sup>)
                            </p>
                            <div className="border-r-[1px] border-base h-8 ml-4" />
                            <p className="ml-4">
                                {formatNumber(country?.area ?? 0)}
                            </p>
                        </div>
                    </section>
                    <section className="flex flex-col w-full my-8 border-t-[1px] border-modal">
                        <section className="flex justify-between p-5 border-b-[1px] border-modal">
                            <p className="text-primary">Capital</p>
                            <p className="">{country?.capital}</p>
                        </section>
                        <section className="flex justify-between p-5 border-b-[1px] border-modal">
                            <p className="text-primary">Subregion</p>
                            <p className="">{country?.subregion}</p>
                        </section>
                        <section className="flex justify-between p-5 border-b-[1px] border-modal">
                            <p className="text-primary">Languages</p>
                            <p className="">
                                {Object.keys(country?.languages ?? {})
                                    .map((key) => country?.languages[key])
                                    .join(', ')}
                            </p>
                        </section>
                        <section className="flex justify-between p-5 border-b-[1px] border-modal">
                            <p className="text-primary">Currencies</p>
                            <p className="">
                                {Object.keys(country?.currencies ?? {})
                                    .map((key) => country?.currencies[key].name)
                                    .join(', ')}
                            </p>
                        </section>
                        <section className="flex justify-between p-5 border-b-[1px] border-modal">
                            <p className="text-primary">Continents</p>
                            <p className="">{country?.continents.join(', ')}</p>
                        </section>
                        <section className="flex flex-col justify-between p-5 border-modal">
                            <p className="text-primary">
                                Neighbouring Countries
                            </p>
                            <section className="flex mt-6 gap-x-4 gap-y-2">
                                <NeighbouringCountries
                                    borders={borders}
                                    isLoadingBorder={isLoadingBorder}
                                />
                            </section>
                        </section>
                    </section>
                </Wait>
            </section>
        </section>
    )
}
