import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const DealCompetitorOrderByRelationAggregateInputSchema: z.ZodType<Prisma.DealCompetitorOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default DealCompetitorOrderByRelationAggregateInputSchema;
