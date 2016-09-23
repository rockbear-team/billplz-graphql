import { buildSchema } from 'graphql';

// import api
import { getBill,
  createCollection,
  createOpenCollection,
  createBill,
  deleteBill,
  checkAccountVerification,
} from './api';

// billplz type
const schema = buildSchema(`
    type CollectionType {
      id: String
      title: String
    }
    enum PaymentButtonType {
      pay
      buy
    }
    type OpenCollectionType {
      title: String
      description: String
      amount: Int
      fixed_amount: Boolean
      fixed_quantity: Boolean
      payment_button: PaymentButtonType
      reference_1_label: String
      reference_2_label: String
      email_link: String
      tax: Int
    }
    type BillType {
      id: String
      collection_id: String
      email: String
      mobile: String
      name: String
      amount: Int
      callback_url: String
      description: String
      due_at: String
      redirect_url: String
      reference_1_label: String
      reference_1: String
      reference_2_label: String
      reference_2: String
      state: String
      paid: Boolean
      paid_amount: Int
      url: String
    }
    type AccountVerification {
      name: String
    }
    type Query {
      bill(BILL_ID: String!): BillType
      checkAccountVerification(BANK_ACCOUNT_NUMBER: String!): AccountVerification
    }
    type Mutation {
      createCollection(title: String!): CollectionType
      createOpenCollection(
        title: String!,
        description: String!,
        amount: Int!,
        fixed_amount: Boolean,
        fixed_quantity: Boolean,
        payment_button: PaymentButtonType,
        reference_1_label: String,
        email_link: String,
        tax: Int
      ): OpenCollectionType
      createBill(
        collection_id: String!,
        email: String!,
        mobile: String!,
        firstName: String!,
        lastName: String!,
        amount: Int!,
        callback_url: String!,
        description: String!,
        due_at: String,
        redirect_url: String,
        deliver: Boolean,
        reference_1: String,
        reference_1_label: String,
        reference_2: String,
        reference_2_label: String,
      ): BillType
      deleteBill(BILL_ID: String!): String
    }
  `);

/*
* root operations
* @param 'args' is an argument objects
*/
const root = {
  bill: ({ BILL_ID }) => {
    return getBill(BILL_ID);
  },
  createCollection: ({ title }) => {
    return createCollection(title);
  },
  createOpenCollection: (args) => {
    return createOpenCollection(args);
  },
  createBill: (args) => {
    return createBill(args);
  },
  deleteBill: ({ BILL_ID }) => {
    return deleteBill(BILL_ID);
  },
  checkAccountVerification: ({ BANK_ACCOUNT_NUMBER }) => {
    return checkAccountVerification(BANK_ACCOUNT_NUMBER);
  },
};

export { schema, root };
