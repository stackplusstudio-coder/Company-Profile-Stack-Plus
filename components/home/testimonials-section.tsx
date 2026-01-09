"use client"

import { Star, Quote } from "lucide-react"
import { useI18n } from "@/lib/i18n/context"

const testimonials = [
  {
    name: "John Smith",
    position: "CEO",
    company: "TechCorp Inc.",
    contentEn:
      "StackPlus transformed our online presence completely. Their attention to detail and creative approach exceeded our expectations. Highly recommended!",
    contentId:
      "StackPlus mengubah kehadiran online kami sepenuhnya. Perhatian mereka terhadap detail dan pendekatan kreatif melampaui ekspektasi kami. Sangat direkomendasikan!",
    rating: 5,
    image: "/professional-man-portrait.png",
  },
  {
    name: "Sarah Johnson",
    position: "Marketing Director",
    company: "Global Solutions",
    contentEn:
      "Working with StackPlus was a game-changer for our brand. They delivered a stunning website that perfectly captures our company's vision.",
    contentId:
      "Bekerja dengan StackPlus adalah terobosan untuk merek kami. Mereka menghadirkan website menakjubkan yang sempurna menangkap visi perusahaan kami.",
    rating: 5,
    image: "/professional-woman-portrait.png",
  },
  {
    name: "Michael Chen",
    position: "Founder",
    company: "StartupX",
    contentEn:
      "The team at StackPlus is incredibly talented and professional. They brought our startup's vision to life with a beautiful, functional design.",
    contentId:
      "Tim di StackPlus sangat berbakat dan profesional. Mereka mewujudkan visi startup kami dengan desain yang indah dan fungsional.",
    rating: 5,
    image: "/asian-man-professional-portrait.png",
  },
]

export function TestimonialsSection() {
  const { t, locale } = useI18n()

  return (
    <section className="relative py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            {t.testimonials.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">{t.testimonials.subtitle}</p>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="relative rounded-2xl border border-border/50 bg-card/50 p-8 backdrop-blur-sm transition-all duration-300 hover:border-[#0066FF]/30 hover:shadow-lg"
            >
              {/* Quote icon */}
              <Quote className="absolute right-6 top-6 h-8 w-8 text-[#0066FF]/20" />

              {/* Rating */}
              <div className="flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-[#0066FF] text-[#0066FF]" />
                ))}
              </div>

              {/* Content */}
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {locale === "en" ? testimonial.contentEn : testimonial.contentId}
              </p>

              {/* Author */}
              <div className="mt-6 flex items-center gap-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.position}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
