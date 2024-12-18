/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        auth: "url(/images/auth_code.jpg)",
      },
    },
  },
  plugins: [],
};
