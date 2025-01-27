import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { LeadUpdateOneRequiredWithoutTouchpointsNestedInputSchema } from './LeadUpdateOneRequiredWithoutTouchpointsNestedInputSchema';
import { CampaignUpdateManyWithoutTouchpointsNestedInputSchema } from './CampaignUpdateManyWithoutTouchpointsNestedInputSchema';

export const LeadTouchpointUpdateInputSchema: z.ZodType<Prisma.LeadTouchpointUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  channel: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  campaign: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  content: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  interaction: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  timestamp: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  isFirstTouch: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  isLastTouch: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  lead: z.lazy(() => LeadUpdateOneRequiredWithoutTouchpointsNestedInputSchema).optional(),
  Campaign: z.lazy(() => CampaignUpdateManyWithoutTouchpointsNestedInputSchema).optional()
}).strict();

export default LeadTouchpointUpdateInputSchema;
