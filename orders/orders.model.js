orders = [
  {
    date: "September 20,2022",
    subtotal: 35000,
    items: [
      {
        product: { id: "iphone11", title: "Iphone 11 128gb", price: 35000 },
        quantity: 1,
      },
    ],
  },
];

function getAllOrders(){
  return orders;
}

module.exports = getAllOrders