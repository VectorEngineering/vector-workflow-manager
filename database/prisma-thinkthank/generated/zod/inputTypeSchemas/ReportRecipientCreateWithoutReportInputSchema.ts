import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ReportRecipientCreateWithoutReportInputSchema: z.ZodType<Prisma.ReportRecipientCreateWithoutReportInput> = z.object({
  id: z.string().cuid().optional(),
  email: z.string(),
  name: z.string().optional().nullable(),
  type: z.string(),
  isActive: z.boolean().optional()
}).strict();

export default ReportRecipientCreateWithoutReportInputSchema;
