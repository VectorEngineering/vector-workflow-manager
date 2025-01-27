import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema'
import { InputJsonValueSchema } from './InputJsonValueSchema'
import { ProjectCreateNestedOneWithoutDocumentInputSchema } from './ProjectCreateNestedOneWithoutDocumentInputSchema'

export const DocumentCreateWithoutOwnerInputSchema: z.ZodType<Prisma.DocumentCreateWithoutOwnerInput> = z
    .object({
        id: z.string().cuid().optional(),
        body: z.string().optional().nullable(),
        createdAt: z.coerce.date().optional().nullable(),
        metadata: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
        name: z.string().optional().nullable(),
        objectId: z.string().optional().nullable(),
        parentId: z.string().optional().nullable(),
        pathTokens: z.string(),
        tag: z.string().optional().nullable(),
        title: z.string().optional().nullable(),
        project: z.lazy(() => ProjectCreateNestedOneWithoutDocumentInputSchema).optional()
    })
    .strict()

export default DocumentCreateWithoutOwnerInputSchema
