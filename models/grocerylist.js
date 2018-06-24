'use strict';
module.exports = (sequelize, DataTypes) => {
  var grocerylist = sequelize.define('grocerylist', {
    item: DataTypes.STRING,
    quantity: DataTypes.INTEGER
  }, {});
  grocerylist.associate = function(models) {
    grocerylist.belongsTo(models.shoppingList,{as : 'shoppinglists', foreignKey : 'shoppingListID'})
  };
  return grocerylist;
};