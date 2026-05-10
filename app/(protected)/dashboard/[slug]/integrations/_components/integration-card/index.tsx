'use client'

import {
  onDisconnectIntegration,
  onOAuthInstagram,
} from '@/actions/integrations'
import { onUserInfo } from '@/actions/user'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { useMutationData } from '@/hooks/use-mutation-data'
import { useQuery } from '@tanstack/react-query'
import { Camera, Cloud, ExternalLink, MoreHorizontal, UserRound } from 'lucide-react'

type Props = {
  title: string
  description: string
  strategy: 'INSTAGRAM' | 'CRM'
}

const IntegrationCard = ({ description, strategy, title }: Props) => {
  const onInstaOAuth = () => onOAuthInstagram(strategy)
  const { mutate: disconnectMutation, isPending: isDisconnecting } =
    useMutationData(
      ['disconnect-integration'],
      () => onDisconnectIntegration('INSTAGRAM'),
      'user-profile'
    )

  const { data } = useQuery({
    queryKey: ['user-profile'],
    queryFn: onUserInfo,
  })

  const integrated = data?.data?.integrations.find(
    (integration) => integration.name === strategy
  )

  const username = integrated?.instagramUsername || 'creator_handle'
  const isInstagram = strategy === 'INSTAGRAM'

  return (
    <article className="mac-integration-card">
      <div className={isInstagram ? 'mac-integration-icon instagram' : 'mac-integration-icon salesforce'}>
        {isInstagram ? <Camera className="h-6 w-6" /> : <Cloud className="h-6 w-6" />}
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-3">
          <h2 className="text-xl font-black text-white">{title}</h2>
          {integrated && isInstagram && (
            <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-emerald-400">
              ● Connected
            </span>
          )}
        </div>
        {!integrated && <p className="mt-2 text-base font-medium text-zinc-600">{description}</p>}
      </div>

      {integrated && isInstagram ? (
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#ff5b00] text-lg font-black text-white shadow-[0_0_0_2px_rgba(255,255,255,0.08)]">
            R
          </div>
          <p className="text-base font-medium text-zinc-300">@{username}</p>
          <Popover>
            <PopoverTrigger asChild>
              <button
                type="button"
                aria-label="Open integration menu"
                className="border-l border-white/[0.05] py-3 pl-6 text-zinc-500 transition hover:text-white"
              >
                <MoreHorizontal className="h-6 w-6" />
              </button>
            </PopoverTrigger>
            <PopoverContent align="end" className="mac-integration-menu">
              <p className="px-5 pb-4 pt-1 text-[10px] font-black uppercase tracking-[0.18em] text-zinc-600">
                Account
              </p>
              <button type="button" className="mac-integration-menu-item">
                <UserRound className="h-4 w-4" />
                View Profile
              </button>
              <button
                type="button"
                disabled={isDisconnecting}
                onClick={() => disconnectMutation({})}
                className="mac-integration-menu-item text-red-400 disabled:opacity-50"
              >
                <ExternalLink className="h-4 w-4" />
                {isDisconnecting ? 'Disconnecting...' : 'Disconnect'}
              </button>
            </PopoverContent>
          </Popover>
        </div>
      ) : (
        <button
          type="button"
          onClick={onInstaOAuth}
          disabled={!isInstagram}
          className="mac-integration-connect disabled:cursor-not-allowed disabled:opacity-50"
        >
          Connect
        </button>
      )}
    </article>
  )
}

export default IntegrationCard
