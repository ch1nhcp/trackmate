import { Download, Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface TopbarProps {
  title: string
  subtitle?: string
  onAddClick: () => void
  onExportClick: () => void
}

export function Topbar({ title, subtitle, onAddClick, onExportClick }: TopbarProps) {
  return (
    <header className="h-12 flex items-center justify-between px-6 border-b border-border bg-background shrink-0">
      <div>
        <p className="text-sm font-semibold text-foreground leading-none">{title}</p>
        {subtitle && (
          <p className="text-xs text-muted-foreground mt-0.5 leading-none">{subtitle}</p>
        )}
      </div>
      <div className="flex items-center gap-2">
        <Button variant="secondary" size="sm" onClick={onExportClick}>
          <Download className="size-3.5" />
          Export
        </Button>
        <Button size="sm" onClick={onAddClick}>
          <Plus className="size-3.5" />
          Thêm gói
        </Button>
      </div>
    </header>
  )
}
