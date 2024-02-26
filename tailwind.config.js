/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundColor: {
                base: '#1B1D1F',
                modal: '#282B30',
                modalBorder: '#6C727F',
            },
            borderColor: {
                base: '#1B1D1F',
                modal: '#282B30',
                modalBorder: '#6C727F',
            },
            textColor: {
                base: '#D2D5DA',
                primary: '#6C727F',
                selected: '#4E80EE',
            },
            backgroundImage: {
                'hero-image': "url('/hero-image-wr.jpg')",
            },
        },
    },
    safelist: ['font-bold'],
    plugins: [],
}
