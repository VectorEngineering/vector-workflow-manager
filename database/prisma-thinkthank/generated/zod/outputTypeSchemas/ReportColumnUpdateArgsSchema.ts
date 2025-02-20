import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ReportColumnIncludeSchema } from '../inputTypeSchemas/ReportColumnIncludeSchema'
import { ReportColumnUpdateInputSchema } from '../inputTypeSchemas/ReportColumnUpdateInputSchema'
import { ReportColumnUncheckedUpdateInputSchema } from '../inputTypeSchemas/ReportColumnUncheckedUpdateInputSchema'
import { ReportColumnWhereUniqueInputSchema } from '../inputTypeSchemas/ReportColumnWhereUniqueInputSchema'
import { ReportArgsSchema } from '../outputTypeSchemas/ReportArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ReportColumnSelectSchema: z.ZodType<Prisma.ReportColumnSelect> = z
    .object({
        id: z.boolean().optional(),
        reportId: z.boolean().optional(),
        field: z.boolean().optional(),
        label: z.boolean().optional(),
        width: z.boolean().optional(),
        position: z.boolean().optional(),
        isVisible: z.boolean().optional(),
        format: z.boolean().optional(),
        report: z.union([z.boolean(), z.lazy(() => ReportArgsSchema)]).optional()
    })
    .strict()

export const ReportColumnUpdateArgsSchema: z.ZodType<Prisma.ReportColumnUpdateArgs> = z
    .object({
        select: ReportColumnSelectSchema.optional(),
        include: ReportColumnIncludeSchema.optional(),
        data: z.union([ReportColumnUpdateInputSchema, ReportColumnUncheckedUpdateInputSchema]),
        where: ReportColumnWhereUniqueInputSchema
    })
    .strict()

export default ReportColumnUpdateArgsSchema
