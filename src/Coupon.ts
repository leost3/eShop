export default class Coupon {
  percentage: number
  code: string
  constructor(code: string, percentage: number){
    this.code = code
    this.percentage = percentage
  }
}