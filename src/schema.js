import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLNonNull,
  GraphQLEnumType,
} from 'graphql/type';

// import api
import { getBill, createCollection, createOpenCollection, createBill, deleteBill } from './api';

// collection type
const CollectionType = new GraphQLObjectType({
  name: 'CollectionType',
  description: 'Collection Arguments.',
  fields: {
    id: {
      type: GraphQLString,
    },
    title: {
      type: GraphQLString,
    },
  },
});

// payment button enum type
const PaymentButtonType = new GraphQLEnumType({
  name: 'PaymentButtonType',
  description: 'Payment button text.',
  values: {
    Pay: {
      value: 'pay',
    },
    Buy: {
      value: 'buy',
    },
  },
});

// open collection type
const OpenCollectionType = new GraphQLObjectType({
  name: 'OpenCollectionType',
  description: 'Open Collection Arguments',
  fields: {
    title: {
      type: GraphQLString,
    },
    description: {
      type: GraphQLString,
    },
    amount: {
      type: GraphQLInt,
    },
    fixed_amount: {
      type: GraphQLBoolean,
    },
    fixed_quantity: {
      type: GraphQLBoolean,
    },
    payment_button: {
      type: PaymentButtonType,
    },
    reference_1_label: {
      type: GraphQLString,
    },
    reference_2_label: {
      type: GraphQLString,
    },
    email_link: {
      type: GraphQLString,
    },
    tax: {
      type: GraphQLInt,
    },
  },
});

// bill type
const BillType = new GraphQLObjectType({
  name: 'BillType',
  description: 'A Bill type.',
  fields: {
    id: {
      type: GraphQLString,
    },
    collection_id: {
      type: GraphQLString,
    },
    email: {
      type: GraphQLString,
    },
    mobile: {
      type: GraphQLString,
    },
    name: {
      type: GraphQLString,
    },
    amount: {
      type: GraphQLInt,
    },
    callback_url: {
      type: GraphQLString,
    },
    description: {
      type: GraphQLString,
    },
    due_at: {
      type: GraphQLString,
    },
    redirect_url: {
      type: GraphQLString,
    },
    reference_1_label: {
      type: GraphQLString,
    },
    reference_1: {
      type: GraphQLString,
    },
    reference_2_label: {
      type: GraphQLString,
    },
    reference_2: {
      type: GraphQLString,
    },
    state: {
      type: GraphQLString,
    },
    paid: {
      type: GraphQLBoolean,
    },
    paid_amount: {
      type: GraphQLInt,
    },
    url: {
      type: GraphQLString,
    },
  },
});

// root query
const Query = new GraphQLObjectType({
  name: 'Query',
  description: 'Billplz GraphQL Query Reference.',
  fields: () => ({
    bill: {
      type: BillType,
      description: 'Get a bill.',
      args: {
        BILL_ID: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: (_, { BILL_ID }) => {
        return getBill(BILL_ID);
      },
    },
  }),
});

// root mutation
const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  description: 'Billplz GraphQL Mutation Reference.',
  fields: {
    createCollection: {
      description: 'Create a collection.',
      args: {
        title: { type: new GraphQLNonNull(GraphQLString) },
      },
      type: CollectionType,
      resolve: (_, { title }) => {
        return createCollection(title);
      },
    },
    createOpenCollection: {
      type: OpenCollectionType,
      description: 'Create an open collection',
      args: {
        title: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: new GraphQLNonNull(GraphQLString) },
        amount: { type: new GraphQLNonNull(GraphQLInt) },
        fixed_amount: { type: GraphQLBoolean },
        fixed_quantity: { type: GraphQLBoolean },
        payment_button: { type: PaymentButtonType },
        reference_1_label: { type: GraphQLString },
        reference_2_label: { type: GraphQLString },
        email_link: { type: GraphQLString },
        tax: { type: GraphQLInt },
      },
      resolve: (_, args) => {
        return createOpenCollection(args);
      },
    },
    createBill: {
      type: BillType,
      description: 'Create a bill.',
      args: {
        collection_id: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: new GraphQLNonNull(GraphQLString) },
        mobile: { type: new GraphQLNonNull(GraphQLString) },
        firstName: { type: new GraphQLNonNull(GraphQLString) },
        lastName: { type: new GraphQLNonNull(GraphQLString) },
        amount: { type: new GraphQLNonNull(GraphQLInt) },
        callback_url: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: new GraphQLNonNull(GraphQLString) },
        due_at: { type: GraphQLString },
        redirect_url: { type: GraphQLString },
        deliver: { type: GraphQLBoolean },
        reference_1_label: { type: GraphQLString },
        reference_1: { type: GraphQLString },
        reference_2_label: { type: GraphQLString },
        reference_2: { type: GraphQLString },
      },
      resolve: (_, args) => {
        return createBill(args);
      },
    },
    deleteBill: {
      type: GraphQLString,
      description: 'Delete a bill.',
      args: {
        BILL_ID: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: (_, { BILL_ID }) => {
        return deleteBill(BILL_ID);
      },
    },
  },
});

export default new GraphQLSchema({
  query: Query,
  mutation: Mutation,
});
