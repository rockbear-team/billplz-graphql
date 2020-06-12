const Query = {
  getCollection: (_: any, { COLLECTION_ID }: any, { dataSources }: any) => {
    return dataSources.billplzAPI.getCollection(COLLECTION_ID)
  },
  getOpenCollection: (_: any, { COLLECTION_ID }: any, { dataSources }: any) => {
    return dataSources.billplzAPI.getOpenCollection(COLLECTION_ID)
  },
  getBill: (_: any, { BILL_ID }: any, { dataSources }: any) => {
    return dataSources.billplzAPI.getBill(BILL_ID)
  },
  getPaymentGateways: (_: any, args: any, { dataSources }: any) => {
    return dataSources.billplzAPI.getPaymentGateways()
  }
}

export default Query
