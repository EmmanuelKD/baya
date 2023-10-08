module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "media",
  // theme: {
  //   extend: {},
  // },
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["Roboto", "Arial", "sans"],
      },
      colors: {
        primary: {
          light: "#FF5733", // Light variant
          DEFAULT: "#FF5733", // Default variant
          dark: "#E63E0A", // Dark variant
        },
        secondary: {
          light: "#5AA6FF", // Light variant
          DEFAULT: "#3498DB", // Default variant
          dark: "#1E56A0", // Dark variant
        },
        accent: {
          light: "#FFC04D", // Light variant
          DEFAULT: "#F39C12", // Default variant
          dark: "#D97A0D", // Dark variant
        },
      },

      gradientColorStops: {
        primary: {
          start: "#FF5733",
          end: "#F39C12",
        },
        secondary: {
          start: "#3498DB",
          end: "#F39C12",
        },
        accent: {
          start: "#F39C12",
          end: "#FF5733",
        },
      },
      linearGradientColors: (theme) => theme("gradientColorStops"),
    },
  },
  plugins: [
    require('daisyui'),
    require("@tailwindcss/typography")
  ],
  daisyui: {
    styled: true,
    // TODO: Theme needs works
    themes: [
      {
        'solana': {
          fontFamily: {
            display: ['PT Mono, monospace'],
            body: ['Inter, sans-serif'],
          },
          'primary': '#000000',           /* Primary color */
          'primary-focus': '#9945FF',     /* Primary color - focused */
          'primary-content': '#ffffff',   /* Foreground content color to use on primary color */

          'secondary': '#808080',         /* Secondary color */
          'secondary-focus': '#f3cc30',   /* Secondary color - focused */
          'secondary-content': '#ffffff', /* Foreground content color to use on secondary color */

          'accent': '#33a382',            /* Accent color */
          'accent-focus': '#2aa79b',      /* Accent color - focused */
          'accent-content': '#ffffff',    /* Foreground content color to use on accent color */

          'neutral': '#2b2b2b',           /* Neutral color */
          'neutral-focus': '#2a2e37',     /* Neutral color - focused */
          'neutral-content': '#ffffff',   /* Foreground content color to use on neutral color */

          'base-100': '#000000',          /* Base color of page, used for blank backgrounds */
          'base-200': '#35363a',          /* Base color, a little darker */
          'base-300': '#222222',          /* Base color, even more darker */
          'base-content': '#f9fafb',      /* Foreground content color to use on base color */

          'info': '#2094f3',              /* Info */
          'success': '#009485',           /* Success */
          'warning': '#ff9900',           /* Warning */
          'error': '#ff5724',             /* Error */
        },
      },
      // backup themes:
      // 'dark',
      // 'synthwave'
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },
}