import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TransactionCategoryCreateManyParentInputSchema } from './TransactionCategoryCreateManyParentInputSchema';

export const TransactionCategoryCreateManyParentInputEnvelopeSchema: z.ZodType<Prisma.TransactionCategoryCreateManyParentInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => TransactionCategoryCreateManyParentInputSchema),z.lazy(() => TransactionCategoryCreateManyParentInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default TransactionCategoryCreateManyParentInputEnvelopeSchema;
