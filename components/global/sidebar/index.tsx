'use client'

import { usePaths } from '@/hooks/user-nav'
import { CirclePlus } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import Items from './items'

type Props = {
  slug: string
}

const Sidebar = ({ slug }: Props) => {
  const { page } = usePaths()

  return (
    <aside className="mac-dash-sidebar fixed bottom-0 left-0 top-0 z-30 hidden w-[300px] border-r border-white/[0.06] bg-[#17181c] lg:block">
      <div className="flex h-full flex-col px-7 py-10">
        <Link href={`/dashboard/${slug}`} className="text-2xl font-black uppercase tracking-[-0.05em] text-white">
          MACSTUDIO
        </Link>

        <div className="mt-10 flex items-center gap-4 rounded border border-white/[0.07] bg-white/[0.025] p-4">
          <div className="mac-sidebar-avatar" />
          <div>
            <p className="text-base font-black leading-none text-white">@creator_handle</p>
            <p className="mt-2 text-[11px] font-black uppercase tracking-[0.12em] text-zinc-600">
              Professional Plan
            </p>
          </div>
        </div>

        <nav className="mt-10 -mx-7">
          <Items page={page} slug={slug} />
        </nav>

        <div className="mt-auto">
          <Link
            href={`/dashboard/${slug}/automations`}
            className="flex h-14 items-center justify-center gap-3 rounded bg-[#ff5b00] text-lg font-black text-black transition hover:bg-[#ff741f]"
          >
            <CirclePlus className="h-6 w-6" />
            New Automation
          </Link>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
