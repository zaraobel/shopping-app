module.exports = (sequelize, DataTypes) => {
    const Cart = sequelize.define('Cart', {
      status: {
        type: DataTypes.STRING, // e.g., 'active', 'pending', 'completed'
        defaultValue: 'active',
      },
    });
  
    Cart.associate = function(models) {
      Cart.belongsTo(models.User);
      Cart.hasMany(models.CartItem);
    };
  
    return Cart;
  };
  