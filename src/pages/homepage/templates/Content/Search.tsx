import searchIcon from '../../../../assets/Search.svg'
import { useCountriesStore } from '../../../../hooks/useCountriesStore'

export function Search() {
    const searchText = useCountriesStore((state) => state.data.searchText)
    const setSearchText = useCountriesStore(
        (state) => state.actions.setSearchText
    )

    return (
        <section className="relative flex flex-0 w-[24rem] bg-modal px-3 rounded-2xl transition-[outline] focus-within:outline focus-within:outline-sky-600">
            <label className="flex" htmlFor="search">
                <img src={searchIcon} />
            </label>
            <input
                id="search"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="bg-transparent w-full px-3 py-3 focus:outline-none placeholder:text-primary"
                placeholder="Search by Name, Region, Subregion"
            />
        </section>
    )
}
