import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { UtmTemplateIncludeSchema } from '../inputTypeSchemas/UtmTemplateIncludeSchema'
import { UtmTemplateUpdateInputSchema } from '../inputTypeSchemas/UtmTemplateUpdateInputSchema'
import { UtmTemplateUncheckedUpdateInputSchema } from '../inputTypeSchemas/UtmTemplateUncheckedUpdateInputSchema'
import { UtmTemplateWhereUniqueInputSchema } from '../inputTypeSchemas/UtmTemplateWhereUniqueInputSchema'
import { UserArgsSchema } from '../outputTypeSchemas/UserArgsSchema'
import { ProjectArgsSchema } from '../outputTypeSchemas/ProjectArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const UtmTemplateSelectSchema: z.ZodType<Prisma.UtmTemplateSelect> = z
    .object({
        id: z.boolean().optional(),
        name: z.boolean().optional(),
        utm_source: z.boolean().optional(),
        utm_medium: z.boolean().optional(),
        utm_campaign: z.boolean().optional(),
        utm_term: z.boolean().optional(),
        utm_content: z.boolean().optional(),
        ref: z.boolean().optional(),
        userId: z.boolean().optional(),
        projectId: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        user: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
        project: z.union([z.boolean(), z.lazy(() => ProjectArgsSchema)]).optional()
    })
    .strict()

export const UtmTemplateUpdateArgsSchema: z.ZodType<Prisma.UtmTemplateUpdateArgs> = z
    .object({
        select: UtmTemplateSelectSchema.optional(),
        include: UtmTemplateIncludeSchema.optional(),
        data: z.union([UtmTemplateUpdateInputSchema, UtmTemplateUncheckedUpdateInputSchema]),
        where: UtmTemplateWhereUniqueInputSchema
    })
    .strict()

export default UtmTemplateUpdateArgsSchema
