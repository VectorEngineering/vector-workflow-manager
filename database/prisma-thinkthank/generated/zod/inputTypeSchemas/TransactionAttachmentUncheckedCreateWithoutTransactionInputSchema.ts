import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema'
import { InputJsonValueSchema } from './InputJsonValueSchema'
import { InboxUncheckedCreateNestedManyWithoutAttachmentInputSchema } from './InboxUncheckedCreateNestedManyWithoutAttachmentInputSchema'

export const TransactionAttachmentUncheckedCreateWithoutTransactionInputSchema: z.ZodType<Prisma.TransactionAttachmentUncheckedCreateWithoutTransactionInput> =
    z
        .object({
            id: z.string().cuid().optional(),
            name: z.string().optional().nullable(),
            description: z.string().optional().nullable(),
            type: z.string().optional().nullable(),
            category: z.string().optional().nullable(),
            path: z.string(),
            size: z.number().int().optional().nullable(),
            mimeType: z.string().optional().nullable(),
            hash: z.string().optional().nullable(),
            metadata: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
            isConfidential: z.boolean().optional(),
            status: z.string().optional().nullable(),
            processingErrors: z.string().optional().nullable(),
            ocrText: z.string().optional().nullable(),
            analysisResults: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
            createdAt: z.coerce.date().optional(),
            updatedAt: z.coerce.date().optional(),
            projectId: z.string(),
            blob: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
            inbox: z.lazy(() => InboxUncheckedCreateNestedManyWithoutAttachmentInputSchema).optional()
        })
        .strict()

export default TransactionAttachmentUncheckedCreateWithoutTransactionInputSchema
