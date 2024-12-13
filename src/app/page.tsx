import { ThemeSwitcher } from '@/components'

export default function Home() {
  return (
    <main className="flex flex-1 flex-col justify-center items-center h-screen w-screen">
      <h1 className="text-xl font-black">Hello, world!</h1>
      <h2 className="text-zinc-600 dark:text-zinc-300 font-semibold">
        Website under development...s
      </h2>
      <ThemeSwitcher />
    </main>
  )
}
