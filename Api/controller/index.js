//mmm
const express = require("express");
const bodyParser = require("body-parser");
const{verifyAToken}=require('../middleware/authentication')
const routes = express.Router();

//import all models objects
const { users,orders,books,bookAuthor } = require("../model");




//=====user's router======
routes.get("/users", (req, res) => {
  users.fetchUsers(req, res);
});
routes.get("/user/:id", (req, res) => {
  users.fetchUser(req, res);
});
routes.post("/register", bodyParser.json(), (req, res) => {
  users.register(req, res);
});
routes.put("/user/:id", bodyParser.json(), (req, res) => {
  users.updateUser(req, res);
});
routes.patch("/user/:id", bodyParser.json(), (req, res) => {
  users.updateUser(req, res);
});
routes.delete("/user/:id", (req, res) => {
  users.deleteUser(req, res);
});

routes.post("/login", bodyParser.json(), (req, res) => {
  users.login(req, res);
});

//====books routes=====

routes.get("/books", bodyParser.json(), (req, res) => {
    books.fetchBooks(req, res);
  });
  routes.get("/book/:id", (req, res) => {
    books.fetchBooks(req, res);
  });
  routes.post("/registerBook", bodyParser.json(), (req, res) => {
    books.registerBook(req, res);
  });
  routes.put("/book/:id", bodyParser.json(), (req, res) => {
    books.updateBook(req, res);
  });
  routes.patch("/book/:id", bodyParser.json(), (req, res) => {
    books.updateBook(req, res);
  });
  routes.delete("/book/:id", (req, res) => {
    books.deleteBook(req, res);
  });


  //====bookauthor routes=====
  routes.get("/bookauthors", bodyParser.json(), (req, res) => {
    bookAuthor.fetch(req, res);
  });
  routes.get("/bookauthor/:id", (req, res) => {
    bookAuthor.fetchAuhtor(req, res);
  });
  routes.post("/registerAuthor", bodyParser.json(), (req, res) => {
    bookAuthor.registerAuthor(req, res);
  });
  routes.put("/Author/:id", bodyParser.json(), (req, res) => {
    bookAuthor.updateBAuthor(req, res);
  });
  routes.patch("/bookauthor/:id", bodyParser.json(), (req, res) => {
    bookAuthor.updateAuthor(req, res);
  });
  routes.delete("/bookauthor/:id", (req, res) => {
    bookAuthor.deleteAuthor(req, res);
  });
module.exports = {
  express,
  routes,
};
