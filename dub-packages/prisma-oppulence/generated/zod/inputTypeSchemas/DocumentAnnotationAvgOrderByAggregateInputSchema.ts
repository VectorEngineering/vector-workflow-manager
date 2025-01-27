import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const DocumentAnnotationAvgOrderByAggregateInputSchema: z.ZodType<Prisma.DocumentAnnotationAvgOrderByAggregateInput> = z.object({
  pageNumber: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default DocumentAnnotationAvgOrderByAggregateInputSchema;
