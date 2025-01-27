import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';

export const LeadSegmentationHistoryCreateManySegmentationInputSchema: z.ZodType<Prisma.LeadSegmentationHistoryCreateManySegmentationInput> = z.object({
  id: z.string().cuid().optional(),
  previousSegments: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]),
  newSegments: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]),
  reason: z.string(),
  createdAt: z.coerce.date().optional()
}).strict();

export default LeadSegmentationHistoryCreateManySegmentationInputSchema;
