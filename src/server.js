// @flow

import express from 'express';
import graphQLHTTP from 'express-graphql';

import schema from './schema';

const app = express();

/*
* by default server run on port '3000'
* you can change it if you want
*/
const GraphQLPort = 3000;

/*
* you can disable graphiql IDE and pretty options
* by change value from 'true' to 'false'
*/
app.use('/graphql', graphQLHTTP({
  graphiql: true,
  pretty: true,
  schema,
}));

app.listen(GraphQLPort, () => {
  // eslint-disable-next-line
  console.log(`GraphQL run on port ${GraphQLPort}`);
});
