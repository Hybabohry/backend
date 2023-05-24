'use strict';

module.exports = {
  DB_URL: process.env.MONGO_DB_URI || 'mongodb+srv://hiba:hiba@cluster0.gviqgma.mongodb.net/?retryWrites=true&w=majority',

  // JWT Secret
  JWT_SECRET: (process.env.JWT_SECRET || 'test-jwt-secret'),
  JWT_LIFETIME: (60 * 60 * 1), // 1 hour

  PORT: process.env.PORT || 3000,
  IP: 'localhost',
};
