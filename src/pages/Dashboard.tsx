import { Sidebar } from '@/components/layout/Sidebar'
import { Topbar } from '@/components/layout/Topbar'
import { StatCards } from '@/components/dashboard/StatCards'
import { SubscriptionTable } from '@/components/dashboard/SubscriptionTable'
import { UpcomingPanel } from '@/components/dashboard/UpcomingPanel'
import { mockSubscriptions } from '@/lib/mock-data'
import type { StatItem } from '@/components/dashboard/StatCards'

const stats: StatItem[] = [
  { label: 'Tổng / tháng',   value: '$62.97', sub: '↑ $3.99 so với tháng trước', subVariant: 'success' },
  { label: 'Gói active',     value: '8',      sub: '2 bị tạm dừng'              },
  { label: 'Đã chi năm nay', value: '$755',   sub: '5 tháng · avg $151/tháng'   },
  { label: 'Sắp đến hạn',    value: '2',      sub: 'trong 7 ngày tới',          subVariant: 'warning' },
]

export default function Dashboard() {
  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <Sidebar activeRoute="dashboard" notificationCount={3} />

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Topbar
          title="Dashboard"
          subtitle="Tháng 5 · 2026"
          onAddClick={() => {}}
          onExportClick={() => {}}
        />

        <div className="flex-1 overflow-auto p-6 flex flex-col gap-5">
          <StatCards stats={stats} />

          <div className="flex gap-5 flex-1 min-h-0">
            <div className="flex-1 min-w-0">
              <SubscriptionTable subscriptions={mockSubscriptions} />
            </div>
            <UpcomingPanel subscriptions={mockSubscriptions} />
          </div>
        </div>
      </div>
    </div>
  )
}
