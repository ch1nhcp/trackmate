import type { Subscription } from '@/types/subscription'

export const mockSubscriptions: Subscription[] = [
  { id: '1', name: 'Netflix',      plan: 'Standard',   emoji: '🎬', category: 'Giải trí',  cycle: 'monthly', price: 15.49, currency: 'USD', nextBillingDate: '2026-05-07', status: 'due_soon' },
  { id: '2', name: 'ChatGPT Plus', plan: 'Pro',        emoji: '🤖', category: 'Công việc', cycle: 'monthly', price: 20.00, currency: 'USD', nextBillingDate: '2026-05-09', status: 'due_soon' },
  { id: '3', name: 'Spotify',      plan: 'Individual', emoji: '🎵', category: 'Giải trí',  cycle: 'monthly', price: 9.99,  currency: 'USD', nextBillingDate: '2026-05-16', status: 'active'   },
  { id: '4', name: 'Adobe CC',     plan: 'All Apps',   emoji: '🎨', category: 'Công việc', cycle: 'monthly', price: 54.99, currency: 'USD', nextBillingDate: '2026-05-22', status: 'active'   },
  { id: '5', name: 'iCloud+',      plan: '50GB',       emoji: '☁️', category: 'Tiện ích',  cycle: 'monthly', price: 2.99,  currency: 'USD', nextBillingDate: '2026-05-28', status: 'active'   },
]
