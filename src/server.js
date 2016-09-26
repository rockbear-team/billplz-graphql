import express from 'express';
import graphQLHTTP from 'express-graphql';
import { schema, root } from './schema';

const app = express();

/*
* by default server run on port '4000'
* you can change it if you want
*/
const GraphQLPort = 4000;

/*
* you can disable graphiql IDE and pretty options
* by change value from 'true' to 'false'
*/
app.use('/graphql', graphQLHTTP({
  graphiql: true,
  pretty: true,
  rootValue: root,
  schema,
}));

app.listen(GraphQLPort, () => {
  // eslint-disable-next-line
  console.log(`GraphQL run on port ${GraphQLPort}`);
});
