import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { DocumentCommentIncludeSchema } from '../inputTypeSchemas/DocumentCommentIncludeSchema'
import { DocumentCommentCreateInputSchema } from '../inputTypeSchemas/DocumentCommentCreateInputSchema'
import { DocumentCommentUncheckedCreateInputSchema } from '../inputTypeSchemas/DocumentCommentUncheckedCreateInputSchema'
import { ContractDocumentArgsSchema } from '../outputTypeSchemas/ContractDocumentArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const DocumentCommentSelectSchema: z.ZodType<Prisma.DocumentCommentSelect> = z
    .object({
        id: z.boolean().optional(),
        documentId: z.boolean().optional(),
        content: z.boolean().optional(),
        type: z.boolean().optional(),
        status: z.boolean().optional(),
        parentCommentId: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        createdBy: z.boolean().optional(),
        updatedBy: z.boolean().optional(),
        document: z.union([z.boolean(), z.lazy(() => ContractDocumentArgsSchema)]).optional()
    })
    .strict()

export const DocumentCommentCreateArgsSchema: z.ZodType<Prisma.DocumentCommentCreateArgs> = z
    .object({
        select: DocumentCommentSelectSchema.optional(),
        include: DocumentCommentIncludeSchema.optional(),
        data: z.union([DocumentCommentCreateInputSchema, DocumentCommentUncheckedCreateInputSchema])
    })
    .strict()

export default DocumentCommentCreateArgsSchema
