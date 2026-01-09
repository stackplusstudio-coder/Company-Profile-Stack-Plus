"use client"

import Link from "next/link"
import { ArrowRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useI18n } from "@/lib/i18n/context"

const portfolioItems = [
  {
    titleEn: "E-Commerce Platform Redesign",
    titleId: "Redesain Platform E-Commerce",
    descEn: "Complete overhaul of an e-commerce platform focusing on user experience.",
    descId: "Perombakan total platform e-commerce dengan fokus pada pengalaman pengguna.",
    client: "ShopMax",
    technologies: ["Next.js", "Tailwind CSS", "Stripe"],
    slug: "shopmax-redesign",
    image: "/modern-e-commerce-platform-dashboard.jpg",
  },
  {
    titleEn: "FinTech Mobile App",
    titleId: "Aplikasi Mobile FinTech",
    descEn: "Mobile banking application with focus on security and ease of use.",
    descId: "Aplikasi perbankan mobile dengan fokus pada keamanan dan kemudahan.",
    client: "NeoBank",
    technologies: ["React Native", "Node.js"],
    slug: "neobank-app",
    image: "/fintech-mobile-app.png",
  },
  {
    titleEn: "Corporate Brand Identity",
    titleId: "Identitas Merek Korporat",
    descEn: "Comprehensive brand identity for a multinational consulting firm.",
    descId: "Identitas merek komprehensif untuk perusahaan konsultan multinasional.",
    client: "Vertex Consulting",
    technologies: ["Figma", "Adobe CC"],
    slug: "vertex-branding",
    image: "/corporate-brand-identity-design.jpg",
  },
]

export function PortfolioPreview() {
  const { t, locale } = useI18n()

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
            {t.portfolio.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">{t.portfolio.subtitle}</p>
        </div>

        {/* Portfolio Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item) => (
            <Link
              key={item.slug}
              href={`/portfolio/${item.slug}`}
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card transition-all duration-300 hover:border-[#0066FF]/30 hover:shadow-xl hover:shadow-[#0066FF]/10"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={locale === "en" ? item.titleEn : item.titleId}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

                {/* Overlay on hover */}
                <div className="absolute inset-0 flex items-center justify-center bg-[#0066FF]/90 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex items-center gap-2 text-white">
                    <span className="font-medium">{t.portfolio.viewProject}</span>
                    <ExternalLink className="h-4 w-4" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="text-sm text-muted-foreground">{item.client}</div>
                <h3 className="mt-2 font-display text-lg font-semibold">
                  {locale === "en" ? item.titleEn : item.titleId}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                  {locale === "en" ? item.descEn : item.descId}
                </p>

                {/* Technologies */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.technologies.slice(0, 3).map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-[#0066FF]/10 text-[#0066FF] hover:bg-[#0066FF]/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button asChild variant="outline" className="gap-2 border-border/50 hover:border-[#0066FF]/50 bg-transparent">
            <Link href="/portfolio">
              {t.portfolio.viewAll}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
