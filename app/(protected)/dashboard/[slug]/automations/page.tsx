import AutomationList from '@/components/global/automation-list'
import CreateAutomation from '@/components/global/create-automation'
import Link from 'next/link'
import { Rocket } from 'lucide-react'

export default function Page() {
  return (
    <div className="mac-automations-page">
      <header className="flex flex-col gap-6 pt-6 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.12em] text-zinc-600">
            Dashboard <span className="mx-2 text-zinc-700">›</span> Automations
          </p>
          <h1 className="mt-6 text-xl font-medium text-zinc-200">Your Automations</h1>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <button type="button" className="mac-automation-filter">Filter</button>
          <div className="mac-automation-tabs">
            <button type="button" className="is-active">All</button>
            <button type="button">Active</button>
            <button type="button">Drafts</button>
          </div>
          <CreateAutomation />
        </div>
      </header>

      <section className="mt-20 grid gap-4 md:grid-cols-4">
        {[
          ['Total Triggers', '14,208 this month'],
          ['Avg CTR', '23.3%'],
          ['Active Nodes', '14 running'],
          ['Data Quality', '99.8%'],
        ].map(([label, value]) => (
          <div key={label} className="mac-automation-stat">
            <p>{label}</p>
            <strong>{value}</strong>
          </div>
        ))}
      </section>

      <section className="mt-8">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-lg font-medium text-zinc-300">Active Automations</h2>
          <p className="text-sm text-zinc-600">2 Running</p>
        </div>
        <AutomationList />
      </section>

      <section className="mt-36 grid gap-8 xl:grid-cols-[minmax(0,1fr)_350px]">
        <article className="mac-reach-card">
          <div className="flex items-start justify-between">
            <h2 className="text-xl font-medium text-white">Global Reach</h2>
            <p className="text-xs font-black uppercase tracking-[0.12em] text-[#ff6b00]">Last 30 days</p>
          </div>
          <div className="mac-reach-chart" aria-hidden="true">
            {[34, 52, 30, 70, 45, 60, 76, 35, 52, 30, 82, 36].map((height, index) => (
              <span key={index} className={index === 3 || index === 10 ? 'highlight' : ''} style={{ height: `${height}%` }} />
            ))}
          </div>
        </article>

        <aside className="mac-pro-card">
          <Rocket className="h-9 w-9 text-black" />
          <h2 className="mt-12 text-3xl font-medium leading-tight text-black">
            Automate
            <br />
            Everything.
          </h2>
          <p className="mt-5 text-lg leading-7 text-black/70">
            Our AI agents are currently handling 12,402 interactions across your profile.
          </p>
          <Link
            href="/pricing"
            className="mt-3 flex h-11 items-center justify-center rounded bg-black text-sm font-medium uppercase text-white"
          >
            Upgrade to Pro
          </Link>
        </aside>
      </section>

      <footer className="mt-20 border-t border-white/[0.035] py-24">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <p className="text-xl font-black text-white">imate</p>
            <p className="mt-8 max-w-xs text-sm leading-6 text-zinc-700">
              The professional digital workstation for Instagram architects. Built for precision and scale.
            </p>
          </div>
          <FooterGroup title="Product" links={['Features', 'Pricing', 'Integrations']} />
          <FooterGroup title="Company" links={['About', 'Blog', 'Legal']} />
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-zinc-600">Status</p>
            <p className="mt-9 text-sm uppercase tracking-[0.18em] text-zinc-600">
              <span className="mr-2 text-[#ff6b00]">●</span> All systems functional
            </p>
            <p className="mt-12 text-sm uppercase tracking-[0.18em] text-zinc-600">
              © 2024 Imate by MacStudio. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FooterGroup({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <p className="text-xs font-medium uppercase tracking-[0.24em] text-zinc-600">{title}</p>
      <div className="mt-9 grid gap-7">
        {links.map((link) => (
          <Link
            key={link}
            href={link === 'Features' ? '/features' : link === 'Pricing' ? '/pricing' : link === 'Integrations' ? '../integrations' : '#'}
            className="text-sm uppercase tracking-[0.18em] text-zinc-700 transition hover:text-zinc-500"
          >
            {link}
          </Link>
        ))}
      </div>
    </div>
  )
}
