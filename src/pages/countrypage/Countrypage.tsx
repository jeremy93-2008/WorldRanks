import { useParams } from 'react-router-dom'

import { Wait } from '../../components/Wait'
import { useDocumentTitle } from '../../hooks/useDocumentTitle'
import { useSingleCountry } from './hooks/useSingleCountry'
import { formatNumber } from '../../utils/formatNumber'

export function Countrypage() {
    const { code } = useParams<{ code: string }>()

    const { country } = useSingleCountry(code!)

    useDocumentTitle(
        country?.name?.common
            ? country?.name?.common + ' - World Ranks'
            : 'World Ranks'
    )

    return (
        <section className="countrypage flex mx-40">
            <section className="content justify-center min-h-[450px] flex-1 bg-base border-modal border-[1px] rounded-2xl mx-8 p-8">
                <Wait isLoading={!country} className="items-center -m-20">
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
                            <div className="border-r-[1px] border-base h-8 ml-3" />
                            <p className="ml-2">
                                {formatNumber(country?.population ?? 0)}
                            </p>
                        </div>
                        <div className="flex items-center bg-modal px-6 py-3 rounded-xl">
                            <p className="">
                                Area (km<sup>2</sup>)
                            </p>
                            <div className="border-r-[1px] border-base h-8 ml-3" />
                            <p className="ml-2">
                                {formatNumber(country?.area ?? 0)}
                            </p>
                        </div>
                    </section>
                </Wait>
            </section>
        </section>
    )
}
