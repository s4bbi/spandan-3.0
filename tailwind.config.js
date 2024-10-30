/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html', 
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        mR: "mooner-regular",
        mRO: "mooner-regularoutline",
        gL: "Gilroy-Light",
        gSB: "Gilroy-SemiBold",
        gB: "Gilroy-Bold",
        eR: "Exo2-Regular",
        eSB: "Exo2-SemiBold",
        eI: "Exo2-Italic",
      },
    },
  },
  plugins: [],
}