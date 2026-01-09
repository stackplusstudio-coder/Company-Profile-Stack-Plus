"use client"

import Link from "next/link"
import { PageHeader } from "@/components/ui/page-header"
import { useI18n } from "@/lib/i18n/context"
import { ArrowRight, Palette, Sparkles, Code, Smartphone, Search, BarChart } from "lucide-react"

const services = [
  {
    icon: Palette,
    titleEn: "UI/UX Design",
    titleId: "Desain UI/UX",
    descEn:
      "We create stunning, user-centered designs that captivate audiences and drive engagement. Our design process focuses on intuitive interfaces and seamless user experiences that convert visitors into customers.",
    descId:
      "Kami menciptakan desain menakjubkan yang berpusat pada pengguna untuk memikat audiens dan meningkatkan keterlibatan. Proses desain kami berfokus pada antarmuka intuitif dan pengalaman pengguna yang mulus yang mengubah pengunjung menjadi pelanggan.",
    slug: "ui-ux-design",
    features: [
      { en: "User Research & Analysis", id: "Riset & Analisis Pengguna" },
      { en: "Wireframing & Prototyping", id: "Wireframing & Prototyping" },
      { en: "Visual Design", id: "Desain Visual" },
      { en: "Usability Testing", id: "Pengujian Kegunaan" },
    ],
  },
  {
    icon: Sparkles,
    titleEn: "Logo & Branding",
    titleId: "Logo & Branding",
    descEn:
      "Build a powerful brand identity that stands out. We craft memorable logos, comprehensive brand guidelines, and visual systems that tell your unique story and resonate with your target audience.",
    descId:
      "Bangun identitas merek yang kuat dan menonjol. Kami membuat logo yang memorable, panduan merek komprehensif, dan sistem visual yang menceritakan kisah unik Anda dan beresonansi dengan audiens target.",
    slug: "logo-branding",
    features: [
      { en: "Logo Design", id: "Desain Logo" },
      { en: "Brand Guidelines", id: "Panduan Merek" },
      { en: "Visual Identity", id: "Identitas Visual" },
      { en: "Marketing Materials", id: "Materi Pemasaran" },
    ],
  },
  {
    icon: Code,
    titleEn: "Web Development",
    titleId: "Pengembangan Web",
    descEn:
      "Transform your digital presence with cutting-edge web solutions. We build fast, secure, and scalable websites using the latest technologies like Next.js, React, and modern cloud infrastructure.",
    descId:
      "Transformasi kehadiran digital Anda dengan solusi web mutakhir. Kami membangun website cepat, aman, dan skalabel menggunakan teknologi terbaru seperti Next.js, React, dan infrastruktur cloud modern.",
    slug: "web-development",
    features: [
      { en: "Custom Web Applications", id: "Aplikasi Web Kustom" },
      { en: "E-commerce Solutions", id: "Solusi E-commerce" },
      { en: "CMS Development", id: "Pengembangan CMS" },
      { en: "API Integration", id: "Integrasi API" },
    ],
  },
  {
    icon: Smartphone,
    titleEn: "Mobile Development",
    titleId: "Pengembangan Mobile",
    descEn:
      "Create powerful mobile experiences for iOS and Android. We develop native and cross-platform applications that deliver exceptional performance and user engagement.",
    descId:
      "Ciptakan pengalaman mobile yang kuat untuk iOS dan Android. Kami mengembangkan aplikasi native dan cross-platform yang memberikan performa dan keterlibatan pengguna yang luar biasa.",
    slug: "mobile-development",
    features: [
      { en: "iOS Development", id: "Pengembangan iOS" },
      { en: "Android Development", id: "Pengembangan Android" },
      { en: "React Native", id: "React Native" },
      { en: "App Store Optimization", id: "Optimasi App Store" },
    ],
  },
  {
    icon: Search,
    titleEn: "SEO Optimization",
    titleId: "Optimasi SEO",
    descEn:
      "Boost your online visibility and drive organic traffic. Our SEO strategies help you rank higher in search results and reach your target audience effectively.",
    descId:
      "Tingkatkan visibilitas online Anda dan dorong traffic organik. Strategi SEO kami membantu Anda peringkat lebih tinggi di hasil pencarian dan menjangkau audiens target secara efektif.",
    slug: "seo-optimization",
    features: [
      { en: "Technical SEO", id: "SEO Teknis" },
      { en: "Content Strategy", id: "Strategi Konten" },
      { en: "Link Building", id: "Pembangunan Link" },
      { en: "Analytics & Reporting", id: "Analitik & Pelaporan" },
    ],
  },
  {
    icon: BarChart,
    titleEn: "Digital Marketing",
    titleId: "Pemasaran Digital",
    descEn:
      "Comprehensive digital marketing solutions to grow your business. From social media to paid advertising, we create campaigns that deliver measurable results.",
    descId:
      "Solusi pemasaran digital komprehensif untuk mengembangkan bisnis Anda. Dari media sosial hingga iklan berbayar, kami membuat kampanye yang memberikan hasil terukur.",
    slug: "digital-marketing",
    features: [
      { en: "Social Media Marketing", id: "Pemasaran Media Sosial" },
      { en: "PPC Advertising", id: "Iklan PPC" },
      { en: "Email Marketing", id: "Email Marketing" },
      { en: "Content Marketing", id: "Content Marketing" },
    ],
  },
]

export default function ServicesPage() {
  const { t, locale } = useI18n()

  return (
    <>
      <PageHeader title={t.services.title} subtitle={t.services.subtitle} />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group relative rounded-2xl border border-border/50 bg-card/50 p-8 backdrop-blur-sm transition-all duration-300 hover:border-[#0066FF]/30 hover:shadow-xl hover:shadow-[#0066FF]/10"
              >
                {/* Icon */}
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#0066FF] to-[#00AAFF] p-3 text-white shadow-lg">
                  <service.icon className="h-7 w-7" />
                </div>

                {/* Content */}
                <h3 className="mt-6 font-display text-xl font-semibold">
                  {locale === "en" ? service.titleEn : service.titleId}
                </h3>
                <p className="mt-3 text-muted-foreground leading-relaxed line-clamp-3">
                  {locale === "en" ? service.descEn : service.descId}
                </p>

                {/* Features */}
                <ul className="mt-4 space-y-2">
                  {service.features.slice(0, 3).map((feature) => (
                    <li key={feature.en} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#0066FF]" />
                      {locale === "en" ? feature.en : feature.id}
                    </li>
                  ))}
                </ul>

                {/* Arrow */}
                <div className="mt-6 flex items-center gap-2 text-sm font-medium text-[#0066FF]">
                  <span>{t.common.learnMore}</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
