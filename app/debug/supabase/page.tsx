"use client"

import { useEffect, useState } from "react"
import { createClient } from "@/lib/supabase/client"

export default function SupabaseDebugPage() {
  const [logs, setLogs] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const addLog = (message: string) => {
    setLogs(prev => [...prev, `[${new Date().toLocaleTimeString()}] ${message}`])
  }

  const testSupabaseConnection = async () => {
    setIsLoading(true)
    setLogs([])
    
    try {
      addLog("Starting Supabase connection test...")
      
      // Check environment variables
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
      const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
      
      addLog(`NEXT_PUBLIC_SUPABASE_URL exists: ${!!supabaseUrl}`)
      addLog(`NEXT_PUBLIC_SUPABASE_ANON_KEY exists: ${!!supabaseAnonKey}`)
      
      if (supabaseUrl) {
        addLog(`URL: ${supabaseUrl}`)
        
        // Test URL validity
        try {
          new URL(supabaseUrl)
          addLog("URL format is valid")
        } catch (error) {
          addLog(`URL format error: ${error}`)
          return
        }
      }
      
      // Create client
      addLog("Creating Supabase client...")
      const supabase = createClient()
      addLog("Supabase client created successfully")
      
      // Test basic connectivity
      addLog("Testing basic connectivity...")
      const { data: sessionData, error: sessionError } = await supabase.auth.getSession()
      
      if (sessionError) {
        addLog(`Session check failed: ${sessionError.message}`)
        addLog(`Error details: ${JSON.stringify(sessionError)}`)
      } else {
        addLog("Session check passed")
      }
      
      // Test with a simple API call
      addLog("Testing API call...")
      const { data: userData, error: userError } = await supabase.auth.getUser()
      
      if (userError) {
        addLog(`User check failed: ${userError.message}`)
        addLog(`Error details: ${JSON.stringify(userError)}`)
      } else {
        addLog("User check passed")
      }
      
      addLog("Connection test completed")
      
    } catch (error: any) {
      addLog(`Error: ${error.message}`)
      addLog(`Error stack: ${error.stack}`)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Supabase Connection Debug</h1>
        
        <button
          onClick={testSupabaseConnection}
          disabled={isLoading}
          className="mb-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
        >
          {isLoading ? "Testing..." : "Test Supabase Connection"}
        </button>
        
        <div className="bg-black text-green-400 p-4 rounded-lg font-mono text-sm max-h-96 overflow-y-auto">
          {logs.length === 0 ? (
            <div className="text-gray-400">Click the button above to start debugging...</div>
          ) : (
            logs.map((log, index) => (
              <div key={index} className="mb-1">
                {log}
              </div>
            ))
          )}
        </div>
        
        <div className="mt-6 p-4 bg-gray-100 rounded-lg">
          <h2 className="font-bold mb-2">Common Issues:</h2>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local</li>
            <li>Incorrect Supabase URL format (should be like https://your-project.supabase.co)</li>
            <li>Network connectivity issues</li>
            <li>CORS not configured in Supabase project settings</li>
            <li>Invalid Supabase project credentials</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
