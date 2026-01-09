"use client"

import { AdminHeader } from "@/components/admin/admin-header"
import { Card, CardContent } from "@/components/ui/card"
import { ImageIcon } from "lucide-react"

export default function AdminMediaPage() {
  return (
    <div>
      <AdminHeader title="Media Library" description="Manage your media files" />

      <div className="p-6">
        <Card className="border-border/50 bg-card/50">
          <CardContent className="py-12 text-center">
            <ImageIcon className="mx-auto h-12 w-12 text-muted-foreground/50" />
            <h3 className="mt-4 font-semibold">Media Library</h3>
            <p className="mt-2 text-muted-foreground">
              Upload and manage your images here. Media uploads are handled through Supabase Storage.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              For now, you can upload images directly when editing content items.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
