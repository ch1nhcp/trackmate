import { cn } from '@/lib/utils'
import { daysUntil } from '@/lib/date-utils'

interface DaysLeftBadgeProps {
  dateStr: string
}

export function DaysLeftBadge({ dateStr }: DaysLeftBadgeProps) {
  const days = daysUntil(dateStr)
  const isWarning = days <= 7

  return (
    <span
      className={cn(
        'inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium shrink-0',
        isWarning
          ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'
          : 'bg-muted text-muted-foreground'
      )}
    >
      {days}d
    </span>
  )
}
