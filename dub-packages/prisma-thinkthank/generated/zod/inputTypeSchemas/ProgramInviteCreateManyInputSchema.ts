import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ProgramInviteCreateManyInputSchema: z.ZodType<Prisma.ProgramInviteCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  programId: z.string(),
  email: z.string(),
  linkId: z.string(),
  createdAt: z.coerce.date().optional()
}).strict();

export default ProgramInviteCreateManyInputSchema;
