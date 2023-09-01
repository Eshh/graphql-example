const productsModel = require("./products.model");
module.exports = {
  Query: {
    products: (parent, args, conext, info) => {
      console.log("Product resolver called");
      return productsModel.getAllProducts();
    },
    productsByPrice: (_, args) => {
      return productsModel.getProductsByPrice(args.minPrice, args.maxPrice);
    },
    productById: (_, args) => productsModel.getProductById(args.id),
  },

  Mutation: {
    addNewProduct: (_, args) => productsModel.addNewProduct(args),
    addNewReview: (_, args) => productsModel.addNewReview(args),
  },
};
