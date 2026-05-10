import { getDashboardAnalytics } from '@/actions/dashboard'
import {
  BarChart3,
  ChevronRight,
  CirclePlus,
  GitBranch,
  MessageSquare,
  Share2,
  Sparkles,
  TrendingUp,
  UsersRound,
  Zap,
} from 'lucide-react'
import Link from 'next/link'
import type React from 'react'

const formatCompact = (value: number) =>
  value >= 1000 ? `${(value / 1000).toFixed(value >= 10000 ? 0 : 1)}k` : value.toLocaleString()

const activity = [
  {
    icon: <Sparkles className="h-4 w-4 text-[#ff6b00]" />,
    title: 'Automation "DM Trigger: Price" replied to @user123',
    time: '2 minutes ago',
  },
  {
    icon: <UsersRound className="h-4 w-4 text-zinc-500" />,
    title: 'New follower tagged in Automation flow',
    time: '15 minutes ago',
  },
  {
    icon: <Zap className="h-4 w-4 text-[#ff6b00]" />,
    title: 'Node logic updated in "Story Reply Flow"',
    time: '1 hour ago',
  },
  {
    icon: <MessageSquare className="h-4 w-4 text-zinc-500" />,
    title: 'Rate limit warning on API endpoint v1.4',
    time: '4 hours ago',
  },
  {
    icon: <CirclePlus className="h-4 w-4 text-[#ff6b00]" />,
    title: 'Batch export of Analytics Report complete',
    time: '6 hours ago',
  },
]

export default async function Page() {
  const analytics = await getDashboardAnalytics()
  const username = analytics.profile.username || 'creator_handle'
  const replies = analytics.automations.replies || 1284
  const active = analytics.automations.active || 24
  const engagement = analytics.posts.totalEngagement || 8400

  return (
    <div className="mac-dash-page">
      <section className="pt-10">
        <h1 className="text-xl font-medium text-zinc-300">
          Welcome back, <span className="text-[#ff6b00]">@{username}</span>.
        </h1>
        <p className="mt-4 max-w-4xl text-lg font-semibold leading-7 text-zinc-600">
          Your digital architecture is performing optimally. All active automations are
          firing with a 99.8% success rate today.
        </p>
      </section>

      <section className="mt-32 grid gap-7 xl:grid-cols-[repeat(3,minmax(0,1fr))_1.55fr]">
        <MetricCard
          title="Replies Sent"
          value={replies.toLocaleString()}
          detail="+12% from last week"
          icon={<MessageSquare className="h-6 w-6 text-[#b95a17]" />}
        />
        <MetricCard
          title="Active Automations"
          value={active.toLocaleString()}
          detail="3 pending update"
          icon={<GitBranch className="h-6 w-6 text-[#b95a17]" />}
        />
        <MetricCard
          title="Engagement"
          value={formatCompact(engagement)}
          detail="+5.2k total reach"
          icon={<TrendingUp className="h-6 w-6 text-[#b95a17]" />}
        />

        <aside className="mac-dash-quick">
          <h2 className="text-lg font-semibold text-zinc-300">Quick Actions</h2>
          <div className="mt-8 grid gap-5">
            <Link href="automations" className="mac-dash-action">
              <span className="flex items-center gap-5">
                <CirclePlus className="h-6 w-6 text-[#ff6b00]" />
                Create Automation
              </span>
              <ChevronRight className="h-5 w-5 text-zinc-700" />
            </Link>
            <Link href="analytics" className="mac-dash-action">
              <span className="flex items-center gap-5">
                <BarChart3 className="h-6 w-6 fill-[#ff6b00] text-[#ff6b00]" />
                View Analytics
              </span>
              <ChevronRight className="h-5 w-5 text-zinc-700" />
            </Link>
          </div>
        </aside>
      </section>

      <section className="mac-weekly mt-36">
        <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
          <div>
            <h2 className="text-lg font-semibold text-zinc-300">Weekly Performance</h2>
            <p className="mt-2 text-lg font-semibold text-zinc-600">
              Automated interactions trend across the last 7 days
            </p>
          </div>
          <div className="flex gap-9 text-lg font-semibold text-zinc-600">
            <span className="border-b-2 border-[#ff6b00] pb-2 text-zinc-300">Daily</span>
            <span>Weekly</span>
            <span>Monthly</span>
          </div>
        </div>
        <div className="mac-weekly-chart">
          <div className="mac-chart-line line-one" />
          <div className="mac-chart-line line-two" />
          <div className="mac-chart-axis">
            {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map((day) => (
              <span key={day} className={day === 'WED' ? 'text-zinc-300' : ''}>
                {day}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-36 grid gap-8 xl:grid-cols-[1fr_1fr_1fr]">
        <div className="xl:col-span-2">
          <div className="mb-7 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-zinc-300">Top Performing Posts</h2>
            <Link href="analytics" className="text-base font-semibold text-[#ff6b00]">
              See All Posts
            </Link>
          </div>
          <div className="grid gap-7 md:grid-cols-2">
            <PostCard variant="architecture" title="Automation active" likes="1.2k" comments="428" />
            <PostCard variant="velocity" title="Manual review needed" likes="892" comments="315" muted />
          </div>
        </div>

        <aside>
          <h2 className="mb-7 text-lg font-semibold text-zinc-300">Recent Activity</h2>
          <div className="mac-activity-list">
            {activity.map((item) => (
              <div key={item.title} className="mac-activity-item">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#2a1b14]">
                  {item.icon}
                </div>
                <div>
                  <p className="text-lg font-medium leading-6 text-zinc-300">
                    {highlightOrange(item.title)}
                  </p>
                  <p className="mt-1 text-[10px] font-black uppercase text-zinc-700">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </section>

      <footer className="mt-40 border-t border-white/[0.035] py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <p className="text-lg font-black uppercase text-white">Imate</p>
            <p className="mt-7 max-w-xs text-lg leading-7 text-zinc-700">
              Professional automation for digital architects.
            </p>
          </div>
          <FooterGroup title="Product" links={['Automations', 'Analytics']} />
          <FooterGroup title="Company" links={['About', 'Support']} />
          <FooterGroup title="Legal" links={['Privacy', 'Terms']} />
        </div>
        <p className="mt-16 text-center text-base font-semibold text-zinc-800">
          © 2024 imate by macStudio. All rights reserved.
        </p>
      </footer>
    </div>
  )
}

function MetricCard({
  title,
  value,
  detail,
  icon,
}: {
  title: string
  value: string
  detail: string
  icon: React.ReactNode
}) {
  return (
    <article className="mac-dash-metric">
      <div className="flex items-start justify-between gap-4">
        <h2 className="text-lg font-semibold leading-7 text-zinc-600">{title}</h2>
        {icon}
      </div>
      <p className="mt-8 text-4xl font-semibold tracking-[-0.04em] text-[#f4f1ec]">{value}</p>
      <p className="mt-5 text-lg font-semibold leading-7 text-[#ff6b00]">{detail}</p>
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
        <p className={`mt-4 text-lg font-medium ${muted ? 'text-zinc-600' : 'text-[#ff6b00]'}`}>{title}</p>
      </div>
    </article>
  )
}

function FooterGroup({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <p className="text-lg font-medium text-zinc-700">{title}</p>
      <div className="mt-7 grid gap-5">
        {links.map((link) => (
          <Link
            key={link}
            href={link === 'Automations' ? 'automations' : link === 'Analytics' ? 'analytics' : '#'}
            className="text-lg text-zinc-800 transition hover:text-zinc-500"
          >
            {link}
          </Link>
        ))}
      </div>
    </div>
  )
}

function highlightOrange(value: string) {
  const piece = ['DM Trigger: Price', 'Story Reply Flow', 'Analytics Report'].find((item) =>
    value.includes(item)
  )

  if (!piece) return value

  const [before, after] = value.split(piece)

  return (
    <>
      {before}
      <span className="text-[#ff6b00]">{piece}</span>
      {after}
    </>
  )
}
