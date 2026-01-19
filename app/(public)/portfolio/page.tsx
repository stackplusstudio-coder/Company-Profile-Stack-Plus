"use client"

import Link from "next/link"
import { PageHeader } from "@/components/ui/page-header"
import { useI18n } from "@/lib/i18n/context"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

const portfolioItems = [
  {
    titleEn: "Arsicon Brand Rebranding",
    titleId: "Rebranding Arsicon",
    descEn:
      "A comprehensive brand rebranding project for Arsicon focusing on strengthening brand identity as a Sharia-compliant interior and contractor company. The project included logo redesign, visual identity development, marketing assets, and brand consistency across digital and print media.",
    descId:
      "Proyek rebranding menyeluruh untuk Arsicon yang berfokus pada penguatan identitas merek sebagai perusahaan interior dan kontraktor berbasis syariah. Proyek ini mencakup redesain logo, pengembangan identitas visual, aset pemasaran, serta konsistensi brand pada media digital dan cetak.",
    client: "Arsicon",
    category: "Branding",
    technologies: ["Adobe Illustrator", "Adobe Photoshop", "Brand Identity System"],
    slug: "arsicon-rebranding",
    image: "/ARSICON.png",
  },
  {
    titleEn: "Initial Branding for Sket Creative",
    titleId: "Membuat Branding Awal untuk Sket Creative",
    descEn:
      "An initial branding project for Sket Creative focused on establishing a strong and modern visual identity. The project included logo design, color palette development, typography selection, and basic brand applications to ensure consistency across digital and print media.",
    descId:
      "Proyek pembuatan branding awal untuk Sket Creative yang berfokus pada pembentukan identitas visual yang kuat dan modern. Proyek ini mencakup desain logo, pengembangan palet warna, pemilihan tipografi, serta penerapan dasar brand untuk memastikan konsistensi pada media digital dan cetak.",
    client: "Sket Creative",
    category: "Branding",
    technologies: ["Adobe Illustrator", "Adobe Photoshop", "Brand Identity Design"],
    slug: "sket-creative-initial-branding",
    image: "/SKET.png",
  },
  {
    titleEn: "FinTech Mobile App",
    titleId: "Aplikasi Mobile FinTech",
    descEn:
      "Design and development of a mobile banking application with focus on security and ease of use. Features include biometric authentication, real-time transactions, and investment tracking.",
    descId:
      "Desain dan pengembangan aplikasi perbankan mobile dengan fokus pada keamanan dan kemudahan penggunaan. Fitur mencakup autentikasi biometrik, transaksi real-time, dan pelacakan investasi.",
    client: "NeoBank",
    category: "Mobile Development",
    technologies: ["React Native", "Node.js", "PostgreSQL", "AWS"],
    slug: "neobank-app",
    image: "/fintech-mobile-app.png",
  },
  {
    titleEn: "Corporate Brand Identity",
    titleId: "Identitas Merek Korporat",
    descEn:
      "Comprehensive brand identity development including logo design, brand guidelines, marketing materials, and digital assets for a multinational consulting firm.",
    descId:
      "Pengembangan identitas merek komprehensif termasuk desain logo, panduan merek, materi pemasaran, dan aset digital untuk perusahaan konsultan multinasional.",
    client: "Vertex Consulting",
    category: "Branding",
    technologies: ["Figma", "Adobe Illustrator", "Adobe Photoshop"],
    slug: "vertex-branding",
    image: "/corporate-brand-identity-design.jpg",
  },
  {
    titleEn: "Healthcare Dashboard",
    titleId: "Dashboard Kesehatan",
    descEn:
      "An intuitive analytics dashboard for healthcare providers to monitor patient data, track appointments, and manage medical records securely.",
    descId:
      "Dashboard analitik intuitif untuk penyedia layanan kesehatan untuk memantau data pasien, melacak janji temu, dan mengelola rekam medis dengan aman.",
    client: "MediCare Plus",
    category: "UI/UX Design",
    technologies: ["Figma", "React", "D3.js", "Node.js"],
    slug: "medicare-dashboard",
    image: "/healthcare-dashboard.jpg",
  },
  {
    titleEn: "Restaurant Ordering System",
    titleId: "Sistem Pemesanan Restoran",
    descEn:
      "A complete digital ordering solution including customer-facing app, kitchen management system, and analytics dashboard for restaurant chains.",
    descId:
      "Solusi pemesanan digital lengkap termasuk aplikasi pelanggan, sistem manajemen dapur, dan dashboard analitik untuk jaringan restoran.",
    client: "FoodHub",
    category: "Web Development",
    technologies: ["Next.js", "React Native", "Firebase", "Stripe"],
    slug: "foodhub-ordering",
    image: "/restaurant-ordering-system.jpg",
  },
  {
    titleEn: "Real Estate Platform",
    titleId: "Platform Properti",
    descEn:
      "A modern real estate marketplace with advanced search, virtual tours, mortgage calculator, and agent management features.",
    descId:
      "Marketplace properti modern dengan pencarian canggih, tur virtual, kalkulator hipotek, dan fitur manajemen agen.",
    client: "HomeSeek",
    category: "Web Development",
    technologies: ["Next.js", "Three.js", "PostgreSQL", "Mapbox"],
    slug: "homeseek-platform",
    image: "/real-estate-platform.jpg",
  },
]

export default function PortfolioPage() {
  const { t, locale } = useI18n()

  return (
    <>
      <PageHeader title={t.portfolio.title} subtitle={t.portfolio.subtitle} />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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

                  {/* Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-[#0066FF]/90 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="flex items-center gap-2 text-white">
                      <span className="font-medium">{t.portfolio.viewProject}</span>
                      <ExternalLink className="h-4 w-4" />
                    </div>
                  </div>

                  {/* Category Badge */}
                  <Badge className="absolute left-4 top-4 bg-background/80 backdrop-blur-sm text-foreground">
                    {item.category}
                  </Badge>
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
                    {item.technologies.length > 3 && (
                      <Badge variant="secondary" className="bg-muted">
                        +{item.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
