import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const LeadTouchpointUncheckedCreateWithoutCampaignInputSchema: z.ZodType<Prisma.LeadTouchpointUncheckedCreateWithoutCampaignInput> = z.object({
  id: z.string().cuid().optional(),
  leadId: z.string(),
  channel: z.string(),
  campaign: z.string().optional().nullable(),
  content: z.string().optional().nullable(),
  interaction: z.string().optional().nullable(),
  timestamp: z.coerce.date(),
  isFirstTouch: z.boolean(),
  isLastTouch: z.boolean()
}).strict();

export default LeadTouchpointUncheckedCreateWithoutCampaignInputSchema;
