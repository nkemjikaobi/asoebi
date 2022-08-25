module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
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
      bigLaptop: "1440px",
      television: "1536px",
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
          800: "#131924",
          900: "#111827",
        },
        asoebiGray: {
          700: "#666666",
          800: "#7A7A7A",
          900: "#BCBCBC",
        },
        asoebiPurple: {
          100: "#DCCBFF",
          900: "#8C52FF",
        },
        asoebiPurple: {
          800: "#8C52FF",
          500: "#F9FAFB",
        },
        asoebiGrey: {
          500: "#A6A6A6",
        },
      },
      width: {
        600: "600px",
        500: "500px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
