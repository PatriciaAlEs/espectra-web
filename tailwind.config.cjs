/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './index.html',
        './src/**/*.{ts,tsx}'
    ],
    theme: {
        extend: {
            colors: {
                background: '#0C0C0C',
                dark: '#190F12',
                graySoft: '#190F12',
                accent: '#A13E22',
                accentBright: '#FF4F00',
                accentGlow: '#C27C60',
                textPrimary: '#EAE9E8'
            },
            fontFamily: {
                display: ['Inter', 'system-ui', 'sans-serif'],
                bebas: ['"Bebas Neue"', 'cursive'],
                barlow: ['"Barlow Condensed"', 'sans-serif']
            }
        }
    },
    plugins: []
}
