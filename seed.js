require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/Product');
const Counter = require('./models/Counter');

const data = [
  { name: 'Chocolate Truffle Cake', sku: 'CAKE-CK-101', category: 'Cakes', price: 899, quantity: 12, reorderLevel: 5, supplier: 'Theobroma' },
  { name: 'Red Velvet Cake', sku: 'CAKE-CK-102', category: 'Cakes', price: 1199, quantity: 8, reorderLevel: 5, supplier: 'CakeZone' },
  { name: 'Blueberry Muffin', sku: 'BAKE-MF-103', category: 'Muffins', price: 120, quantity: 30, reorderLevel: 10, supplier: 'Muffin House' },
  { name: 'Chocolate Brownie', sku: 'BAKE-BR-104', category: 'Brownies', price: 150, quantity: 25, reorderLevel: 10, supplier: 'Theobroma' },
  { name: 'Vanilla Cupcake', sku: 'BAKE-CP-105', category: 'Cupcakes', price: 90, quantity: 40, reorderLevel: 15, supplier: 'Sweet Truth' },
  { name: 'Strawberry Cheesecake', sku: 'CAKE-CK-106', category: 'Cheesecakes', price: 650, quantity: 6, reorderLevel: 5, supplier: 'Bakingo' },
  { name: 'Chocolate Croissant', sku: 'BAKE-CR-107', category: 'Pastries', price: 180, quantity: 20, reorderLevel: 8, supplier: 'Paris Bakery' },
  { name: 'Pineapple Pastry', sku: 'BAKE-PS-108', category: 'Pastries', price: 100, quantity: 35, reorderLevel: 12, supplier: 'CakeZone' },
  { name: 'Glazed Donut', sku: 'BAKE-DN-109', category: 'Donuts', price: 80, quantity: 50, reorderLevel: 20, supplier: 'Mad Over Donuts' },
  { name: 'Almond Cookies', sku: 'BAKE-CK-110', category: 'Cookies', price: 250, quantity: 15, reorderLevel: 10, supplier: 'Britannia' },
  { name: 'Garlic Bread', sku: 'BAKE-BR-111', category: 'Breads', price: 150, quantity: 18, reorderLevel: 8, supplier: 'Modern Bakery' },
  { name: 'Black Forest Cake', sku: 'CAKE-CK-112', category: 'Cakes', price: 999, quantity: 4, reorderLevel: 6, supplier: 'Bakingo' },
];
(async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Product.deleteMany({});
    await Counter.deleteMany({}); 
    for (const item of data) await Product.create(item);
    console.log(`Seeded ${data.length} products`);
  } catch (err) {
    console.error('Seeding failed:', err.message);
  } finally {
    await mongoose.disconnect();
  }
})();
