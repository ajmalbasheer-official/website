import { Coffee, Menu as MenuIcon, X } from 'lucide-react'
import { useState } from 'react'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils'

const navItems = [
  { title: 'Menu', href: '#menu' },
  { title: 'Our Story', href: '#story' },
  { title: 'Visit Us', href: '#visit' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2 font-display text-lg font-semibold text-primary">
          <Coffee className="h-6 w-6" />
          Brew Lane
        </a>

        <nav className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              {navItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  <NavigationMenuLink
                    href={item.href}
                    className={navigationMenuTriggerStyle()}
                  >
                    {item.title}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        <a
          href="#visit"
          className="hidden rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition hover:bg-primary/90 md:inline-block"
        >
          Order Ahead
        </a>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-primary md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>

      <div
        className={cn(
          'overflow-hidden border-t border-border/60 bg-background md:hidden',
          open ? 'max-h-64' : 'max-h-0 border-t-0',
          'transition-[max-height] duration-300 ease-in-out',
        )}
      >
        <nav className="flex flex-col gap-1 px-4 py-3">
          {navItems.map((item) => (
            <a
              key={item.title}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
            >
              {item.title}
            </a>
          ))}
          <a
            href="#visit"
            onClick={() => setOpen(false)}
            className="mt-1 rounded-full bg-primary px-3 py-2 text-center text-sm font-medium text-primary-foreground"
          >
            Order Ahead
          </a>
        </nav>
      </div>
    </header>
  )
}
