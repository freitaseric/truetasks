'use client'

import { ThemeSwitcher } from '@/components'
import { useI18n } from '@/locales/client'

export default function Home() {
  const t = useI18n()

  return (
    <div className="flex flex-1 flex-col justify-center items-center h-screen w-screen">
      <h1 className="text-xl font-black">{t('title')}</h1>
      <h2 className="text-zinc-600 dark:text-zinc-300 font-semibold">
        {t('description')}
      </h2>
      <ThemeSwitcher />
    </div>
  )
}
