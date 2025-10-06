/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#255bfa",
        "background-light": "#f5f6f8",
        "background-dark": "#0f1423",
        "card-light": "#f9fafb",
        "card-dark": "#1f2937",
        "text-light": "#1f2937",
        "text-dark": "#f9fafb",
        "text-muted-light": "#6b7280",
        "text-muted-dark": "#9ca3af"
      },
      fontFamily: {
        display: "Inter"
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px"
      }
    }
  },
  plugins: [],
}
