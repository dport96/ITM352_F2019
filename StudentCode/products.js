products =
  [
    {
      brand: "Apple iPhone XS",
      price: 990.00,
      image: 'AppleXS.jpg'
    },
    {
      brand: "Samsung Galaxy S10",
      price: 850.00,
      image: 'GalaxyS10.jpg'
    },
    {
      brand: "Motorola Moto G7 Power/Supra",
      price: 450.00,
      image: 'MotoG7.png'
    },
    {
      brand: "Google Pixel 3a",
      price: 350.00,
      image: 'Pixel3a.jpg'
    }
  ];

if (typeof module != 'undefined') {
  module.exports.products = products;
}