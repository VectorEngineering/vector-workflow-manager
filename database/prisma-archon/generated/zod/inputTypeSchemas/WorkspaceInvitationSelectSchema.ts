import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { WorkspaceArgsSchema } from '../outputTypeSchemas/WorkspaceArgsSchema'

export const WorkspaceInvitationSelectSchema: z.ZodType<Prisma.WorkspaceInvitationSelect> = z
    .object({
        id: z.boolean().optional(),
        workspaceId: z.boolean().optional(),
        email: z.boolean().optional(),
        token: z.boolean().optional(),
        status: z.boolean().optional(),
        expiresAt: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        workspace: z.union([z.boolean(), z.lazy(() => WorkspaceArgsSchema)]).optional()
    })
    .strict()

export default WorkspaceInvitationSelectSchema
