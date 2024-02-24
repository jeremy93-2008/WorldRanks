import { Header } from './templates/Header'

import { Homepage } from './pages/homepage/Homepage'
import { Countrypage } from './pages/countrypage/Countrypage'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { useCountriesFetch } from './hooks/useCountriesFetch'

import '@fontsource/be-vietnam-pro/400.css'
import '@fontsource/be-vietnam-pro/500.css'
import '@fontsource/be-vietnam-pro/700.css'
import '@fontsource/be-vietnam-pro/900.css'

const routes = createBrowserRouter([
    {
        path: '/',
        Component: Homepage,
    },
    {
        path: '/country/:code',
        Component: Countrypage,
    },
])

function App() {
    useCountriesFetch()

    return (
        <section className="app flex justify-center">
            <section className="image absolute bg-hero-image w-full h-[300px] bg-[cover]" />
            <section className="container relative z-10 flex-1">
                <Header />
                <RouterProvider router={routes} />
            </section>
        </section>
    )
}

export default App
