'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('post', {
      name: {
        type: DataTypes.TEXT,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('post');
  },
};
