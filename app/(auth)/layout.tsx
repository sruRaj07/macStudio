import { Aperture } from 'lucide-react'
import React from 'react'

type Props = {
  children: React.ReactNode
}

const metrics = [
  { value: '01', label: 'Connect' },
  { value: '02', label: 'Automate' },
  { value: '03', label: 'Scale' },
]

const Layout = ({ children }: Props) => {
  return (
    <main className="mac-auth min-h-screen overflow-hidden bg-[#101010] text-white">
      <section className="grid min-h-screen lg:grid-cols-2">
        <aside className="mac-auth-visual relative hidden min-h-screen overflow-hidden lg:block">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_45%_44%,rgba(255,107,0,0.10),transparent_18%),linear-gradient(135deg,#060606_0%,#121212_48%,#070707_100%)]" />
          <div className="mac-auth-panel absolute left-1/2 top-1/2 h-[480px] w-[330px] -translate-x-1/2 -translate-y-1/2">
            <div className="mac-auth-logo-card">
              <div className="mac-auth-logo-inner">
                <Aperture className="h-14 w-14 fill-[#ff6b00] text-[#ff6b00]" strokeWidth={1.8} />
              </div>
            </div>

            <div className="mt-10 text-center">
              <p className="text-base font-semibold text-white">imate</p>
              <p className="mt-4 text-lg text-zinc-300">Automate your growth.</p>
            </div>

            <div className="absolute bottom-4 left-1/2 grid w-full max-w-[240px] -translate-x-1/2 grid-cols-3 gap-6">
              {metrics.map((metric) => (
                <div key={metric.value} className="mac-auth-step">
                  <p className="text-xl font-black text-[#ff6b00]">{metric.value}</p>
                  <p className="mt-2 text-[10px] font-medium text-zinc-400">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="absolute bottom-9 left-12 text-[11px] font-black uppercase tracking-[0.22em] text-zinc-700">
            Architecture of Prestige - 2024
          </p>
        </aside>

        <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#121212] px-5 py-10 md:px-10">
          <div className="mac-auth-mobile-brand absolute left-5 top-5 flex items-center gap-3 lg:hidden">
            <div className="flex h-10 w-10 items-center justify-center border border-[#ff6b00]/30 bg-[#202020]">
              <Aperture className="h-5 w-5 fill-[#ff6b00] text-[#ff6b00]" />
            </div>
            <span className="text-sm font-semibold text-white">imate</span>
          </div>

          <div className="relative z-10 w-full max-w-[448px]">{children}</div>
          <p className="pointer-events-none absolute -bottom-5 right-3 text-[76px] font-black leading-none tracking-[-0.08em] text-white/[0.08] md:right-8 md:text-[96px]">
            001_AUTH
          </p>
        </section>
      </section>
    </main>
  )
}

export default Layout
