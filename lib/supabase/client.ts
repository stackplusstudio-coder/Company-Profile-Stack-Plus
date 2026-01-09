import { createBrowserClient } from "@supabase/ssr"

let client: ReturnType<typeof createBrowserClient> | null = null

export function createClient() {
  if (client) return client

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  console.log("[v0] Environment check - URL exists:", !!supabaseUrl)
  console.log("[v0] Environment check - Key exists:", !!supabaseAnonKey)
  
  if (supabaseUrl) {
    console.log("[v0] Supabase URL:", supabaseUrl)
    console.log("[v0] URL starts with https:", supabaseUrl.startsWith("https://"))
    console.log("[v0] URL contains supabase.co:", supabaseUrl.includes("supabase.co"))
  }

  if (!supabaseUrl || !supabaseAnonKey) {
    console.error("[v0] Supabase URL:", supabaseUrl)
    console.error("[v0] Supabase Anon Key:", supabaseAnonKey ? "exists" : "missing")
    throw new Error("Missing Supabase environment variables. Please check NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY")
  }

  // Validate URL format
  try {
    const url = new URL(supabaseUrl)
    console.log("[v0] URL validation passed - hostname:", url.hostname)
    console.log("[v0] URL validation passed - protocol:", url.protocol)
  } catch (error) {
    console.error("[v0] Invalid Supabase URL format:", supabaseUrl)
    throw new Error("Invalid Supabase URL format. Please check NEXT_PUBLIC_SUPABASE_URL")
  }

  console.log("[v0] Creating Supabase client...")
  
  try {
    client = createBrowserClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
      }
    })
    console.log("[v0] Supabase client created successfully")
  } catch (error) {
    console.error("[v0] Failed to create Supabase client:", error)
    throw error
  }
  
  return client
}
