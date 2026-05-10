import { PAGE_ICON } from '@/constants/pages'
import React from 'react'

type Props = {
  page: string
  slug?: string
}

const MainBreadCrumb = ({ page, slug }: Props) => {
  return (
    <div className="flex flex-col items-start gap-y-3">
      {page === 'Home' && (
        <div className="flex justify-center w-full">
          <div className="imate-content-section w-full rounded-[2rem] py-8 lg:py-10 flex flex-col items-center px-6 text-center">
            <p className="text-zinc-500 text-sm uppercase tracking-[0.28em]">Dashboard</p>
            <h2 className="capitalize text-4xl font-medium text-white">{slug}!</h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-400">
              Your imate dashboard is live and ready to monitor engagement.
            </p>
          </div>
        </div>
      )}
      <span className="imate-content-section inline-flex rounded-[1.5rem] px-6 py-5 lg:py-6 pr-10 gap-x-3 items-center">
        {PAGE_ICON[page.toUpperCase()]}
        <h2 className="font-semibold text-3xl capitalize text-white">{page}</h2>
      </span>
    </div>
  )
}

export default MainBreadCrumb
