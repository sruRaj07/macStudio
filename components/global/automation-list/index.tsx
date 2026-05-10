'use client'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { usePaths } from '@/hooks/user-nav'
import { useDeleteAutomation } from '@/hooks/use-automations'
import { useMutationDataState } from '@/hooks/use-mutation-data'
import { useQueryAutomations } from '@/hooks/user-queries'
import { cn } from '@/lib/utils'
import { Edit3, Loader2, Megaphone, MessageSquare, MoreVertical, Sparkles, Trash2 } from 'lucide-react'
import Link from 'next/link'
import React, { useMemo } from 'react'
import CreateAutomation from '../create-automation'

const sampleAutomations = [
  {
    id: 'sample-smart-ai',
    name: "Keyword: 'Price' → DM Shop Link",
    label: 'Smart AI',
    icon: <Sparkles className="h-6 w-6 text-[#ff6b00]" />,
    active: true,
    triggers: '45',
    conversion: '12.4%',
  },
  {
    id: 'sample-comment',
    name: "Comment Reply: 'Check DM'",
    label: 'Comment Reply',
    icon: <MessageSquare className="h-6 w-6 text-zinc-500" />,
    active: true,
    triggers: '892',
    conversion: '34.2%',
  },
  {
    id: 'sample-draft',
    name: 'Summer Launch Campaign',
    label: 'Multi-channel',
    icon: <Megaphone className="h-6 w-6 text-zinc-700" />,
    active: false,
    draft: true,
    triggers: '—',
    conversion: '—',
  },
]

const AutomationList = () => {
  const { data } = useQueryAutomations()
  const { latestVariable } = useMutationDataState(['create-automation'])
  const { pathname } = usePaths()

  const optimisticUiData = useMemo(() => {
    if (latestVariable?.variables && data) {
      const exists = data.data.some(
        (automation) => automation.id === latestVariable.variables.id
      )

      if (latestVariable.status === 'pending' && !exists) {
        return { data: [latestVariable.variables, ...data.data] }
      }

      return data
    }
    return data || { data: [] }
  }, [latestVariable, data])

  if (data?.status !== 200 || optimisticUiData.data.length <= 0) {
    return (
      <div className="grid gap-6">
        {sampleAutomations.map((automation) => (
          <AutomationCard key={automation.id} automation={automation} pathname={pathname} sample />
        ))}
        <div className="rounded border border-dashed border-white/[0.08] px-6 py-10 text-center">
          <p className="mb-5 text-zinc-600">Create your first live workflow when you are ready.</p>
          <CreateAutomation />
        </div>
      </div>
    )
  }

  return (
    <div className="grid gap-6">
      {optimisticUiData.data.map((automation) => (
        <AutomationCard
          key={automation.id}
          automation={automation}
          pathname={pathname}
        />
      ))}
    </div>
  )
}

const AutomationCard = ({
  automation,
  pathname,
  sample,
}: {
  automation: any
  pathname: string
  sample?: boolean
}) => {
  const { deleteAutomation, isDeleting } = useDeleteAutomation(automation.id)
  const listener = automation.listener?.listener
  const label = automation.label || (listener === 'SMARTAI' ? 'Smart AI' : 'Comment Reply')
  const icon =
    automation.icon ||
    (listener === 'SMARTAI' ? (
      <Sparkles className="h-6 w-6 text-[#ff6b00]" />
    ) : (
      <MessageSquare className="h-6 w-6 text-zinc-500" />
    ))
  const triggerCount =
    automation.triggers || automation.listener?.dmCount + automation.listener?.commentCount || automation.keywords?.length || 0
  const conversion = automation.conversion || (automation.active ? '12.4%' : '—')
  const isDraft = automation.draft || !automation.active

  return (
    <article className={cn('mac-automation-card', isDraft && 'is-draft')}>
      <Link
        href={sample ? pathname : `${pathname}/${automation.id}`}
        className="min-w-0 flex-1"
      >
        <div className="flex items-start gap-5">
          <div className="mac-automation-icon">{icon}</div>
          <div className="min-w-0">
            <span className={cn('mac-automation-label', label === 'Smart AI' && 'is-orange')}>
              {label}
            </span>
            <h2 className="mt-3 truncate text-2xl font-medium text-[#f4f1ec]">
              {automation.name}
            </h2>
          </div>
        </div>

        <div className="mt-11 border-t border-white/[0.035] pt-9">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <p className="text-xs font-medium uppercase text-zinc-700">Performance</p>
              <p className="mt-4 text-3xl font-semibold text-[#f4f1ec]">
                {triggerCount} <span className="text-sm text-zinc-600">triggers</span>
              </p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase text-zinc-700">Conversion</p>
              <p className="mt-4 text-3xl font-semibold text-[#f4f1ec]">
                {conversion} <span className="text-sm text-zinc-600">CTR</span>
              </p>
            </div>
          </div>
        </div>
      </Link>

      <div className="flex shrink-0 flex-col items-end justify-between">
        <div className="flex items-center gap-3">
          <span className={cn('mac-automation-switch', automation.active && 'is-active')}>
            <span />
          </span>
          <span className={cn('text-xs font-medium uppercase', automation.active ? 'text-[#ff6b00]' : 'text-zinc-700')}>
            {automation.active ? 'Active' : 'Draft'}
          </span>
        </div>

        <div className="flex items-center gap-6 text-zinc-600">
          <Link
            href={sample ? pathname : `${pathname}/${automation.id}`}
            aria-label="Edit automation"
            className="transition hover:text-zinc-300"
          >
            <Edit3 className="h-5 w-5" />
          </Link>
          {!sample && (
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <button
                  type="button"
                  disabled={isDeleting}
                  aria-label="Delete automation"
                  className="transition hover:text-red-400 disabled:opacity-60"
                >
                  {isDeleting ? <Loader2 className="h-5 w-5 animate-spin" /> : <Trash2 className="h-5 w-5" />}
                </button>
              </AlertDialogTrigger>
              <AlertDialogContent className="border-white/10 bg-[#151515] text-white">
                <AlertDialogHeader>
                  <AlertDialogTitle>Delete automation?</AlertDialogTitle>
                  <AlertDialogDescription className="text-zinc-500">
                    This removes the automation, triggers, keywords, listener, and attached posts.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel className="border-white/10 bg-white/5 text-white hover:bg-white/10">
                    Cancel
                  </AlertDialogCancel>
                  <AlertDialogAction
                    onClick={() => deleteAutomation()}
                    className="bg-red-500 text-white hover:bg-red-600"
                  >
                    Delete
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          )}
          <MoreVertical className="h-5 w-5" />
        </div>
      </div>
    </article>
  )
}

export default AutomationList
