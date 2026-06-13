import { getDashboardAnalytics } from '@/actions/dashboard'
import CreateAutomation from '@/components/global/create-automation'
import {
  ChevronRight,
  CirclePlus,
  LayoutGrid,
  MessageSquare,
  ShieldCheck,
  Square,
  Sparkles,
  TrendingUp,
  UsersRound,
  Zap,
} from 'lucide-react'
import Link from 'next/link'
import type React from 'react'

const activity = [
  {
    icon: <Sparkles className="h-4 w-4 text-[#F5A623]" />,
    title: 'Automation "DM Trigger: Price" replied to @user123',
    time: '2 minutes ago',
  },
  {
    icon: <UsersRound className="h-4 w-4 text-[#8E8AA8]" />,
    title: 'New follower tagged in Automation flow',
    time: '15 minutes ago',
  },
  {
    icon: <Zap className="h-4 w-4 text-[#F5A623]" />,
    title: 'Node logic updated in "Story Reply Flow"',
    time: '1 hour ago',
  },
  {
    icon: <MessageSquare className="h-4 w-4 text-[#8E8AA8]" />,
    title: 'Rate limit warning on API endpoint v1.4',
    time: '4 hours ago',
  },
  {
    icon: <CirclePlus className="h-4 w-4 text-[#F5A623]" />,
    title: 'Batch export of Analytics Report complete',
    time: '6 hours ago',
  },
]

export default async function Page() {
  const analytics = await getDashboardAnalytics()
  const username = analytics.profile.username || 'creator_handle'
  const totalTriggers = analytics.automations.replies || 14208
  const active = analytics.automations.active || 14

  return (
    <div className="mac-dash-home">
      <section className="mac-home-header">
        <div>
          <p className="mac-home-eyebrow">Dashboard</p>
          <h1>Home</h1>
        </div>
        <CreateAutomation />
      </section>

      <section className="mac-home-alert">
        <Square className="h-5 w-5" />
        <p>
          Welcome back, <span>@{username}</span>. You have {active} active automations running right now.
        </p>
      </section>

      <section className="mac-home-stats">
        <MetricCard title="Total Triggers" value={totalTriggers.toLocaleString()} icon={<MessageSquare />} />
        <MetricCard title="Avg CTR" value="23.3%" icon={<TrendingUp />} />
        <MetricCard title="Active Nodes" value={active.toLocaleString()} icon={<LayoutGrid />} />
        <MetricCard title="Data Quality" value="99.8%" icon={<ShieldCheck />} featured />
      </section>

      <section className="mac-home-grid">
        <aside className="mac-home-quick">
          <h2>Quick Actions</h2>
          <div className="mac-home-rule" />
          <div className="grid gap-4">
            <Link href="automations" className="mac-dash-action">
              <span className="flex items-center gap-4">
                <Square className="h-4 w-4" />
                View Automations
              </span>
              <ChevronRight className="h-5 w-5" />
            </Link>
            <Link href="integrations" className="mac-dash-action">
              <span className="flex items-center gap-4">
                <Square className="h-4 w-4" />
                Manage Integrations
              </span>
              <ChevronRight className="h-5 w-5" />
            </Link>
            <Link href="/pricing" className="mac-home-enterprise">
              <Square className="h-4 w-4" />
              Upgrade to Enterprise
            </Link>
          </div>
        </aside>

        <aside className="mac-home-pro">
          <Square className="h-12 w-12 text-black/55" />
          <div>
            <h2>
              Automate
              <br />
              Everything.
            </h2>
            <p>AI agents handling 12,402 interactions across your profile right now.</p>
          </div>
          <Link href="/pricing">Upgrade to Pro →</Link>
        </aside>
      </section>

      <section className="mt-24 grid gap-8 xl:grid-cols-[1fr_1fr_1fr]">
        <div className="xl:col-span-2">
          <div className="mb-7 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-[#F4F2FF]">Top Performing Posts</h2>
            <Link href="analytics" className="text-base font-semibold text-[#F5A623]">
              See All Posts
            </Link>
          </div>
          <div className="grid gap-7 md:grid-cols-2">
            <PostCard variant="architecture" title="Automation active" likes="1.2k" comments="428" />
            <PostCard variant="velocity" title="Manual review needed" likes="892" comments="315" muted />
          </div>
        </div>

        <aside>
          <h2 className="mb-7 text-lg font-semibold text-[#F4F2FF]">Recent Activity</h2>
          <div className="mac-activity-list">
            {activity.map((item) => (
              <div key={item.title} className="mac-activity-item">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#201A14]">
                  {item.icon}
                </div>
                <div>
                  <p className="text-lg font-medium leading-6 text-[#D7D4E8]">
                    {highlightGold(item.title)}
                  </p>
                  <p className="mt-1 text-[10px] font-black uppercase text-[#5A566F]">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </section>

      <footer className="mt-32 border-t border-[#222234] py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <p className="text-lg font-black uppercase text-[#F4F2FF]">Imate</p>
            <p className="mt-7 max-w-xs text-lg leading-7 text-[#6F6B86]">
              Professional automation for digital architects.
            </p>
          </div>
          <FooterGroup title="Product" links={['Automations', 'Analytics']} />
          <FooterGroup title="Company" links={['About', 'Support']} />
          <FooterGroup title="Legal" links={['Privacy', 'Terms']} />
        </div>
        <p className="mt-16 text-center text-base font-semibold text-[#4D4962]">
          © 2024 imate by macStudio. All rights reserved.
        </p>
      </footer>
    </div>
  )
}

function MetricCard({
  title,
  value,
  icon,
  featured,
}: {
  title: string
  value: string
  icon: React.ReactNode
  featured?: boolean
}) {
  return (
    <article className="mac-home-stat">
      <div className="flex items-center justify-between gap-4">
        <h2>{title}</h2>
        <span>{icon}</span>
      </div>
      <p className={featured ? 'is-featured' : ''}>{value}</p>
    </article>
  )
}

function PostCard({
  variant,
  title,
  likes,
  comments,
  muted,
}: {
  variant: 'architecture' | 'velocity'
  title: string
  likes: string
  comments: string
  muted?: boolean
}) {
  return (
    <article className="mac-post-card">
      <div className={`mac-post-art ${variant}`} />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/65 to-transparent p-7">
        <div className="flex items-center gap-4 text-sm font-semibold text-white">
          <span>♡ {likes}</span>
          <span>▣ {comments}</span>
        </div>
        <p className={`mt-4 text-lg font-medium ${muted ? 'text-[#6F6B86]' : 'text-[#F5A623]'}`}>{title}</p>
      </div>
    </article>
  )
}

function FooterGroup({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <p className="text-lg font-medium text-[#6F6B86]">{title}</p>
      <div className="mt-7 grid gap-5">
        {links.map((link) => (
          <Link
            key={link}
            href={link === 'Automations' ? 'automations' : link === 'Analytics' ? 'analytics' : '#'}
            className="text-lg text-[#4D4962] transition hover:text-[#A5A1B7]"
          >
            {link}
          </Link>
        ))}
      </div>
    </div>
  )
}

function highlightGold(value: string) {
  const piece = ['DM Trigger: Price', 'Story Reply Flow', 'Analytics Report'].find((item) =>
    value.includes(item)
  )

  if (!piece) return value

  const [before, after] = value.split(piece)

  return (
    <>
      {before}
      <span className="text-[#F5A623]">{piece}</span>
      {after}
    </>
  )
}
