import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const LeadBudgetRevisionCreateWithoutBudgetInputSchema: z.ZodType<Prisma.LeadBudgetRevisionCreateWithoutBudgetInput> = z.object({
  id: z.string().cuid().optional(),
  previousAmount: z.number(),
  newAmount: z.number(),
  reason: z.string(),
  approvedBy: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional()
}).strict();

export default LeadBudgetRevisionCreateWithoutBudgetInputSchema;
