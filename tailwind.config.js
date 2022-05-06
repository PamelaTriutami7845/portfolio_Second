module.exports = {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
    ],
    theme: {
        container: {

            center: true,
            padding: '40px',
        },
        extend: {
            colors: {

                primary: '#a5f3fc',
                Second: '#34d399',
                thirth: '#99f6e4',
                for: '#5eead4',
            },

            screens: {

                '2xl': '1320px',
            },
        },
    },
    plugins: [],
};