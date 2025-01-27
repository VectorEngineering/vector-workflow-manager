import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadCompetitiveHistoryIncludeSchema } from '../inputTypeSchemas/LeadCompetitiveHistoryIncludeSchema'
import { LeadCompetitiveHistoryWhereUniqueInputSchema } from '../inputTypeSchemas/LeadCompetitiveHistoryWhereUniqueInputSchema'
import { LeadCompetitiveAnalysisArgsSchema } from "../outputTypeSchemas/LeadCompetitiveAnalysisArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LeadCompetitiveHistorySelectSchema: z.ZodType<Prisma.LeadCompetitiveHistorySelect> = z.object({
  id: z.boolean().optional(),
  analysisId: z.boolean().optional(),
  changes: z.boolean().optional(),
  reason: z.boolean().optional(),
  createdBy: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  analysis: z.union([z.boolean(),z.lazy(() => LeadCompetitiveAnalysisArgsSchema)]).optional(),
}).strict()

export const LeadCompetitiveHistoryDeleteArgsSchema: z.ZodType<Prisma.LeadCompetitiveHistoryDeleteArgs> = z.object({
  select: LeadCompetitiveHistorySelectSchema.optional(),
  include: LeadCompetitiveHistoryIncludeSchema.optional(),
  where: LeadCompetitiveHistoryWhereUniqueInputSchema,
}).strict() ;

export default LeadCompetitiveHistoryDeleteArgsSchema;
