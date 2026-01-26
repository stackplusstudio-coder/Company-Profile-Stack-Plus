"use client"

import Link from "next/link"
import { Instagram , Linkedin } from "lucide-react"
import { useI18n } from "@/lib/i18n/context"

export function Footer() {
  const { t } = useI18n()

  const quickLinks = [
    { href: "/", label: t.nav.home },
    { href: "/about", label: t.nav.about },
    { href: "/portfolio", label: t.nav.portfolio },
    { href: "/blog", label: t.nav.blog },
    { href: "/contact", label: t.nav.contact },
  ]

  const services = [
    { href: "/services/ui-ux-design", label: t.services.uiux.title },
    { href: "/services/logo-branding", label: t.services.branding.title },
    { href: "/services/web-development", label: t.services.webdev.title },
    { href: "/services/mobile-development", label: t.services.mobile.title },
    { href: "/services/seo-optimization", label: t.services.seo.title },
    { href: "/services/ai-chatbot", label: t.services.ai.title },
  ]

  const socialLinks = [
    { href: "https://www.instagram.com/stackplus.studio/", icon: Instagram, label: "Instagram" },
    { href: "https://www.linkedin.com/in/stackplustudio-stackplus-9440873a6/", icon: Linkedin, label: "LinkedIn" },
  ]

  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <img src="/images/logo-20text-202-20png.png" alt="StackPlus" className="h-8 w-auto dark:hidden" />
              <img src="/images/logo-20text-201-20png.png" alt="StackPlus" className="hidden h-8 w-auto dark:block" />
            </Link>
            <p className="text-sm leading-relaxed text-muted-foreground">{t.footer.description}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">{t.footer.quickLinks}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-[#0066FF]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">{t.footer.services}</h3>
            <ul className="space-y-2">
              {services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-[#0066FF]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">{t.footer.connect}</h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-muted-foreground transition-colors hover:bg-[#0066FF] hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/40 pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} StackPlus. {t.footer.rights}
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-[#0066FF]">
              {t.footer.privacy}
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-[#0066FF]">
              {t.footer.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
