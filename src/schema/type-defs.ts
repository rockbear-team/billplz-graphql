import { gql } from 'apollo-server-express'

// billplz type
const typeDefs = gql`
  enum CollectionStatus {
    active
    inactive
  }
  type CollectionType {
    id: String
    title: String
    status: CollectionStatus
  }
  enum PaymentButtonType {
    pay
    buy
  }
  type OpenCollectionType {
    id: ID
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
    url: String
    status: CollectionStatus
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
  type PaymentGatewayType {
    code: ID
    active: Boolean
    category: String
  }
  type Query {
    getCollection(COLLECTION_ID: ID!): CollectionType
    getOpenCollection(COLLECTION_ID: ID!): OpenCollectionType
    getBill(BILL_ID: ID!): BillType
    getPaymentGateways: [PaymentGatewayType]
  }
  type Mutation {
    createCollection(title: String!): CollectionType
    createOpenCollection(
      title: String!
      description: String!
      amount: Int!
      fixed_amount: Boolean
      fixed_quantity: Boolean
      payment_button: PaymentButtonType
      reference_1_label: String
      email_link: String
      tax: Int
    ): OpenCollectionType
    createBill(
      collection_id: String!
      email: String!
      mobile: String!
      name: String!
      amount: Int!
      callback_url: String!
      description: String!
      due_at: String
      redirect_url: String
      deliver: Boolean
      reference_1: String
      reference_1_label: String
      reference_2: String
      reference_2_label: String
    ): BillType
    deleteBill(BILL_ID: String!): String
  }
`

export default typeDefs
