import { createBillArgs, createCollectionArgs, createOpenCollectionArgs, deleteBillArgs } from './types'

const Mutation = {
  createCollection: (_: any, { title }: createCollectionArgs, { dataSources }: any) => {
    return dataSources.billplzAPI.postCollection(title)
  },
  createOpenCollection: (_: any, args: createOpenCollectionArgs, { dataSources }: any) => {
    return dataSources.billplzAPI.postOpenCollection(args)
  },
  createBill: (_: any, args: createBillArgs, { dataSources }: any) => {
    return dataSources.billplzAPI.postBill(args)
  },
  deleteBill: (_: any, { BILL_ID }: deleteBillArgs, { dataSources }: any) => {
    return dataSources.billplzAPI.deleteBill(BILL_ID)
  }
}

export default Mutation
