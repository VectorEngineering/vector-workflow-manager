import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const LeadSocialProfileCountOrderByAggregateInputSchema: z.ZodType<Prisma.LeadSocialProfileCountOrderByAggregateInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        leadId: z.lazy(() => SortOrderSchema).optional(),
        platform: z.lazy(() => SortOrderSchema).optional(),
        profileUrl: z.lazy(() => SortOrderSchema).optional(),
        username: z.lazy(() => SortOrderSchema).optional(),
        lastSynced: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default LeadSocialProfileCountOrderByAggregateInputSchema
