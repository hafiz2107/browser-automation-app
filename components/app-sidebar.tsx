"use client"

import { OrganizationSwitcher, UserButton } from "@clerk/nextjs"
import { Plus, Workflow } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
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

export function AppSidebar() {
  return (
    <Sidebar variant="inset" collapsible="icon">
      <SidebarHeader className="flex-row items-center justify-between gap-2 group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:gap-0">
        <OrganizationSwitcher
          hidePersonal
          appearance={{
            elements: {
              rootBox: "min-w-0 flex-1 overflow-hidden group-data-[collapsible=icon]:!hidden",
              organizationSwitcherTrigger:
                "w-full justify-start px-2 py-1.5 rounded-md hover:bg-sidebar-accent transition-colors overflow-hidden",
              organizationSwitcherTriggerIcon: "shrink-0",
              organizationPreviewTextContainer: "min-w-0 overflow-hidden",
              organizationPreviewMainIdentifier: "truncate",
            },
          }}
        />
        <SidebarTrigger className="-ml-1" />
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Workflows</SidebarGroupLabel>
          <SidebarGroupAction title="New workflow">
            <Plus />
            <span className="sr-only">New workflow</span>
          </SidebarGroupAction>
          <SidebarGroupContent>
            <SidebarMenu className="gap-y-0.5">
              {DUMMY_WORKFLOWS.map((workflow) => (
                <SidebarMenuItem key={workflow.id}>
                  <SidebarMenuButton tooltip={workflow.name}>
                    <Workflow className="shrink-0" />
                    <span>{workflow.name}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="group-data-[collapsible=icon]:items-center">
        <UserButton
          appearance={{
            elements: {
              avatarBox: "size-8 shrink-0",
              userButtonTrigger:
                "w-full justify-start gap-2 group-data-[collapsible=icon]:justify-center",
              userButtonBox: "flex-row gap-2 min-w-0 overflow-hidden",
              userButtonOuterIdentifier:
                "min-w-0 truncate group-data-[collapsible=icon]:hidden",
            },
          }}
        />

      </SidebarFooter>
    </Sidebar>
  )
}
