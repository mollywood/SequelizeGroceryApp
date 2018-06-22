'use strict';
module.exports = (sequelize, DataTypes) => {
  var shoppingList = sequelize.define('shoppingList', {
    shoppinglist: DataTypes.STRING
  }, {});
  shoppingList.associate = function(models) {
    // associations can be defined here
  };
  return shoppingList;
};