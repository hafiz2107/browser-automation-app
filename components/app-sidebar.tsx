import { OrganizationSwitcher, UserButton } from "@clerk/nextjs"

import { WorkflowNav } from "@/features/workflows/components/workflow-nav"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarTrigger,
} from "@/components/ui/sidebar"

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

      <SidebarContent className="group-data-[collapsible=icon]:items-center">
        <WorkflowNav />
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
