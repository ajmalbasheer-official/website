import { Coffee, Instagram, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer id="visit" className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 font-display text-lg font-semibold text-primary">
            <Coffee className="h-5 w-5" />
            Brew Lane
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Small-batch coffee &amp; pastries, made daily.
          </p>
        </div>

        <div>
          <h3 className="font-medium text-foreground">Visit us</h3>
          <p className="mt-3 flex items-start gap-2 text-sm text-muted-foreground">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
            128 Brew Lane, Portland, OR
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Mon–Fri: 7am – 5pm
            <br />
            Sat–Sun: 8am – 4pm
          </p>
        </div>

        <div>
          <h3 className="font-medium text-foreground">Say hello</h3>
          <a
            href="mailto:hello@brewlane.coffee"
            className="mt-3 block text-sm text-muted-foreground hover:text-primary"
          >
            hello@brewlane.coffee
          </a>
          <a
            href="#"
            className="mt-2 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
          >
            <Instagram className="h-4 w-4" />
            @brewlanecoffee
          </a>
        </div>
      </div>

      <div className="border-t border-border/60 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Brew Lane Coffee Co. All rights reserved.
      </div>
    </footer>
  )
}
