import { LatteIllustration } from '@/components/icons/CoffeeIllustrations'

export function About() {
  return (
    <section id="story" className="bg-muted/40 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-2 md:items-center md:gap-16">
        <div className="flex aspect-[4/3] w-full items-center justify-center rounded-3xl bg-gradient-to-br from-primary/10 via-accent/10 to-muted shadow-lg">
          <LatteIllustration className="w-40 drop-shadow-lg sm:w-48" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-primary sm:text-4xl">
            Our story
          </h2>
          <p className="mt-5 text-muted-foreground">
            Brew Lane opened in 2019 with one goal: a coffee shop where the
            beans are roasted with care and everyone feels like a regular.
            We source directly from small farms, roast in-house every week,
            and bake our pastries fresh each morning.
          </p>
          <p className="mt-4 text-muted-foreground">
            Whether you're grabbing a cup on the way to work or settling in
            for the afternoon, we'd love to have you.
          </p>
        </div>
      </div>
    </section>
  )
}
