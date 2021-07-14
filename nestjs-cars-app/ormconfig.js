const path = require('path');

module.exports = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE,
  entities: ['dist/**/entities/*{.ts,.js}'],
  synchronize: process.env.DB_SYNCHRONIZE_TOGGLE,
  migrations: [path.join(__dirname, 'migrations', '*{.js,.ts}')],
  cli: {
    migrationsDir: path.join(__dirname, 'migrations'),
  },
};
