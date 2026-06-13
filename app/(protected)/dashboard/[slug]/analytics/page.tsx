import { getDashboardAnalytics } from '@/actions/dashboard'
import { InstagramPostProps } from '@/types/posts.type'
import { Download, Heart, MapPin, MessageCircle, TrendingUp, Users2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import Chart from '../_components/metrics'

const demoAudience = [
  { label: 'Top region', value: 'India', icon: <MapPin className="h-4 w-4 text-[#ffb36a]" /> },
  { label: 'Core audience', value: 'Creators', icon: <Users2 className="h-4 w-4 text-[#ffb36a]" /> },
]

export default async function AnalyticsPage() {
  const analytics = await getDashboardAnalytics()

  const cards = [
    { label: 'Engagement total', value: analytics.posts.totalEngagement },
    { label: 'Average per post', value: analytics.posts.averageEngagementPerPost },
    { label: 'Replies sent', value: analytics.automations.replies },
    { label: 'Tracked posts', value: analytics.posts.total },
  ]

  return (
    <div className="mac-dash-page">
      <section className="mac-header-panel px-6 py-7 md:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#ff6b00]">Analytics Command</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-black tracking-[-0.05em] text-white md:text-5xl">
              Understand post and automation performance.
            </h1>
            <p className="mt-4 max-w-2xl text-base font-medium leading-7 text-zinc-600">
              Track content, replies, and audience signals from one studio-grade performance surface.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <span className="mac-status-pill">Live overview</span>
            <button type="button" className="mac-outline-action">
              <Download className="mr-2 h-4 w-4" />
              Export
            </button>
          </div>
        </div>
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => (
          <div key={card.label} className="mac-kpi-card">
            <p>{card.label}</p>
            <strong>{card.value}</strong>
          </div>
        ))}
      </section>

      <section className="mt-8 grid gap-5 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="mac-panel p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-zinc-700">Trend view</p>
          <h2 className="mt-2 text-2xl font-semibold text-white">Engagement and reply timeline</h2>
          <div className="mt-4">
            <Chart chartData={analytics.chart} />
          </div>
        </div>

        <div className="grid gap-5">
          <div className="mac-panel p-6">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-zinc-700">Reply split</p>
            <div className="mt-4 grid gap-3">
              <div className="mac-micro-card">
                <p className="text-sm text-zinc-400">DM replies</p>
                <p className="mt-2 text-2xl font-semibold text-white">{analytics.automations.dmReplies}</p>
              </div>
              <div className="mac-micro-card">
                <p className="text-sm text-zinc-400">Comment replies</p>
                <p className="mt-2 text-2xl font-semibold text-white">{analytics.automations.commentReplies}</p>
              </div>
            </div>
          </div>

          <div className="mac-panel p-6">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-zinc-700">Audience snapshot</p>
            <div className="mt-4 grid gap-3">
              {demoAudience.map((item) => (
                <div key={item.label} className="mac-micro-card">
                  <div className="flex items-center gap-2 text-zinc-400">
                    {item.icon}
                    <span className="text-sm">{item.label}</span>
                  </div>
                  <p className="mt-2 text-xl font-semibold text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mac-panel mt-8 p-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-zinc-700">Top content</p>
            <h2 className="mt-1 text-2xl font-semibold text-white">Recent posts ranked by engagement</h2>
          </div>
          <Link href="../integrations" className="mac-outline-action">
            <TrendingUp className="mr-2 h-4 w-4" />
            Manage integration
          </Link>
        </div>

        {analytics.posts.top.length > 0 ? (
          <div className="mac-table-wrap mt-6">
            <div className="grid grid-cols-[1.1fr_0.5fr_0.5fr_0.4fr] bg-white/[0.025] px-4 py-4 text-sm font-black uppercase tracking-[0.12em] text-zinc-700">
              <span>Post</span>
              <span>Likes</span>
              <span>Comments</span>
              <span>Type</span>
            </div>
            {analytics.posts.top.slice(0, 5).map((post: InstagramPostProps) => {
              const preview =
                post.media_type === 'VIDEO'
                  ? post.thumbnail_url || post.media_url
                  : post.media_url

              return (
                <Link
                  key={post.id}
                  href={post.permalink || '#'}
                  target={post.permalink ? '_blank' : undefined}
                  className="grid grid-cols-[1.1fr_0.5fr_0.5fr_0.4fr] items-center gap-3 border-t border-white/5 px-4 py-4 transition hover:bg-white/[0.02]"
                >
                  <div className="flex items-center gap-3">
                    <div className="relative h-14 w-14 overflow-hidden rounded border border-white/10">
                      <Image
                        src={preview}
                        alt={post.caption || 'Instagram post'}
                        fill
                        sizes="56px"
                        className="object-cover"
                      />
                    </div>
                    <p className="line-clamp-2 text-sm text-white">
                      {post.caption || 'No caption available for this post.'}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-sm text-zinc-300">
                    <Heart className="h-4 w-4 text-[#ffb36a]" />
                    {post.like_count || 0}
                  </span>
                  <span className="inline-flex items-center gap-1 text-sm text-zinc-300">
                    <MessageCircle className="h-4 w-4 text-[#ffb36a]" />
                    {post.comments_count || 0}
                  </span>
                  <span className="text-sm text-zinc-400">{post.media_type}</span>
                </Link>
              )
            })}
          </div>
        ) : (
          <div className="mt-6 rounded border border-dashed border-white/10 px-6 py-10 text-center text-zinc-500">
            Connect Instagram to load post analytics.
          </div>
        )}
      </section>
    </div>
  )
}
