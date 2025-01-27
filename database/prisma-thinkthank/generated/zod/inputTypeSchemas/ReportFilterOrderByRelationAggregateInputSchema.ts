import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const ReportFilterOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ReportFilterOrderByRelationAggregateInput> = z
    .object({
        _count: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default ReportFilterOrderByRelationAggregateInputSchema
