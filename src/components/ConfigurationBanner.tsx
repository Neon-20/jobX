'use client'

import { isConfigured } from '@/lib/supabase'
import { AlertTriangle, ExternalLink } from 'lucide-react'

export default function ConfigurationBanner() {
  if (isConfigured) return null

  return (
    <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-4">
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <AlertTriangle className="h-5 w-5 text-amber-400" />
        </div>
        <div className="ml-3">
          <p className="text-sm text-amber-700">
            <strong>Authentication not configured:</strong> To enable login/signup functionality, 
            please set up your Supabase credentials in <code className="bg-amber-100 px-1 rounded">.env.local</code>.
            {' '}
            
            <a 
              href="#setup" 
              className="font-medium underline hover:text-amber-800 inline-flex items-center"
              onClick={(e) => {
                e.preventDefault()
                alert('Please check the SUPABASE_SETUP.md file in your project root for detailed setup instructions.')
              }}
            >
              Setup Guide
              <ExternalLink className="ml-1 h-3 w-3" />
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
