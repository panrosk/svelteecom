const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      colors: {
        azulsins: "#324570",
        verdesins:"#275A58",
        naranjasins:"#e8704e",
        lilasins:"#cab1d9"
      },
      fontFamily: {
        'principal': 'The Seasons',
      }

    },
  },

  // plugins: [require("rippleui")],
};

module.exports = config;
