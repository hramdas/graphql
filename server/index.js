const express = require('express');
const { ApolloServer } = require('@apollo/server')
const { expressMiddleware } = require('@apollo/server/express4')
const bodyParser = require('body-parser');
const resolvers = require('./src/resolvers');
const typeDefs = require('./src/schema');
const customers = require('./src/routes/customers')
const mongooseConnect = require('./src/config/db')
require("dotenv").config()
const app = express();
const port = process.env.PORT
app.use(bodyParser.json())

const server = new ApolloServer({
  typeDefs,
  resolvers
})

async function startGraphql() {
  await server.start()
  app.use('/graphql', expressMiddleware(server))
}
customers(app)

app.listen(port, async () => {
  mongooseConnect()
  startGraphql()
  console.log("Listening on port :", port)
})