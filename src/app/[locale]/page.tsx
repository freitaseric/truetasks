import { ThemeSwitcher } from '@/components'
import { useTranslations } from 'next-intl'

export default function Home() {
  const t = useTranslations('HomePage')

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
