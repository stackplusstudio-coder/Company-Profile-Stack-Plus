"use client"

import { PageHeader } from "@/components/ui/page-header"
import { useI18n } from "@/lib/i18n/context"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "John Smith",
    position: "CEO",
    company: "TechCorp Inc.",
    contentEn:
      "StackPlus transformed our online presence completely. Their attention to detail and creative approach exceeded our expectations. The team was professional, responsive, and delivered beyond what we imagined. Highly recommended!",
    contentId:
      "StackPlus mengubah kehadiran online kami sepenuhnya. Perhatian mereka terhadap detail dan pendekatan kreatif melampaui ekspektasi kami. Tim sangat profesional, responsif, dan memberikan lebih dari yang kami bayangkan. Sangat direkomendasikan!",
    rating: 5,
    image: "/professional-man-portrait.png",
  },
  {
    name: "Sarah Johnson",
    position: "Marketing Director",
    company: "Global Solutions",
    contentEn:
      "Working with StackPlus was a game-changer for our brand. They delivered a stunning website that perfectly captures our company's vision. Their team understood our needs from day one and executed flawlessly.",
    contentId:
      "Bekerja dengan StackPlus adalah terobosan untuk merek kami. Mereka menghadirkan website menakjubkan yang sempurna menangkap visi perusahaan kami. Tim mereka memahami kebutuhan kami sejak hari pertama dan melaksanakan dengan sempurna.",
    rating: 5,
    image: "/professional-woman-portrait.png",
  },
  {
    name: "Michael Chen",
    position: "Founder",
    company: "StartupX",
    contentEn:
      "The team at StackPlus is incredibly talented and professional. They brought our startup's vision to life with a beautiful, functional design. The result exceeded all expectations and helped us secure funding.",
    contentId:
      "Tim di StackPlus sangat berbakat dan profesional. Mereka mewujudkan visi startup kami dengan desain yang indah dan fungsional. Hasilnya melampaui semua ekspektasi dan membantu kami mendapatkan pendanaan.",
    rating: 5,
    image: "/asian-man-professional-portrait.png",
  },
  {
    name: "Emma Davis",
    position: "Product Manager",
    company: "InnovateTech",
    contentEn:
      "Exceptional work from start to finish. StackPlus delivered a complex web application on time and within budget. Their technical expertise and communication throughout the project were outstanding.",
    contentId:
      "Pekerjaan luar biasa dari awal hingga akhir. StackPlus menghadirkan aplikasi web kompleks tepat waktu dan sesuai anggaran. Keahlian teknis dan komunikasi mereka sepanjang proyek sangat luar biasa.",
    rating: 5,
    image: "/woman-professional-portrait-2.jpg",
  },
  {
    name: "David Park",
    position: "CTO",
    company: "CloudScale",
    contentEn:
      "We've worked with many agencies, but StackPlus stands out. Their understanding of modern technologies and ability to create scalable solutions is impressive. They're now our go-to partner.",
    contentId:
      "Kami telah bekerja dengan banyak agensi, tapi StackPlus menonjol. Pemahaman mereka tentang teknologi modern dan kemampuan membuat solusi skalabel sangat mengesankan. Mereka sekarang mitra andalan kami.",
    rating: 5,
    image: "/asian-man-professional-portrait-2.jpg",
  },
  {
    name: "Lisa Thompson",
    position: "Brand Manager",
    company: "Luxe Brands",
    contentEn:
      "StackPlus created a brand identity that truly represents who we are. Their creative process was collaborative and insightful. The final deliverables were polished and professional.",
    contentId:
      "StackPlus menciptakan identitas merek yang benar-benar mewakili siapa kami. Proses kreatif mereka kolaboratif dan berwawasan. Hasil akhir sangat dipoles dan profesional.",
    rating: 5,
    image: "/woman-professional-portrait-3.jpg",
  },
]

export default function TestimonialsPage() {
  const { t, locale } = useI18n()

  return (
    <>
      <PageHeader title={t.testimonials.title} subtitle={t.testimonials.subtitle} />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="relative rounded-2xl border border-border/50 bg-card/50 p-8 backdrop-blur-sm transition-all duration-300 hover:border-[#0066FF]/30 hover:shadow-lg"
              >
                <Quote className="absolute right-6 top-6 h-8 w-8 text-[#0066FF]/20" />

                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[#0066FF] text-[#0066FF]" />
                  ))}
                </div>

                <p className="mt-4 text-muted-foreground leading-relaxed">
                  {locale === "en" ? testimonial.contentEn : testimonial.contentId}
                </p>

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
    </>
  )
}
