interface PageHeaderProps {
  title: string
  subtitle?: string
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden border-b border-border/40 bg-gradient-to-b from-[#0066FF]/5 to-transparent py-20 md:py-28">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(0.55_0.24_255/0.03)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.55_0.24_255/0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-display text-balance text-4xl font-bold tracking-tight md:text-5xl">{title}</h1>
          {subtitle && <p className="mt-4 text-lg text-muted-foreground">{subtitle}</p>}
        </div>
      </div>
    </section>
  )
}
