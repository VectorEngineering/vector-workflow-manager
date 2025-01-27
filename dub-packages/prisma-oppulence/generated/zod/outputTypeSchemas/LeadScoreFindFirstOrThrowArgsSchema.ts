import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadScoreIncludeSchema } from '../inputTypeSchemas/LeadScoreIncludeSchema'
import { LeadScoreWhereInputSchema } from '../inputTypeSchemas/LeadScoreWhereInputSchema'
import { LeadScoreOrderByWithRelationInputSchema } from '../inputTypeSchemas/LeadScoreOrderByWithRelationInputSchema'
import { LeadScoreWhereUniqueInputSchema } from '../inputTypeSchemas/LeadScoreWhereUniqueInputSchema'
import { LeadScoreScalarFieldEnumSchema } from '../inputTypeSchemas/LeadScoreScalarFieldEnumSchema'
import { LeadArgsSchema } from "../outputTypeSchemas/LeadArgsSchema"
import { LeadScoreHistoryFindManyArgsSchema } from "../outputTypeSchemas/LeadScoreHistoryFindManyArgsSchema"
import { LeadScoreCountOutputTypeArgsSchema } from "../outputTypeSchemas/LeadScoreCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LeadScoreSelectSchema: z.ZodType<Prisma.LeadScoreSelect> = z.object({
  id: z.boolean().optional(),
  leadId: z.boolean().optional(),
  websiteVisits: z.boolean().optional(),
  emailEngagement: z.boolean().optional(),
  socialEngagement: z.boolean().optional(),
  contentDownloads: z.boolean().optional(),
  companySizeScore: z.boolean().optional(),
  industryScore: z.boolean().optional(),
  budgetScore: z.boolean().optional(),
  technicalFitScore: z.boolean().optional(),
  meetingAttendance: z.boolean().optional(),
  responseTime: z.boolean().optional(),
  interactionQuality: z.boolean().optional(),
  behavioralWeight: z.boolean().optional(),
  demographicWeight: z.boolean().optional(),
  engagementWeight: z.boolean().optional(),
  totalScore: z.boolean().optional(),
  scoringMethod: z.boolean().optional(),
  lastCalculated: z.boolean().optional(),
  nextRecalculation: z.boolean().optional(),
  mlFeatures: z.boolean().optional(),
  confidenceScore: z.boolean().optional(),
  lead: z.union([z.boolean(),z.lazy(() => LeadArgsSchema)]).optional(),
  scoreHistory: z.union([z.boolean(),z.lazy(() => LeadScoreHistoryFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => LeadScoreCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const LeadScoreFindFirstOrThrowArgsSchema: z.ZodType<Prisma.LeadScoreFindFirstOrThrowArgs> = z.object({
  select: LeadScoreSelectSchema.optional(),
  include: LeadScoreIncludeSchema.optional(),
  where: LeadScoreWhereInputSchema.optional(),
  orderBy: z.union([ LeadScoreOrderByWithRelationInputSchema.array(),LeadScoreOrderByWithRelationInputSchema ]).optional(),
  cursor: LeadScoreWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ LeadScoreScalarFieldEnumSchema,LeadScoreScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default LeadScoreFindFirstOrThrowArgsSchema;
