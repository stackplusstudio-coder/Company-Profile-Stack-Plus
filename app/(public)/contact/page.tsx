"use client"

import type React from "react"
import { useState } from "react"
import { PageHeader } from "@/components/ui/page-header"
import { useI18n } from "@/lib/i18n/context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
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
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (!res.ok) throw new Error("Failed")

      setStatus("success")
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
      })
    } catch (err) {
      console.error(err)
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
      valueEn: "Jl. Lombok 6 Blok 18 No.121, Tangerang, Banten, Indonesia",
      valueId: "Jl. Lombok 6 Blok 18 No.121, Tangerang, Banten, Indonesia",
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
            {/* FORM */}
            <div className="rounded-2xl border border-border/50 bg-card/50 p-8 backdrop-blur-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label>{t.contact.form.name} *</Label>
                    <Input
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>{t.contact.form.email} *</Label>
                    <Input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <Input
                    placeholder={t.contact.form.phone}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                  <Input
                    placeholder={t.contact.form.company}
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                </div>

                <Input
                  placeholder={t.contact.form.subject}
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />

                <Textarea
                  required
                  rows={5}
                  placeholder={t.contact.form.message}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />

                {status === "success" && (
                  <div className="flex items-center gap-2 rounded-lg bg-green-500/10 p-4 text-green-600">
                    <CheckCircle className="h-5 w-5" />
                    {t.contact.form.success}
                  </div>
                )}

                {status === "error" && (
                  <div className="flex items-center gap-2 rounded-lg bg-red-500/10 p-4 text-red-600">
                    <AlertCircle className="h-5 w-5" />
                    {t.contact.form.error}
                  </div>
                )}

                <Button type="submit" disabled={isLoading} className="w-full gap-2">
                  {isLoading ? t.contact.form.sending : t.contact.form.submit}
                  {!isLoading && <Send className="h-4 w-4" />}
                </Button>
              </form>
            </div>

            {/* INFO + MAP */}
            <div className="space-y-8">
              <h2 className="text-2xl font-bold">{t.contact.info.title}</h2>

              {contactInfo.map((info) => (
                <div key={info.labelEn} className="flex gap-4">
                  <info.icon className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <div className="font-semibold">
                      {locale === "en" ? info.labelEn : info.labelId}
                    </div>
                    <div className="text-muted-foreground">
                      {locale === "en" ? info.valueEn : info.valueId}
                    </div>
                  </div>
                </div>
              ))}

              <div className="aspect-video overflow-hidden rounded-2xl border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.4048196142276!2d106.60390807409621!3d-6.210218160828834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69febded2d7335%3A0xd078a3967a2ba149!2sJl.%20Lombok%206%20Blok%2018%20No.121%2C%20RT.002%2FRW.007%2C%20Cibodasari%2C%20Kec.%20Cibodas%2C%20Kota%20Tangerang%2C%20Banten%2015138!5e0!3m2!1sid!2sid!4v1769412497509!5m2!1sid!2sid"
                  className="h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
