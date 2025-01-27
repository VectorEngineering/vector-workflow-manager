import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { CampaignTypeSchema } from './CampaignTypeSchema'

export const NestedEnumCampaignTypeFilterSchema: z.ZodType<Prisma.NestedEnumCampaignTypeFilter> = z
    .object({
        equals: z.lazy(() => CampaignTypeSchema).optional(),
        in: z
            .lazy(() => CampaignTypeSchema)
            .array()
            .optional(),
        notIn: z
            .lazy(() => CampaignTypeSchema)
            .array()
            .optional(),
        not: z.union([z.lazy(() => CampaignTypeSchema), z.lazy(() => NestedEnumCampaignTypeFilterSchema)]).optional()
    })
    .strict()

export default NestedEnumCampaignTypeFilterSchema
