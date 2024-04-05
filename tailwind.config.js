/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "/index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {

        extend: {
            colors: {
                'primary-dark': '#10242f',
                'secondary-yellow': '#ddfe71',
                'tertiary-white': '#d3e4e5',
                'absolute-black': '#000000'
            },
            keyframes: {
                skukojit: {
                    '0%': {transform: 'scale(1)'},
                    '100%': {transform: 'scale(0)',
                        opacity: '0'},
                }
            },
            cursor: {
                'aim': 'url(../src/assets/cursor_pointer_aim_graphics.svg) 14 14 , pointer',
            }
        },
    },
    plugins: [],
}


