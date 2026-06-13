import { cn } from '@/lib/utils'
import { BarChart3, CreditCard, Grid2X2, Settings, Shuffle, Zap } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

type Props = {
  page: string
  slug: string
}

const menu = [
  { label: 'home', href: '', icon: <Grid2X2 className="h-6 w-6" /> },
  { label: 'automations', href: 'automations', icon: <Zap className="h-6 w-6" /> },
  { label: 'analytics', href: 'analytics', icon: <BarChart3 className="h-6 w-6" /> },
  { label: 'integrations', href: 'integrations', icon: <Shuffle className="h-6 w-6" /> },
  { label: 'pricing', href: '/pricing', icon: <CreditCard className="h-6 w-6" /> },
  { label: 'settings', href: 'settings', icon: <Settings className="h-6 w-6" /> },
]

const Items = ({ page, slug }: Props) => {
  return menu.map((item) => {
    const isActive =
      page === item.label || (!page && item.label === 'home') || (page === slug && item.label === 'home')

    return (
      <Link
        key={item.label}
        href={item.href.startsWith('/') ? item.href : `/dashboard/${slug}${item.href ? `/${item.href}` : ''}`}
        data-active={isActive}
        className={cn(
          'mac-dash-nav-item capitalize flex h-[52px] items-center gap-4 px-6 text-base font-black transition',
          isActive ? 'text-[#F5A623]' : 'text-[#8E8AA8] hover:text-[#D7D4E8]'
        )}
      >
        {item.icon}
        {item.label}
      </Link>
    )
  })
}

export default Items
