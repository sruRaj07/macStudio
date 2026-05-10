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
        label !== current
          ? 'imate-card-muted'
          : 'orange-gradient',
        'p-[1px] rounded-[1.9rem] overflow-hidden'
      )}
    >
      <div
        className={cn(
          landing && 'radial--gradient--pink',
          'flex flex-col rounded-[1.85rem] px-6 py-6 bg-[#0d0d0d] h-full'
        )}
      >
        {landing ? (
          <h2 className="text-2xl text-white">
            {label === 'PRO' && 'Premium Plan'}
            {label === 'FREE' && 'Standard'}
          </h2>
        ) : (
          <h2 className="text-2xl text-white">
            {label === current
              ? 'Your Current Plan'
              : current === 'PRO'
              ? 'Downgrade'
              : 'Upgrade'}
          </h2>
        )}
        <p className="text-zinc-400 text-sm mb-2">
          This is what your plan covers for automations and Ai features
        </p>
        {label === 'PRO' ? (
          <span className="bg-gradient-to-r text-3xl from-[#ef7d32] via-[#ff974f] font-bold to-[#ffb36a] bg-clip-text text-transparent">
            Smart AI
          </span>
        ) : (
          <p className="font-bold mt-2 text-zinc-300">Standard</p>
        )}
        {label === 'PRO' ? (
          <p className="mb-2 text-white">
            <b className="text-xl">$99</b>/month
          </p>
        ) : (
          <p className="text-xl mb-2 text-white">Free</p>
        )}

        {PLANS[label === 'PRO' ? 1 : 0].features.map((i) => (
          <p
            key={i}
            className="mt-2 text-zinc-300 flex gap-2 "
          >
            <CircleCheck className="text-[#ef7d32]" />
            {i}
          </p>
        ))}

        {landing ? (
          <Button
            className={cn(
              'rounded-full mt-6',
              label === 'PRO'
                ? 'orange-gradient text-white'
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
            className="rounded-full mt-6 bg-white/10 text-white hover:bg-white/15 hover:text-white"
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
