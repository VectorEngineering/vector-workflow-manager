import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProgramEnrollmentStatusSchema } from './ProgramEnrollmentStatusSchema'
import { NestedEnumProgramEnrollmentStatusWithAggregatesFilterSchema } from './NestedEnumProgramEnrollmentStatusWithAggregatesFilterSchema'
import { NestedIntFilterSchema } from './NestedIntFilterSchema'
import { NestedEnumProgramEnrollmentStatusFilterSchema } from './NestedEnumProgramEnrollmentStatusFilterSchema'

export const EnumProgramEnrollmentStatusWithAggregatesFilterSchema: z.ZodType<Prisma.EnumProgramEnrollmentStatusWithAggregatesFilter> = z
    .object({
        equals: z.lazy(() => ProgramEnrollmentStatusSchema).optional(),
        in: z
            .lazy(() => ProgramEnrollmentStatusSchema)
            .array()
            .optional(),
        notIn: z
            .lazy(() => ProgramEnrollmentStatusSchema)
            .array()
            .optional(),
        not: z
            .union([z.lazy(() => ProgramEnrollmentStatusSchema), z.lazy(() => NestedEnumProgramEnrollmentStatusWithAggregatesFilterSchema)])
            .optional(),
        _count: z.lazy(() => NestedIntFilterSchema).optional(),
        _min: z.lazy(() => NestedEnumProgramEnrollmentStatusFilterSchema).optional(),
        _max: z.lazy(() => NestedEnumProgramEnrollmentStatusFilterSchema).optional()
    })
    .strict()

export default EnumProgramEnrollmentStatusWithAggregatesFilterSchema
