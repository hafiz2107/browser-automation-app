import { and, desc, eq } from "drizzle-orm"

import { db } from "@/lib/db"
import { WorkFlowCreate, workflows } from "@/lib/db/schema"

export function listWorkflows(orgId: string) {
  return db
    .select()
    .from(workflows)
    .where(eq(workflows.orgId, orgId))
    .orderBy(desc(workflows.createdAt))
}

export async function createWorkflow(orgId: string, name: string) {
  const [workflow] = await db
    .insert(workflows)
    .values({ orgId, name })
    .returning()

  return workflow
}

// export async function updateWorkflow(id: string, data: typeof workflows.$inferUpdate) {
//     return db.update(workflows).set(data).where(eq(workflows.id, id))
// }

// export async function deleteWorkflow(id: string) {
//   return db.delete(workflows).where(eq(workflows.id, id))
// }

// export async function getWorkflowById(id: string) {
//   return db
//     .select()
//     .from(workflows)
//     .where(eq(workflows.id, id))
//     .then((res) => res[0])
// }
