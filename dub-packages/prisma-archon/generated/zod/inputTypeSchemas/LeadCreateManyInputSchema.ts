import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';

export const LeadCreateManyInputSchema: z.ZodType<Prisma.LeadCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  endpointId: z.string(),
  data: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date()
}).strict();

export default LeadCreateManyInputSchema;
