'use client'

import { Button } from '@/components/ui/button'
import React, { useMemo } from 'react'
import Loader from '../loader'
import { useCreateAutomation } from '@/hooks/use-automations'
import { v4 } from 'uuid'
import { SquarePlus } from 'lucide-react'

type Props = {}

const CreateAutomation = (props: Props) => {
  const mutationId = useMemo(() => v4(), [])
  const { isPending, mutate } = useCreateAutomation(mutationId)

  return (
    <Button
      className="h-13 rounded-xl bg-[#F5A623] px-8 text-base font-black text-black shadow-[0_0_28px_rgba(245,166,35,0.24)] hover:bg-[#f8b541]"
      onClick={() =>
        mutate({
          name: 'Untitled',
          id: mutationId,
          createdAt: new Date(),
          keywords: [],
        })
      }
    >
      <Loader state={isPending}>
        <SquarePlus className="h-5 w-5" />
        <p className="hidden lg:inline">New Automation</p>
      </Loader>
    </Button>
  )
}

export default CreateAutomation
