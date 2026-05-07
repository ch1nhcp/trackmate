export type BillingCycle = 'weekly' | 'monthly' | 'quarterly' | 'yearly'
export type SubStatus = 'active' | 'due_soon' | 'paused'

export interface Subscription {
  id: string
  name: string
  plan: string
  emoji: string
  category: string
  cycle: BillingCycle
  price: number
  currency: string
  nextBillingDate: string
  status: SubStatus
}
