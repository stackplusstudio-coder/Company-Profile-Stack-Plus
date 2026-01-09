"use client"

import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useI18n } from "@/lib/i18n/context"

export function HeroSection() {
  const { t } = useI18n()

  return (
    <section className="relative overflow-hidden py-20 md:py-32 lg:py-40">
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(0.55_0.24_255/0.03)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.55_0.24_255/0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

        {/* Gradient orbs */}
        <div className="absolute left-1/4 top-1/4 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[oklch(0.55_0.24_255/0.15)] blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] translate-x-1/2 translate-y-1/2 rounded-full bg-[oklch(0.6_0.2_255/0.1)] blur-[80px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/50 bg-card/50 px-4 py-2 text-sm backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-[#0066FF]" />
            <span className="text-muted-foreground">Digital Agency</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-balance text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl xl:text-7xl">
            <span className="bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent">
              {t.hero.title.split(" ").slice(0, -1).join(" ")}
            </span>{" "}
            <span className="bg-gradient-to-r from-[#0066FF] to-[#00AAFF] bg-clip-text text-transparent">
              {t.hero.title.split(" ").slice(-1)}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mt-6 max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground md:text-xl">
            {t.hero.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="group h-12 gap-2 bg-[#0066FF] px-8 text-white shadow-lg shadow-[#0066FF]/25 hover:bg-[#0052CC] hover:shadow-xl hover:shadow-[#0066FF]/30"
            >
              <Link href="/contact">
                {t.hero.cta}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 gap-2 border-border/50 px-8 backdrop-blur-sm hover:border-[#0066FF]/50 hover:bg-[#0066FF]/5 bg-transparent"
            >
              <Link href="/portfolio">{t.hero.ctaSecondary}</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { value: "100+", label: "Projects Delivered" },
              { value: "50+", label: "Happy Clients" },
              { value: "5+", label: "Years Experience" },
              { value: "15+", label: "Team Members" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-3xl font-bold text-[#0066FF] md:text-4xl">{stat.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
