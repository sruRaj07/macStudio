import { getDashboardAnalytics } from '@/actions/dashboard'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { InstagramPostProps } from '@/types/posts.type'
import { Download, Heart, MapPin, MessageCircle, Users2 } from 'lucide-react'
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
    <div className="flex flex-col gap-6">
      <section className="imate-content-section rounded-[2rem] px-6 py-7 md:px-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-[#ffb36a]">Analytics</p>
            <h1 className="mt-3 text-4xl font-semibold text-white md:text-5xl">
              Understand post and automation performance in seconds.
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-400 md:text-base">
              This screen follows the uploaded analytics layout with a cleaner summary row,
              a larger chart area, and lightweight insight cards that still load quickly.
            </p>
          </div>
          <div className="flex gap-3">
            <Badge className="bg-[#ef7d32]/12 px-4 py-2 text-[#ffb36a] hover:bg-[#ef7d32]/12">
              Live overview
            </Badge>
            <Button
              variant="outline"
              className="rounded-full border-white/10 bg-white/5 text-white hover:bg-white/10"
            >
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
          </div>
        </div>
      </section>

      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => (
          <div key={card.label} className="imate-card rounded-[1.75rem] px-5 py-5">
            <p className="text-sm text-zinc-500">{card.label}</p>
            <p className="mt-3 text-4xl font-semibold text-white">{card.value}</p>
          </div>
        ))}
      </section>

      <section className="grid gap-5 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="imate-card rounded-[1.9rem] p-6">
          <p className="text-sm text-zinc-500">Trend view</p>
          <h2 className="mt-1 text-2xl font-semibold text-white">Engagement and reply timeline</h2>
          <div className="mt-4">
            <Chart chartData={analytics.chart} />
          </div>
        </div>

        <div className="grid gap-5">
          <div className="imate-card rounded-[1.9rem] p-6">
            <p className="text-sm text-zinc-500">Reply split</p>
            <div className="mt-4 grid gap-3">
              <div className="imate-card-muted rounded-2xl px-4 py-3">
                <p className="text-sm text-zinc-400">DM replies</p>
                <p className="mt-2 text-2xl font-semibold text-white">{analytics.automations.dmReplies}</p>
              </div>
              <div className="imate-card-muted rounded-2xl px-4 py-3">
                <p className="text-sm text-zinc-400">Comment replies</p>
                <p className="mt-2 text-2xl font-semibold text-white">{analytics.automations.commentReplies}</p>
              </div>
            </div>
          </div>

          <div className="imate-card rounded-[1.9rem] p-6">
            <p className="text-sm text-zinc-500">Audience snapshot</p>
            <div className="mt-4 grid gap-3">
              {demoAudience.map((item) => (
                <div key={item.label} className="imate-card-muted rounded-2xl px-4 py-3">
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

      <section className="imate-card rounded-[1.9rem] p-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm text-zinc-500">Top content</p>
            <h2 className="mt-1 text-2xl font-semibold text-white">Recent posts ranked by engagement</h2>
          </div>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-white/10 bg-white/5 text-white hover:bg-white/10"
          >
            <Link href="../integrations">Manage integration</Link>
          </Button>
        </div>

        {analytics.posts.top.length > 0 ? (
          <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-white/10">
            <div className="grid grid-cols-[1.1fr_0.5fr_0.5fr_0.4fr] bg-white/[0.03] px-4 py-4 text-sm text-zinc-500">
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
                    <div className="relative h-14 w-14 overflow-hidden rounded-2xl border border-white/10">
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
          <div className="mt-6 rounded-[1.5rem] border border-dashed border-white/10 px-6 py-10 text-center text-zinc-400">
            Connect Instagram to load post analytics.
          </div>
        )}
      </section>
    </div>
  )
}
