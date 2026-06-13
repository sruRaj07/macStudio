import { getAutomationInfo } from '@/actions/automations'
import PostNode from '@/components/global/automations/post/node'
import ThenNode from '@/components/global/automations/then/node'
import Trigger from '@/components/global/automations/trigger'
import AutomationsBreadCrumb from '@/components/global/bread-crumbs/automations'
import { PrefetchUserAutomation } from '@/react-query/prefetch'
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query'
import { Bot, MessageCircleMore, PlusCircle, Wand2 } from 'lucide-react'

type Props = {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const info = await getAutomationInfo(id)
  return {
    title: info.data?.name,
  }
}

export default async function Page({ params }: Props) {
  const { id } = await params
  const query = new QueryClient()
  await PrefetchUserAutomation(query, id)
  const info = await getAutomationInfo(id)

  return (
    <HydrationBoundary state={dehydrate(query)}>
      <div className="mac-dash-page">
        <AutomationsBreadCrumb id={id} />

        <div className="mt-6 grid gap-5 xl:grid-cols-[0.26fr_0.94fr_0.42fr]">
          <aside className="mac-panel p-5">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-zinc-700">Workflow map</p>
            <div className="mt-5 space-y-3">
              {[
                { label: 'Trigger', icon: <MessageCircleMore className="h-4 w-4 text-[#ffb36a]" /> },
                { label: 'Reply logic', icon: <Bot className="h-4 w-4 text-[#ffb36a]" /> },
                { label: 'Post targeting', icon: <PlusCircle className="h-4 w-4 text-[#ffb36a]" /> },
              ].map((item) => (
                <div key={item.label} className="mac-micro-card">
                  <div className="flex items-center gap-3">
                    {item.icon}
                    <p className="text-sm text-white">{item.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </aside>

          <main className="space-y-5">
            <section className="mac-header-panel px-6 py-7">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#ff6b00]">Workflow builder</p>
              <h1 className="mt-4 text-4xl font-black tracking-[-0.05em] text-white">
                {info.data?.name || 'Automation workflow'}
              </h1>
              <p className="mt-4 max-w-2xl text-sm font-medium leading-7 text-zinc-600">
                Adjust the trigger, listener, keywords, and post attachment from a cleaner,
                more visual workflow surface while preserving the existing live functionality.
              </p>
            </section>

            <div className="mac-builder-node p-5">
              <Trigger id={id} />
            </div>

            <div className="mac-builder-node p-5">
              <ThenNode id={id} />
            </div>

            <div className="mac-builder-node p-5">
              <PostNode id={id} />
            </div>
          </main>

          <aside className="space-y-5">
            <div className="mac-panel p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded bg-[#ff6b00]/12">
                  <Wand2 className="h-5 w-5 text-[#ffb36a]" />
                </div>
                <div>
                  <p className="text-sm text-zinc-500">Workflow status</p>
                  <p className="text-lg font-semibold text-white">
                    {info.data?.active ? 'Active' : 'Draft'}
                  </p>
                </div>
              </div>

              <div className="mt-5 grid gap-3">
                <div className="mac-micro-card">
                  <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">Keywords</p>
                  <p className="mt-2 text-xl font-semibold text-white">{info.data?.keywords?.length || 0}</p>
                </div>
                <div className="mac-micro-card">
                  <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">Listener type</p>
                  <p className="mt-2 text-sm text-white">{info.data?.listener?.listener || 'Not configured'}</p>
                </div>
              </div>
            </div>

            <div className="rounded border border-[#ff6b00]/35 bg-[#191919] p-[1px]">
              <div className="rounded-[3px] bg-[#111] p-5">
                <p className="text-sm uppercase tracking-[0.24em] text-zinc-500">Builder guidance</p>
                <p className="mt-3 text-sm leading-7 text-zinc-400">
                  Keep each automation focused on one audience intent. That makes matching,
                  editing, and measuring it much easier as your library grows.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </HydrationBoundary>
  )
}
