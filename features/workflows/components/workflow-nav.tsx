"use client"

import { Plus, Workflow } from "lucide-react"

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

const DUMMY_WORKFLOWS = [
  { id: "1", name: "dominant-wasp" },
  { id: "2", name: "honest-reindeer" },
  { id: "3", name: "expected-llama" },
  { id: "4", name: "essential-ocelot" },
  { id: "5", name: "creepy-echidna" },
  { id: "6", name: "eastern-silkworm" },
  { id: "7", name: "cultural-lion" },
  { id: "8", name: "proud-weasel" },
  { id: "9", name: "regional-bonobo" },
]

export function WorkflowNav() {
  const { state } = useSidebar()

  if (state === "collapsed") {
    return (
      <Popover>
        <PopoverTrigger asChild>
          <SidebarMenuButton tooltip="Workflows">
            <Workflow />
          </SidebarMenuButton>
        </PopoverTrigger>
        <PopoverContent side="right" align="start" className="gap-1">
          <SidebarMenuButton asChild>
            <button>
              <Plus />
              <span>New workflow</span>
            </button>
          </SidebarMenuButton>
          <Separator />
          <SidebarMenu>
            {DUMMY_WORKFLOWS.map((workflow) => (
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
      <SidebarGroupAction title="New workflow">
        <Plus />
        <span className="sr-only">New workflow</span>
      </SidebarGroupAction>
      <SidebarGroupContent>
        <SidebarMenu>
          {DUMMY_WORKFLOWS.map((workflow) => (
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
