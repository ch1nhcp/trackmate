import { cn } from '@/lib/utils'
import type { SubStatus } from '@/types/subscription'

interface StatusBadgeProps {
  status: SubStatus
}

const statusConfig: Record<SubStatus, { label: string; className: string }> = {
  active: {
    label:     'Active',
    className: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
  },
  due_soon: {
    label:     'Sắp hạn',
    className: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
  },
  paused: {
    label:     'Tạm dừng',
    className: 'bg-muted text-muted-foreground',
  },
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const { label, className } = statusConfig[status]
  return (
    <span
      className={cn(
        'inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium',
        className
      )}
    >
      {label}
    </span>
  )
}
