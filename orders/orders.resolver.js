const {ordersModel} = require('./orders.model')

module.exports = {
    Query: {
      orders: (parent, args, conext, info) => {
        return ordersModel.getAllOrders();
      },
    },
  };
