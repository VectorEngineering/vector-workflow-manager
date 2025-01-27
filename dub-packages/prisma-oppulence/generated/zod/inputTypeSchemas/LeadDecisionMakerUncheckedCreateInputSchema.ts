import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const LeadDecisionMakerUncheckedCreateInputSchema: z.ZodType<Prisma.LeadDecisionMakerUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  leadId: z.string(),
  name: z.string(),
  title: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  phone: z.string().optional().nullable(),
  influence: z.string(),
  notes: z.string().optional().nullable()
}).strict();

export default LeadDecisionMakerUncheckedCreateInputSchema;
