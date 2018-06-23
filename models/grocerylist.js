'use strict';
module.exports = (sequelize, DataTypes) => {
  var grocerylist = sequelize.define('grocerylist', {
    item: DataTypes.STRING,
    quantity: DataTypes.INTEGER
  }, {});
  grocerylist.associate = function(models) {
    // associations can be defined here
  };
  return grocerylist;
};