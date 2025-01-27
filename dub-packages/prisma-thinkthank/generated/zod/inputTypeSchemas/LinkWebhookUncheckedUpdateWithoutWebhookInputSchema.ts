import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';

export const LinkWebhookUncheckedUpdateWithoutWebhookInputSchema: z.ZodType<Prisma.LinkWebhookUncheckedUpdateWithoutWebhookInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  linkId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default LinkWebhookUncheckedUpdateWithoutWebhookInputSchema;
