import { CheckCircle2, CircleDot } from 'lucide-react'
import Link from 'next/link'

const starterFeatures = [
  'Basic DM automation',
  '1 Connected account',
  'Standard keyword triggers',
  'AI intent detection',
]

const proFeatures = [
  'Full AI conversational responses',
  'Unlimited automations',
  'Advanced cinematic analytics',
  'Up to 10 connected accounts',
  'Priority server rendering',
]

const comparison = [
  ['Automation Nodes', '5 Active', 'Unlimited'],
  ['Response Speed', 'Standard', 'Instant / Priority'],
  ['Analytics Retention', '30 Days', 'Lifetime'],
  ['API Access', 'None', 'Full REST API'],
  ['Support', 'Community', '24/7 Dedicated Concierge'],
]

const faqs = [
  {
    question: 'Can I switch plans anytime?',
    answer:
      'Yes. Upgrades are immediate and prorated. Downgrades take effect at the end of your current billing cycle.',
  },
  {
    question: 'What happens if I exceed my account limit?',
    answer:
      'We will notify you when you are close to your limit. You can add individual account slots to any plan for $9/mo each.',
  },
  {
    question: 'Do you offer annual discounts?',
    answer: 'Switch to annual billing in the dashboard to save 20% across all paid tiers.',
  },
]

const footerGroups = [
  { title: 'Product', links: ['Features', 'Pricing', 'API'] },
  { title: 'Company', links: ['About', 'Careers', 'Blog'] },
  { title: 'Support', links: ['Help Center', 'Privacy', 'Terms'] },
]

export default function PricingPage() {
  return (
    <main className="mac-pricing min-h-screen bg-[#111] text-white">
      <header className="sticky top-0 z-40 border-b border-white/[0.04] bg-[#080808]/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
          <Link href="/" className="text-lg font-black uppercase tracking-[-0.03em] text-white md:text-2xl">
            MACSTUDIO
          </Link>

          <nav className="hidden items-center gap-9 text-xs font-semibold md:flex">
            <Link href="/" className="text-zinc-500 transition hover:text-white">
              Home
            </Link>
            <Link href="/features" className="text-zinc-500 transition hover:text-white">
              Features
            </Link>
            <Link href="/pricing" className="border-b-2 border-[#ff6b00] pb-1 text-[#ff6b00]">
              Pricing
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link href="/sign-in" className="hidden text-xs font-black uppercase text-zinc-500 transition hover:text-white sm:block">
              Login
            </Link>
            <Link
              href="/sign-up"
              className="inline-flex h-10 items-center justify-center bg-[#ff6b00] px-5 text-xs font-black uppercase text-black transition hover:bg-[#ff7f1a]"
            >
              Start Free
            </Link>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-5 pb-12 pt-16 text-center md:px-8 md:pt-20">
        <p className="text-[13px] font-black uppercase tracking-[0.42em] text-[#ff6b00]">
          Investment
        </p>
        <h1 className="mt-5 text-balance text-5xl font-black leading-[1.03] tracking-[-0.06em] text-[#f4f1ec] md:text-7xl">
          Choose Your Scale
        </h1>
        <p className="mx-auto mt-7 max-w-2xl text-lg font-bold leading-8 text-zinc-600">
          Precision-engineered automation for digital architects. From individual creators
          to global production studios.
        </p>
      </section>

      <section className="mx-auto grid max-w-5xl gap-6 px-5 pb-28 md:px-8 lg:grid-cols-2">
        <article className="mac-plan-card">
          <h2 className="text-4xl font-black tracking-[-0.05em] text-[#f4f1ec]">Starter</h2>
          <p className="mt-3 text-base font-black text-zinc-600">Essential foundation for growing profiles.</p>
          <div className="mt-16 flex items-end gap-1">
            <p className="text-5xl font-black tracking-[-0.05em] text-[#f4f1ec]">Free</p>
            <span className="pb-2 text-xs font-black uppercase text-zinc-600">/ Forever</span>
          </div>

          <div className="mt-14 space-y-6">
            {starterFeatures.map((feature, index) => (
              <div
                key={feature}
                className={`flex items-center gap-3 text-base font-black ${
                  index === starterFeatures.length - 1 ? 'text-zinc-800 line-through' : 'text-zinc-600'
                }`}
              >
                <CircleDot className="h-4 w-4 text-zinc-700" />
                {feature}
              </div>
            ))}
          </div>

          <Link
            href="/sign-up"
            className="mt-20 inline-flex h-14 w-full items-center justify-center border border-white/[0.12] text-sm font-black uppercase text-zinc-400 transition hover:border-[#ff6b00] hover:text-white"
          >
            Get Started
          </Link>
        </article>

        <article className="mac-plan-card is-pro">
          <span className="absolute right-0 top-0 bg-[#ff6b00] px-12 py-2 text-[10px] font-black uppercase tracking-[0.14em] text-black">
            Recommended
          </span>
          <h2 className="text-4xl font-black tracking-[-0.05em] text-[#f4f1ec]">Smart AI / Pro</h2>
          <p className="mt-3 text-base font-black text-zinc-500">Advanced architectural control with AI.</p>
          <div className="mt-16 flex items-end gap-2">
            <p className="text-5xl font-black tracking-[-0.05em] text-[#f4f1ec]">$49</p>
            <span className="pb-2 text-xs font-black uppercase text-zinc-600">/ Monthly</span>
          </div>

          <div className="mt-14 space-y-6">
            {proFeatures.map((feature) => (
              <div key={feature} className="flex items-center gap-3 text-base font-black text-zinc-400">
                <CheckCircle2 className="h-4 w-4 fill-[#ff6b00] text-[#ff6b00]" />
                {feature}
              </div>
            ))}
          </div>

          <Link
            href="/sign-up"
            className="mt-14 inline-flex h-14 w-full items-center justify-center bg-[#ff6b00] text-sm font-black uppercase text-black transition hover:bg-[#ff7f1a]"
          >
            Upgrade to Pro
          </Link>
        </article>
      </section>

      <section className="mx-auto max-w-5xl px-5 pb-28 md:px-8">
        <h2 className="text-center text-4xl font-black tracking-[-0.05em] text-[#f4f1ec]">
          Feature Breakdown
        </h2>
        <div className="mac-comparison-table mt-12 overflow-hidden">
          <div className="grid grid-cols-3 border-b border-white/[0.05] bg-white/[0.015]">
            <span>Capability</span>
            <span>Starter</span>
            <span className="text-[#ff6b00]">Smart AI / Pro</span>
          </div>
          {comparison.map(([capability, starter, pro]) => (
            <div key={capability} className="grid grid-cols-3 border-b border-white/[0.035] last:border-b-0">
              <span>{capability}</span>
              <span>{starter}</span>
              <span className="text-zinc-300">{pro}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 pb-32 md:px-8">
        <h2 className="text-center text-4xl font-black tracking-[-0.05em] text-[#f4f1ec]">
          Billing Intelligence
        </h2>
        <div className="mt-12 space-y-6">
          {faqs.map((faq) => (
            <article key={faq.question} className="bg-[#222] px-8 py-7">
              <h3 className="text-base font-black text-[#f4f1ec]">{faq.question}</h3>
              <p className="mt-4 text-base font-bold leading-6 text-zinc-600">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mac-server-room h-[430px]" aria-hidden="true" />

      <footer className="border-t border-white/[0.035] bg-[#070707] px-5 py-24 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-4">
          <div>
            <p className="text-lg font-black uppercase text-white">Imate</p>
            <p className="mt-8 max-w-xs text-[11px] font-black uppercase leading-5 tracking-[0.14em] text-zinc-700">
              The professional workstation for Instagram architects. Built for precision.
            </p>
          </div>
          {footerGroups.map((group) => (
            <div key={group.title}>
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-zinc-600">{group.title}</p>
              <div className="mt-8 grid gap-5">
                {group.links.map((link) => (
                  <Link
                    key={link}
                    href={link === 'Features' ? '/features' : link === 'Pricing' ? '/pricing' : '#'}
                    className={`text-[10px] font-black uppercase tracking-[0.12em] ${
                      link === 'Pricing' ? 'text-[#ff6b00]' : 'text-zinc-800'
                    }`}
                  >
                    {link}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-24 max-w-7xl border-t border-white/[0.035] pt-8 text-center">
          <p className="text-[10px] font-black uppercase tracking-[0.16em] text-zinc-700">
            © 2024 Imate by MacStudio. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  )
}
