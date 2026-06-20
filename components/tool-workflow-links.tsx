import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { Locale } from "@/lib/i18n/config"
import { localizeHref } from "@/lib/i18n"
import { getToolWorkflowSteps } from "@/lib/tool-workflows"

interface ToolWorkflowLinksProps {
  toolSlug: string
  locale: Locale
  title: string
}

export function ToolWorkflowLinks({ toolSlug, locale, title }: ToolWorkflowLinksProps) {
  const steps = getToolWorkflowSteps(toolSlug)
  if (steps.length === 0) return null

  return (
    <div className="mb-4 rounded-lg border border-border/60 bg-muted/20 px-4 py-3">
      <p className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">{title}</p>
      <div className="flex flex-wrap gap-2">
        {steps.map((step) => (
          <Link
            key={step.targetSlug}
            href={localizeHref(locale, `tools/${step.targetSlug}`)}
            className="inline-flex items-center gap-1 rounded-full border border-border/60 bg-card/60 px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-primary/40 hover:text-primary"
          >
            {step.labels[locale]}
            <ArrowRight className="h-3 w-3" />
          </Link>
        ))}
      </div>
    </div>
  )
}
