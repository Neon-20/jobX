import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Use placeholder values if environment variables are not set (for development)
const url = supabaseUrl && supabaseUrl !== 'your_supabase_project_url'
  ? supabaseUrl
  : 'https://placeholder.supabase.co'

const key = supabaseAnonKey && supabaseAnonKey !== 'your_supabase_anon_key'
  ? supabaseAnonKey
  : 'placeholder-key'

const isConfigured = supabaseUrl && supabaseAnonKey &&
  supabaseUrl !== 'your_supabase_project_url' &&
  supabaseAnonKey !== 'your_supabase_anon_key'

export const supabase = createClient(url, key, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  }
})

// Auth helper functions
export const auth = {
  signUp: async (email: string, password: string, userData?: { name?: string }) => {
    if (!isConfigured) {
      return {
        data: { user: null, session: null },
        error: { message: 'Supabase is not configured. Please set up your environment variables.' }
      }
    }
    return await supabase.auth.signUp({
      email,
      password,
      options: {
        data: userData
      }
    })
  },

  signIn: async (email: string, password: string) => {
    if (!isConfigured) {
      return {
        data: { user: null, session: null },
        error: { message: 'Supabase is not configured. Please set up your environment variables.' }
      }
    }
    return await supabase.auth.signInWithPassword({
      email,
      password
    })
  },

  signOut: async () => {
    if (!isConfigured) {
      return { error: { message: 'Supabase is not configured.' } }
    }
    return await supabase.auth.signOut()
  },

  getCurrentUser: async () => {
    if (!isConfigured) {
      return { user: null, error: null }
    }
    const { data: { user }, error } = await supabase.auth.getUser()
    return { user, error }
  },

  getCurrentSession: async () => {
    if (!isConfigured) {
      return { session: null, error: null }
    }
    const { data: { session }, error } = await supabase.auth.getSession()
    return { session, error }
  }
}

// Export configuration status for components to check
export { isConfigured }
