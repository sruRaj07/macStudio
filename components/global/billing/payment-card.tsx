import { Button } from '@/components/ui/button'
import { PLANS } from '@/constants/pages'
import { cn } from '@/lib/utils'
import { CircleCheck } from 'lucide-react'
import React from 'react'

type Props = {
  label: string
  current: 'PRO' | 'FREE'
  landing?: boolean
}

const PaymentCard = ({ current, label, landing }: Props) => {
  return (
    <div
      className={cn(
        'overflow-hidden rounded border p-[1px]',
        label === current ? 'border-[#ff6b00]/70 bg-[#ff6b00]' : 'border-white/[0.055] bg-[#202020]'
      )}
    >
      <div
        className={cn(
          landing && 'radial--gradient--pink',
          'flex h-full flex-col rounded-[3px] bg-[#111] px-6 py-6'
        )}
      >
        {landing ? (
          <h2 className="text-2xl text-white">
            {label === 'PRO' && 'Premium Plan'}
            {label === 'FREE' && 'Standard'}
          </h2>
        ) : (
          <h2 className="text-2xl font-semibold text-white">
            {label === current
              ? 'Your Current Plan'
              : current === 'PRO'
              ? 'Downgrade'
              : 'Upgrade'}
          </h2>
        )}
        <p className="mb-3 mt-2 text-sm leading-6 text-zinc-600">
          This is what your plan covers for automations and AI features.
        </p>
        {label === 'PRO' ? (
          <span className="text-3xl font-black text-[#ff6b00]">
            Smart AI
          </span>
        ) : (
          <p className="mt-2 font-bold text-zinc-300">Standard</p>
        )}
        {label === 'PRO' ? (
          <p className="mb-3 mt-2 text-white">
            <b className="text-xl">$99</b>/month
          </p>
        ) : (
          <p className="mb-3 mt-2 text-xl text-white">Free</p>
        )}

        {PLANS[label === 'PRO' ? 1 : 0].features.map((i) => (
          <p
            key={i}
            className="mt-3 flex gap-2 text-sm text-zinc-300"
          >
            <CircleCheck className="h-5 w-5 shrink-0 text-[#ff6b00]" />
            {i}
          </p>
        ))}

        {landing ? (
          <Button
            className={cn(
              'mt-6 rounded',
              label === 'PRO'
                ? 'bg-[#ff6b00] text-black hover:bg-[#ff7a1a]'
                : 'bg-white/10 text-white hover:bg-white/15 hover:text-white'
            )}
          >
            {label === current
              ? 'Get Started'
              : current === 'PRO'
              ? 'Free'
              : 'Get Started'}
          </Button>
        ) : (
          <Button
            className="mt-6 rounded bg-white/10 text-white hover:bg-white/15 hover:text-white"
            disabled={label === current}
          >
            {label === current
              ? 'Active'
              : current === 'PRO'
              ? 'Downgrade'
              : 'Upgrade'}
          </Button>
        )}
      </div>
    </div>
  )
}

export default PaymentCard
