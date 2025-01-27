import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFilterSchema } from './StringFilterSchema'
import { StringNullableFilterSchema } from './StringNullableFilterSchema'
import { IntFilterSchema } from './IntFilterSchema'
import { BoolFilterSchema } from './BoolFilterSchema'
import { JsonNullableFilterSchema } from './JsonNullableFilterSchema'
import { FloatNullableFilterSchema } from './FloatNullableFilterSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'

export const LeadCategoryScalarWhereInputSchema: z.ZodType<Prisma.LeadCategoryScalarWhereInput> = z
    .object({
        AND: z
            .union([z.lazy(() => LeadCategoryScalarWhereInputSchema), z.lazy(() => LeadCategoryScalarWhereInputSchema).array()])
            .optional(),
        OR: z
            .lazy(() => LeadCategoryScalarWhereInputSchema)
            .array()
            .optional(),
        NOT: z
            .union([z.lazy(() => LeadCategoryScalarWhereInputSchema), z.lazy(() => LeadCategoryScalarWhereInputSchema).array()])
            .optional(),
        id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        slug: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        description: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        color: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        icon: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        parentId: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        path: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        level: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
        isSystem: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
        isActive: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
        metadata: z.lazy(() => JsonNullableFilterSchema).optional(),
        projectId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        budgetLimit: z
            .union([z.lazy(() => FloatNullableFilterSchema), z.number()])
            .optional()
            .nullable(),
        warningThreshold: z
            .union([z.lazy(() => FloatNullableFilterSchema), z.number()])
            .optional()
            .nullable(),
        trackingEnabled: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
        vatRate: z
            .union([z.lazy(() => FloatNullableFilterSchema), z.number()])
            .optional()
            .nullable(),
        taxCode: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        taxDeductible: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
        createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
        updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional()
    })
    .strict()

export default LeadCategoryScalarWhereInputSchema
