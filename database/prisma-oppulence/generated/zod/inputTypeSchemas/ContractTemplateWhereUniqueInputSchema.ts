import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ContractTemplateWhereInputSchema } from './ContractTemplateWhereInputSchema'
import { StringFilterSchema } from './StringFilterSchema'
import { StringNullableFilterSchema } from './StringNullableFilterSchema'
import { IntFilterSchema } from './IntFilterSchema'
import { JsonNullableFilterSchema } from './JsonNullableFilterSchema'
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema'
import { BoolFilterSchema } from './BoolFilterSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'
import { ProjectRelationFilterSchema } from './ProjectRelationFilterSchema'
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema'

export const ContractTemplateWhereUniqueInputSchema: z.ZodType<Prisma.ContractTemplateWhereUniqueInput> = z
    .object({
        id: z.string().cuid()
    })
    .and(
        z
            .object({
                id: z.string().cuid().optional(),
                AND: z
                    .union([z.lazy(() => ContractTemplateWhereInputSchema), z.lazy(() => ContractTemplateWhereInputSchema).array()])
                    .optional(),
                OR: z
                    .lazy(() => ContractTemplateWhereInputSchema)
                    .array()
                    .optional(),
                NOT: z
                    .union([z.lazy(() => ContractTemplateWhereInputSchema), z.lazy(() => ContractTemplateWhereInputSchema).array()])
                    .optional(),
                name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
                description: z
                    .union([z.lazy(() => StringNullableFilterSchema), z.string()])
                    .optional()
                    .nullable(),
                category: z
                    .union([z.lazy(() => StringNullableFilterSchema), z.string()])
                    .optional()
                    .nullable(),
                type: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
                version: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional(),
                status: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
                language: z
                    .union([z.lazy(() => StringNullableFilterSchema), z.string()])
                    .optional()
                    .nullable(),
                industry: z
                    .union([z.lazy(() => StringNullableFilterSchema), z.string()])
                    .optional()
                    .nullable(),
                content: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
                variables: z.lazy(() => JsonNullableFilterSchema).optional(),
                sections: z.lazy(() => JsonNullableFilterSchema).optional(),
                defaultValues: z.lazy(() => JsonNullableFilterSchema).optional(),
                styling: z.lazy(() => JsonNullableFilterSchema).optional(),
                layout: z.lazy(() => JsonNullableFilterSchema).optional(),
                pageSettings: z.lazy(() => JsonNullableFilterSchema).optional(),
                useCount: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional(),
                lastUsedAt: z
                    .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
                    .optional()
                    .nullable(),
                isPublic: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
                reviewRequired: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
                approvalRequired: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
                fileUrl: z
                    .union([z.lazy(() => StringNullableFilterSchema), z.string()])
                    .optional()
                    .nullable(),
                previewUrl: z
                    .union([z.lazy(() => StringNullableFilterSchema), z.string()])
                    .optional()
                    .nullable(),
                thumbnailUrl: z
                    .union([z.lazy(() => StringNullableFilterSchema), z.string()])
                    .optional()
                    .nullable(),
                accessLevel: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
                permissions: z.lazy(() => JsonNullableFilterSchema).optional(),
                validationRules: z.lazy(() => JsonNullableFilterSchema).optional(),
                requiredFields: z.lazy(() => JsonNullableFilterSchema).optional(),
                projectId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
                createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
                updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
                createdBy: z
                    .union([z.lazy(() => StringNullableFilterSchema), z.string()])
                    .optional()
                    .nullable(),
                updatedBy: z
                    .union([z.lazy(() => StringNullableFilterSchema), z.string()])
                    .optional()
                    .nullable(),
                archivedAt: z
                    .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
                    .optional()
                    .nullable(),
                project: z.union([z.lazy(() => ProjectRelationFilterSchema), z.lazy(() => ProjectWhereInputSchema)]).optional()
            })
            .strict()
    )

export default ContractTemplateWhereUniqueInputSchema
