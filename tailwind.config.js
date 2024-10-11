
import plugin from 'tailwindcss/plugin'
import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette'
import svgToDataUri from 'mini-svg-data-uri'


module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
    ],
    theme: {
        extend: {},
    },
    plugins: [
        plugin(({ matchUtilities, theme }) => {
            matchUtilities(
                {
                    'text-shadow': value => ({
                        textShadow: value,
                    }),
                },
                { values: theme('textShadow') },
            )
            matchUtilities(
                {
                    'bg-grid': value => ({
                        backgroundImage: `url("${svgToDataUri(
                            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" stroke="${value}" fill="none"><path d="M64 0H0V64"/></svg>`,
                        )}")`,
                    }),
                },
                {
                    values: flattenColorPalette(theme('backgroundColor')),
                    type: ['color'],
                },
            )
            matchUtilities(
                {
                    'bg-grid': value => ({
                        backgroundSize: value,
                    }),
                },
                {
                    values: theme('spacing'),
                    type: ['number', 'length', 'any'],
                },
            )
        }),
    ],
}