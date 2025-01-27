import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { LeadCompetitiveHistoryUncheckedUpdateManyWithoutAnalysisNestedInputSchema } from './LeadCompetitiveHistoryUncheckedUpdateManyWithoutAnalysisNestedInputSchema';

export const LeadCompetitiveAnalysisUncheckedUpdateWithoutLeadInputSchema: z.ZodType<Prisma.LeadCompetitiveAnalysisUncheckedUpdateWithoutLeadInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  competitiveLandscape: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  ourStrengths: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  ourWeaknesses: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  competitors: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  competitorProducts: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  competitorPricing: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  winStrategy: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  differentiators: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  responseStrategy: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  competitiveRisks: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  marketThreats: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  mitigationPlans: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  lastUpdated: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  nextReviewDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  analysisHistory: z.lazy(() => LeadCompetitiveHistoryUncheckedUpdateManyWithoutAnalysisNestedInputSchema).optional()
}).strict();

export default LeadCompetitiveAnalysisUncheckedUpdateWithoutLeadInputSchema;
