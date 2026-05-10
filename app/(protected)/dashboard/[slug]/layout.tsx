import {
    dehydrate,
    HydrationBoundary,
    QueryClient,
  } from '@tanstack/react-query'
  import Sidebar from '@/components/global/sidebar'
  import React from 'react'
  import {
    PrefetchUserAutomations,
    PrefetchUserProfile,
  } from '@/react-query/prefetch'
  
  type Props = {
    children: React.ReactNode
    params: Promise<{ slug: string }>
  }
  
  const Layout = async ({ children, params }: Props) => {
    const { slug } = await params
  
    const query = new QueryClient()
  
    await PrefetchUserProfile(query)
  
    await PrefetchUserAutomations(query)
  
  return (
      <HydrationBoundary state={dehydrate(query)}>
        <div className="mac-dashboard-shell">
          <Sidebar slug={slug} />
          <div
            className="
        relative z-10
        lg:ml-[300px] 
        px-5
        py-8
        lg:px-14
        lg:py-12
        flex 
        flex-col 
        min-h-screen
        overflow-auto
        "
          >
            {children}
          </div>
        </div>
      </HydrationBoundary>
    )
  }
  
  export default Layout
  
