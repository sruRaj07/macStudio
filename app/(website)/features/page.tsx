import { CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

const checks = ['Enterprise-grade Security', 'Multi-account Management']

const footerGroups = [
  { title: 'Product', links: ['Features', 'Pricing', 'Integrations'] },
  { title: 'Company', links: ['About', 'Privacy', 'Terms'] },
  { title: 'Connect', links: ['Instagram', 'Support', 'Login'] },
]

export default function FeaturesPage() {
  return (
    <main className="mac-features min-h-screen bg-[#0f0f0f] text-white">
      <header className="sticky top-0 z-40 border-b border-white/[0.04] bg-[#080808]/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
          <Link href="/" className="text-lg font-black uppercase tracking-[-0.03em] text-white">
            MACSTUDIO
          </Link>

          <nav className="hidden items-center gap-9 text-xs font-semibold md:flex">
            <Link href="/" className="text-zinc-500 transition hover:text-white">
              Home
            </Link>
            <Link href="/features" className="border-b-2 border-[#ff6b00] pb-1 text-[#ff6b00]">
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

      <section className="mx-auto max-w-7xl px-5 pb-24 pt-16 text-center md:px-8 md:pb-28 md:pt-20">
        <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#ff6b00]">
          Core Capabilities
        </p>
        <h1 className="mx-auto mt-4 max-w-3xl text-balance text-5xl font-black leading-[1.02] tracking-[-0.06em] text-[#f4f1ec] md:text-7xl">
          Engineered for High-Stakes Engagement.
        </h1>
        <p className="mx-auto mt-7 max-w-2xl text-sm font-semibold leading-7 text-zinc-500 md:text-base">
          The professional-grade suite for Instagram digital architects. Precision automation,
          AI-driven responses, and deep analytical insights wrapped in a cinematic interface.
        </p>
      </section>

      <section className="mx-auto grid max-w-7xl gap-16 px-5 pb-28 md:px-8 lg:grid-cols-[1fr_0.92fr] lg:items-center">
        <div className="mac-feature-phone-frame">
          <div className="mac-feature-phone">
            <div className="mac-phone-notch" />
            <div className="mac-phone-auth-pulse" />
            <p>Secure connection</p>
          </div>
        </div>

        <div>
          <p className="text-xs font-black uppercase text-[#ff6b00]">01 / Connection</p>
          <h2 className="mt-3 max-w-lg text-4xl font-black leading-[1.03] tracking-[-0.055em] text-[#f4f1ec] md:text-6xl">
            One-click Instagram connection.
          </h2>
          <p className="mt-7 max-w-xl text-sm font-semibold leading-7 text-zinc-500">
            Onboard your professional profile in seconds. Our encrypted handshake ensures
            maximum security while giving you immediate access to our full automation suite.
            No complex API keys, just pure performance.
          </p>
          <div className="mt-7 space-y-3">
            {checks.map((check) => (
              <div key={check} className="flex items-center gap-3 text-xs font-black text-zinc-400">
                <CheckCircle2 className="h-4 w-4 fill-[#ff6b00] text-[#ff6b00]" />
                {check}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/[0.025] bg-[#0b0b0b] py-28">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 md:px-8 lg:grid-cols-[1.2fr_0.85fr]">
          <article className="mac-feature-card-large">
            <p className="text-xs font-black uppercase text-[#ff6b00]">02 / Logic</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-black leading-[1.05] tracking-[-0.05em] text-[#f4f1ec] md:text-4xl">
              Intelligent DM Automation & Keyword Triggers.
            </h2>
            <p className="mt-4 max-w-2xl text-sm font-semibold leading-6 text-zinc-500">
              Deploy sophisticated response chains triggered by specific keywords, phrases,
              or intent. Automate the mundane without losing the human touch.
            </p>
            <div className="mac-network-visual mt-12" />
          </article>

          <article className="mac-feature-card-large self-start">
            <p className="text-xs font-black uppercase text-[#ff6b00]">03 / Conversion</p>
            <h2 className="mt-3 text-3xl font-black leading-[1.05] tracking-[-0.05em] text-[#f4f1ec] md:text-4xl">
              Comment-to-DM Workflows.
            </h2>
            <p className="mt-4 text-sm font-semibold leading-6 text-zinc-500">
              Transform public engagement into private leads. Automatically DM followers who
              interact with your posts, stories, or reels.
            </p>
            <div className="mac-message-visual mt-12">
              <span />
              <span />
              <span />
              <span />
            </div>
          </article>
        </div>
      </section>

      <section className="bg-[#121212] py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <article className="mac-ai-banner">
            <div className="relative z-10 max-w-xl">
              <p className="text-xs font-black uppercase text-[#ff6b00]">04 / Intelligence</p>
              <h2 className="mt-3 text-4xl font-black leading-[1.02] tracking-[-0.055em] text-[#f4f1ec] md:text-6xl">
                Smart AI Responses using NLP.
              </h2>
              <p className="mt-8 text-sm font-semibold leading-7 text-zinc-300">
                Our proprietary Natural Language Processing engine understands context, tone,
                and intent. It is not just a bot; it is a digital architect that speaks your
                brand&apos;s language fluently.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                {['Context Aware', 'Tone Matching', 'Multi-lingual'].map((pill) => (
                  <span key={pill} className="rounded-md bg-[#4a3a2e] px-4 py-2 text-[10px] font-black text-[#d8c0ac]">
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-28 px-5 py-28 md:px-8 lg:grid-cols-2">
        <article>
          <div className="mac-post-visual">
            <div className="mac-post-phone">
              <div className="mac-post-avatar" />
              <span />
              <span />
              <span />
            </div>
          </div>
          <p className="mt-10 text-xs font-black uppercase text-[#ff6b00]">05 / Precision</p>
          <h2 className="mt-2 text-3xl font-black tracking-[-0.05em] text-[#f4f1ec]">
            Post-specific Automation.
          </h2>
          <p className="mt-4 max-w-xl text-sm font-semibold leading-7 text-zinc-500">
            Tailor workflows for individual posts. Whether it is a product launch or a seasonal
            campaign, attach custom triggers to specific content items to maximize targeted conversion.
          </p>
        </article>

        <article>
          <div className="mac-analytics-visual">
            <div className="mac-analytics-bars">
              {Array.from({ length: 42 }).map((_, index) => (
                <span key={index} style={{ height: `${18 + ((index * 17) % 82)}%` }} />
              ))}
            </div>
          </div>
          <p className="mt-10 text-xs font-black uppercase text-[#ff6b00]">06 / Analytics</p>
          <h2 className="mt-2 text-3xl font-black tracking-[-0.05em] text-[#f4f1ec]">
            Engagement Monitoring & Insights.
          </h2>
          <p className="mt-4 max-w-xl text-sm font-semibold leading-7 text-zinc-500">
            Real-time data visualization of your automation performance. Track response rates,
            conversion metrics, and audience sentiment through our minimalist, high-density
            analytics dashboard.
          </p>
        </article>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-28 md:px-8">
        <div className="mac-feature-cta px-6 py-16 text-center md:px-12">
          <h2 className="text-4xl font-black tracking-[-0.055em] text-black md:text-5xl">
            Ready to architect your engagement?
          </h2>
          <p className="mx-auto mt-7 max-w-lg text-sm font-black leading-6 text-black/70">
            Join the world&apos;s leading creators and brands leveraging the absolute control of imate.
          </p>
          <Link
            href="/sign-up"
            className="mt-9 inline-flex h-12 items-center justify-center bg-[#080808] px-10 text-sm font-black text-white transition hover:bg-[#1a1a1a]"
          >
            Start Your Journey
          </Link>
        </div>
      </section>

      <footer className="border-t border-white/[0.035] bg-[#070707] px-5 py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-4">
          <div>
            <p className="text-sm font-black uppercase text-white">Imate</p>
            <p className="mt-6 max-w-xs text-[11px] font-black uppercase leading-5 tracking-[0.08em] text-zinc-700">
              The professional workstation for digital architects.
            </p>
          </div>
          {footerGroups.map((group) => (
            <div key={group.title}>
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-zinc-500">{group.title}</p>
              <div className="mt-5 grid gap-2">
                {group.links.map((link) => (
                  <Link
                    key={link}
                    href={link === 'Pricing' ? '/pricing' : link === 'Features' ? '/features' : link === 'Login' ? '/sign-in' : '#'}
                    className={`text-[10px] font-black uppercase tracking-[0.12em] ${
                      link === 'Login' ? 'text-[#ff6b00]' : 'text-zinc-700'
                    }`}
                  >
                    {link}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-20 max-w-7xl border-t border-white/[0.035] pt-8">
          <p className="text-[10px] font-black uppercase tracking-[0.12em] text-zinc-800">
            © 2024 Imate by MacStudio. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  )
}
