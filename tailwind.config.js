module.exports = {
  theme: {
    fontFamily: {
      sans: ['Montserrat', 'Segoe UI', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      title: ['Poiret One', 'Montserrat', 'sans-serif'],
    },
    extend: {
      colors: {
        'dark-blue': '#073B4C',
        'light-blue': '#DFF2F6',
        'light-pink': '#EEB4B3',
      },
      height: {
        72: '18rem',
        84: '21rem',
        96: '24rem',
      },
      width: {
        72: '18rem',
        84: '21rem',
        96: '24rem',
      },
    },
  },
  variants: {},
  plugins: [
    // typography for blog posts
    require('@tailwindcss/typography'),
    // line clamping classes
    require('@tailwindcss/line-clamp'),
  ],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    content: [
      'components/**/*.{vue,js}',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.{js,ts}',
      'nuxt.config.{js,ts}',
      'content/**/*.md',
    ],
  },
}
