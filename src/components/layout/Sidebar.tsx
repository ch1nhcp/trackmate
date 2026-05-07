import { useState } from 'react'
import {
  BarChart2,
  Bell,
  Calendar,
  ChevronLeft,
  ChevronRight,
  LayoutDashboard,
  Settings,
} from 'lucide-react'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'

interface SidebarProps {
  activeRoute: string
  notificationCount?: number
}

const navItems = [
  { label: 'Dashboard',     icon: LayoutDashboard, route: 'dashboard'     },
  { label: 'Analytics',     icon: BarChart2,       route: 'analytics'     },
  { label: 'Calendar',      icon: Calendar,        route: 'calendar'      },
  { label: 'Notifications', icon: Bell,            route: 'notifications' },
  { label: 'Settings',      icon: Settings,        route: 'settings'      },
] as const

export function Sidebar({ activeRoute, notificationCount = 0 }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <TooltipProvider delayDuration={300}>
      <aside
        className={cn(
          'flex flex-col bg-sidebar border-r border-sidebar-border h-full shrink-0 overflow-hidden',
          'transition-[width] duration-200 ease-in-out',
          collapsed ? 'w-[56px]' : 'w-[180px]'
        )}
      >
        {/* Header */}
        <div
          className={cn(
            'h-12 flex items-center border-b border-sidebar-border shrink-0',
            collapsed ? 'justify-center px-0' : 'px-4 gap-2.5'
          )}
        >
          <div className="size-7 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold text-xs shrink-0">
            S
          </div>
          <span
            className={cn(
              'font-semibold text-sm text-sidebar-foreground whitespace-nowrap overflow-hidden',
              'transition-[opacity,max-width] duration-200',
              collapsed ? 'opacity-0 max-w-0' : 'opacity-100 max-w-[120px]'
            )}
          >
            SubTrack
          </span>
        </div>

        {/* Nav */}
        <nav className="flex-1 p-2 flex flex-col gap-0.5 overflow-y-auto overflow-x-hidden">
          {navItems.map(({ label, icon: Icon, route }) => {
            const isActive = activeRoute === route
            const hasNotif = route === 'notifications' && notificationCount > 0

            return (
              <Tooltip key={route}>
                <TooltipTrigger asChild>
                  <button
                    type="button"
                    className={cn(
                      'w-full flex items-center rounded-lg text-sm transition-colors',
                      collapsed ? 'justify-center py-2 px-0' : 'gap-2.5 px-3 py-2',
                      isActive
                        ? 'bg-sidebar-accent text-sidebar-accent-foreground font-medium'
                        : 'text-sidebar-foreground/70 hover:bg-sidebar-accent/60 hover:text-sidebar-foreground'
                    )}
                  >
                    <div className="relative shrink-0">
                      <Icon className="size-4" />
                      {hasNotif && collapsed && (
                        <span className="absolute -top-0.5 -right-0.5 size-1.5 rounded-full bg-primary" />
                      )}
                    </div>

                    <span
                      className={cn(
                        'flex-1 text-left whitespace-nowrap overflow-hidden',
                        'transition-[opacity,max-width] duration-200',
                        collapsed ? 'opacity-0 max-w-0' : 'opacity-100 max-w-[120px]'
                      )}
                    >
                      {label}
                    </span>

                    {!collapsed && hasNotif && (
                      <span className="size-5 rounded-full bg-primary text-primary-foreground text-[10px] flex items-center justify-center font-semibold shrink-0">
                        {notificationCount}
                      </span>
                    )}
                  </button>
                </TooltipTrigger>
                {collapsed && (
                  <TooltipContent side="right" sideOffset={10}>
                    {label}
                    {hasNotif && ` · ${notificationCount}`}
                  </TooltipContent>
                )}
              </Tooltip>
            )
          })}

          {/* Collapse toggle */}
          <div className="flex-1 min-h-2" />
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                type="button"
                onClick={() => setCollapsed((c) => !c)}
                className={cn(
                  'w-full flex items-center rounded-lg text-sm transition-colors',
                  'text-sidebar-foreground/40 hover:bg-sidebar-accent/60 hover:text-sidebar-foreground',
                  collapsed ? 'justify-center py-2 px-0' : 'gap-2.5 px-3 py-2'
                )}
              >
                {collapsed ? (
                  <ChevronRight className="size-4 shrink-0" />
                ) : (
                  <ChevronLeft className="size-4 shrink-0" />
                )}
                <span
                  className={cn(
                    'flex-1 text-left whitespace-nowrap overflow-hidden',
                    'transition-[opacity,max-width] duration-200',
                    collapsed ? 'opacity-0 max-w-0' : 'opacity-100 max-w-[120px]'
                  )}
                >
                  Collapse
                </span>
              </button>
            </TooltipTrigger>
            {collapsed && (
              <TooltipContent side="right" sideOffset={10}>
                Expand sidebar
              </TooltipContent>
            )}
          </Tooltip>
        </nav>

        {/* Footer */}
        <Tooltip>
          <TooltipTrigger asChild>
            <div
              className={cn(
                'border-t border-sidebar-border flex items-center shrink-0',
                'transition-[padding] duration-200',
                collapsed ? 'p-2 justify-center' : 'p-3 gap-2.5'
              )}
            >
              <Avatar className="size-8 shrink-0">
                <AvatarFallback className="text-xs font-semibold bg-primary text-primary-foreground rounded-full">
                  CH
                </AvatarFallback>
              </Avatar>
              <div
                className={cn(
                  'min-w-0 overflow-hidden',
                  'transition-[opacity,max-width] duration-200',
                  collapsed ? 'opacity-0 max-w-0' : 'opacity-100 max-w-[120px] flex-1'
                )}
              >
                <p className="text-xs font-semibold text-sidebar-foreground truncate leading-none mb-0.5 whitespace-nowrap">
                  Chinh CP
                </p>
                <p className="text-[11px] text-muted-foreground truncate whitespace-nowrap">
                  Free plan
                </p>
              </div>
            </div>
          </TooltipTrigger>
          {collapsed && (
            <TooltipContent side="right" sideOffset={10}>
              <p className="font-medium">Chinh CP</p>
              <p className="text-[11px] opacity-70">Free plan</p>
            </TooltipContent>
          )}
        </Tooltip>
      </aside>
    </TooltipProvider>
  )
}
