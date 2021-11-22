// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable @typescript-eslint/no-var-requires, unicorn/prefer-module */
const crypto = require('crypto');
const yaml = require('yaml');

module.exports = {
  // We need to generate a cache key so changes on file are updated
  // This cache key is based on file path and file content
  // NOTE: this is not needed when running jest with flag --no-cache
  getCacheKey(fileData, filePath) {
    return crypto
      .createHash('md5')
      .update(fileData)
      .update(filePath)
      .digest('hex');
  },

  process(fileData) {
    const result = yaml.parse(fileData);
    const json = JSON.stringify(result);
    return `module.exports = ${json}`;
  },
};
