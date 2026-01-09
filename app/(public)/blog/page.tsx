"use client"

import Link from "next/link"
import { PageHeader } from "@/components/ui/page-header"
import { useI18n } from "@/lib/i18n/context"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar } from "lucide-react"

const blogPosts = [
  {
    titleEn: "The Future of Web Design in 2025",
    titleId: "Masa Depan Desain Web di 2025",
    excerptEn:
      "Explore the latest trends shaping the future of web design, from AI-powered interfaces to immersive experiences.",
    excerptId:
      "Jelajahi tren terbaru yang membentuk masa depan desain web, dari antarmuka bertenaga AI hingga pengalaman imersif.",
    category: "Design",
    slug: "future-of-web-design-2025",
    date: "2025-01-15",
    image: "/blog-web-design.jpg",
    readTime: "5 min read",
  },
  {
    titleEn: "Building Scalable Applications with Next.js",
    titleId: "Membangun Aplikasi Skalabel dengan Next.js",
    excerptEn: "Learn how to leverage Next.js to build performant and scalable web applications.",
    excerptId: "Pelajari cara memanfaatkan Next.js untuk membangun aplikasi web yang berkinerja dan skalabel.",
    category: "Development",
    slug: "building-scalable-apps-nextjs",
    date: "2025-01-10",
    image: "/blog-nextjs.jpg",
    readTime: "8 min read",
  },
  {
    titleEn: "Essential Branding Tips for Startups",
    titleId: "Tips Branding Penting untuk Startup",
    excerptEn: "Discover key branding strategies that can help your startup stand out in a crowded market.",
    excerptId: "Temukan strategi branding kunci yang dapat membantu startup Anda menonjol di pasar yang ramai.",
    category: "Business",
    slug: "branding-tips-startups",
    date: "2025-01-05",
    image: "/blog-branding.jpg",
    readTime: "6 min read",
  },
  {
    titleEn: "The Rise of AI in Design Tools",
    titleId: "Kebangkitan AI dalam Alat Desain",
    excerptEn: "How artificial intelligence is revolutionizing the way designers work and create.",
    excerptId: "Bagaimana kecerdasan buatan merevolusi cara desainer bekerja dan berkarya.",
    category: "Technology",
    slug: "ai-design-tools",
    date: "2024-12-28",
    image: "/blog-ai-design.jpg",
    readTime: "7 min read",
  },
  {
    titleEn: "Optimizing User Experience for Mobile",
    titleId: "Mengoptimalkan Pengalaman Pengguna untuk Mobile",
    excerptEn: "Best practices for creating seamless mobile experiences that keep users engaged.",
    excerptId: "Praktik terbaik untuk menciptakan pengalaman mobile yang mulus yang membuat pengguna tetap terlibat.",
    category: "Design",
    slug: "mobile-ux-optimization",
    date: "2024-12-20",
    image: "/blog-mobile-ux.jpg",
    readTime: "5 min read",
  },
  {
    titleEn: "Web Performance Optimization Guide",
    titleId: "Panduan Optimasi Performa Web",
    excerptEn: "A comprehensive guide to improving your website's speed and performance.",
    excerptId: "Panduan komprehensif untuk meningkatkan kecepatan dan performa website Anda.",
    category: "Development",
    slug: "web-performance-guide",
    date: "2024-12-15",
    image: "/blog-performance.jpg",
    readTime: "10 min read",
  },
]

export default function BlogPage() {
  const { t, locale } = useI18n()

  return (
    <>
      <PageHeader title={t.blog.title} subtitle={t.blog.subtitle} />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group rounded-2xl border border-border/50 bg-card overflow-hidden transition-all duration-300 hover:border-[#0066FF]/30 hover:shadow-xl hover:shadow-[#0066FF]/10"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={locale === "en" ? post.titleEn : post.titleId}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <Badge className="absolute left-4 top-4 bg-[#0066FF] text-white">{post.category}</Badge>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(post.date).toLocaleDateString(locale === "en" ? "en-US" : "id-ID", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </div>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="mt-3 font-display text-lg font-semibold line-clamp-2">
                    {locale === "en" ? post.titleEn : post.titleId}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                    {locale === "en" ? post.excerptEn : post.excerptId}
                  </p>

                  <div className="mt-4 flex items-center gap-2 text-sm font-medium text-[#0066FF]">
                    <span>{t.blog.readMore}</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
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
