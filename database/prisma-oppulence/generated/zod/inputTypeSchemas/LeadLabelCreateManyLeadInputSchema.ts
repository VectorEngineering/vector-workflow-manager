import type { Prisma } from '@prisma/client'

import { z } from 'zod'

export const LeadLabelCreateManyLeadInputSchema: z.ZodType<Prisma.LeadLabelCreateManyLeadInput> = z
    .object({
        id: z.string().cuid().optional(),
        name: z.string(),
        color: z.string().optional().nullable(),
        description: z.string().optional().nullable(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional()
    })
    .strict()

export default LeadLabelCreateManyLeadInputSchema
