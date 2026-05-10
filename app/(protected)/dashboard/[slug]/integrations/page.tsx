import CreateAutomation from '@/components/global/create-automation'
import { Bell, Plus, Rocket, Search } from 'lucide-react'
import IntegrationCard from './_components/integration-card'

const cards = [
  {
    title: 'Connect Instagram',
    description: 'Connect your studio-grade Instagram account and manage message automation.',
    strategy: 'INSTAGRAM' as const,
  },
  {
    title: 'Connect Salesforce',
    description: 'Automate CRM data sync and lead tracking.',
    strategy: 'CRM' as const,
  },
]

export default function Page() {
  return (
    <div className="mac-integrations-page">
      <header className="mac-integrations-topbar">
        <div className="mac-integrations-search">
          <Search className="h-5 w-5 text-zinc-600" />
          <input
            aria-label="Search integrations"
            placeholder="Search by name, email or status"
            className="h-full flex-1 bg-transparent text-base text-zinc-300 outline-none placeholder:text-zinc-600"
          />
        </div>
        <Bell className="h-6 w-6 text-zinc-500" />
        <CreateAutomation />
      </header>

      <section className="mac-integrations-hero">
        <div className="relative z-10">
          <div className="flex h-12 w-12 items-center justify-center bg-[#ff6b00] text-black">
            <Rocket className="h-6 w-6" />
          </div>
          <h1 className="mt-8 text-4xl font-black tracking-[-0.05em] text-white">
            Integrations
          </h1>
          <p className="mt-5 max-w-xl text-xl font-medium leading-8 text-zinc-600">
            Manage your connections with third-party platforms to synchronize content
            and automate your studio-grade workflows.
          </p>
        </div>
        <Rocket className="absolute -right-10 top-1/2 h-44 w-44 -translate-y-1/2 rotate-45 text-white/[0.08]" />
      </section>

      <section className="mt-8 grid gap-4">
        {cards.map((card) => (
          <IntegrationCard key={card.strategy} {...card} />
        ))}

        <button type="button" className="mac-integrations-explore">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#292a2e] text-zinc-500">
            <Plus className="h-6 w-6" />
          </span>
          <span>Explore more integrations</span>
        </button>
      </section>
    </div>
  )
}
