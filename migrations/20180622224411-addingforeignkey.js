'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.addColumn(
      'grocerylist',
      'shoppingListID', {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'shoppingList',
          key: 'id'
        }
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.removeColumn(
      'grocerylist',
      'shoppingListID'
    )
  }
};
