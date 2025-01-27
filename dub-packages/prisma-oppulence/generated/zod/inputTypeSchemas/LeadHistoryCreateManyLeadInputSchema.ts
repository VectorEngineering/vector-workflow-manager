import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const LeadHistoryCreateManyLeadInputSchema: z.ZodType<Prisma.LeadHistoryCreateManyLeadInput> = z.object({
  id: z.string().cuid().optional(),
  action: z.string(),
  description: z.string(),
  changes: z.string().optional().nullable(),
  metadata: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  createdBy: z.string().optional().nullable(),
  changeType: z.string().optional().nullable(),
  source: z.string().optional().nullable(),
  ipAddress: z.string().optional().nullable(),
  userAgent: z.string().optional().nullable()
}).strict();

export default LeadHistoryCreateManyLeadInputSchema;
