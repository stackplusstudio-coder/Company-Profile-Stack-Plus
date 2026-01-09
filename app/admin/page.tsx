import { createClient } from "@/lib/supabase/server"
import { AdminHeader } from "@/components/admin/admin-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, FolderKanban, FileText, Users, MessageSquare, Mail, TrendingUp, Eye } from "lucide-react"

async function getStats() {
  const supabase = await createClient()

  const [services, portfolio, blog, team, testimonials, contacts] = await Promise.all([
    supabase.from("services").select("id", { count: "exact" }),
    supabase.from("portfolio").select("id", { count: "exact" }),
    supabase.from("blog_posts").select("id", { count: "exact" }),
    supabase.from("team_members").select("id", { count: "exact" }),
    supabase.from("testimonials").select("id", { count: "exact" }),
    supabase.from("contact_submissions").select("id", { count: "exact" }).eq("is_read", false),
  ])

  return {
    services: services.count || 0,
    portfolio: portfolio.count || 0,
    blog: blog.count || 0,
    team: team.count || 0,
    testimonials: testimonials.count || 0,
    unreadContacts: contacts.count || 0,
  }
}

export default async function AdminDashboardPage() {
  const stats = await getStats()

  const statCards = [
    { label: "Services", value: stats.services, icon: Briefcase, color: "text-blue-500" },
    { label: "Portfolio Items", value: stats.portfolio, icon: FolderKanban, color: "text-purple-500" },
    { label: "Blog Posts", value: stats.blog, icon: FileText, color: "text-green-500" },
    { label: "Team Members", value: stats.team, icon: Users, color: "text-orange-500" },
    { label: "Testimonials", value: stats.testimonials, icon: MessageSquare, color: "text-pink-500" },
    { label: "Unread Messages", value: stats.unreadContacts, icon: Mail, color: "text-red-500" },
  ]

  return (
    <div>
      <AdminHeader title="Dashboard" description="Welcome to the StackPlus admin panel" />

      <div className="p-6">
        {/* Stats Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {statCards.map((stat) => (
            <Card key={stat.label} className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">{stat.label}</CardTitle>
                <stat.icon className={`h-5 w-5 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="font-display text-3xl font-bold">{stat.value}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-[#0066FF]" />
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3">
              <a
                href="/admin/blog/new"
                className="flex items-center gap-3 rounded-lg border border-border/50 p-3 transition-colors hover:bg-accent"
              >
                <FileText className="h-5 w-5 text-[#0066FF]" />
                <span>Create New Blog Post</span>
              </a>
              <a
                href="/admin/portfolio/new"
                className="flex items-center gap-3 rounded-lg border border-border/50 p-3 transition-colors hover:bg-accent"
              >
                <FolderKanban className="h-5 w-5 text-[#0066FF]" />
                <span>Add Portfolio Item</span>
              </a>
              <a
                href="/admin/contacts"
                className="flex items-center gap-3 rounded-lg border border-border/50 p-3 transition-colors hover:bg-accent"
              >
                <Mail className="h-5 w-5 text-[#0066FF]" />
                <span>View Contact Messages ({stats.unreadContacts} unread)</span>
              </a>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="h-5 w-5 text-[#0066FF]" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Activity tracking will be available here. Start adding content to see recent updates.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
