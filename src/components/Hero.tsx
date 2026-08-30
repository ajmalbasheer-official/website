import { cn } from '@/lib/utils'
import {
  BeansIllustration,
  CroissantIllustration,
  LatteIllustration,
  PourOverIllustration,
} from '@/components/icons/CoffeeIllustrations'

const heroImages = [
  {
    Illustration: LatteIllustration,
    alt: 'Illustration of a latte',
    className:
      'w-24 sm:w-32 md:w-40 top-6 left-2 sm:left-8 md:top-16 md:left-12 drop-shadow-xl animate-float',
  },
  {
    Illustration: BeansIllustration,
    alt: 'Illustration of scattered coffee beans',
    className:
      'w-20 sm:w-28 md:w-32 top-4 right-2 sm:right-10 md:top-10 md:right-16 drop-shadow-xl animate-float',
  },
  {
    Illustration: CroissantIllustration,
    alt: 'Illustration of a croissant',
    className:
      'w-24 sm:w-32 md:w-40 bottom-6 right-2 sm:right-10 md:bottom-14 md:right-20 drop-shadow-xl animate-float',
  },
  {
    Illustration: PourOverIllustration,
    alt: 'Illustration of pour-over coffee brewing',
    className:
      'hidden sm:block w-24 md:w-36 bottom-4 left-2 sm:left-10 md:bottom-10 md:left-16 drop-shadow-xl animate-float',
  },
]

function Swirls() {
  return (
    <>
      <svg
        className="absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3 text-accent/10"
        width="600"
        height="600"
        viewBox="0 0 600 600"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M515.266 181.33C377.943 51.564 128.537 136.256 50.8123 293.565C-26.9127 450.874 125.728 600 125.728 600"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      <svg
        className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 text-accent/10"
        width="700"
        height="700"
        viewBox="0 0 700 700"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M26.8838 528.274C193.934 689.816 480.051 637.218 594.397 451.983C708.742 266.748 543.953 2.22235 543.953 2.22235"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </>
  )
}

export function Hero() {
  return (
    <section
      id="top"
      className={cn(
        'relative flex min-h-[70vh] w-full items-center justify-center overflow-hidden bg-muted/40 py-24 md:py-32',
      )}
    >
      <div className="absolute inset-0 z-0">
        <Swirls />
      </div>

      <div className="absolute inset-0 z-10">
        {heroImages.map(({ Illustration, alt, className }) => (
          <Illustration
            key={alt}
            aria-label={alt}
            className={cn('absolute', className)}
          />
        ))}
      </div>

      <div className="relative z-20 mx-auto max-w-2xl px-4 text-center">
        <span className="mb-4 inline-block rounded-full bg-accent/10 px-4 py-1 text-sm font-medium text-accent">
          Now roasting daily, right on Brew Lane
        </span>
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl">
          Slow mornings start with good coffee
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Small-batch roasted beans, fresh pastries, and a warm neighborhood
          spot to sit, work, or catch up with a friend.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#menu"
            className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition hover:bg-primary/90"
          >
            View Menu
          </a>
          <a
            href="#visit"
            className="rounded-full border border-primary/30 px-6 py-3 text-sm font-medium text-primary transition hover:bg-primary/5"
          >
            Find Us
          </a>
        </div>
      </div>
    </section>
  )
}
