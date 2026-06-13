'use client'

import { usePaths } from '@/hooks/user-nav'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import Items from './items'

type Props = {
  slug: string
}

const Sidebar = ({ slug }: Props) => {
  const { page } = usePaths()

  return (
    <aside className="mac-dash-sidebar fixed bottom-0 left-0 top-0 z-30 hidden w-[300px] border-r lg:block">
      <div className="flex h-full flex-col px-5 py-10">
        <Link href={`/dashboard/${slug}`} className="mac-sidebar-logo">
          mac<span>studio</span>
        </Link>

        <div className="mac-sidebar-profile">
          <div className="mac-sidebar-avatar">C</div>
          <div>
            <p>@creator_handle</p>
            <span>Pro Plan</span>
          </div>
        </div>

        <nav className="mt-8 -mx-1">
          <Items page={page} slug={slug} />
        </nav>

        <div className="mt-auto">
          <Link href={`/dashboard/${slug}/automations`} className="mac-sidebar-live-card">
            <span>Handling live</span>
            <strong>12,402 interactions</strong>
            <ArrowUpRight className="absolute right-4 top-4 h-5 w-5 text-[#ff6b00]" />
          </Link>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
