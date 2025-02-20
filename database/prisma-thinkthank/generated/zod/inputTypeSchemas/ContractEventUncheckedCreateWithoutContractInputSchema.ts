import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ContractEventUncheckedCreateWithoutContractInputSchema: z.ZodType<Prisma.ContractEventUncheckedCreateWithoutContractInput> = z.object({
  id: z.string().cuid().optional(),
  type: z.string(),
  description: z.string(),
  status: z.string(),
  dueDate: z.coerce.date().optional().nullable(),
  completedAt: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  createdBy: z.string().optional().nullable()
}).strict();

export default ContractEventUncheckedCreateWithoutContractInputSchema;
