import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { DealArgsSchema } from '../outputTypeSchemas/DealArgsSchema'

export const DealActivityIncludeSchema: z.ZodType<Prisma.DealActivityInclude> = z
    .object({
        deal: z.union([z.boolean(), z.lazy(() => DealArgsSchema)]).optional()
    })
    .strict()

export default DealActivityIncludeSchema
