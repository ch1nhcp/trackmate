import { ChevronDown, MoreHorizontal, Pencil } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/utils'
import { daysUntil } from '@/lib/date-utils'
import type { Subscription } from '@/types/subscription'
import { StatusBadge } from './StatusBadge'

interface SubscriptionTableProps {
  subscriptions: Subscription[]
  onRowClick?: (id: string) => void
}

const cycleLabel: Record<string, string> = {
  weekly:    'Tuần',
  monthly:   'Tháng',
  quarterly: 'Quý',
  yearly:    'Năm',
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr)
  return d.toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' })
}

export function SubscriptionTable({ subscriptions, onRowClick }: SubscriptionTableProps) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold text-foreground">
          Danh sách gói ({subscriptions.length})
        </h2>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            Lọc <ChevronDown className="size-3.5" />
          </Button>
          <Button variant="outline" size="sm">
            Sắp xếp <ChevronDown className="size-3.5" />
          </Button>
        </div>
      </div>

      <div className="border border-border rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-muted/40 border-b border-border">
              <th className="px-4 py-2.5 w-10" />
              <th className="text-left px-4 py-2.5 text-xs font-medium text-muted-foreground">Tên</th>
              <th className="text-left px-4 py-2.5 text-xs font-medium text-muted-foreground">Danh mục</th>
              <th className="text-left px-4 py-2.5 text-xs font-medium text-muted-foreground">Chu kỳ</th>
              <th className="text-right px-4 py-2.5 text-xs font-medium text-muted-foreground">Giá</th>
              <th className="text-left px-4 py-2.5 text-xs font-medium text-muted-foreground">Ngày hạn</th>
              <th className="text-left px-4 py-2.5 text-xs font-medium text-muted-foreground">Trạng thái</th>
              <th className="px-4 py-2.5 w-20" />
            </tr>
          </thead>
          <tbody>
            {subscriptions.map((sub) => {
              const days = daysUntil(sub.nextBillingDate)
              const isDueSoon = days <= 7
              return (
                <tr
                  key={sub.id}
                  onClick={() => onRowClick?.(sub.id)}
                  className={cn(
                    'border-b border-border last:border-0 transition-colors',
                    onRowClick && 'cursor-pointer hover:bg-muted/30'
                  )}
                >
                  <td className="px-4 py-3">
                    <div className="size-8 rounded-lg bg-muted flex items-center justify-center text-base select-none">
                      {sub.emoji}
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <p className="font-medium text-foreground leading-none">{sub.name}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{sub.plan}</p>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground text-sm">{sub.category}</td>
                  <td className="px-4 py-3 text-muted-foreground text-sm">{cycleLabel[sub.cycle]}</td>
                  <td className="px-4 py-3 text-right font-mono font-medium text-sm">
                    ${sub.price.toFixed(2)}
                  </td>
                  <td
                    className={cn(
                      'px-4 py-3 font-mono text-xs',
                      isDueSoon ? 'text-destructive font-bold' : 'text-muted-foreground'
                    )}
                  >
                    {formatDate(sub.nextBillingDate)}
                  </td>
                  <td className="px-4 py-3">
                    <StatusBadge status={sub.status} />
                  </td>
                  <td className="px-4 py-3">
                    <div
                      className="flex items-center gap-1"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Button variant="ghost" size="icon" className="size-7">
                        <Pencil className="size-3.5" />
                      </Button>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="size-7">
                            <MoreHorizontal className="size-3.5" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>Xem chi tiết</DropdownMenuItem>
                          <DropdownMenuItem>Tạm dừng</DropdownMenuItem>
                          <DropdownMenuItem className="text-destructive">Xóa</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
