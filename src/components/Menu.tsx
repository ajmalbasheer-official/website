const menuItems = [
  {
    name: 'Pour-Over',
    description: 'Single-origin beans, brewed fresh by the cup.',
    price: '$4.50',
  },
  {
    name: 'Oat Milk Latte',
    description: 'Double espresso, steamed oat milk, light foam.',
    price: '$5.25',
  },
  {
    name: 'Cold Brew',
    description: 'Steeped 18 hours, served over ice.',
    price: '$4.75',
  },
  {
    name: 'Butter Croissant',
    description: 'Baked fresh every morning, all-butter laminated dough.',
    price: '$3.75',
  },
  {
    name: 'Cinnamon Roll',
    description: 'House-made, finished with brown butter icing.',
    price: '$4.25',
  },
  {
    name: 'Avocado Toast',
    description: 'Sourdough, chili flake, lemon, flaky salt.',
    price: '$8.50',
  },
]

export function Menu() {
  return (
    <section id="menu" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="text-3xl font-bold text-primary sm:text-4xl">
          From the counter
        </h2>
        <p className="mt-4 text-muted-foreground">
          A few of our favorites — the full menu changes with the season.
        </p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {menuItems.map((item) => (
          <div
            key={item.name}
            className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:shadow-md"
          >
            <div className="flex items-baseline justify-between gap-3">
              <h3 className="font-display text-lg font-semibold text-card-foreground">
                {item.name}
              </h3>
              <span className="whitespace-nowrap font-medium text-accent">
                {item.price}
              </span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
