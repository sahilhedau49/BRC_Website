import Image from 'next/image'
import { Open_Sans } from 'next/font/google'

const openSans = Open_Sans({
  subsets:["latin"],
})

// Landing page will go here
export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${openSans.className}`}
    >
      BUIDLing 🔨🔨🔨
    </main>
  )
}
