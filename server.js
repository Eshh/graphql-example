const express = require("express");
const { buildSchema } = require("graphql");
const { graphqlHTTP } = require("express-graphql");
const http = require("http");

const app = express();

const schema = buildSchema(`
    type Query {
        description:String
        price:Float
    }
`);
const root = {
  description: "Iphone 11",
  price: 499999,
};

app.use("/graphql", graphqlHTTP({
  schema: schema,
  rootValue:root,
  graphiql:true
}));

function startServer() {
  const server = http.createServer(app);
  server.listen(5000, () => console.log("Express server started"));
}

startServer();
