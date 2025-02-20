import type { Prisma } from '@prisma/client'

import { z } from 'zod'

export const ReportColumnCreateWithoutReportInputSchema: z.ZodType<Prisma.ReportColumnCreateWithoutReportInput> = z
    .object({
        id: z.string().cuid().optional(),
        field: z.string(),
        label: z.string().optional().nullable(),
        width: z.number().int().optional().nullable(),
        position: z.number().int(),
        isVisible: z.boolean().optional(),
        format: z.string().optional().nullable()
    })
    .strict()

export default ReportColumnCreateWithoutReportInputSchema
