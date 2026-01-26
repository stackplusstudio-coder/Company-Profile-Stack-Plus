"use client"

import { Target, Layers, TrendingUp, Cpu, Handshake } from "lucide-react"
import { useI18n } from "@/lib/i18n/context"

const features = [
  {
    icon: Target,
    titleEn: "Product-Driven Approach",
    titleId: "Pendekatan Berbasis Produk",
    descEn:
      "Every design and development decision is driven by user needs and business goals—not visual assumptions alone.",
    descId:
      "Setiap keputusan desain dan pengembangan didasarkan pada kebutuhan pengguna dan tujuan bisnis, bukan sekadar asumsi visual.",
  },
  {
    icon: Layers,
    titleEn: "Design × Development in One Stack",
    titleId: "Desain × Development dalam Satu Stack",
    descEn:
      "UI/UX, branding, web & app development, SEO optimization, and AI chatbots are integrated into a single workflow to deliver consistent and scalable results.",
    descId:
      "UI/UX, branding, pengembangan web & aplikasi, optimasi SEO, dan AI chatbot terintegrasi dalam satu alur kerja untuk hasil yang konsisten dan scalable.",
  },
  {
    icon: TrendingUp,
    titleEn: "Business-Oriented UX",
    titleId: "UX Berorientasi Bisnis",
    descEn:
      "We focus on clear user flows, conversion, and experiences that actively support business growth.",
    descId:
      "Kami fokus pada user flow yang jelas, konversi, dan pengalaman yang secara aktif mendukung pertumbuhan bisnis.",
  },
  {
    icon: Cpu,
    titleEn: "Ready for Modern Digital Needs",
    titleId: "Siap untuk Kebutuhan Digital Modern",
    descEn:
      "Our solutions are built to meet today’s digital demands: performance, scalability, and trust.",
    descId:
      "Solusi kami dirancang untuk memenuhi kebutuhan digital masa kini: performa, skalabilitas, dan kepercayaan.",
  },
  {
    icon: Handshake,
    titleEn: "Partner, Not Just Vendor",
    titleId: "Partner, Bukan Sekadar Vendor",
    descEn:
      "We work as strategic partners who understand business context—not just project executors.",
    descId:
      "Kami bekerja sebagai partner strategis yang memahami konteks bisnis, bukan sekadar pelaksana proyek.",
  },
]

export function WhyChooseSection() {
  const { t, locale } = useI18n()

  return (
    <section className="relative py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="font-display text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              {t.about.whyChoose}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">{t.about.whyChooseSubtitle}</p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature.titleEn} className="group">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0066FF]/10 text-[#0066FF] transition-colors group-hover:bg-[#0066FF] group-hover:text-white">
                      <feature.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{locale === "en" ? feature.titleEn : feature.titleId}</h3>
                      <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                        {locale === "en" ? feature.descEn : feature.descId}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative aspect-square overflow-hidden rounded-3xl border border-border/50 bg-card">
              {/* Decorative elements */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(0.55_0.24_255/0.05)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.55_0.24_255/0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
              <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0066FF]/20 blur-[60px]" />

              {/* Floating cards */}
              <div className="absolute left-8 top-12 animate-float rounded-xl border border-border/50 bg-background/80 p-4 shadow-xl backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-[#0066FF]" />
                  <div>
                    <div className="h-3 w-20 rounded bg-foreground/20" />
                    <div className="mt-2 h-2 w-14 rounded bg-muted-foreground/20" />
                  </div>
                </div>
              </div>

              <div className="animation-delay-200 absolute bottom-20 right-8 animate-float rounded-xl border border-border/50 bg-background/80 p-4 shadow-xl backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/20 text-green-500">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="h-3 w-24 rounded bg-foreground/20" />
                    <div className="mt-2 h-2 w-16 rounded bg-muted-foreground/20" />
                  </div>
                </div>
              </div>

              <div className="animation-delay-400 absolute right-12 top-1/3 animate-float rounded-xl border border-border/50 bg-background/80 p-4 shadow-xl backdrop-blur-sm">
                <div className="h-8 w-32 rounded bg-gradient-to-r from-[#0066FF] to-[#00AAFF]" />
              </div>

              {/* Center logo */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <img
                  src="/images/primary-20logo-202-20png.png"
                  alt="StackPlus"
                  className="h-24 w-24 object-contain dark:hidden"
                />
                <img
                  src="/images/primary-20logo-201-20png.png"
                  alt="StackPlus"
                  className="hidden h-24 w-24 object-contain dark:block"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
