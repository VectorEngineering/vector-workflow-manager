import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ReportTypeSchema } from './ReportTypeSchema'
import { NestedIntFilterSchema } from './NestedIntFilterSchema'
import { NestedEnumReportTypeFilterSchema } from './NestedEnumReportTypeFilterSchema'

export const NestedEnumReportTypeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumReportTypeWithAggregatesFilter> = z
    .object({
        equals: z.lazy(() => ReportTypeSchema).optional(),
        in: z
            .lazy(() => ReportTypeSchema)
            .array()
            .optional(),
        notIn: z
            .lazy(() => ReportTypeSchema)
            .array()
            .optional(),
        not: z.union([z.lazy(() => ReportTypeSchema), z.lazy(() => NestedEnumReportTypeWithAggregatesFilterSchema)]).optional(),
        _count: z.lazy(() => NestedIntFilterSchema).optional(),
        _min: z.lazy(() => NestedEnumReportTypeFilterSchema).optional(),
        _max: z.lazy(() => NestedEnumReportTypeFilterSchema).optional()
    })
    .strict()

export default NestedEnumReportTypeWithAggregatesFilterSchema
