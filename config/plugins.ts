const path = require('path');

module.exports = () => ({
  upload: {
    config: {
      provider: 'local',
      providerOptions: { sizeLimit: 10000000 },
      uploadPath: path.join('/tmp', 'uploads'),
    },
  },
});
