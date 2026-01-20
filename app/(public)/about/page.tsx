"use client"

import { PageHeader } from "@/components/ui/page-header"
import { useI18n } from "@/lib/i18n/context"
import { Target, Eye, Heart, Users, Lightbulb, Shield } from "lucide-react"

const values = [
  {
    icon: Lightbulb,
    titleEn: "Innovation",
    titleId: "Inovasi",
    descEn: "We embrace new technologies and creative solutions to deliver cutting-edge results.",
    descId: "Kami merangkul teknologi baru dan solusi kreatif untuk memberikan hasil terdepan.",
  },
  {
    icon: Users,
    titleEn: "Collaboration",
    titleId: "Kolaborasi",
    descEn: "We work closely with our clients, treating their success as our own.",
    descId: "Kami bekerja sama erat dengan klien, memperlakukan kesuksesan mereka sebagai milik kami.",
  },
  {
    icon: Shield,
    titleEn: "Integrity",
    titleId: "Integritas",
    descEn: "We maintain the highest standards of honesty and transparency in all we do.",
    descId: "Kami menjaga standar tertinggi kejujuran dan transparansi dalam semua yang kami lakukan.",
  },
  {
    icon: Heart,
    titleEn: "Passion",
    titleId: "Semangat",
    descEn: "We are passionate about creating digital experiences that make a difference.",
    descId: "Kami bersemangat menciptakan pengalaman digital yang membuat perbedaan.",
  },
]

const team = [
  {
    name: "M. Zauzan Adzani",
    positionEn: "UI/UX Designer",
    positionId: "Desainer UI/UX",
    bioEn: "Passionate UI/UX designer focused on creating intuitive digital experiences.",
    bioId: "Desainer UI/UX yang fokus menciptakan pengalaman digital yang intuitif.",
    image: "/zauzan.png",
  },
  {
    name: "Valent Destra Pasha",
    positionEn: "Creative Director",
    positionId: "Direktur Kreatif",
    bioEn: "Award-winning designer passionate about meaningful digital experiences.",
    bioId: "Desainer peraih penghargaan yang passionate menciptakan pengalaman digital.",
    image: "/valen.png",
  },
  {
    name: "Budi Cahyono",
    positionEn: "Developer",
    positionId: "Pengembang",
    bioEn: "Developer specializing in modern web technologies.",
    bioId: "Developer yang berspesialisasi dalam teknologi web modern.",
    image: "/chyn.png",
  },
]

export default function AboutPage() {
  const { t, locale } = useI18n()

  return (
    <>
      <PageHeader title={t.about.title} subtitle={t.about.subtitle} />

      {/* About Content */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-lg leading-relaxed text-muted-foreground">
              {locale === "en"
                ? "StackPlus is a full-service digital agency founded with a mission to help businesses thrive in the digital age. We combine strategic thinking, creative design, and technical expertise to deliver solutions that drive real results."
                : "StackPlus adalah agensi digital lengkap yang didirikan dengan misi membantu bisnis berkembang di era digital. Kami menggabungkan pemikiran strategis, desain kreatif, dan keahlian teknis untuk memberikan solusi yang menghasilkan hasil nyata."}
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gradient-to-b from-[#0066FF]/5 to-transparent">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2">
            {/* Vision */}
            <div className="rounded-2xl border border-border/50 bg-card/50 p-8 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0066FF]/10 text-[#0066FF]">
                  <Eye className="h-6 w-6" />
                </div>
                <h2 className="font-display text-2xl font-bold">{t.about.vision}</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {locale === "en"
                  ? "To be the leading digital agency that transforms businesses through innovative technology solutions, setting new standards for excellence in design and development."
                  : "Menjadi agensi digital terkemuka yang mentransformasi bisnis melalui solusi teknologi inovatif, menetapkan standar baru untuk keunggulan dalam desain dan pengembangan."}
              </p>
            </div>

            {/* Mission */}
            <div className="rounded-2xl border border-border/50 bg-card/50 p-8 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0066FF]/10 text-[#0066FF]">
                  <Target className="h-6 w-6" />
                </div>
                <h2 className="font-display text-2xl font-bold">{t.about.mission}</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {locale === "en"
                  ? "We empower businesses with cutting-edge digital solutions, combining creativity with technical excellence to deliver exceptional results that exceed expectations."
                  : "Kami memberdayakan bisnis dengan solusi digital mutakhir, menggabungkan kreativitas dengan keunggulan teknis untuk memberikan hasil luar biasa yang melampaui ekspektasi."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-center text-3xl font-bold mb-12">{t.about.values}</h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.titleEn}
                className="group rounded-2xl border border-border/50 bg-card/50 p-6 text-center backdrop-blur-sm transition-all hover:border-[#0066FF]/30 hover:shadow-lg"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-[#0066FF]/10 text-[#0066FF] transition-colors group-hover:bg-[#0066FF] group-hover:text-white">
                  <value.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold">
                  {locale === "en" ? value.titleEn : value.titleId}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{locale === "en" ? value.descEn : value.descId}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gradient-to-b from-[#0066FF]/5 to-transparent">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-center text-3xl font-bold mb-12">{t.about.team}</h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <div
                key={member.name}
                className="group rounded-2xl border border-border/50 bg-card overflow-hidden transition-all hover:border-[#0066FF]/30 hover:shadow-lg"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-semibold">{member.name}</h3>
                  <p className="text-sm text-[#0066FF]">{locale === "en" ? member.positionEn : member.positionId}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{locale === "en" ? member.bioEn : member.bioId}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
