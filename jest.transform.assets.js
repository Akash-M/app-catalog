module.exports = {
  process: (_, filename) => {
    return {
      code: `module.exports = "${
        /s?css/.test(filename) ? '' : filename.split('/src/')[1]
      }"`,
    };
  },
};
