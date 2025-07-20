"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <div 
      onClick={toggleTheme}
      className="relative h-full w-full text-neutral-600 dark:text-neutral-300 hover:text-neutral-800 dark:hover:text-neutral-100 transition-colors cursor-pointer flex items-center justify-center"
    >
      <Sun className="h-full w-full rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute inset-0 h-full w-full rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </div>
  )
}