'use client'
import React, { useEffect, useState, Suspense } from 'react'
import { HeaderItem } from '../../../../types/menu'
import { usePathname, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { analyticsEvents, trackEvent } from '@/lib/analytics'

const OFFSET = 80 // Adjust this value based on your fixed header height

// Hook to manage the active link and apply offset
const useActiveLink = (setActiveLink: (link: string) => void) => {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const updateActiveLink = () => {
      const fullPath = window.location.hash
        ? `${pathname}${window.location.hash}`
        : pathname
      setActiveLink(fullPath)
    }

    const handleScrollOffset = () => {
      if (window.location.hash) {
        const id = window.location.hash.substring(1)
        const element = document.getElementById(id)
        if (element) {
          setTimeout(() => {
            const elementPosition =
              element.getBoundingClientRect().top + window.scrollY
            window.scrollTo({
              top: elementPosition - OFFSET,
              behavior: 'smooth',
            })
          }, 0)
        }
      }
    }

    updateActiveLink()
    handleScrollOffset()

    window.addEventListener('hashchange', updateActiveLink)
    window.addEventListener('hashchange', handleScrollOffset)

    return () => {
      window.removeEventListener('hashchange', updateActiveLink)
      window.removeEventListener('hashchange', handleScrollOffset)
    }
  }, [pathname, searchParams, setActiveLink])
}

// HeaderLink component
const HeaderLinkContent: React.FC<{ item: HeaderItem }> = ({ item }) => {
  const [activeLink, setActiveLink] = useState('')

  useActiveLink(setActiveLink)

  const handleClick = () => {
    if (item.href === '/contact') {
      trackEvent(analyticsEvents.contactClick, {
        location: 'primary_navigation',
      })
    }
  }

  return (
    <li>
      <Link
        href={item.href}
        onClick={handleClick}
        className={`block rounded-lg px-4 py-2 text-sm font-semibold transition hover:bg-white hover:text-slate-950 hover:shadow-header_shadow dark:hover:bg-white dark:hover:text-slate-950 
                    ${
                      activeLink === item.href
                        ? 'bg-white text-slate-950 shadow-header_shadow dark:bg-white dark:text-slate-950'
                        : 'text-slate-700 dark:text-slate-200'
                    }`}>
        {item.label}
      </Link>
    </li>
  )
}

// Wrap in Suspense
const HeaderLink: React.FC<{ item: HeaderItem }> = ({ item }) => (
  <Suspense fallback={null}>
    <HeaderLinkContent item={item} />
  </Suspense>
)

export default HeaderLink
