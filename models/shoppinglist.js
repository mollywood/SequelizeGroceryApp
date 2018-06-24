'use strict';
module.exports = (sequelize, DataTypes) => {
  var shoppingList = sequelize.define('shoppingList', {
    shoppinglist: DataTypes.STRING
  }, {});
  shoppingList.associate = function(models) {
    shoppingList.hasMany(models.grocerylist,{as: 'grocerylist',foreignKey: 'shoppingListID'})
  };
  return shoppingList;
};