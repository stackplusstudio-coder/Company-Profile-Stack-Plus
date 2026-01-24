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
    url: "https://arsicon.com/",
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
    url: "https://sketcreative.com/",
  },
  {
    titleEn: "Hexavue Lab",
    titleId: "Hexavue Lab",
    descEn:
      "Hexavue Lab is a creative digital agency specializing in website development and UI/UX design. The studio helps brands and businesses craft intuitive, user-centered digital experiences that blend aesthetics with functionality — ensuring every product not only looks good but works effectively for its users.",
    descId:
      "Hexavue Lab adalah agensi digital kreatif yang berfokus pada pengembangan website dan desain UI/UX. Studio ini membantu brand dan bisnis menciptakan pengalaman digital yang intuitif dan berorientasi pada pengguna, memadukan estetika dengan fungsionalitas agar setiap produk tidak hanya menarik secara visual, tetapi juga bekerja secara efektif.",
    client: "Hexavue Lab",
    category: "UI/UX",
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
    category: "UI/UX",
    technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    slug: "Creative-portfolio",
    image: "/photograph.png",
    url: "https://nastasiaapw.framer.website",
  },
  {
    titleEn: "AI Sentiment Analysis Chatbot",
    titleId: "Chatbot AI Analisis Sentimen",
    descEn:
      "An AI-powered chatbot designed to analyze user sentiment in real time. The system classifies emotions and opinions from text inputs, providing actionable insights for customer feedback, social media monitoring, and decision-making processes.",
    descId:
      "Chatbot berbasis AI yang dirancang untuk menganalisis sentimen pengguna secara real-time. Sistem ini mengklasifikasikan emosi dan opini dari input teks, memberikan insight yang dapat digunakan untuk evaluasi feedback pelanggan, monitoring media sosial, dan pengambilan keputusan.",
    client: "Internal Project",
    category: "Artificial Intelligence",
    technologies: ["Python", "TensorFlow", "NLP", "FastAPI", "React"],
    slug: "ai-sentiment-analysis-chatbot",
    image: "/chatbot.png",
    url: "https://github.com/budiicahyonoo/NLP-Sentiment-Analysis.git",
  },
  {
    titleEn: "Realtime Recognition System",
    titleId: "Sistem Pengenalan Real-Time",
    descEn:
      "An AI-powered realtime recognition system capable of detecting and identifying objects, faces, or activities from live video streams. The system is optimized for low-latency processing, enabling instant insights for surveillance, monitoring, and intelligent automation use cases.",
    descId:
      "Sistem pengenalan real-time berbasis AI yang mampu mendeteksi dan mengidentifikasi objek, wajah, atau aktivitas dari streaming video secara langsung. Sistem ini dioptimalkan untuk latensi rendah sehingga memungkinkan insight instan untuk kebutuhan pengawasan, monitoring, dan otomasi cerdas.",
    client: "Internal Project",
    category: "Artificial Intelligence",
    technologies: ["Python", "OpenCV", "TensorFlow", "YOLO", "FastAPI"],
    slug: "realtime-recognition-system",
    image: "/realtime.png",
    url: "https://github.com/budiicahyonoo/Real-Time-Object-Detection.git",
  },
  {
    titleEn: "EatDeveloper Website",
    titleId: "Website EatDeveloper",
    descEn:
      "A modern and responsive web platform developed for EatDeveloper, focusing on clean design, performance, and scalability. The website showcases services, content, and community engagement for developers in an intuitive and accessible interface.",
    descId:
      "Platform website modern dan responsif yang dikembangkan untuk EatDeveloper dengan fokus pada desain bersih, performa, dan skalabilitas. Website ini menampilkan layanan, konten, serta interaksi komunitas developer melalui antarmuka yang intuitif dan mudah diakses.",
    client: "EatDeveloper",
    category: "Web Development",
    technologies: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    slug: "eatdeveloper-web",
    image: "/development.png",
    url: "https://github.com/budiicahyonoo/Mieayam010.git",
  },
  {
    titleEn: "Studuiotugasmu Platform",
    titleId: "Platform Studuiotugasmu",
    descEn:
      "A web-based service platform designed to help students order academic assistance and task completion services. The website provides an easy-to-use ordering flow, secure communication, and clear project tracking to ensure efficiency, reliability, and user trust.",
    descId:
      "Platform layanan berbasis web yang dirancang untuk membantu mahasiswa dan pelajar dalam memesan layanan bantuan akademik dan joki tugas. Website ini menyediakan alur pemesanan yang mudah, komunikasi yang aman, serta pelacakan progres tugas secara transparan untuk memastikan efisiensi dan kepercayaan pengguna.",
    client: "Studuiotugasmu",
    category: "Web Development",
    technologies: ["Next.js", "React", "Tailwind CSS", "Supabase"],
    slug: "studuiotugasmu-platform",
    image: "/studiotugasmu.png",
    url: "https://tugasmu19.vercel.app/",
  },
  {
    titleEn: "Alvi Ardhi Publishing",
    titleId: "Alvi Ardhi Publishing",
    descEn: "A digital platform designed to make it easier for readers to discover, explore, and purchase published works from local authors. It showcases book collections, author profiles, and articles related to literature, combining aesthetics and usability for an enjoyable reading experience.",
    descId: "Platform digital yang dirancang untuk memudahkan pembaca menemukan, mengeksplorasi, dan membeli karya terbitan dari penulis lokal. Menampilkan koleksi buku, profil penulis, dan artikel terkait literatur dengan tampilan menarik dan mudah digunakan untuk pengalaman membaca yang menyenangkan.",
    client: "Alvi Ardhi",
    category: "Web Development",
    technologies: ["Figma", "UI/UX Design"],
    slug: "alvi-ardhi-publishing",
    image: "/alvi.png",
    url: "https://www.figma.com/design/7gnaq0TCeZpsQpq3HbXU2D/Alvi-Ardhi-Publishing?node-id=0-1&t=F4UtJCdvWDynPJle-1"
  },
  {
    titleEn: "Areakerja.com",
    titleId: "Areakerja.com",
    descEn: "A digital platform that connects job seekers with companies offering employment opportunities across Indonesia. It simplifies the job search process by providing categorized listings, filters, and detailed job descriptions, allowing users to quickly find positions that match their skills, experience, and preferred work location.",
    descId: "Platform digital yang menghubungkan pencari kerja dengan perusahaan yang menawarkan peluang kerja di seluruh Indonesia. Mempermudah proses pencarian kerja dengan menyediakan daftar lowongan yang terkategori, filter, dan deskripsi pekerjaan yang lengkap, sehingga pengguna dapat menemukan posisi yang sesuai dengan keterampilan, pengalaman, dan lokasi kerja yang diinginkan.",
    client: "Areakerja.com",
    category: "Web Development",
    technologies: ["Next.js", "React", "Tailwind CSS", "Supabase"],
    slug: "areakerja-com",
    image: "/AreaKerja.png",
    url: "https://areakerja.com"
  },
  {
    titleEn: "Faheema Academy UI Design",
    titleId: "Desain UI Faheema Academy",
    descEn: "A UI design project for Faheema Academy focused on creating a clean, calm, and trustworthy interface for an Islamic education platform. The design emphasizes clear information hierarchy, ease of access to Islamic webinars, and Quran reading classes.",
    descId: "Proyek desain UI untuk Faheema Academy yang berfokus pada tampilan antarmuka yang bersih, tenang, dan terpercaya sebagai platform edukasi Islami. Desain menekankan hierarki informasi yang jelas serta kemudahan akses ke webinar Islami dan kelas membaca Al-Qur’an.",
    client: "Faheema Academy",
    category: "UI Design",
    technologies: ["Figma", "Design System", "UI Components"],
    slug: "faheema-academy-ui-design",
    image: "/Faheema.png",
    url: "https://faheema-academy.my.id/"
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
                href={item.url}
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
