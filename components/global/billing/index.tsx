'use client'
import React from 'react'
import PaymentCard from './payment-card'
import { useQueryUser } from '@/hooks/user-queries'
import { Bell, CreditCard, ShieldCheck, User2 } from 'lucide-react'

const tabs = ['Profile', 'Billing', 'Security', 'Team']

const Billing = () => {
  const { data } = useQueryUser()
  const user = data?.data
  const currentPlan = user?.subscription?.plan || 'FREE'

  return (
    <div className="flex flex-col gap-6">
      <section className="imate-content-section rounded-[2rem] px-6 py-7 md:px-8">
        <p className="text-sm uppercase tracking-[0.28em] text-[#ffb36a]">Settings & billing</p>
        <h1 className="mt-3 text-4xl font-semibold text-white md:text-5xl">
          Account controls, plan details, and production-ready settings.
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-400 md:text-base">
          The layout is now closer to the uploaded billing screen, with clearer sections for
          plan state, payment structure, profile connections, and account signals.
        </p>
      </section>

      <div className="flex flex-wrap gap-3">
        {tabs.map((tab) => (
          <div
            key={tab}
            className={`rounded-full px-4 py-2 text-sm ${tab === 'Billing' ? 'orange-gradient text-white' : 'imate-card-muted text-zinc-400'}`}
          >
            {tab}
          </div>
        ))}
      </div>

      <div className="grid gap-5 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="grid gap-5 md:grid-cols-2">
          <PaymentCard current={currentPlan} label="PRO" />
          <PaymentCard current={currentPlan} label="FREE" />
        </div>

        <div className="space-y-5">
          <div className="rounded-[1.9rem] orange-gradient p-[1px]">
            <div className="rounded-[1.85rem] bg-[#0d0d0d] p-6">
              <p className="text-sm uppercase tracking-[0.24em] text-zinc-500">Current account</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">
                {user?.firstname || 'Your'} {user?.lastname || 'account'}
              </h2>
              <p className="mt-2 text-sm text-zinc-400">{user?.email || 'Email available in Clerk profile'}</p>
            </div>
          </div>

          <div className="imate-card rounded-[1.9rem] p-6">
            <p className="text-sm uppercase tracking-[0.24em] text-zinc-500">Notifications</p>
            <div className="mt-4 space-y-3">
              {[
                { label: 'Billing reminders', icon: <Bell className="h-4 w-4 text-[#ffb36a]" /> },
                { label: 'Payment status', icon: <CreditCard className="h-4 w-4 text-[#ffb36a]" /> },
                { label: 'Security notices', icon: <ShieldCheck className="h-4 w-4 text-[#ffb36a]" /> },
              ].map((item) => (
                <div key={item.label} className="imate-card-muted flex items-center gap-3 rounded-2xl px-4 py-3">
                  {item.icon}
                  <p className="text-sm text-zinc-300">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-5 xl:grid-cols-[0.85fr_1.15fr]">
        <div className="imate-card rounded-[1.9rem] p-6">
          <div className="flex items-center gap-3">
            <User2 className="h-5 w-5 text-[#ffb36a]" />
            <p className="text-lg font-semibold text-white">Connected profile state</p>
          </div>
          <div className="mt-5 space-y-3">
            <div className="imate-card-muted rounded-2xl px-4 py-3 text-sm text-zinc-300">
              Plan: {currentPlan}
            </div>
            <div className="imate-card-muted rounded-2xl px-4 py-3 text-sm text-zinc-300">
              Instagram integrations: {user?.integrations?.length || 0}
            </div>
            <div className="imate-card-muted rounded-2xl px-4 py-3 text-sm text-zinc-300">
              Customer ID: {user?.subscription?.customerId || 'Not assigned yet'}
            </div>
          </div>
        </div>

        <div className="imate-card rounded-[1.9rem] p-6">
          <p className="text-sm uppercase tracking-[0.24em] text-zinc-500">Invoice history</p>
          <div className="mt-5 overflow-hidden rounded-[1.5rem] border border-white/10">
            <div className="grid grid-cols-3 bg-white/[0.03] px-4 py-4 text-sm text-zinc-500">
              <span>Invoice</span>
              <span>Status</span>
              <span>Amount</span>
            </div>
            {[
              ['Current cycle', currentPlan === 'PRO' ? 'Active' : 'Free plan', currentPlan === 'PRO' ? '$99' : '$0'],
              ['Next renewal', currentPlan === 'PRO' ? 'Scheduled' : '—', currentPlan === 'PRO' ? '$99' : '—'],
            ].map(([label, status, amount]) => (
              <div key={label} className="grid grid-cols-3 border-t border-white/5 px-4 py-4 text-sm text-white">
                <span>{label}</span>
                <span className="text-zinc-400">{status}</span>
                <span>{amount}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Billing
