export default {
  plugins: [
    {
      name: "preset-default",
      params: {
        overrides: {
          removeViewBox: false, // danger to remove viewbox
          cleanupNumericValues: false, // since unit conversion is not working well
        },
      },
    },
  ],
};
