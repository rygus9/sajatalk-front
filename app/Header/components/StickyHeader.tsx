'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

import navInfo from '../constants/navInfo'

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
    <header ref={headerRef} className="w-full h-[20px] bg-gray-500 sticky top-[-1px]">
      <div className="m-auto w-full max-w-6xl px-2 flex items-center">
        {isTop && (
        <div>
          로그
        </div>
        )}
        <ul className="space-x-2 flex items-center justify-center flex-1">
          {navInfo.map((info) => (
            <li key={info.name}>
              <Link href={info.link}>
                {info.name}
              </Link>
            </li>
          ))}
        </ul>
        {isTop && (
        <div>
          <button type="button">로그인</button>
        </div>
        )}
      </div>
    </header>
  )
}
