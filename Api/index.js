//index
//imoorting our express
const { express, routes } = require("./controller");
const path = require("path");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const errorHandling = require("./middleware/error-handling");
const port = +process.env.PORT || 3000;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Request-Methods", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Expose-Headers", "Authorization");
  next();
});

// Middleware - APplication level
// cookieParser & Router
// cookieParser should be set before router
app.use(
  express.static("./static"),
  express.json(),
  express.urlencoded({
    extended: false,
  }),
  cookieParser(),
  cors(),
  routes
);

routes.get("^/$|/challenger", (req, res) => {
  console.log("welcome back");
  res.sendFile(path.resolve(__dirname, "./static/html/index.html"));
});

// Importing error handling middleware
// Handling all errors
app.use(errorHandling);

// Server
app.listen(port, () => {
  console.log(`The server is running on port ${port} 😁`);
});











// class Person{
//     #firstName = "";
//     constructor(firstName) {
//         this.#firstName = firstName
//     }
//     walk(){
//         console.log(`${this.#firstName} is walking`);
//     }
//     dance() {
//         console.log(`${this.#firstName} is dancing`);
//     }
// }
// const person1 = new Person("Joel")
// const person2 = new Person("Ryan")
// person1.walk()
// person2.dance()
