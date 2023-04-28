'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

import navInfo from '../constants/navInfo'
import ControlPanel from './ControlPanel'
import Logo from './Logo'

export default function StickyHeader() {
  const [isTop, setIsTop] = useState(false)
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!headerRef.current) return
    const cacheRef = headerRef.current
    const observer = new IntersectionObserver(
      ([e]) => {
        setIsTop(e.intersectionRatio < 1)
      },
      {
        threshold: [1],
      },
    )
    observer.observe(cacheRef)

    // eslint-disable-next-line consistent-return
    return () => {
      observer.unobserve(cacheRef)
    }
  }, [headerRef])

  return (
    <header ref={headerRef} className={`w-full bg-white sticky top-[-1px] border border-gray-200 transition-[height] ${isTop ? 'h-[68px]' : 'h-[40px]'}`}>
      <div className="m-auto w-full h-full max-w-6xl px-2 flex items-center">
        {
          isTop ? (
            <>
              <Logo />
              <NavBar />
              <ControlPanel />
            </>
          )
            : <NavBar />
        }
      </div>
    </header>
  )
}

function NavBar() {
  const path = usePathname()
  const domain = path.split('/').length > 1 ? path.split('/')[1] : ''

  return (
    <ul className="space-x-8 flex items-center justify-center flex-1">
      {navInfo.map((info) => (
        <li key={info.name}>
          <Link
            href={info.link}
            className={`${domain === info.link.split('/')[1] ? 'text-orange-600' : 'text-stone-600'}
              text-lg
            `}
          >
            {info.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}
