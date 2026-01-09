"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { AdminHeader } from "@/components/admin/admin-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { createClient } from "@/lib/supabase/client"
import { Plus, Edit, Trash2, Star } from "lucide-react"
import type { Testimonial } from "@/lib/types/database"
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

export default function AdminTestimonialsPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchTestimonials()
  }, [])

  const fetchTestimonials = async () => {
    const supabase = createClient()
    const { data } = await supabase.from("testimonials").select("*").order("sort_order", { ascending: true })
    setTestimonials(data || [])
    setIsLoading(false)
  }

  const handleDelete = async (id: string) => {
    const supabase = createClient()
    await supabase.from("testimonials").delete().eq("id", id)
    fetchTestimonials()
  }

  return (
    <div>
      <AdminHeader title="Testimonials" description="Manage client testimonials" />

      <div className="p-6">
        <div className="mb-6 flex items-center justify-between">
          <p className="text-muted-foreground">{testimonials.length} testimonials</p>
          <Button asChild className="gap-2 bg-[#0066FF] text-white hover:bg-[#0052CC]">
            <Link href="/admin/testimonials/new">
              <Plus className="h-4 w-4" />
              Add Testimonial
            </Link>
          </Button>
        </div>

        {isLoading ? (
          <div className="text-center text-muted-foreground">Loading...</div>
        ) : testimonials.length === 0 ? (
          <Card className="border-border/50 bg-card/50">
            <CardContent className="py-12 text-center">
              <p className="text-muted-foreground">No testimonials yet.</p>
              <Button asChild className="mt-4 gap-2 bg-[#0066FF] text-white hover:bg-[#0052CC]">
                <Link href="/admin/testimonials/new">
                  <Plus className="h-4 w-4" />
                  Add Testimonial
                </Link>
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="border-border/50 bg-card/50">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      {testimonial.client_photo ? (
                        <img
                          src={testimonial.client_photo || "/placeholder.svg"}
                          alt={testimonial.client_name}
                          className="h-12 w-12 rounded-full object-cover"
                        />
                      ) : (
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0066FF]/10 text-lg font-bold text-[#0066FF]">
                          {testimonial.client_name.charAt(0)}
                        </div>
                      )}
                      <div>
                        <h3 className="font-semibold">{testimonial.client_name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.client_position}, {testimonial.client_company}
                        </p>
                      </div>
                    </div>
                    {testimonial.is_featured && <Badge className="bg-[#0066FF]/10 text-[#0066FF]">Featured</Badge>}
                  </div>

                  {testimonial.rating && (
                    <div className="mt-3 flex gap-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-[#0066FF] text-[#0066FF]" />
                      ))}
                    </div>
                  )}

                  <p className="mt-3 text-sm text-muted-foreground line-clamp-3">{testimonial.content_en}</p>

                  <div className="mt-4 flex items-center gap-2">
                    <Button asChild variant="outline" size="sm" className="flex-1 bg-transparent">
                      <Link href={`/admin/testimonials/${testimonial.id}`}>
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
                          <AlertDialogTitle>Delete Testimonial</AlertDialogTitle>
                          <AlertDialogDescription>Are you sure? This action cannot be undone.</AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction
                            onClick={() => handleDelete(testimonial.id)}
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
