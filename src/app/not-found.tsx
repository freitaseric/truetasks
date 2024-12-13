'use client'

import { Button } from '@/components/ui/button'
import { HomeIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function NotFound() {
  const router = useRouter()

  return (
    <div className="flex flex-1 flex-col justify-center items-center h-screen w-screen gap-8">
      <section className="flex flex-col justify-center items-center">
        <h2 className="text-lg font-semibold dark:text-zinc-400 text-zinc-600">
          Not Found
        </h2>
        <h1 className="text-xl font-bold">404 - Error</h1>
        <p className="font-mono">Could not find requested resource</p>
      </section>
      <Button variant="outline" onClick={() => router.push('/')}>
        <HomeIcon />
        Return to Home
      </Button>
    </div>
  )
}
