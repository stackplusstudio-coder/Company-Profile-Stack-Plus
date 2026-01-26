"use client"

import type React from "react"

import { useState } from "react"
import { PageHeader } from "@/components/ui/page-header"
import { useI18n } from "@/lib/i18n/context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { createClient } from "@/lib/supabase/client"
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react"

export default function ContactPage() {
  const { t, locale } = useI18n()
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setStatus("idle")

    try {
      const supabase = createClient()
      const { error } = await supabase.from("contact_submissions").insert([formData])

      if (error) throw error

      setStatus("success")
      setFormData({ name: "", email: "", phone: "", company: "", subject: "", message: "" })
    } catch {
      setStatus("error")
    } finally {
      setIsLoading(false)
    }
  }

  const contactInfo = [
    {
      icon: MapPin,
      labelEn: "Address",
      labelId: "Alamat",
      valueEn: "129 Potato Street No. 6, Tangerang, Banten, Indonesia",
      valueId: "129 Kentang Street No. 6, Tangerang, Banten, Indonesia",
    },
    {
      icon: Mail,
      labelEn: "Email",
      labelId: "Email",
      valueEn: "stackplustudio@gmail.com",
      valueId: "stackplustudio@gmail.com",
    },
    {
      icon: Phone,
      labelEn: "Phone",
      labelId: "Telepon",
      valueEn: "+62 813-9841-0264",
      valueId: "+62 813-9841-0264",
    },
  ]

  return (
    <>
      <PageHeader title={t.contact.title} subtitle={t.contact.subtitle} />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div className="rounded-2xl border border-border/50 bg-card/50 p-8 backdrop-blur-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t.contact.form.name} *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">{t.contact.form.email} *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-background"
                    />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="phone">{t.contact.form.phone}</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">{t.contact.form.company}</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="bg-background"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">{t.contact.form.subject}</Label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="bg-background"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">{t.contact.form.message} *</Label>
                  <Textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="bg-background resize-none"
                  />
                </div>

                {status === "success" && (
                  <div className="flex items-center gap-2 rounded-lg bg-green-500/10 p-4 text-green-600">
                    <CheckCircle className="h-5 w-5" />
                    <span>{t.contact.form.success}</span>
                  </div>
                )}

                {status === "error" && (
                  <div className="flex items-center gap-2 rounded-lg bg-destructive/10 p-4 text-destructive">
                    <AlertCircle className="h-5 w-5" />
                    <span>{t.contact.form.error}</span>
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full gap-2 bg-[#0066FF] text-white hover:bg-[#0052CC]"
                >
                  {isLoading ? (
                    t.contact.form.sending
                  ) : (
                    <>
                      {t.contact.form.submit}
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-2xl font-bold">{t.contact.info.title}</h2>
                <p className="mt-2 text-muted-foreground">
                  {locale === "en"
                    ? "We'd love to hear from you. Get in touch with us through any of the following channels."
                    : "Kami senang mendengar dari Anda. Hubungi kami melalui salah satu saluran berikut."}
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.labelEn} className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0066FF]/10 text-[#0066FF]">
                      <info.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{locale === "en" ? info.labelEn : info.labelId}</h3>
                      <p className="mt-1 text-muted-foreground">{locale === "en" ? info.valueEn : info.valueId}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="aspect-video overflow-hidden rounded-2xl border border-border/50 bg-muted">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.4048196142276!2d106.60390807409621!3d-6.210218160828834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69febded2d7335%3A0xd078a3967a2ba149!2sJl.%20Lombok%206%20Blok%2018%20No.121%2C%20RT.002%2FRW.007%2C%20Cibodasari%2C%20Kec.%20Cibodas%2C%20Kota%20Tangerang%2C%20Banten%2015138!5e0!3m2!1sid!2sid!4v1769412497509!5m2!1sid!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="StackPlus Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
