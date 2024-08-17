/**
 * @type {import('sequelize-cli').Migration} */

const bcrypt = require('bcryptjs');
const { update } = require('lodash');

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'user1',
          email: 'user1@email.com',
          password_hash: await bcrypt.hash('user1123', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'user2',
          email: 'user2@email.com',
          password_hash: await bcrypt.hash('user2123', 8),
          created_at: new Date(),
          updated_at: new Date(),
        }, {
          name: 'user3',
          email: 'user3@email.com',
          password_hash: await bcrypt.hash('user3123', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },
};
