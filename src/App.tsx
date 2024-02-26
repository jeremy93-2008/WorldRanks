import { Header } from './templates/Header'

import { Homepage } from './pages/homepage/Homepage'
import { Countrypage } from './pages/countrypage/Countrypage'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Toaster } from 'sonner'

import '@fontsource/be-vietnam-pro/400.css'
import '@fontsource/be-vietnam-pro/500.css'
import '@fontsource/be-vietnam-pro/700.css'
import '@fontsource/be-vietnam-pro/900.css'
import { Error404 } from './pages/Error404/Error404'

const routes = createBrowserRouter([
    {
        path: '/',
        Component: Homepage,
        errorElement: <Error404 />,
    },
    {
        path: '/country/:code',
        Component: Countrypage,
        errorElement: <Error404 />,
    },
])

function App() {
    return (
        <section className="app flex justify-center">
            <Toaster position="top-right" richColors />
            <section className="image absolute bg-hero-image w-full h-[300px] bg-[cover]" />
            <section className="container relative z-10 flex-1">
                <Header />
                <RouterProvider router={routes} />
            </section>
        </section>
    )
}

export default App
