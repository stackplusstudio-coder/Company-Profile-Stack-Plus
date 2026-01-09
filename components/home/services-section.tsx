"use client"

import Link from "next/link"
import { ArrowRight, Palette, Sparkles, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useI18n } from "@/lib/i18n/context"

const services = [
  {
    icon: Palette,
    key: "uiux" as const,
    slug: "ui-ux-design",
    color: "from-[#0066FF] to-[#00AAFF]",
  },
  {
    icon: Sparkles,
    key: "branding" as const,
    slug: "logo-branding",
    color: "from-[#0066FF] to-[#6699FF]",
  },
  {
    icon: Code,
    key: "webdev" as const,
    slug: "web-development",
    color: "from-[#0052CC] to-[#0066FF]",
  },
]

export function ServicesSection() {
  const { t } = useI18n()

  return (
    <section className="relative py-20 md:py-32">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0066FF]/[0.02] to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            {t.services.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">{t.services.subtitle}</p>
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {services.map((service) => {
            const serviceT = t.services[service.key]
            return (
              <Link
                key={service.key}
                href={`/services/${service.slug}`}
                className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 p-8 backdrop-blur-sm transition-all duration-300 hover:border-[#0066FF]/30 hover:shadow-xl hover:shadow-[#0066FF]/10"
              >
                {/* Glow effect on hover */}
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0066FF]/5 via-transparent to-transparent" />
                </div>

                {/* Icon */}
                <div
                  className={`inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${service.color} p-3 text-white shadow-lg`}
                >
                  <service.icon className="h-7 w-7" />
                </div>

                {/* Content */}
                <h3 className="mt-6 font-display text-xl font-semibold">{serviceT.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{serviceT.description}</p>

                {/* Arrow */}
                <div className="mt-6 flex items-center gap-2 text-sm font-medium text-[#0066FF]">
                  <span>{t.common.learnMore}</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            )
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button asChild variant="outline" className="gap-2 border-border/50 hover:border-[#0066FF]/50 bg-transparent">
            <Link href="/services">
              {t.services.viewAll}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
