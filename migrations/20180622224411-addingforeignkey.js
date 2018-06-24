'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.addColumn(
      'grocerylists',
      'shoppingListID', {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'shoppingLists',
          key: 'id'
        }
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.removeColumn(
      'grocerylists',
      'shoppingListID'
    )
  }
};
