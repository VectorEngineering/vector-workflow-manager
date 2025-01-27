import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { FilterOperatorSchema } from './FilterOperatorSchema'

export const ReportFilterCreateManyReportInputSchema: z.ZodType<Prisma.ReportFilterCreateManyReportInput> = z
    .object({
        id: z.string().cuid().optional(),
        field: z.string(),
        operator: z.lazy(() => FilterOperatorSchema),
        value: z.string(),
        valueType: z.string(),
        group: z.string().optional().nullable(),
        position: z.number().int()
    })
    .strict()

export default ReportFilterCreateManyReportInputSchema
