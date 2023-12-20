const jsonServer = require("json-server");
const cors = require("cors");

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

// Use the cors middleware
server.use(cors());

// Other middlewares
server.use(middlewares);

// Use the router
server.use(router);

// Start the server
const port = 8000;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
