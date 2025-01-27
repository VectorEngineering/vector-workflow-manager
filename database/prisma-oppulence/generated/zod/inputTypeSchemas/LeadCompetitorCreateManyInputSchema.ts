import type { Prisma } from '@prisma/client'

import { z } from 'zod'

export const LeadCompetitorCreateManyInputSchema: z.ZodType<Prisma.LeadCompetitorCreateManyInput> = z
    .object({
        id: z.string().cuid().optional(),
        leadId: z.string(),
        name: z.string(),
        strengths: z.string(),
        weaknesses: z.string(),
        pricing: z.string().optional().nullable(),
        differentiator: z.string().optional().nullable(),
        status: z.string()
    })
    .strict()

export default LeadCompetitorCreateManyInputSchema
