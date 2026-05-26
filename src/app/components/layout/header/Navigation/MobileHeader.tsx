

import Link from "next/link"
import { HeaderItem } from "../../../../types/menu"

const MobileHeader: React.FC<{
  item: HeaderItem
  onNavigate?: () => void
}> = ({ item, onNavigate }) => {
  return (
    <li>
      <Link
        href={item.href}
        onClick={onNavigate}
        className="block rounded-lg px-4 py-3 text-base font-semibold text-slate-800 transition hover:bg-slate-100 dark:text-white dark:hover:bg-white/10"
      >
        {item.label}
      </Link>
    </li>
  )
}

export default MobileHeader
