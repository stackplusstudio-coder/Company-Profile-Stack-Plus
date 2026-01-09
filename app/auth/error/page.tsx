import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AlertTriangle } from "lucide-react"

export default function AuthErrorPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
      {/* Background effects */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(0.55_0.24_255/0.03)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.55_0.24_255/0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative w-full max-w-md">
        <Link href="/" className="mb-8 flex justify-center">
          <img src="/images/logo-20text-202-20png.png" alt="StackPlus" className="h-10 w-auto dark:hidden" />
          <img src="/images/logo-20text-201-20png.png" alt="StackPlus" className="hidden h-10 w-auto dark:block" />
        </Link>

        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader className="space-y-1 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10">
              <AlertTriangle className="h-8 w-8 text-destructive" />
            </div>
            <CardTitle className="font-display text-2xl">Authentication Error</CardTitle>
            <CardDescription>Something went wrong during the authentication process. Please try again.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button asChild className="w-full bg-[#0066FF] text-white hover:bg-[#0052CC]">
              <Link href="/auth/login">Try Again</Link>
            </Button>
            <Button asChild variant="outline" className="w-full bg-transparent">
              <Link href="/">Back to Home</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
