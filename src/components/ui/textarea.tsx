import * as React from "react"

import { cn } from "@/lib/utils"

/****
 * Renders a styled `<textarea>` element with customizable classes and all standard textarea attributes.
 *
 * Combines default utility classes for consistent appearance and behavior with any additional classes provided via the `className` prop. All other props are forwarded to the underlying `<textarea>` element.
 *
 * @param className - Additional CSS classes to apply to the textarea.
 * @returns The rendered textarea element.
 */
function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
