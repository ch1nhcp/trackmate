import { Link } from 'react-router-dom'
import { daysUntil } from '@/lib/date-utils'
import type { Subscription } from '@/types/subscription'
import { DaysLeftBadge } from './DaysLeftBadge'

interface UpcomingPanelProps {
  subscriptions: Subscription[]
}

function formatShortDate(dateStr: string): string {
  const d = new Date(dateStr)
  return d.toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit' })
}

export function UpcomingPanel({ subscriptions }: UpcomingPanelProps) {
  const upcoming = subscriptions
    .filter((s) => daysUntil(s.nextBillingDate) <= 30)
    .sort((a, b) => new Date(a.nextBillingDate).getTime() - new Date(b.nextBillingDate).getTime())
    .slice(0, 6)

  return (
    <div className="w-[280px] shrink-0 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold text-foreground">Sắp đến hạn</h2>
        <Link to="/calendar" className="text-xs text-primary hover:underline">
          Xem lịch →
        </Link>
      </div>

      <div className="flex flex-col gap-2">
        {upcoming.map((sub) => (
          <div
            key={sub.id}
            className="flex items-center gap-3 p-3 rounded-xl border border-border bg-card"
          >
            <div className="size-9 rounded-lg bg-muted flex items-center justify-center text-lg shrink-0 select-none">
              {sub.emoji}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate leading-none">
                {sub.name}
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">
                {formatShortDate(sub.nextBillingDate)} · ${sub.price.toFixed(2)}
              </p>
            </div>
            <DaysLeftBadge dateStr={sub.nextBillingDate} />
          </div>
        ))}
      </div>
    </div>
  )
}
