import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TransactionHistoryOrderByRelationAggregateInputSchema: z.ZodType<Prisma.TransactionHistoryOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default TransactionHistoryOrderByRelationAggregateInputSchema;
