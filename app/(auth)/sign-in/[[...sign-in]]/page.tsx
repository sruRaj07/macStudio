import { SignIn } from '@clerk/nextjs'
import Link from 'next/link'

const appearance = {
  elements: {
    rootBox: 'w-full mac-clerk-root',
    card: 'w-full shadow-none bg-transparent border-0 p-0',
    header: 'hidden',
    headerTitle: 'hidden',
    headerSubtitle: 'hidden',
    socialButtons: 'w-full',
    socialButtonsBlockButton:
      'h-14 w-full rounded-md border-0 bg-[#ff6b00] text-[#19120c] shadow-[0_0_34px_rgba(255,107,0,0.28)] hover:bg-[#ff7a14] transition',
    socialButtonsBlockButtonText: 'text-base font-medium text-[#19120c]',
    socialButtonsProviderIcon: 'text-[#19120c]',
    dividerRow: 'my-12',
    dividerLine: 'bg-white/[0.07]',
    dividerText: 'px-4 text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-700',
    form: 'space-y-6',
    formField: 'space-y-3',
    formFieldLabel: 'text-base font-medium text-[#d4b5a7]',
    formFieldInput:
      'h-14 rounded-md border border-[#3a2419] bg-[#0b0b0b] px-4 text-base text-white placeholder:text-zinc-600 focus:border-[#ff6b00] focus:ring-0',
    formFieldInputShowPasswordButton: 'text-zinc-600 hover:text-[#ff6b00]',
    formFieldAction: 'text-xs font-medium text-[#ff6b00] hover:text-[#ff8b36]',
    formButtonPrimary:
      'mt-6 h-14 w-full rounded-md border border-[#ff6b00] bg-transparent text-base font-medium text-white shadow-none hover:bg-[#ff6b00] hover:text-black transition',
    formFieldInput__checkbox:
      'h-4 w-4 rounded-none border-[#3a2419] bg-transparent text-[#ff6b00] focus:ring-[#ff6b00]',
    formFieldLabel__checkbox: 'text-sm font-medium text-[#d4b5a7]',
    footer: 'hidden',
    footerAction: 'hidden',
    formResendCodeLink: 'text-[#ff6b00]',
    identityPreviewText: 'text-white',
    identityPreviewEditButton: 'text-[#ff6b00]',
    alert: 'border border-[#3a2419] bg-[#1b120d] text-[#f0c1a8]',
  },
}

export default function Page() {
  return (
    <div>
      <div className="mb-12">
        <h1 className="text-lg font-medium text-white">Welcome Back</h1>
        <p className="mt-3 text-base text-[#e2c0b1]">
          Enter your credentials to manage your digital empire.
        </p>
      </div>

      <div className="mb-12 grid h-10 grid-cols-2 rounded border border-[#32231c] bg-[#171514] p-1">
        <Link
          href="/sign-in"
          className="flex items-center justify-center rounded-sm bg-[#2a2a2a] text-xs font-black tracking-[0.14em] text-[#f0c1a8]"
        >
          Sign In
        </Link>
        <Link
          href="/sign-up"
          className="flex items-center justify-center rounded-sm text-xs font-black tracking-[0.14em] text-[#f0c1a8]"
        >
          Sign Up
        </Link>
      </div>

      <SignIn
        appearance={appearance}
        signUpUrl="/sign-up"
        fallbackRedirectUrl="/dashboard"
        forceRedirectUrl="/dashboard"
      />

      <p className="mx-auto mt-12 max-w-sm text-center text-sm leading-6 text-zinc-700">
        By continuing, you agree to our{' '}
        <Link href="/pricing" className="text-[#d4b5a7] underline underline-offset-4">
          Terms of Service
        </Link>{' '}
        and{' '}
        <Link href="/pricing" className="text-[#d4b5a7] underline underline-offset-4">
          Privacy Policy
        </Link>
        .
      </p>
    </div>
  )
}
