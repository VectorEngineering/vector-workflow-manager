import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const AccessRuleConditionMaxOrderByAggregateInputSchema: z.ZodType<Prisma.AccessRuleConditionMaxOrderByAggregateInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        ruleId: z.lazy(() => SortOrderSchema).optional(),
        field: z.lazy(() => SortOrderSchema).optional(),
        operator: z.lazy(() => SortOrderSchema).optional(),
        value: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default AccessRuleConditionMaxOrderByAggregateInputSchema
