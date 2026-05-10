'use client'

import { PAGE_BREAD_CRUMBS } from '@/constants/pages'
import { usePaths } from '@/hooks/user-nav'
import { Menu } from 'lucide-react'
import React from 'react'
import Sheet from '../sheet'
import Items from '../sidebar/items'
import { Separator } from '@/components/ui/separator'
import ClerkAuthState from '../clerk-auth-state'
import { HelpDuoToneWhite } from '@/icons'
import { SubscriptionPlan } from '../subscription-plan'
import UpgradeCard from '../sidebar/upgrade'
import { LogoSmall } from '@/svgs/logo-small'
import CreateAutomation from '../create-automation'
import Search from './search'
import { Notifications } from './notifications'
import MainBreadCrumb from '../bread-crumbs/main-bread-crumb'

type Props = {
  slug: string
}

const InfoBar = ({ slug }: Props) => {
  const { page } = usePaths()
  const currentPage = PAGE_BREAD_CRUMBS.includes(page) || page == slug

  return (
    currentPage && (
      <div className="flex flex-col gap-y-5">
        <div className="imate-content-section rounded-[1.75rem] px-4 py-4 lg:px-5 flex gap-x-3 lg:gap-x-5 justify-end items-center">
          <span className="lg:hidden flex items-center flex-1 gap-x-2">
            <Sheet
              trigger={<Menu />}
              className="lg:hidden"
              side="left"
            >
              <div className="dashboard-shell flex flex-col gap-y-5 w-full h-full p-4">
                <div className="imate-sidebar rounded-[1.75rem] flex flex-col gap-y-5 w-full h-full p-4">
                <div className="flex gap-x-3 items-center p-4 justify-center rounded-[1.5rem] imate-card-muted">
                  <LogoSmall />
                  <div className="flex flex-col">
                    <p className="text-xs uppercase tracking-[0.28em] text-[#ffb36a]">
                      imate
                    </p>
                    <p className="text-xs text-zinc-500">Control center</p>
                  </div>
                </div>
                <div className="flex flex-col py-1 gap-y-1">
                  <Items
                    page={page}
                    slug={slug}
                  />
                </div>
                <div className="px-4">
                  <Separator
                    orientation="horizontal"
                    className="bg-white/10"
                  />
                </div>
                <div className="px-2 flex flex-col gap-y-3">
                  <div className="imate-card-muted rounded-2xl px-4 py-3 flex gap-x-2">
                    <ClerkAuthState />
                    <p className="text-zinc-400">Profile</p>
                  </div>
                  <div className="imate-card-muted rounded-2xl px-4 py-3 flex gap-x-3">
                    <HelpDuoToneWhite />
                    <p className="text-zinc-400">Help</p>
                  </div>
                </div>
                <SubscriptionPlan type="FREE">
                  <div className="flex-1 flex flex-col justify-end">
                    <UpgradeCard />
                  </div>
                </SubscriptionPlan>
                </div>
              </div>
            </Sheet>
          </span>
          <Search />
          <CreateAutomation />
          <Notifications />
        </div>
        <MainBreadCrumb
          page={page === slug ? 'Home' : page}
          slug={slug}
        />
      </div>
    )
  )
}

export default InfoBar
