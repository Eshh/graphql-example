const products = [
  {
    id: "iphone11",
    title: "Iphone 11 128gb",
    price: 49999,
    reviews: [],
  },
  {
    id: "lenovodual",
    title: "Lenovo dual screen laptop",
    price: 219999,
    reviews: [
      {
        rating: 4,
        comment: "eye catchy",
      },
    ],
  },
];

function getAllProducts() {
  return products;
}
function getProductsByPrice(min, max) {
  const productsByPrice = products.filter(
    (each) => each.price > min && each.price < max
  );
  return productsByPrice;
}

function getProductById(id) {
  return products.find((each) => each.id == id);
}

function addNewProduct(args) {
  const { id, title, price } = args;
  let newProduct = { id, title, price, reviews: [] };
  products.push(newProduct);
  return newProduct;
}

function addNewReview(args) {
  const { id, rating } = args;
  let comment = args.comment || "";
  let message = "Product Not found";
  products.forEach((each) =>
    each.id == id
      ? (each["reviews"].push({ rating, comment }),
        (message = "Product review added"))
      : false
  );
  return message;
}

module.exports = {
  getAllProducts,
  getProductsByPrice,
  getProductById,
  addNewProduct,
  addNewReview,
};
