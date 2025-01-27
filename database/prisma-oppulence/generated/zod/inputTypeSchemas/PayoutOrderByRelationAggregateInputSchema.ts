import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const PayoutOrderByRelationAggregateInputSchema: z.ZodType<Prisma.PayoutOrderByRelationAggregateInput> = z
    .object({
        _count: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default PayoutOrderByRelationAggregateInputSchema
