"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { AdminHeader } from "@/components/admin/admin-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { createClient } from "@/lib/supabase/client"
import { Plus, Edit, Trash2 } from "lucide-react"
import type { TeamMember } from "@/lib/types/database"
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

export default function AdminTeamPage() {
  const [team, setTeam] = useState<TeamMember[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchTeam()
  }, [])

  const fetchTeam = async () => {
    const supabase = createClient()
    const { data } = await supabase.from("team_members").select("*").order("sort_order", { ascending: true })
    setTeam(data || [])
    setIsLoading(false)
  }

  const handleDelete = async (id: string) => {
    const supabase = createClient()
    await supabase.from("team_members").delete().eq("id", id)
    fetchTeam()
  }

  return (
    <div>
      <AdminHeader title="Team Members" description="Manage your team" />

      <div className="p-6">
        <div className="mb-6 flex items-center justify-between">
          <p className="text-muted-foreground">{team.length} members</p>
          <Button asChild className="gap-2 bg-[#0066FF] text-white hover:bg-[#0052CC]">
            <Link href="/admin/team/new">
              <Plus className="h-4 w-4" />
              Add Member
            </Link>
          </Button>
        </div>

        {isLoading ? (
          <div className="text-center text-muted-foreground">Loading...</div>
        ) : team.length === 0 ? (
          <Card className="border-border/50 bg-card/50">
            <CardContent className="py-12 text-center">
              <p className="text-muted-foreground">No team members yet.</p>
              <Button asChild className="mt-4 gap-2 bg-[#0066FF] text-white hover:bg-[#0052CC]">
                <Link href="/admin/team/new">
                  <Plus className="h-4 w-4" />
                  Add Member
                </Link>
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {team.map((member) => (
              <Card key={member.id} className="border-border/50 bg-card/50 overflow-hidden">
                <div className="aspect-square bg-muted">
                  {member.photo ? (
                    <img
                      src={member.photo || "/placeholder.svg"}
                      alt={member.name}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-4xl font-bold text-muted-foreground/30">
                      {member.name.charAt(0)}
                    </div>
                  )}
                </div>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-semibold">{member.name}</h3>
                      <p className="text-sm text-[#0066FF]">{member.position_en}</p>
                    </div>
                    {!member.is_active && <Badge variant="secondary">Inactive</Badge>}
                  </div>

                  <div className="mt-4 flex items-center gap-2">
                    <Button asChild variant="outline" size="sm" className="flex-1 bg-transparent">
                      <Link href={`/admin/team/${member.id}`}>
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
                          <AlertDialogTitle>Delete Member</AlertDialogTitle>
                          <AlertDialogDescription>Are you sure? This action cannot be undone.</AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction
                            onClick={() => handleDelete(member.id)}
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
