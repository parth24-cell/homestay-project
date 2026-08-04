"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="flex h-[80vh] w-full flex-col items-center justify-center space-y-6 px-4 text-center">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold font-heading text-primary">Something went wrong!</h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          We apologize for the inconvenience. An unexpected error has occurred.
        </p>
      </div>
      <Button 
        onClick={() => reset()}
        className="bg-primary text-primary-foreground hover:bg-primary/90"
      >
        Try again
      </Button>
    </div>
  )
}
