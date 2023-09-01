const express = require("express");
const { buildSchema } = require("graphql");
const { graphqlHTTP } = require("express-graphql");
const { ApolloServer } = require("apollo-server-express");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const { loadFilesSync } = require("@graphql-tools/load-files");
const path = require("path");
const http = require("http");

// const app = express();

// const root = {
//   products: require("./products/products.model.js"),
//   orders: require("./orders/orders.model.js"),
// };

// app.use(
//   "/graphql",
//   graphqlHTTP({
//     schema: schema,
//     // rootValue: root,
//     graphiql: true,
//   })
// );

async function startApolloServer() {
  const app = express();
  const typeArray = loadFilesSync("**/*", {
    extensions: ["graphql"],
  });
  const resolverArray = loadFilesSync("**/*", {
    extensions: ["resolver.js"],
  });
  const schema = makeExecutableSchema({
    typeDefs: typeArray,
    resolvers: resolverArray,
  });
  const server = new ApolloServer({
    schema,
  });
  await server.start();
  server.applyMiddleware({ app, path: "/graphql" });
  app.listen(3000, () => console.log("Graphql-Apollo server started"));
}

// function startServer() {
//   const server = http.createServer(app);
//   server.listen(5000, () => console.log("Express server started"));
// }

// startServer();
startApolloServer();
