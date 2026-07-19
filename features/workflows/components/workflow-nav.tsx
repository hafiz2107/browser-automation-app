"use client"

import { Plus, Workflow } from "lucide-react"

import { Workflow as WorkflowType } from "@/lib/db/schema"
import { generateSlug } from "@/features/workflows/lib/generate-slug"
import { Separator } from "@/components/ui/separator"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { useTransition } from "react"

interface WorkflowNavProps {
  workflows: WorkflowType[]
  onCreateWorkflow: (name: string) => Promise<void>
}

export function WorkflowNav({ workflows, onCreateWorkflow }: WorkflowNavProps) {
  const { state } = useSidebar()
  const [isPending, startTransition] = useTransition()

  const handleCreate = () => {
    startTransition(async () => {
      const name = generateSlug()
      await onCreateWorkflow(name)
    })
  }

  if (state === "collapsed") {
    return (
      <Popover>
        <PopoverTrigger asChild>
          <SidebarMenuButton tooltip="Workflows">
            <Workflow />
          </SidebarMenuButton>
        </PopoverTrigger>
        <PopoverContent side="right" align="start" className="gap-1">
          <SidebarMenuButton asChild disabled={isPending}>
            <button onClick={handleCreate} disabled={isPending}>
              <Plus />
              <span>New workflow</span>
            </button>
          </SidebarMenuButton>
          <Separator />
          <SidebarMenu>
            {workflows.map((workflow) => (
              <SidebarMenuItem key={workflow.id}>
                <SidebarMenuButton>{workflow.name}</SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </PopoverContent>
      </Popover>
    )
  }

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Workflows</SidebarGroupLabel>
      <SidebarGroupAction
        title="New workflow"
        onClick={handleCreate}
        disabled={isPending}
      >
        <Plus />
        <span className="sr-only">New workflow</span>
      </SidebarGroupAction>
      <SidebarGroupContent>
        <SidebarMenu>
          {workflows.map((workflow) => (
            <SidebarMenuItem key={workflow.id}>
              <SidebarMenuButton tooltip={workflow.name}>
                <span>{workflow.name}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
