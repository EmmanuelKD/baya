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
          'primary-light': '#B21575',            /* comm */
          'on-primary-light': '#FFFFFF',      /* comm */
          'primary-container-light': '#FFD8E6',    /* comm */
          'on-primary-container-light': '#3D0025',    /* comm */

          'secondary-light': '#964900',           /* secondary color */
          'on-secondary-light': '#FFFFFF',     /* comm */
          'secondary-container-light': '#FFDCC7',   /* comm */
          'on-secondary-container-light': '#311300',    /* comm */

          'tertiary-light': '#B91D1D',            /* comm */
          'on-tertiary-light': '#FFFFFF',      /* comm */
          'tertiary-container-light': '#FFDAD6',    /* comm */
          'on-tertiary-container-light': '#410002',    /* comm */

          'error-light': '#BA1A1A',
          'on-error-light': '#FFFFFF',
          'error-container-light': '#FFDAD6',
          'on-error-container-light': '#410002',

          'background-light': '#FAFDFD',          /* comm */
          'on-background-light': '#191C1D',    /* comm */
          'surface-light': '#F8FAFA',    /* comm */
          'on-surface-light': '#191C1D',   /* comm */
          'surface-variant-light': '#F1DEE3',    /* comm */
          'on-surface-variant-light': '#504348',         /* comm */
          'outline-light': '#827378',     /* comm */



          'primary-dark': '#FFAFD2',           /* comm */
          'on-primary-dark': '#63003E',     /* comm */
          'primary-container-dark': '#8B005A',    /* comm */
          'on-primary-container-dark': '#FFD8E6',    /* comm */

          'secondary-dark': '#FFB787',           /* comm */
          'on-secondary-dark': '#502400',      /* comm */
          'secondary-container-dark': '#8B005A',    /* comm */
          'on-secondary-container-dark': '#FFDCC7',   /* comm */

          'tertiary-dark': '#FFB4AB',           /* comm */
          'on-tertiary-dark': '#690005',      /* comm */
          'tertiary-container-dark': '#93000B',    /* comm */
          'on-tertiary-container-dark': '#FFDAD6',    /* comm */


          'background-dark': '#FAFDFD',           /* comm */
          'on-background-dark': '#191C1D',      /* comm */
          'surface-dark': '#F8FAFA',    /* comm */
          'on-surface-dark': '#191C1D',   /* comm */
          'surface-variant-dark': '#F1DEE3',    /* comm */
          'on-surface-variant-dark': '#504348',          /* comm */
          'outline-dark': '#827378',     /* comm */

          'error-dark': '#FFB4AB',
          'on-error-dark': '#690005',
          'error-container-dark': '#93000A',
          'on-error-container-dark': '#FFDAD6',
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