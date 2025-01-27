import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const TransactionEnrichmentSumOrderByAggregateInputSchema: z.ZodType<Prisma.TransactionEnrichmentSumOrderByAggregateInput> = z
    .object({
        confidence: z.lazy(() => SortOrderSchema).optional(),
        riskScore: z.lazy(() => SortOrderSchema).optional(),
        anomalyScore: z.lazy(() => SortOrderSchema).optional(),
        priority: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default TransactionEnrichmentSumOrderByAggregateInputSchema
