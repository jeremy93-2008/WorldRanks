import { Link } from 'react-router-dom'

export function Error404() {
    return (
        <section className="countrypage flex mx-40">
            <section className="content flex flex-col items-center justify-center min-h-[450px] flex-1 bg-base border-modal border-[1px] rounded-2xl mx-8 p-8">
                <h1 className="text-3xl">404</h1>
                <p className="mt-2">Page not found</p>
                <section className="flex gap-x-10 mt-8">
                    <Link to="/">
                        <button
                            type="button"
                            className="select-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        >
                            Go to Home
                        </button>
                    </Link>
                </section>
            </section>
        </section>
    )
}
