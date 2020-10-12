import { getCollectionArgs, getOpenCollectionArgs, getBillArgs } from './types'

const Query = {
  getCollection: (_: any, { COLLECTION_ID }: getCollectionArgs, { dataSources }: any) => {
    return dataSources.billplzAPI.getCollection(COLLECTION_ID)
  },
  getOpenCollection: (_: any, { COLLECTION_ID }: getOpenCollectionArgs, { dataSources }: any) => {
    return dataSources.billplzAPI.getOpenCollection(COLLECTION_ID)
  },
  getBill: (_: any, { BILL_ID }: getBillArgs, { dataSources }: any) => {
    return dataSources.billplzAPI.getBill(BILL_ID)
  },
  getPaymentGateways: (_: any, args: any, { dataSources }: any) => {
    return dataSources.billplzAPI.getPaymentGateways()
  }
}

export default Query
