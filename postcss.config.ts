const tailwindcss = require('tailwindcss');
module.exports = {
    plugins: [
        require("daisyui"),
        tailwindcss('./tailwind.ts'),
        require('autoprefixer')
    ],
};