"use client"

import { PageHeader } from "@/components/ui/page-header"
import { useI18n } from "@/lib/i18n/context"
import { Target, Eye, Heart, Users, Lightbulb, Shield } from "lucide-react"

const values = [
  {
    icon: Lightbulb,
    titleEn: "Innovation",
    titleId: "Inovasi",
    descEn:
      "We leverage the latest technologies and bold creative ideas to craft solutions that push boundaries and set trends.",
    descId:
      "Kami memanfaatkan teknologi terbaru dan ide kreatif yang berani untuk menciptakan solusi yang melampaui batas dan menetapkan standar baru.",
  },
  {
    icon: Users,
    titleEn: "Collaboration",
    titleId: "Kolaborasi",
    descEn:
      "We partner with our clients as true collaborators, turning their goals into shared successes.",
    descId:
      "Kami bermitra dengan klien sebagai kolaborator sejati, menjadikan tujuan mereka sebagai kesuksesan bersama.",
  },
  {
    icon: Shield,
    titleEn: "Integrity",
    titleId: "Integritas",
    descEn:
      "We uphold transparency, honesty, and ethical practices in every project and interaction.",
    descId:
      "Kami menjunjung tinggi transparansi, kejujuran, dan praktik etis dalam setiap proyek dan interaksi.",
  },
  {
    icon: Heart,
    titleEn: "Passion",
    titleId: "Semangat",
    descEn:
      "We are driven by a genuine passion for designing digital experiences that leave a meaningful impact.",
    descId:
      "Kami digerakkan oleh passion yang tulus dalam merancang pengalaman digital yang memberikan dampak bermakna.",
  },
  {
    icon: Target,
    titleEn: "Excellence",
    titleId: "Keunggulan",
    descEn:
      "We strive for excellence in every detail, delivering work that is not only functional but exceptional.",
    descId:
      "Kami selalu mengejar keunggulan dalam setiap detail, menghadirkan karya yang tidak hanya fungsional, tetapi juga luar biasa.",
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
    positionEn: "Creative",
    positionId: "Kreatif",
    bioEn: "Award-winning designer passionate about meaningful digital experiences.",
    bioId: "Desainer peraih penghargaan yang berfokus pada pengalaman digital bermakna.",
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

  const missionItems =
    locale === "en"
      ? [
          "Develop visual identities that are ready to be applied across modern digital ecosystems.",
          "Deliver websites and digital products that are functional, scalable, and performance-driven.",
          "Integrate design and development into a single, efficient workflow.",
          "Become a strategic partner for businesses in their digital transformation and growth.",
        ]
      : [
          "Mengembangkan identitas visual yang siap diterapkan secara konsisten di berbagai ekosistem digital modern.",
          "Menghadirkan website dan produk digital yang fungsional, scalable, dan berorientasi pada performa.",
          "Mengintegrasikan proses desain dan pengembangan ke dalam satu alur kerja yang efisien dan terstruktur.",
          "Menjadi partner strategis bagi bisnis dalam proses transformasi digital dan pertumbuhan jangka panjang.",
        ]

  return (
    <>
      <PageHeader title={t.about.title} subtitle={t.about.subtitle} />

      {/* About Description */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-lg leading-relaxed text-muted-foreground">
              {locale === "en"
                ? "StackPlus Studio is a creative digital agency delivering comprehensive digital solutions—from UI/UX Design, Logo & Branding, Web Development, to AI Chatbots. Built on the philosophy of stack-based thinking, every project is structured in layers to create products that are functional, effective, and deliver real business value."
                : "StackPlus Studio adalah agensi digital kreatif yang menghadirkan solusi digital komprehensif—mulai dari UI/UX Design, Logo & Branding, Web Development, hingga AI Chatbot. Berlandaskan filosofi stack-based thinking, setiap proyek dibangun secara berlapis untuk menghasilkan produk digital yang fungsional, efektif, dan memberikan nilai nyata bagi bisnis."}
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
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0066FF]/10 text-[#0066FF]">
                  <Eye className="h-6 w-6" />
                </div>
                <h2 className="font-display text-2xl font-bold">{t.about.vision}</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {locale === "en"
                  ? "To become a digital product studio that helps businesses build digital products that are relevant, well-structured, and sustainable in the modern era."
                  : "Menjadi studio produk digital yang membantu bisnis membangun produk digital yang relevan, terstruktur dengan baik, dan berkelanjutan di era digital modern."}
              </p>
            </div>

            {/* Mission */}
            <div className="rounded-2xl border border-border/50 bg-card/50 p-8 backdrop-blur-sm">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0066FF]/10 text-[#0066FF]">
                  <Target className="h-6 w-6" />
                </div>
                <h2 className="font-display text-2xl font-bold">{t.about.mission}</h2>
              </div>

              <ul className="space-y-4">
                {missionItems.map((item, index) => (
                  <li key={index} className="flex gap-3 text-muted-foreground">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[#0066FF]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center font-display text-3xl font-bold">
            {t.about.values}
          </h2>

          <div className="flex flex-col gap-6">
            {/* Top 3 */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {values.slice(0, 3).map((value) => (
                <ValueCard key={value.titleEn} value={value} locale={locale} />
              ))}
            </div>

            {/* Bottom 2 - CENTER */}
            <div className="flex justify-center gap-6 flex-wrap">
              {values.slice(3).map((value) => (
                <div key={value.titleEn} className="w-full sm:w-[48%] lg:w-[30%]">
                  <ValueCard value={value} locale={locale} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gradient-to-b from-[#0066FF]/5 to-transparent">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center font-display text-3xl font-bold">
            {t.about.team}
          </h2>

          <div className="flex flex-wrap justify-center gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="w-full sm:w-[48%] lg:w-[30%] group overflow-hidden rounded-2xl border border-border/50 bg-card transition-all hover:border-[#0066FF]/30 hover:shadow-lg"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-semibold">{member.name}</h3>
                  <p className="text-sm text-[#0066FF]">
                    {locale === "en" ? member.positionEn : member.positionId}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {locale === "en" ? member.bioEn : member.bioId}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

/* ====== COMPONENT ====== */
function ValueCard({ value, locale }: any) {
  return (
    <div className="group rounded-2xl border border-border/50 bg-card/50 p-6 text-center backdrop-blur-sm transition-all hover:border-[#0066FF]/30 hover:shadow-lg">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-[#0066FF]/10 text-[#0066FF] transition-colors group-hover:bg-[#0066FF] group-hover:text-white">
        <value.icon className="h-7 w-7" />
      </div>
      <h3 className="mt-4 font-display text-lg font-semibold">
        {locale === "en" ? value.titleEn : value.titleId}
      </h3>
      <p className="mt-2 text-sm text-muted-foreground">
        {locale === "en" ? value.descEn : value.descId}
      </p>
    </div>
  )
}
