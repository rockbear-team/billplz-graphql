import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { buildFederatedSchema } from '@apollo/federation'
import base64 from 'base-64'
import typeDefs from './schema'
import resolvers from './resolvers'
import BillplzAPI from './api'

if (process.env.NODE_ENV == 'staging') {
  require('dotenv').config()
}

const { BILLPLZ_API_SECRET_KEY, NODE_ENV }: any = process.env

const app = express()

/*
 * by default server run on port '5000'
 * you can change it if you want
 */
app.set('port', process.env.PORT || 5000)

const server = new ApolloServer({
  schema: buildFederatedSchema({ typeDefs, resolvers }),
  dataSources: () => ({
    billplzAPI: new BillplzAPI()
  }),
  context: () => ({
    token: `Basic ${base64.encode(BILLPLZ_API_SECRET_KEY)}`,
    env: NODE_ENV
  })
})

server.applyMiddleware({ app })

app.listen(app.get('port'), () => {
  console.log(`GraphQL run on port ${app.get('port')}`)
})
