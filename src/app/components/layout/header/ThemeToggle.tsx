"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme()
  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="grid size-10 place-items-center rounded-lg border border-slate-900/10 text-slate-950 transition hover:bg-white dark:border-white/10 dark:text-white dark:hover:bg-white/10"
    >
      <Sun className="hidden size-5 dark:block" />
      <Moon className="size-5 dark:hidden" />
    </button>
  )
}

export default ThemeToggler
