import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TransactionCategoryAvgOrderByAggregateInputSchema: z.ZodType<Prisma.TransactionCategoryAvgOrderByAggregateInput> = z.object({
  level: z.lazy(() => SortOrderSchema).optional(),
  budgetLimit: z.lazy(() => SortOrderSchema).optional(),
  warningThreshold: z.lazy(() => SortOrderSchema).optional(),
  vatRate: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default TransactionCategoryAvgOrderByAggregateInputSchema;
