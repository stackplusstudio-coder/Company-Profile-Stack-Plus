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

interface SettingsData {
  [key: string]: { value_en: string; value_id: string }
}

export default function AdminSettingsPage() {
  const [settings, setSettings] = useState<SettingsData>({})
  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    fetchSettings()
  }, [])

  const fetchSettings = async () => {
    const supabase = createClient()
    const { data } = await supabase.from("site_settings").select("*")

    if (data) {
      const settingsMap: SettingsData = {}
      data.forEach((item) => {
        settingsMap[item.key] = {
          value_en: item.value_en || "",
          value_id: item.value_id || "",
        }
      })
      setSettings(settingsMap)
    }
    setIsLoading(false)
  }

  const updateSetting = (key: string, lang: "en" | "id", value: string) => {
    setSettings((prev) => ({
      ...prev,
      [key]: {
        ...prev[key],
        [`value_${lang}`]: value,
      },
    }))
  }

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSaving(true)

    const supabase = createClient()

    for (const [key, values] of Object.entries(settings)) {
      await supabase
        .from("site_settings")
        .upsert({ key, value_en: values.value_en, value_id: values.value_id }, { onConflict: "key" })
    }

    setIsSaving(false)
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  const settingsFields = [
    { key: "company_name", label: "Company Name" },
    { key: "tagline", label: "Tagline" },
    { key: "email", label: "Email Address" },
    { key: "phone", label: "Phone Number" },
    { key: "address", label: "Address", multiline: true },
    { key: "about_vision", label: "Vision Statement", multiline: true },
    { key: "about_mission", label: "Mission Statement", multiline: true },
  ]

  const socialFields = [
    { key: "facebook", label: "Facebook URL" },
    { key: "twitter", label: "Twitter URL" },
    { key: "instagram", label: "Instagram URL" },
    { key: "linkedin", label: "LinkedIn URL" },
  ]

  if (isLoading) {
    return (
      <div>
        <AdminHeader title="Settings" description="Configure site settings" />
        <div className="flex items-center justify-center p-12">
          <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
        </div>
      </div>
    )
  }

  return (
    <div>
      <AdminHeader title="Settings" description="Configure site settings" />

      <form onSubmit={handleSave} className="p-6">
        <Tabs defaultValue="en" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="en">English</TabsTrigger>
            <TabsTrigger value="id">Indonesian</TabsTrigger>
          </TabsList>

          {(["en", "id"] as const).map((lang) => (
            <TabsContent key={lang} value={lang} className="space-y-6">
              <Card className="border-border/50 bg-card/50">
                <CardHeader>
                  <CardTitle>General Settings ({lang === "en" ? "English" : "Indonesian"})</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {settingsFields.map((field) => (
                    <div key={field.key} className="space-y-2">
                      <Label htmlFor={`${field.key}_${lang}`}>{field.label}</Label>
                      {field.multiline ? (
                        <Textarea
                          id={`${field.key}_${lang}`}
                          value={settings[field.key]?.[`value_${lang}`] || ""}
                          onChange={(e) => updateSetting(field.key, lang, e.target.value)}
                          rows={3}
                          className="bg-background resize-none"
                        />
                      ) : (
                        <Input
                          id={`${field.key}_${lang}`}
                          value={settings[field.key]?.[`value_${lang}`] || ""}
                          onChange={(e) => updateSetting(field.key, lang, e.target.value)}
                          className="bg-background"
                        />
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-card/50">
                <CardHeader>
                  <CardTitle>Social Media Links</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {socialFields.map((field) => (
                    <div key={field.key} className="space-y-2">
                      <Label htmlFor={`${field.key}_${lang}`}>{field.label}</Label>
                      <Input
                        id={`${field.key}_${lang}`}
                        value={settings[field.key]?.[`value_${lang}`] || ""}
                        onChange={(e) => updateSetting(field.key, lang, e.target.value)}
                        className="bg-background"
                        placeholder={`https://${field.key}.com/stackplus`}
                      />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-6 flex items-center gap-4">
          <Button type="submit" className="gap-2 bg-[#0066FF] text-white hover:bg-[#0052CC]" disabled={isSaving}>
            {isSaving && <Loader2 className="h-4 w-4 animate-spin" />}
            Save Settings
          </Button>
          {saved && (
            <span className="flex items-center gap-2 text-sm text-green-600">
              <CheckCircle className="h-4 w-4" />
              Settings saved!
            </span>
          )}
        </div>
      </form>
    </div>
  )
}
