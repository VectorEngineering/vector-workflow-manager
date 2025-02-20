import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';

export const SentEmailScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.SentEmailScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => SentEmailScalarWhereWithAggregatesInputSchema),z.lazy(() => SentEmailScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => SentEmailScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SentEmailScalarWhereWithAggregatesInputSchema),z.lazy(() => SentEmailScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  projectId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export default SentEmailScalarWhereWithAggregatesInputSchema;
