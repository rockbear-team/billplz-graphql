const Mutation = {
  createCollection: (_: any, { title }: any, { dataSources }: any) => {
    return dataSources.billplzAPI.postCollection(title)
  },
  createOpenCollection: (_: any, args: any, { dataSources }: any) => {
    return dataSources.billplzAPI.postOpenCollection(args)
  },
  createBill: (_: any, args: any, { dataSources }: any) => {
    return dataSources.billplzAPI.postBill(args)
  },
  deleteBill: (_: any, { BILL_ID }: any, { dataSources }: any) => {
    return dataSources.billplzAPI.deleteBill(BILL_ID)
  }
}

export default Mutation
