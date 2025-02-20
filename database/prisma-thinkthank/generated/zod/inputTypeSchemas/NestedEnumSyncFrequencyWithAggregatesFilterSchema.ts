import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SyncFrequencySchema } from './SyncFrequencySchema'
import { NestedIntFilterSchema } from './NestedIntFilterSchema'
import { NestedEnumSyncFrequencyFilterSchema } from './NestedEnumSyncFrequencyFilterSchema'

export const NestedEnumSyncFrequencyWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumSyncFrequencyWithAggregatesFilter> = z
    .object({
        equals: z.lazy(() => SyncFrequencySchema).optional(),
        in: z
            .lazy(() => SyncFrequencySchema)
            .array()
            .optional(),
        notIn: z
            .lazy(() => SyncFrequencySchema)
            .array()
            .optional(),
        not: z.union([z.lazy(() => SyncFrequencySchema), z.lazy(() => NestedEnumSyncFrequencyWithAggregatesFilterSchema)]).optional(),
        _count: z.lazy(() => NestedIntFilterSchema).optional(),
        _min: z.lazy(() => NestedEnumSyncFrequencyFilterSchema).optional(),
        _max: z.lazy(() => NestedEnumSyncFrequencyFilterSchema).optional()
    })
    .strict()

export default NestedEnumSyncFrequencyWithAggregatesFilterSchema
