import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';

export const LeadSegmentationHistoryUncheckedCreateInputSchema: z.ZodType<Prisma.LeadSegmentationHistoryUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  segmentationId: z.string(),
  previousSegments: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]),
  newSegments: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]),
  reason: z.string(),
  createdAt: z.coerce.date().optional()
}).strict();

export default LeadSegmentationHistoryUncheckedCreateInputSchema;
