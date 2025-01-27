import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InboxStatusSchema } from './InboxStatusSchema';

export const NestedEnumInboxStatusNullableFilterSchema: z.ZodType<Prisma.NestedEnumInboxStatusNullableFilter> = z.object({
  equals: z.lazy(() => InboxStatusSchema).optional().nullable(),
  in: z.lazy(() => InboxStatusSchema).array().optional().nullable(),
  notIn: z.lazy(() => InboxStatusSchema).array().optional().nullable(),
  not: z.union([ z.lazy(() => InboxStatusSchema),z.lazy(() => NestedEnumInboxStatusNullableFilterSchema) ]).optional().nullable(),
}).strict();

export default NestedEnumInboxStatusNullableFilterSchema;
