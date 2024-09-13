module.exports = (sequelize, DataTypes) => {
    const CartItem = sequelize.define('CartItem', {
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
    });
  
    CartItem.associate = function(models) {
      CartItem.belongsTo(models.Cart);
      CartItem.belongsTo(models.Product);
    };
  
    return CartItem;
  };
  