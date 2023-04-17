import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <h1 className="text-white text-5xl bg-black p-8">Hello</h1>
    </main>
  )
}
