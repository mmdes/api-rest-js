require('dotenv').config();

module.exports = {
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
  dialect: 'mariadb',
  dialectOptions: {
    timezone: '-04:00', // Cuiabá
  },
  timezone: '-04:00',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    lastName: 'last_name',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
};
