"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { AdminHeader } from "@/components/admin/admin-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { createClient } from "@/lib/supabase/client"
import { Plus, Edit, Trash2 } from "lucide-react"
import type { Portfolio } from "@/lib/types/database"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

export default function AdminPortfolioPage() {
  const [portfolio, setPortfolio] = useState<Portfolio[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchPortfolio()
  }, [])

  const fetchPortfolio = async () => {
    const supabase = createClient()
    const { data } = await supabase.from("portfolio").select("*").order("sort_order", { ascending: true })
    setPortfolio(data || [])
    setIsLoading(false)
  }

  const handleDelete = async (id: string) => {
    const supabase = createClient()
    await supabase.from("portfolio").delete().eq("id", id)
    fetchPortfolio()
  }

  return (
    <div>
      <AdminHeader title="Portfolio" description="Manage your portfolio items" />

      <div className="p-6">
        <div className="mb-6 flex items-center justify-between">
          <p className="text-muted-foreground">{portfolio.length} items</p>
          <Button asChild className="gap-2 bg-[#0066FF] text-white hover:bg-[#0052CC]">
            <Link href="/admin/portfolio/new">
              <Plus className="h-4 w-4" />
              Add Project
            </Link>
          </Button>
        </div>

        {isLoading ? (
          <div className="text-center text-muted-foreground">Loading...</div>
        ) : portfolio.length === 0 ? (
          <Card className="border-border/50 bg-card/50">
            <CardContent className="py-12 text-center">
              <p className="text-muted-foreground">No portfolio items yet.</p>
              <Button asChild className="mt-4 gap-2 bg-[#0066FF] text-white hover:bg-[#0052CC]">
                <Link href="/admin/portfolio/new">
                  <Plus className="h-4 w-4" />
                  Add Project
                </Link>
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {portfolio.map((item) => (
              <Card key={item.id} className="border-border/50 bg-card/50 overflow-hidden">
                <div className="aspect-video bg-muted">
                  {item.featured_image ? (
                    <img
                      src={item.featured_image || "/placeholder.svg"}
                      alt={item.title_en}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-muted-foreground">No image</div>
                  )}
                </div>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-semibold">{item.title_en}</h3>
                      <p className="text-sm text-muted-foreground">{item.client_name}</p>
                    </div>
                    {item.is_featured && <Badge className="bg-[#0066FF]/10 text-[#0066FF]">Featured</Badge>}
                  </div>

                  <div className="mt-4 flex items-center gap-2">
                    <Button asChild variant="outline" size="sm" className="flex-1 bg-transparent">
                      <Link href={`/admin/portfolio/${item.id}`}>
                        <Edit className="mr-2 h-4 w-4" />
                        Edit
                      </Link>
                    </Button>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-destructive hover:text-destructive bg-transparent"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Delete Project</AlertDialogTitle>
                          <AlertDialogDescription>Are you sure? This action cannot be undone.</AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction
                            onClick={() => handleDelete(item.id)}
                            className="bg-destructive text-white hover:bg-destructive/90"
                          >
                            Delete
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
