"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { AdminHeader } from "@/components/admin/admin-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { createClient } from "@/lib/supabase/client"
import { Plus, Edit, Trash2, GripVertical } from "lucide-react"
import type { Service } from "@/lib/types/database"
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

export default function AdminServicesPage() {
  const [services, setServices] = useState<Service[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchServices()
  }, [])

  const fetchServices = async () => {
    const supabase = createClient()
    const { data } = await supabase.from("services").select("*").order("sort_order", { ascending: true })
    setServices(data || [])
    setIsLoading(false)
  }

  const handleDelete = async (id: string) => {
    const supabase = createClient()
    await supabase.from("services").delete().eq("id", id)
    fetchServices()
  }

  return (
    <div>
      <AdminHeader title="Services" description="Manage your services" />

      <div className="p-6">
        <div className="mb-6 flex items-center justify-between">
          <p className="text-muted-foreground">{services.length} services</p>
          <Button asChild className="gap-2 bg-[#0066FF] text-white hover:bg-[#0052CC]">
            <Link href="/admin/services/new">
              <Plus className="h-4 w-4" />
              Add Service
            </Link>
          </Button>
        </div>

        {isLoading ? (
          <div className="text-center text-muted-foreground">Loading...</div>
        ) : services.length === 0 ? (
          <Card className="border-border/50 bg-card/50">
            <CardContent className="py-12 text-center">
              <p className="text-muted-foreground">No services yet. Create your first service.</p>
              <Button asChild className="mt-4 gap-2 bg-[#0066FF] text-white hover:bg-[#0052CC]">
                <Link href="/admin/services/new">
                  <Plus className="h-4 w-4" />
                  Add Service
                </Link>
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {services.map((service) => (
              <Card
                key={service.id}
                className="border-border/50 bg-card/50 transition-colors hover:border-[#0066FF]/30"
              >
                <CardContent className="flex items-center gap-4 p-4">
                  <GripVertical className="h-5 w-5 cursor-grab text-muted-foreground" />

                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <h3 className="font-semibold">{service.title_en}</h3>
                      {service.is_featured && <Badge className="bg-[#0066FF]/10 text-[#0066FF]">Featured</Badge>}
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground line-clamp-1">{service.description_en}</p>
                    <p className="mt-1 text-xs text-muted-foreground">Slug: {service.slug}</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button asChild variant="ghost" size="icon">
                      <Link href={`/admin/services/${service.id}`}>
                        <Edit className="h-4 w-4" />
                      </Link>
                    </Button>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Delete Service</AlertDialogTitle>
                          <AlertDialogDescription>
                            Are you sure you want to delete "{service.title_en}"? This action cannot be undone.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction
                            onClick={() => handleDelete(service.id)}
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
