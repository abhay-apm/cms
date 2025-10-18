const path = require('path');

module.exports = () => ({
  upload: {
    config: {
      provider: 'local',
      providerOptions: {
        sizeLimit: 10000000, // 10 MB
      },
      // IMPORTANT: this must be under `config`, not top-level
      uploadPath: path.join('/tmp', 'uploads'),
    },
  },
});
