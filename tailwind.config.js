module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    {
      pattern: /bg-/,
      variants: ["hover", "focus"],
    },
  ],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      rubik: ["Rubik", "sans-serif"],
    },
    screens: {
      mobile: "640px",
      tablet: "768px",
      smallLaptop: "1024px",
      desktop: "1280px",
      normalLaptop: "1440px",
      bigLaptop: "1536px",
    },
    extend: {
      fontSize: {
        10: ["0.625rem", "0.938rem"],
        12: ["0.75rem", "1rem"],
        13: ["0.813rem", "1.125rem"],
        14: ["0.875rem", "1.118rem"],
        16: ["1rem", "1.313rem"],
        18: ["1.125rem", "2rem"],
        20: ["1.25rem", "1.688rem"],
        24: ["1.5rem", "2.063rem"],
        40: ["2.5rem", "3.375rem"],
        64: ["4rem", "4.375rem"],
      },
      colors: {
        asoebiBlack: {
          100: "#5A5F66",
          300: "##474747",
          700: "#262626",
          800: "#131924",
          900: "#111827",
        },
        asoebiGray: {
          50: "#DBDBDB",
          60: "#E2E2E2",
          100: "#FCFCFC",
          120: "#F2F2F2",
          130: "#F6F6F6",
          140: "#EDEAEC",
          150: "#8D99AE",
          160: "#F1F1F1",
          170: "#DCE0E3",
          180: "#838383",
          200: "#F5F5F5",
          300: "#929292",
          500: "#A6A6A6",
          700: "#666666",
          800: "#7A7A7A",
          900: "#BCBCBC",
        },
        asoebiPurple: {
          100: "#DCCBFF",
          120: "#B793FF",
          200: "#6D7280",
          300: "#F5F0FF",
          400: "#9865FC",
          500: "#F9FAFB",
          600: "#9661FF",
          800: "#8C52FF",
        },
        asoebiYellow: {
          100: "#FFF2DB",
          400: "#C78200",
        },
        asoebiWhite: {
          100: "#FFF",
        },
      },
      width: {
        600: "600px",
        500: "500px",
      },
      boxShadow: {
        tags: "0px 0px 8px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
