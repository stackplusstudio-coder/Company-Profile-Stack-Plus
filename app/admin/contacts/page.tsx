"use client"

import { useEffect, useState } from "react"
import { AdminHeader } from "@/components/admin/admin-header"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { createClient } from "@/lib/supabase/client"
import { Mail, MailOpen, Trash2, Calendar, Building, Phone } from "lucide-react"
import type { ContactSubmission } from "@/lib/types/database"
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function AdminContactsPage() {
  const [contacts, setContacts] = useState<ContactSubmission[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchContacts()
  }, [])

  const fetchContacts = async () => {
    const supabase = createClient()
    const { data } = await supabase.from("contact_submissions").select("*").order("created_at", { ascending: false })
    setContacts(data || [])
    setIsLoading(false)
  }

  const markAsRead = async (id: string) => {
    const supabase = createClient()
    await supabase.from("contact_submissions").update({ is_read: true }).eq("id", id)
    fetchContacts()
  }

  const handleDelete = async (id: string) => {
    const supabase = createClient()
    await supabase.from("contact_submissions").delete().eq("id", id)
    fetchContacts()
  }

  const unreadCount = contacts.filter((c) => !c.is_read).length

  return (
    <div>
      <AdminHeader title="Contact Messages" description={`${unreadCount} unread messages`} />

      <div className="p-6">
        {isLoading ? (
          <div className="text-center text-muted-foreground">Loading...</div>
        ) : contacts.length === 0 ? (
          <Card className="border-border/50 bg-card/50">
            <CardContent className="py-12 text-center">
              <Mail className="mx-auto h-12 w-12 text-muted-foreground/50" />
              <p className="mt-4 text-muted-foreground">No contact messages yet.</p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {contacts.map((contact) => (
              <Card
                key={contact.id}
                className={`border-border/50 transition-colors hover:border-[#0066FF]/30 ${!contact.is_read ? "bg-[#0066FF]/5" : "bg-card/50"}`}
              >
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${!contact.is_read ? "bg-[#0066FF]/10 text-[#0066FF]" : "bg-muted text-muted-foreground"}`}
                    >
                      {contact.is_read ? <MailOpen className="h-5 w-5" /> : <Mail className="h-5 w-5" />}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3">
                        <h3 className="font-semibold">{contact.name}</h3>
                        {!contact.is_read && <Badge className="bg-[#0066FF] text-white">New</Badge>}
                      </div>

                      <div className="mt-1 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <span>{contact.email}</span>
                        {contact.phone && (
                          <span className="flex items-center gap-1">
                            <Phone className="h-3 w-3" />
                            {contact.phone}
                          </span>
                        )}
                        {contact.company && (
                          <span className="flex items-center gap-1">
                            <Building className="h-3 w-3" />
                            {contact.company}
                          </span>
                        )}
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {new Date(contact.created_at).toLocaleDateString()}
                        </span>
                      </div>

                      {contact.subject && <p className="mt-2 text-sm font-medium">{contact.subject}</p>}

                      <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{contact.message}</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => markAsRead(contact.id)}
                            className="bg-transparent"
                          >
                            View
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <DialogHeader>
                            <DialogTitle>Message from {contact.name}</DialogTitle>
                            <DialogDescription>
                              {contact.email} • {new Date(contact.created_at).toLocaleString()}
                            </DialogDescription>
                          </DialogHeader>
                          <div className="space-y-4">
                            {contact.company && (
                              <div>
                                <span className="text-sm font-medium">Company:</span>
                                <p className="text-muted-foreground">{contact.company}</p>
                              </div>
                            )}
                            {contact.phone && (
                              <div>
                                <span className="text-sm font-medium">Phone:</span>
                                <p className="text-muted-foreground">{contact.phone}</p>
                              </div>
                            )}
                            {contact.subject && (
                              <div>
                                <span className="text-sm font-medium">Subject:</span>
                                <p className="text-muted-foreground">{contact.subject}</p>
                              </div>
                            )}
                            <div>
                              <span className="text-sm font-medium">Message:</span>
                              <p className="mt-1 whitespace-pre-wrap text-muted-foreground">{contact.message}</p>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>

                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Delete Message</AlertDialogTitle>
                            <AlertDialogDescription>
                              Are you sure you want to delete this message? This action cannot be undone.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction
                              onClick={() => handleDelete(contact.id)}
                              className="bg-destructive text-white hover:bg-destructive/90"
                            >
                              Delete
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
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
