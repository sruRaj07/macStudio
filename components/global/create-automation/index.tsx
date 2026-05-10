'use client'

import { Button } from '@/components/ui/button'
import React, { useMemo } from 'react'
import Loader from '../loader'
import { useCreateAutomation } from '@/hooks/use-automations'
import { v4 } from 'uuid'
import { Plus } from 'lucide-react'

type Props = {}

const CreateAutomation = (props: Props) => {
  const mutationId = useMemo(() => v4(), [])

  console.log(mutationId)
  const { isPending, mutate } = useCreateAutomation(mutationId)

  return (
    <Button
      className="h-11 rounded bg-[#ff6b00] px-8 text-base font-medium uppercase text-black shadow-[0_0_28px_rgba(255,107,0,0.34)] hover:bg-[#ff7a14]"
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
        <Plus className="h-5 w-5" />
        <p className="hidden lg:inline">Create an Automation</p>
      </Loader>
    </Button>
  )
}

export default CreateAutomation
