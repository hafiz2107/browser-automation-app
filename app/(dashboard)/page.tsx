import { Plus, Workflow } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"

export default function Page() {
  return (
    <div className="flex min-h-full flex-col items-center justify-center">
      <Empty>
        <EmptyHeader>
          <EmptyMedia>
            <div className="flex size-16 items-center justify-center rounded-2xl bg-muted">
              <Workflow className="size-8 text-foreground" />
            </div>
          </EmptyMedia>
          <EmptyTitle className="text-xl font-semibold tracking-tight">
            No workflow selected
          </EmptyTitle>
          <EmptyDescription>
            Select a workflow from the sidebar or create a new one to get
            started.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button size="lg" className="rounded-xl px-6">
            <Plus />
            New workflow
          </Button>
        </EmptyContent>
      </Empty>
    </div>
  )
}
