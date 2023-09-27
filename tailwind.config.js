module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        white:"white",
        none:"none"
      },
      borderwidth:{
        1:"1px",
      },
      Fontfamily:{
        quicksand:["Quicksand","Sans-serif"]
      },
      gridTemplateRows:{
        7:"repeat(7, minmax(0,1fr))",
        8:"repeat(8, minmax(0,1fr))",
      }
    },
  },
  plugins: [],
};
