import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const ProgramEnrollmentSumOrderByAggregateInputSchema: z.ZodType<Prisma.ProgramEnrollmentSumOrderByAggregateInput> = z
    .object({
        commissionAmount: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default ProgramEnrollmentSumOrderByAggregateInputSchema
