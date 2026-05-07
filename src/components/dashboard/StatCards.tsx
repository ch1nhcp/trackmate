import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'

export interface StatItem {
  label: string
  value: string
  sub: string
  subVariant?: 'default' | 'success' | 'warning'
}

interface StatCardsProps {
  stats: StatItem[]
}

const subVariantClasses: Record<NonNullable<StatItem['subVariant']>, string> = {
  default: 'text-muted-foreground',
  success:  'text-green-600 dark:text-green-400',
  warning:  'text-amber-600 dark:text-amber-400',
}

export function StatCards({ stats }: StatCardsProps) {
  return (
    <div className="grid grid-cols-4 gap-4">
      {stats.map((stat) => (
        <Card key={stat.label} className="py-4 gap-0">
          <CardContent className="px-5 flex flex-col gap-1">
            <p className="text-[11px] font-medium text-muted-foreground uppercase tracking-wide">
              {stat.label}
            </p>
            <p className="text-[1.75rem] font-bold text-foreground leading-none">
              {stat.value}
            </p>
            <p className={cn('text-xs', subVariantClasses[stat.subVariant ?? 'default'])}>
              {stat.sub}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
