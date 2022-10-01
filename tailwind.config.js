/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
      fontFamily: {
        'kalam': ['"Kalam"', 'cursive'],
        'Rosarivo': ['"Rosarivo"', 'serif'],
        'Kanit': ['"Kanit"', 'sans-serif'],
      },
      colors: {
        'pale': '#edf5e1',
        'blueTheme':"#05386B",
        'mint':"#5CDB95"
      },
      backgroundImage: {
        'hero': "url('./assets/cogs.svg')",
        'dots': "url('./assets/dots.svg')",
        'blobs': "url('./assets/blob.svg')"
      },
		},
	},
}