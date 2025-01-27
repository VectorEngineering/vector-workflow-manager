import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TagCountOrderByAggregateInputSchema: z.ZodType<Prisma.TagCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  color: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  projectId: z.lazy(() => SortOrderSchema).optional(),
  context: z.lazy(() => SortOrderSchema).optional(),
  confidence: z.lazy(() => SortOrderSchema).optional(),
  metadata: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default TagCountOrderByAggregateInputSchema;
