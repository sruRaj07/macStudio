import {
  BarChart3,
  Bot,
  CheckCircle2,
  CircleDot,
  Camera,
  MessageSquare,
  MousePointer2,
  Network,
  Share2,
  UserRound,
  Zap,
} from 'lucide-react'
import Link from 'next/link'

const trustedBy = [
  'CREATOR.CO',
  'AGENCY X',
  'SOCIAL ARCHITECTS',
  'PEAK MEDIA',
  'INFLUENCE+',
]

const featureCards = [
  {
    title: 'Smart DM Automation',
    copy:
      'Create complex branching workflows that trigger when someone comments a keyword. Guide them from "interested" to "customer" in seconds.',
    icon: <Zap className="h-4 w-4" />,
    className: 'lg:col-span-2',
    visual: 'chart',
  },
  {
    title: 'Instant Replies',
    copy:
      'Auto-reply to every comment with personalized, human-like responses to boost your post reach instantly.',
    icon: <MessageSquare className="h-4 w-4" />,
    visual: 'reply',
  },
  {
    title: 'AI Triage',
    copy:
      'Our AI identifies high-intent leads and notifies your team when a human needs to step in for the close.',
    icon: <Bot className="h-4 w-4" />,
  },
  {
    title: 'Conversion Analytics',
    copy:
      'Track every dollar generated from your automations with deep attribution modeling.',
    icon: <BarChart3 className="h-4 w-4" />,
    className: 'lg:col-span-2',
    visual: 'analytics',
  },
]

const steps = [
  {
    id: '01',
    title: 'Connect Securely',
    copy:
      'Link your Instagram Professional account in one click. We use official Meta APIs to keep your account safe and compliant.',
  },
  {
    id: '02',
    title: 'Build Your Flow',
    copy:
      'Drag and drop nodes to create a conversation. Set triggers for specific posts, stories, or live broadcasts.',
  },
  {
    id: '03',
    title: 'Watch the Growth',
    copy:
      'Launch and eliminate handle the rest. Track your engagement spikes and conversion rates in real-time.',
  },
]

const pricingPlans = [
  {
    name: 'Growth',
    price: '$49',
    points: ['Up to 5,000 DMs/mo', '3 Active Workflows', 'Standard Analytics'],
    cta: 'Select Plan',
  },
  {
    name: 'Scale',
    price: '$149',
    points: ['Unlimited DMs', 'Unlimited Workflows', 'AI Triage & Lead Labeling', 'CRM Integrations'],
    cta: 'Select Plan',
    featured: true,
  },
  {
    name: 'Agency',
    price: '$499',
    points: ['Multi-account Management', 'White-labeled Reports', 'Priority 24/7 Support'],
    cta: 'Contact Sales',
  },
]

export default function Home() {
  return (
    <main className="mac-landing min-h-screen bg-[#0f0f0f] text-white">
      <section className="mac-hero relative overflow-hidden">
        <header className="sticky top-0 z-30 border-b border-white/[0.04] bg-[#080808]/95 backdrop-blur">
          <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
            <Link href="/" className="text-lg font-black uppercase tracking-[-0.03em] text-white">
              MACSTUDIO
            </Link>

            <nav className="hidden items-center gap-9 text-xs font-semibold md:flex">
              <Link href="/" className="text-[#ff6b00]">
                Home
              </Link>
              <Link href="/features" className="text-zinc-500 transition hover:text-white">
                Features
              </Link>
              <Link href="/pricing" className="text-zinc-500 transition hover:text-white">
                Pricing
              </Link>
            </nav>

            <div className="flex items-center gap-4">
              <Link href="/sign-in" className="hidden text-xs font-semibold text-zinc-500 transition hover:text-white sm:block">
                Login
              </Link>
              <Link
                href="/sign-up"
                className="inline-flex h-10 items-center justify-center bg-[#ff6b00] px-5 text-xs font-black text-black transition hover:bg-[#ff7f1a]"
              >
                Start Free
              </Link>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-7xl px-5 pb-28 pt-20 text-center md:px-8 md:pb-36 md:pt-24">
          <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#ff6b00]">
            The new standard for creators
          </p>
          <h1 className="mx-auto mt-4 max-w-4xl text-balance text-5xl font-black leading-[0.98] tracking-[-0.06em] text-[#f6f3ee] md:text-7xl">
            Turn every Instagram comment into a{' '}
            <span className="text-[#ff6b00]">conversion flow.</span>
          </h1>
          <p className="mx-auto mt-8 max-w-xl text-sm font-medium leading-6 text-zinc-500 md:text-base">
            Scale your engagement without the manual grind. Automate DMs, nurture leads,
            and close sales directly inside Instagram.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/sign-up"
              className="inline-flex h-12 min-w-48 items-center justify-center bg-[#ff6b00] px-7 text-sm font-black text-black transition hover:bg-[#ff7f1a]"
            >
              Launch Your First Flow
            </Link>
            <Link
              href="/features"
              className="inline-flex h-12 min-w-40 items-center justify-center bg-[#222] px-7 text-sm font-black text-white transition hover:bg-[#2c2c2c]"
            >
              Watch Demo
            </Link>
          </div>

          <div className="mac-dashboard-frame mx-auto mt-24 max-w-5xl rounded-md p-3">
            <div className="mac-dashboard relative overflow-hidden rounded-sm">
              <div className="grid h-full grid-cols-[1fr_0.9fr] gap-6 p-7 text-left lg:grid-cols-[1.25fr_0.85fr]">
                <div className="space-y-5">
                  <div className="flex items-center gap-3 text-xs font-bold text-zinc-500">
                    <CircleDot className="h-4 w-4 text-[#55706f]" />
                    liveflow_designer.automation
                  </div>
                  <div className="grid gap-4">
                    {['Comment: PRICE', 'DM: send trial link', 'Qualify response', 'Create checkout reminder'].map(
                      (item, index) => (
                        <div key={item} className="mac-node relative w-[68%] rounded px-4 py-3">
                          <p className="text-[11px] font-black text-[#ff7b18]">{item}</p>
                          <p className="mt-1 text-[10px] font-medium text-zinc-600">
                            {index === 0 ? 'Trigger active across 8 posts' : 'Message branch ready'}
                          </p>
                        </div>
                      ),
                    )}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-black text-[#ff7b18]">Workflow</p>
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-[#ff6b00] text-black">
                      <UserRound className="h-5 w-5" />
                    </div>
                  </div>
                  {['Capture buyer intent', 'Open DM thread', 'Generate product link', 'Confirm fit'].map((item) => (
                    <div key={item} className="rounded border border-white/[0.05] bg-white/[0.035] px-4 py-3">
                      <p className="text-[11px] font-bold text-zinc-400">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mac-flow-lines" aria-hidden="true">
                <span className="line line-a" />
                <span className="line line-b" />
                <span className="line line-c" />
                <span className="dot dot-a" />
                <span className="dot dot-b" />
                <span className="dot dot-c" />
                <span className="dot dot-d" />
                <span className="dot dot-e" />
              </div>

              <div className="absolute bottom-0 right-0 w-56 border-l border-t border-[#322318] bg-[#1b1b1b] p-4 text-left">
                <div className="flex items-center gap-2 text-[10px] font-black uppercase text-zinc-400">
                  <Zap className="h-3 w-3 fill-[#ff6b00] text-[#ff6b00]" />
                  Active flow
                </div>
                <div className="mt-3 h-1.5 bg-zinc-700">
                  <div className="h-full w-4/5 bg-[#ff6b00]" />
                </div>
                <p className="mt-3 text-[10px] font-semibold text-zinc-600">1,240 Sales generated today</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/[0.035] bg-[#0a0a0a] py-12">
        <p className="text-center text-xs font-bold text-zinc-600">Trusted by 10,000+ creators and agencies</p>
        <div className="mx-auto mt-8 grid max-w-5xl grid-cols-2 gap-6 px-5 text-center text-sm font-black text-zinc-600 md:grid-cols-5">
          {trustedBy.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-28 md:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-black tracking-[-0.05em] text-[#f6f3ee] md:text-5xl">
            Engineered for absolute control
          </h2>
          <p className="mt-3 text-sm font-medium text-zinc-600">
            Precision tools for the modern Instagram architect.
          </p>
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {featureCards.map((feature) => (
            <article key={feature.title} className={`mac-feature-card ${feature.className ?? ''}`}>
              <div className="relative z-10 max-w-md">
                <div className="mb-8 flex h-10 w-10 items-center justify-center bg-white/[0.035] text-[#ff6b00]">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-black tracking-[-0.04em] text-[#f6f3ee]">{feature.title}</h3>
                <p className="mt-4 text-sm font-medium leading-6 text-zinc-500">{feature.copy}</p>
              </div>

              {feature.visual === 'chart' && (
                <div className="mac-card-chart" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
              )}
              {feature.visual === 'reply' && <div className="mac-reply-meter" aria-hidden="true" />}
              {feature.visual === 'analytics' && <Network className="absolute right-8 top-10 h-24 w-24 text-white/[0.03]" />}
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#070707] py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 md:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#ff6b00]">The workflow</p>
            <h2 className="mt-3 max-w-lg text-4xl font-black leading-[1.02] tracking-[-0.055em] text-[#f6f3ee] md:text-5xl">
              Three steps to total automation.
            </h2>

            <div className="mt-12 space-y-8">
              {steps.map((step) => (
                <div key={step.id} className="grid grid-cols-[3rem_1fr] gap-4">
                  <p className="text-sm font-black text-[#ff6b00]">{step.id}</p>
                  <div>
                    <h3 className="text-base font-black text-[#e9e6df]">{step.title}</h3>
                    <p className="mt-2 max-w-lg text-sm font-medium leading-6 text-zinc-600">{step.copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mac-monitor-frame">
            <div className="mac-monitor-light" />
            <div className="mac-monitor-screen">
              <div className="mac-monitor-ui">
                <div className="space-y-2">
                  <div className="h-2 w-24 bg-cyan-200/30" />
                  <div className="h-2 w-32 bg-cyan-200/20" />
                  <div className="h-2 w-20 bg-cyan-200/20" />
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {Array.from({ length: 9 }).map((_, index) => (
                    <span key={index} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-28 md:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-black tracking-[-0.05em] text-[#f6f3ee] md:text-5xl">
            Choose your power level
          </h2>
          <p className="mt-3 text-sm font-medium text-zinc-600">Flexible plans for creators at every scale.</p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3 lg:items-center">
          {pricingPlans.map((plan) => (
            <article key={plan.name} className={`mac-price-card ${plan.featured ? 'is-featured' : ''}`}>
              {plan.featured && <span className="mac-popular">Most Popular</span>}
              <p className="text-lg font-black text-zinc-400">{plan.name}</p>
              <div className="mt-2 flex items-end gap-2">
                <h3 className="text-4xl font-black tracking-[-0.05em] text-[#f6f3ee]">{plan.price}</h3>
                <span className="pb-1 text-sm font-bold text-zinc-600">/mo</span>
              </div>
              <div className="mt-8 space-y-4">
                {plan.points.map((point) => (
                  <div key={point} className="flex items-center gap-3 text-sm font-semibold text-zinc-500">
                    <CheckCircle2 className="h-4 w-4 text-[#ff6b00]" />
                    {point}
                  </div>
                ))}
              </div>
              <Link
                href={plan.featured ? '/sign-up' : '/pricing'}
                className={`mt-12 inline-flex h-11 w-full items-center justify-center border text-xs font-black transition ${
                  plan.featured
                    ? 'border-[#ff6b00] bg-[#ff6b00] text-black hover:bg-[#ff7f1a]'
                    : 'border-white/[0.07] text-zinc-300 hover:border-white/[0.16] hover:text-white'
                }`}
              >
                {plan.cta}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="px-5 pb-28 md:px-8">
        <div className="mac-cta mx-auto max-w-5xl px-6 py-16 text-center md:px-12">
          <h2 className="text-4xl font-black tracking-[-0.05em] text-[#f6f3ee] md:text-5xl">
            Ready to scale your engagement?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm font-medium leading-6 text-zinc-500">
            Join the top 1% of Instagram creators who use automation to reclaim their
            time and increase their revenue.
          </p>
          <Link
            href="/sign-up"
            className="mt-10 inline-flex h-12 items-center justify-center bg-[#ff6b00] px-8 text-sm font-black text-black transition hover:bg-[#ff7f1a]"
          >
            Start Your Free 14-Day Trial
          </Link>
          <p className="mt-6 text-[10px] font-black uppercase tracking-[0.18em] text-zinc-700">
            No credit card required - instant setup
          </p>
        </div>
      </section>

      <footer className="border-t border-white/[0.035] bg-[#050505] px-5 py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1fr_16rem]">
          <div>
            <p className="text-sm font-black text-white">macStudio</p>
            <p className="mt-6 max-w-xs text-xs font-medium leading-6 text-zinc-600">
              The premium automation engine for professional creators and digital agencies.
              Frame your content with power.
            </p>
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-zinc-600">Support</p>
            <div className="mt-6 grid gap-4 text-xs font-semibold text-zinc-600">
              <Link href="/features">Documentation</Link>
              <Link href="/features">Help Center</Link>
              <Link href="/pricing">Privacy Policy</Link>
              <Link href="/pricing">Terms of Service</Link>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-20 flex max-w-7xl items-center justify-between border-t border-white/[0.035] pt-8">
          <p className="text-[10px] font-black uppercase tracking-[0.12em] text-zinc-700">
            © 2024 Made by MacStudio. All rights reserved.
          </p>
          <div className="flex gap-5 text-zinc-700">
            <Camera className="h-4 w-4" />
            <Share2 className="h-4 w-4" />
            <MousePointer2 className="h-4 w-4" />
          </div>
        </div>
      </footer>
    </main>
  )
}
