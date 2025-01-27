import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { DealTaskIncludeSchema } from '../inputTypeSchemas/DealTaskIncludeSchema'
import { DealTaskWhereUniqueInputSchema } from '../inputTypeSchemas/DealTaskWhereUniqueInputSchema'
import { DealTaskCreateInputSchema } from '../inputTypeSchemas/DealTaskCreateInputSchema'
import { DealTaskUncheckedCreateInputSchema } from '../inputTypeSchemas/DealTaskUncheckedCreateInputSchema'
import { DealTaskUpdateInputSchema } from '../inputTypeSchemas/DealTaskUpdateInputSchema'
import { DealTaskUncheckedUpdateInputSchema } from '../inputTypeSchemas/DealTaskUncheckedUpdateInputSchema'
import { DealArgsSchema } from './DealArgsSchema'
import { UserArgsSchema } from './UserArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const DealTaskSelectSchema: z.ZodType<Prisma.DealTaskSelect> = z
    .object({
        id: z.boolean().optional(),
        dealId: z.boolean().optional(),
        title: z.boolean().optional(),
        description: z.boolean().optional(),
        dueDate: z.boolean().optional(),
        priority: z.boolean().optional(),
        status: z.boolean().optional(),
        completedAt: z.boolean().optional(),
        assignedToId: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        deal: z.union([z.boolean(), z.lazy(() => DealArgsSchema)]).optional(),
        assignedTo: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional()
    })
    .strict()

export const DealTaskUpsertArgsSchema: z.ZodType<Prisma.DealTaskUpsertArgs> = z
    .object({
        select: DealTaskSelectSchema.optional(),
        include: DealTaskIncludeSchema.optional(),
        where: DealTaskWhereUniqueInputSchema,
        create: z.union([DealTaskCreateInputSchema, DealTaskUncheckedCreateInputSchema]),
        update: z.union([DealTaskUpdateInputSchema, DealTaskUncheckedUpdateInputSchema])
    })
    .strict()

export default DealTaskUpsertArgsSchema
