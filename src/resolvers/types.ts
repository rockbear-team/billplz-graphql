export interface createCollectionArgs {
  title: string
}

export interface createOpenCollectionArgs {
  title: string
  description: string
  amount: number
  fixed_amount: boolean
  fixed_quantity: boolean
  payment_button: string
  reference_1_label: string
  email_link: string
  tax: number
}

export interface createBillArgs {
  collection_id: string
  email: string
  mobile: string
  name: string
  amount: number
  callback_url: string
  description: string
  due_at: string
  redirect_url: string
  deliver: boolean
  reference_1: string
  reference_1_label: string
  reference_2: string
  reference_2_label: string
}

export interface deleteBillArgs {
  BILL_ID: string
}

export interface getCollectionArgs {
  COLLECTION_ID: string
}

export interface getOpenCollectionArgs {
  COLLECTION_ID: string
}

export interface getBillArgs {
  BILL_ID: string
}
