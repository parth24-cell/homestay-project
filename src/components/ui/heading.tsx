import * as React from "react"
import { cn } from "@/lib/utils"

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: HeadingLevel
  children: React.ReactNode
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ level = "h2", className, children, ...props }, ref) => {
    const Component = level

    const baseClasses = "font-heading text-primary font-bold tracking-tight"
    
    const sizeClasses = {
      h1: "text-4xl md:text-5xl lg:text-6xl",
      h2: "text-3xl md:text-4xl lg:text-5xl",
      h3: "text-2xl md:text-3xl lg:text-4xl",
      h4: "text-xl md:text-2xl lg:text-3xl",
      h5: "text-lg md:text-xl lg:text-2xl",
      h6: "text-base md:text-lg lg:text-xl",
    }

    return (
      <Component
        ref={ref}
        className={cn(baseClasses, sizeClasses[level], className)}
        {...props}
      >
        {children}
      </Component>
    )
  }
)
Heading.displayName = "Heading"

export { Heading }
