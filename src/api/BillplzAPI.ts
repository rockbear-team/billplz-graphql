import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest'

class BillplzAPI extends RESTDataSource {
  constructor() {
    super()
  }

  get baseURL() {
    if (this.context.env === 'staging') {
      return 'https://www.billplz-sandbox.com/api/'
    } else {
      return 'https://www.billplz.com/api/'
    }
  }

  willSendRequest(request: RequestOptions) {
    request.headers.set('Authorization', this.context.token)
  }

  postCollection(title: string) {
    return this.post('v4/collections', { title })
  }

  getCollection(COLLECTION_ID: string) {
    return this.get(`/v4/collections/${COLLECTION_ID}`)
  }

  postOpenCollection(openCollection: any) {
    return this.post('v4/open_collections', openCollection)
  }

  getOpenCollection(COLLECTION_ID: string) {
    return this.get(`v4/open_collections/${COLLECTION_ID}`)
  }

  postBill(bill: any) {
    return this.post('v3/bills', bill)
  }

  getBill(BILL_ID: string) {
    return this.get(`v3/bills/${BILL_ID}`)
  }

  deleteBill(BILL_ID: string) {
    this.delete(`v3/bills/${BILL_ID}`)

    return 'DELETED'
  }

  async getPaymentGateways() {
    const getPaymentGateways = await this.get('/v4/payment_gateways')

    return getPaymentGateways.payment_gateways
  }
}

export default BillplzAPI
