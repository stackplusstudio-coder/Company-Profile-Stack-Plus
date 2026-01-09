"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useI18n } from "@/lib/i18n/context"

export function CTASection() {
  const { locale } = useI18n()

  const content = {
    en: {
      title: "Ready to Transform Your Digital Presence?",
      subtitle: "Let's build something amazing together",
      cta: "Get Started Today",
    },
    id: {
      title: "Siap Mentransformasi Kehadiran Digital Anda?",
      subtitle: "Mari membangun sesuatu yang luar biasa bersama",
      cta: "Mulai Hari Ini",
    },
  }

  const t = content[locale]

  return (
    <section className="relative py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0066FF] to-[#0052CC] p-12 md:p-16 lg:p-20">
          {/* Background effects */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,white/5_1px,transparent_1px),linear-gradient(to_bottom,white/5_1px,transparent_1px)] bg-[size:40px_40px]" />
            <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/10 blur-[80px]" />
            <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-white/10 blur-[60px]" />
          </div>

          {/* Content */}
          <div className="relative mx-auto max-w-2xl text-center">
            <h2 className="font-display text-balance text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
              {t.title}
            </h2>
            <p className="mt-4 text-lg text-white/80">{t.subtitle}</p>

            <Button
              asChild
              size="lg"
              className="group mt-8 h-12 gap-2 bg-white px-8 text-[#0066FF] shadow-xl hover:bg-white/90"
            >
              <Link href="/contact">
                {t.cta}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
