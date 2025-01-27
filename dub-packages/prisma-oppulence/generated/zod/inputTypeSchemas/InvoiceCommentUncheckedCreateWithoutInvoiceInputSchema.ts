import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvoiceCommentTypeSchema } from './InvoiceCommentTypeSchema';
import { InvoiceCommentVisibilitySchema } from './InvoiceCommentVisibilitySchema';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { InvoiceCommentUncheckedCreateNestedManyWithoutParentInputSchema } from './InvoiceCommentUncheckedCreateNestedManyWithoutParentInputSchema';

export const InvoiceCommentUncheckedCreateWithoutInvoiceInputSchema: z.ZodType<Prisma.InvoiceCommentUncheckedCreateWithoutInvoiceInput> = z.object({
  id: z.string().cuid().optional(),
  content: z.string(),
  type: z.lazy(() => InvoiceCommentTypeSchema).optional(),
  visibility: z.lazy(() => InvoiceCommentVisibilitySchema).optional(),
  title: z.string().optional().nullable(),
  priority: z.string().optional().nullable(),
  status: z.string().optional().nullable(),
  tags: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  metadata: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  attachments: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  mentions: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  formatting: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  parentId: z.string().optional().nullable(),
  threadPath: z.string().optional().nullable(),
  replyCount: z.number().int().optional(),
  isEdited: z.boolean().optional(),
  editedAt: z.coerce.date().optional().nullable(),
  lastReplyAt: z.coerce.date().optional().nullable(),
  resolvedAt: z.coerce.date().optional().nullable(),
  resolvedBy: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  createdBy: z.string().optional().nullable(),
  updatedBy: z.string().optional().nullable(),
  replies: z.lazy(() => InvoiceCommentUncheckedCreateNestedManyWithoutParentInputSchema).optional()
}).strict();

export default InvoiceCommentUncheckedCreateWithoutInvoiceInputSchema;
