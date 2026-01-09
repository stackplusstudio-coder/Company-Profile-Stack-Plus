"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { AdminHeader } from "@/components/admin/admin-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { createClient } from "@/lib/supabase/client"
import { Loader2, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function NewServicePage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    title_en: "",
    title_id: "",
    description_en: "",
    description_id: "",
    icon: "",
    slug: "",
    is_featured: false,
    sort_order: 0,
    meta_title_en: "",
    meta_title_id: "",
    meta_description_en: "",
    meta_description_id: "",
  })

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")
  }

  const handleTitleChange = (value: string) => {
    setFormData({
      ...formData,
      title_en: value,
      slug: generateSlug(value),
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    const supabase = createClient()
    const { error } = await supabase.from("services").insert([formData])

    if (!error) {
      router.push("/admin/services")
    }
    setIsLoading(false)
  }

  return (
    <div>
      <AdminHeader title="New Service" description="Create a new service" />

      <div className="p-6">
        <Link
          href="/admin/services"
          className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Services
        </Link>

        <form onSubmit={handleSubmit} className="space-y-6">
          <Tabs defaultValue="en" className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="en">English</TabsTrigger>
              <TabsTrigger value="id">Indonesian</TabsTrigger>
            </TabsList>

            <TabsContent value="en" className="space-y-6">
              <Card className="border-border/50 bg-card/50">
                <CardHeader>
                  <CardTitle>Content (English)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="title_en">Title *</Label>
                    <Input
                      id="title_en"
                      value={formData.title_en}
                      onChange={(e) => handleTitleChange(e.target.value)}
                      required
                      className="bg-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="description_en">Description</Label>
                    <Textarea
                      id="description_en"
                      value={formData.description_en}
                      onChange={(e) => setFormData({ ...formData, description_en: e.target.value })}
                      rows={5}
                      className="bg-background resize-none"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-card/50">
                <CardHeader>
                  <CardTitle>SEO (English)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="meta_title_en">Meta Title</Label>
                    <Input
                      id="meta_title_en"
                      value={formData.meta_title_en}
                      onChange={(e) => setFormData({ ...formData, meta_title_en: e.target.value })}
                      className="bg-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="meta_description_en">Meta Description</Label>
                    <Textarea
                      id="meta_description_en"
                      value={formData.meta_description_en}
                      onChange={(e) => setFormData({ ...formData, meta_description_en: e.target.value })}
                      rows={3}
                      className="bg-background resize-none"
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="id" className="space-y-6">
              <Card className="border-border/50 bg-card/50">
                <CardHeader>
                  <CardTitle>Content (Indonesian)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="title_id">Title *</Label>
                    <Input
                      id="title_id"
                      value={formData.title_id}
                      onChange={(e) => setFormData({ ...formData, title_id: e.target.value })}
                      required
                      className="bg-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="description_id">Description</Label>
                    <Textarea
                      id="description_id"
                      value={formData.description_id}
                      onChange={(e) => setFormData({ ...formData, description_id: e.target.value })}
                      rows={5}
                      className="bg-background resize-none"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-card/50">
                <CardHeader>
                  <CardTitle>SEO (Indonesian)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="meta_title_id">Meta Title</Label>
                    <Input
                      id="meta_title_id"
                      value={formData.meta_title_id}
                      onChange={(e) => setFormData({ ...formData, meta_title_id: e.target.value })}
                      className="bg-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="meta_description_id">Meta Description</Label>
                    <Textarea
                      id="meta_description_id"
                      value={formData.meta_description_id}
                      onChange={(e) => setFormData({ ...formData, meta_description_id: e.target.value })}
                      rows={3}
                      className="bg-background resize-none"
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Settings */}
          <Card className="border-border/50 bg-card/50">
            <CardHeader>
              <CardTitle>Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="slug">URL Slug *</Label>
                  <Input
                    id="slug"
                    value={formData.slug}
                    onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                    required
                    className="bg-background"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="icon">Icon Name</Label>
                  <Input
                    id="icon"
                    value={formData.icon}
                    onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
                    placeholder="e.g., palette, code, sparkles"
                    className="bg-background"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="sort_order">Sort Order</Label>
                  <Input
                    id="sort_order"
                    type="number"
                    value={formData.sort_order}
                    onChange={(e) => setFormData({ ...formData, sort_order: Number.parseInt(e.target.value) || 0 })}
                    className="bg-background"
                  />
                </div>
                <div className="flex items-center gap-3 pt-6">
                  <Switch
                    id="is_featured"
                    checked={formData.is_featured}
                    onCheckedChange={(checked) => setFormData({ ...formData, is_featured: checked })}
                  />
                  <Label htmlFor="is_featured">Featured Service</Label>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Button type="submit" className="gap-2 bg-[#0066FF] text-white hover:bg-[#0052CC]" disabled={isLoading}>
              {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
              Create Service
            </Button>
            <Button type="button" variant="outline" onClick={() => router.back()} className="bg-transparent">
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
