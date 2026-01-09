"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { AdminHeader } from "@/components/admin/admin-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { createClient } from "@/lib/supabase/client"
import { Loader2, CheckCircle } from "lucide-react"
import type { HomepageContent } from "@/lib/types/database"

export default function AdminHomepagePage() {
  const [content, setContent] = useState<HomepageContent[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    fetchContent()
  }, [])

  const fetchContent = async () => {
    const supabase = createClient()
    const { data } = await supabase.from("homepage_content").select("*").order("sort_order", { ascending: true })
    setContent(data || [])
    setIsLoading(false)
  }

  const updateContent = (id: string, field: string, value: string) => {
    setContent((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              [field]: value,
            }
          : item,
      ),
    )
  }

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSaving(true)

    const supabase = createClient()

    for (const item of content) {
      await supabase
        .from("homepage_content")
        .update({
          title_en: item.title_en,
          title_id: item.title_id,
          subtitle_en: item.subtitle_en,
          subtitle_id: item.subtitle_id,
          content_en: item.content_en,
          content_id: item.content_id,
          cta_text_en: item.cta_text_en,
          cta_text_id: item.cta_text_id,
          cta_link: item.cta_link,
        })
        .eq("id", item.id)
    }

    setIsSaving(false)
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  if (isLoading) {
    return (
      <div>
        <AdminHeader title="Homepage Content" description="Manage homepage sections" />
        <div className="flex items-center justify-center p-12">
          <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
        </div>
      </div>
    )
  }

  return (
    <div>
      <AdminHeader title="Homepage Content" description="Manage homepage sections" />

      <form onSubmit={handleSave} className="p-6">
        <Tabs defaultValue="en" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="en">English</TabsTrigger>
            <TabsTrigger value="id">Indonesian</TabsTrigger>
          </TabsList>

          {(["en", "id"] as const).map((lang) => (
            <TabsContent key={lang} value={lang} className="space-y-6">
              {content.map((item) => (
                <Card key={item.id} className="border-border/50 bg-card/50">
                  <CardHeader>
                    <CardTitle className="capitalize">{item.section} Section</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label>Title</Label>
                        <Input
                          value={(item[`title_${lang}` as keyof HomepageContent] as string) || ""}
                          onChange={(e) => updateContent(item.id, `title_${lang}`, e.target.value)}
                          className="bg-background"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Subtitle</Label>
                        <Input
                          value={(item[`subtitle_${lang}` as keyof HomepageContent] as string) || ""}
                          onChange={(e) => updateContent(item.id, `subtitle_${lang}`, e.target.value)}
                          className="bg-background"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Content</Label>
                      <Textarea
                        value={(item[`content_${lang}` as keyof HomepageContent] as string) || ""}
                        onChange={(e) => updateContent(item.id, `content_${lang}`, e.target.value)}
                        rows={3}
                        className="bg-background resize-none"
                      />
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label>CTA Text</Label>
                        <Input
                          value={(item[`cta_text_${lang}` as keyof HomepageContent] as string) || ""}
                          onChange={(e) => updateContent(item.id, `cta_text_${lang}`, e.target.value)}
                          className="bg-background"
                        />
                      </div>
                      {lang === "en" && (
                        <div className="space-y-2">
                          <Label>CTA Link</Label>
                          <Input
                            value={item.cta_link || ""}
                            onChange={(e) => updateContent(item.id, "cta_link", e.target.value)}
                            className="bg-background"
                            placeholder="/contact"
                          />
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-6 flex items-center gap-4">
          <Button type="submit" className="gap-2 bg-[#0066FF] text-white hover:bg-[#0052CC]" disabled={isSaving}>
            {isSaving && <Loader2 className="h-4 w-4 animate-spin" />}
            Save Changes
          </Button>
          {saved && (
            <span className="flex items-center gap-2 text-sm text-green-600">
              <CheckCircle className="h-4 w-4" />
              Changes saved!
            </span>
          )}
        </div>
      </form>
    </div>
  )
}
