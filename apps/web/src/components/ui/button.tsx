import * as React from "react"

export function Button({ className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-lg font-medium transition ${className}`}
      {...props}
    />
  )
}
