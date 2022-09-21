const { config } = require('dotenv');
require('dotenv').config();
exports.configEnv = {
      PORT,
      DB_URL
} = process.env;