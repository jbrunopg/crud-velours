const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const MongoClient = require('mongodb').MongoClient;

const app = express();
const port = 3000;

// Configuração do SQLite
const db = new sqlite3.Database(':memory:');

db.serialize(() => {
  db.run('CREATE TABLE products (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, price REAL)');
});

// Configuração do MongoDB
const mongoUrl = 'mongodb://localhost:27017';
const dbName = 'productdb';

MongoClient.connect(mongoUrl, { useUnifiedTopology: true }, (err, client) => {
  if (err) throw err;

  const db = client.db(dbName);
  const collection = db.collection('products');

  // Rotas da API RESTful
  app.use(bodyParser.json());

  app.get('/api/products', (req, res) => {
    collection.find({}).toArray((err, docs) => {
      if (err) throw err;
      res.json(docs);
    });
  });

  app.get('/api/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    collection.findOne({ id: productId }, (err, doc) => {
      if (err) throw err;
      res.json(doc);
    });
  });

  app.post('/api/products', (req, res) => {
    const product = req.body;
    collection.insertOne(product, (err, result) => {
      if (err) throw err;
      res.status(201).send();
    });
  });

  app.put('/api/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const updatedProduct = req.body;
    collection.updateOne({ id: productId }, { $set: updatedProduct }, (err, result) => {
      if (err) throw err;
      res.status(204).send();
    });
  });

  app.delete('/api/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    collection.deleteOne({ id: productId }, (err, result) => {
      if (err) throw err;
      res.status(204).send();
    });
  });

  // Iniciar o servidor
  app.listen(port, () => {
    console.log(`Servidor backend ouvindo na porta ${port}`);
  });
});
