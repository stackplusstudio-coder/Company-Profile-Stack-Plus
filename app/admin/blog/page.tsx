"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { AdminHeader } from "@/components/admin/admin-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { createClient } from "@/lib/supabase/client"
import { Plus, Edit, Trash2, Calendar, Eye, EyeOff } from "lucide-react"
import type { BlogPost } from "@/lib/types/database"
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

export default function AdminBlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    const supabase = createClient()
    const { data } = await supabase.from("blog_posts").select("*").order("created_at", { ascending: false })
    setPosts(data || [])
    setIsLoading(false)
  }

  const handleDelete = async (id: string) => {
    const supabase = createClient()
    await supabase.from("blog_posts").delete().eq("id", id)
    fetchPosts()
  }

  const togglePublish = async (id: string, currentStatus: boolean) => {
    const supabase = createClient()
    await supabase
      .from("blog_posts")
      .update({
        is_published: !currentStatus,
        published_at: !currentStatus ? new Date().toISOString() : null,
      })
      .eq("id", id)
    fetchPosts()
  }

  return (
    <div>
      <AdminHeader title="Blog Posts" description="Manage your blog content" />

      <div className="p-6">
        <div className="mb-6 flex items-center justify-between">
          <p className="text-muted-foreground">{posts.length} posts</p>
          <Button asChild className="gap-2 bg-[#0066FF] text-white hover:bg-[#0052CC]">
            <Link href="/admin/blog/new">
              <Plus className="h-4 w-4" />
              New Post
            </Link>
          </Button>
        </div>

        {isLoading ? (
          <div className="text-center text-muted-foreground">Loading...</div>
        ) : posts.length === 0 ? (
          <Card className="border-border/50 bg-card/50">
            <CardContent className="py-12 text-center">
              <p className="text-muted-foreground">No blog posts yet.</p>
              <Button asChild className="mt-4 gap-2 bg-[#0066FF] text-white hover:bg-[#0052CC]">
                <Link href="/admin/blog/new">
                  <Plus className="h-4 w-4" />
                  New Post
                </Link>
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {posts.map((post) => (
              <Card key={post.id} className="border-border/50 bg-card/50 transition-colors hover:border-[#0066FF]/30">
                <CardContent className="flex items-center gap-4 p-4">
                  {post.featured_image && (
                    <img
                      src={post.featured_image || "/placeholder.svg"}
                      alt={post.title_en}
                      className="h-20 w-32 rounded-lg object-cover"
                    />
                  )}

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3">
                      <h3 className="font-semibold truncate">{post.title_en}</h3>
                      <Badge
                        variant={post.is_published ? "default" : "secondary"}
                        className={post.is_published ? "bg-green-500" : ""}
                      >
                        {post.is_published ? "Published" : "Draft"}
                      </Badge>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground line-clamp-1">{post.excerpt_en}</p>
                    <div className="mt-2 flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(post.created_at).toLocaleDateString()}
                      </span>
                      <span>Slug: {post.slug}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" onClick={() => togglePublish(post.id, post.is_published)}>
                      {post.is_published ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                    <Button asChild variant="ghost" size="icon">
                      <Link href={`/admin/blog/${post.id}`}>
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
                          <AlertDialogTitle>Delete Post</AlertDialogTitle>
                          <AlertDialogDescription>Are you sure? This action cannot be undone.</AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction
                            onClick={() => handleDelete(post.id)}
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
