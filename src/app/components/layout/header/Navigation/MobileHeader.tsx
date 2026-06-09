

import Link from "next/link"
import { HeaderItem } from "../../../../types/menu"
import { analyticsEvents, trackEvent } from "@/lib/analytics"

const MobileHeader: React.FC<{
  item: HeaderItem
  onNavigate?: () => void
}> = ({ item, onNavigate }) => {
  const handleClick = () => {
    if (item.href === "/contact") {
      trackEvent(analyticsEvents.contactClick, {
        location: "mobile_navigation",
      })
    }

    onNavigate?.()
  }

  return (
    <li>
      <Link
        href={item.href}
        onClick={handleClick}
        className="block rounded-lg px-4 py-3 text-base font-semibold text-slate-800 transition hover:bg-slate-100 dark:text-white dark:hover:bg-white/10"
      >
        {item.label}
      </Link>
    </li>
  )
}

export default MobileHeader
