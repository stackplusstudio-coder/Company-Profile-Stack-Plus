"use client"

import Link from "next/link"
import { ArrowRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useI18n } from "@/lib/i18n/context"

const portfolioItems = [
  {
    titleEn: "Arsicon Brand Rebranding",
    titleId: "Rebranding Arsicon",
    descEn:
      "A comprehensive brand rebranding project for Arsicon focusing on strengthening brand identity as a Sharia-compliant interior and contractor company. The project included logo redesign, visual identity development, marketing assets, and brand consistency across digital and print media.",
    descId:
      "Proyek rebranding menyeluruh untuk Arsicon yang berfokus pada penguatan identitas merek sebagai perusahaan interior dan kontraktor berbasis syariah. Proyek ini mencakup redesain logo, pengembangan identitas visual, aset pemasaran, serta konsistensi brand pada media digital dan cetak.",
    client: "Arsicon",
    technologies: ["Adobe Illustrator", "Adobe Photoshop", "Brand Identity System"],
    slug: "arsicon-rebranding",
    image: "/ARSICON.png",
    url: "https://arsicon.com/",
  },
  {
    titleEn: "Hexavue Lab",
    titleId: "Hexavue Lab",
    descEn:
      "Hexavue Lab is a creative digital agency specializing in website development and UI/UX design. The studio helps brands and businesses craft intuitive, user-centered digital experiences that blend aesthetics with functionality — ensuring every product not only looks good but works effectively for its users.",
    descId:
      "Hexavue Lab adalah agensi digital kreatif yang berfokus pada pengembangan website dan desain UI/UX. Studio ini membantu brand dan bisnis menciptakan pengalaman digital yang intuitif dan berorientasi pada pengguna, memadukan estetika dengan fungsionalitas agar setiap produk tidak hanya menarik secara visual, tetapi juga bekerja secara efektif.",
    client: "Hexavue Lab",
    technologies: ["Next.js", "React", "Tailwind CSS", "Figma"],
    slug: "hexavue-lab",
    image: "/Hexavue.png",
    url: "https://hexavue.framer.ai",
  },
  {
    titleEn: "Creative Portfolio",
    titleId: "Portofolio Kreatif",
    descEn:
      "A modern, responsive portfolio website developed for Anastasia Prameswari to showcase her photography and videography through a visually immersive interface, highlighting authentic visual storytelling, creativity, technical precision, and professional quality across every project.",
    descId:
      "Website portofolio modern dan responsif yang dikembangkan untuk Anastasia Prameswari guna menampilkan karya fotografi dan videografi melalui antarmuka visual yang imersif, menonjolkan storytelling visual yang autentik, kreativitas, presisi teknis, serta kualitas profesional di setiap proyek.",
    client: "Anastasia Prameswari",
    technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    slug: "creative-portfolio",
    image: "/photograph.png",
    url: "https://nastasiaapw.framer.website",
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
