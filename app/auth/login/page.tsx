"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, EyeOff, Loader2 } from "lucide-react"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [supabase, setSupabase] = useState<ReturnType<typeof createClient> | null>(null)
  const router = useRouter()

  useEffect(() => {
    try {
      const client = createClient()
      setSupabase(client)
      console.log("[v0] Supabase client initialized successfully")
    } catch (err) {
      console.error("[v0] Failed to initialize Supabase client:", err)
      setError("Gagal menginisialisasi koneksi. Periksa konfigurasi environment variables.")
    }
  }, [])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!supabase) {
      setError("Supabase client belum siap. Silakan refresh halaman.")
      return
    }

    setIsLoading(true)
    setError(null)

    try {
      console.log("[v0] Attempting login with email:", email)

      // Test basic connectivity with a simple health check
      console.log("[v0] Testing Supabase connectivity...")
      
      // Try to get the current session first (this is a lightweight request)
      const { data: sessionData, error: sessionError } = await supabase.auth.getSession()
      
      if (sessionError) {
        console.error("[v0] Session check failed:", sessionError)
        console.error("[v0] Session error details:", JSON.stringify(sessionError, null, 2))
        
        // Check if it's a network error
        if (sessionError.message.includes("Failed to fetch") || 
            sessionError.message.includes("NetworkError") ||
            sessionError.message.includes("ECONNREFUSED")) {
          throw new Error("Tidak dapat terhubung ke Supabase. Periksa: 1) Koneksi internet, 2) URL Supabase di .env.local, 3) CORS settings di dashboard Supabase.")
        }
        throw new Error(`Koneksi ke Supabase gagal: ${sessionError.message}`)
      }
      
      console.log("[v0] Session check passed")

      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      console.log("[v0] Login response - data:", data, "error:", error)

      if (error) {
        console.error("[v0] Login error:", error.message)
        console.error("[v0] Login error details:", JSON.stringify(error, null, 2))
        
        // Provide more specific error messages
        if (error.message.includes("Failed to fetch")) {
          throw new Error("Tidak dapat terhubung ke server Supabase. Pastikan URL dan kunci API di .env.local sudah benar.")
        } else if (error.message.includes("Invalid login credentials")) {
          throw new Error("Email atau password salah.")
        } else if (error.message.includes("Email not confirmed")) {
          throw new Error("Email belum dikonfirmasi. Silakan cek inbox Anda.")
        } else if (error.message.includes("Invalid api")) {
          throw new Error("Kunci API Supabase tidak valid. Periksa NEXT_PUBLIC_SUPABASE_ANON_KEY di .env.local")
        } else {
          throw new Error(error.message)
        }
      }

      console.log("[v0] Login successful, redirecting to /admin")
      router.push("/admin")
      router.refresh()
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : "Terjadi kesalahan"
      console.error("[v0] Caught error:", errorMessage)
      setError(errorMessage)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
      {/* Background effects */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(0.55_0.24_255/0.03)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.55_0.24_255/0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute left-1/4 top-1/4 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[oklch(0.55_0.24_255/0.1)] blur-[100px]" />
      </div>

      <div className="relative w-full max-w-md">
        {/* Logo */}
        <Link href="/" className="mb-8 flex justify-center">
          <img src="/images/logo-20text-202-20png.png" alt="StackPlus" className="h-10 w-auto dark:hidden" />
          <img src="/images/logo-20text-201-20png.png" alt="StackPlus" className="hidden h-10 w-auto dark:block" />
        </Link>

        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="font-display text-2xl">Admin Login</CardTitle>
            <CardDescription>Masuk untuk mengakses dashboard admin</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="admin@stackplus.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="bg-background pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {error && <div className="rounded-lg bg-destructive/10 p-3 text-sm text-destructive">{error}</div>}

              <Button
                type="submit"
                className="w-full bg-[#0066FF] text-white hover:bg-[#0052CC]"
                disabled={isLoading || !supabase}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sedang masuk...
                  </>
                ) : (
                  "Masuk"
                )}
              </Button>
            </form>

            <div className="mt-6 text-center text-sm text-muted-foreground">
              <Link href="/" className="hover:text-[#0066FF]">
                Kembali ke website
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
