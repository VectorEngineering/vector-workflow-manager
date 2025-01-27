import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DealIncludeSchema } from '../inputTypeSchemas/DealIncludeSchema'
import { DealWhereInputSchema } from '../inputTypeSchemas/DealWhereInputSchema'
import { DealOrderByWithRelationInputSchema } from '../inputTypeSchemas/DealOrderByWithRelationInputSchema'
import { DealWhereUniqueInputSchema } from '../inputTypeSchemas/DealWhereUniqueInputSchema'
import { DealScalarFieldEnumSchema } from '../inputTypeSchemas/DealScalarFieldEnumSchema'
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { ProjectArgsSchema } from "../outputTypeSchemas/ProjectArgsSchema"
import { PipelineArgsSchema } from "../outputTypeSchemas/PipelineArgsSchema"
import { PipelineStageArgsSchema } from "../outputTypeSchemas/PipelineStageArgsSchema"
import { LeadArgsSchema } from "../outputTypeSchemas/LeadArgsSchema"
import { DealActivityFindManyArgsSchema } from "../outputTypeSchemas/DealActivityFindManyArgsSchema"
import { DealProductFindManyArgsSchema } from "../outputTypeSchemas/DealProductFindManyArgsSchema"
import { DealCompetitorFindManyArgsSchema } from "../outputTypeSchemas/DealCompetitorFindManyArgsSchema"
import { DocumentFindManyArgsSchema } from "../outputTypeSchemas/DocumentFindManyArgsSchema"
import { DealTaskFindManyArgsSchema } from "../outputTypeSchemas/DealTaskFindManyArgsSchema"
import { DealHistoryFindManyArgsSchema } from "../outputTypeSchemas/DealHistoryFindManyArgsSchema"
import { DealCountOutputTypeArgsSchema } from "../outputTypeSchemas/DealCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const DealSelectSchema: z.ZodType<Prisma.DealSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  pipelineId: z.boolean().optional(),
  stageId: z.boolean().optional(),
  leadId: z.boolean().optional(),
  status: z.boolean().optional(),
  priority: z.boolean().optional(),
  value: z.boolean().optional(),
  currency: z.boolean().optional(),
  probability: z.boolean().optional(),
  expectedRevenue: z.boolean().optional(),
  dealCategory: z.boolean().optional(),
  dealFocus: z.boolean().optional(),
  synergyPotential: z.boolean().optional(),
  synergyDescription: z.boolean().optional(),
  complianceCheck: z.boolean().optional(),
  complianceNotes: z.boolean().optional(),
  estimatedProfitMargin: z.boolean().optional(),
  discountReason: z.boolean().optional(),
  closingStrategy: z.boolean().optional(),
  marketingChannel: z.boolean().optional(),
  leadRating: z.boolean().optional(),
  startDate: z.boolean().optional(),
  closeDate: z.boolean().optional(),
  actualCloseDate: z.boolean().optional(),
  progress: z.boolean().optional(),
  reason: z.boolean().optional(),
  notes: z.boolean().optional(),
  assignedToId: z.boolean().optional(),
  projectId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  archivedAt: z.boolean().optional(),
  createdBy: z.boolean().optional(),
  updatedBy: z.boolean().optional(),
  assignedTo: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  project: z.union([z.boolean(),z.lazy(() => ProjectArgsSchema)]).optional(),
  pipeline: z.union([z.boolean(),z.lazy(() => PipelineArgsSchema)]).optional(),
  stage: z.union([z.boolean(),z.lazy(() => PipelineStageArgsSchema)]).optional(),
  lead: z.union([z.boolean(),z.lazy(() => LeadArgsSchema)]).optional(),
  activities: z.union([z.boolean(),z.lazy(() => DealActivityFindManyArgsSchema)]).optional(),
  products: z.union([z.boolean(),z.lazy(() => DealProductFindManyArgsSchema)]).optional(),
  competitors: z.union([z.boolean(),z.lazy(() => DealCompetitorFindManyArgsSchema)]).optional(),
  attachments: z.union([z.boolean(),z.lazy(() => DocumentFindManyArgsSchema)]).optional(),
  tasks: z.union([z.boolean(),z.lazy(() => DealTaskFindManyArgsSchema)]).optional(),
  history: z.union([z.boolean(),z.lazy(() => DealHistoryFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => DealCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const DealFindFirstArgsSchema: z.ZodType<Prisma.DealFindFirstArgs> = z.object({
  select: DealSelectSchema.optional(),
  include: DealIncludeSchema.optional(),
  where: DealWhereInputSchema.optional(),
  orderBy: z.union([ DealOrderByWithRelationInputSchema.array(),DealOrderByWithRelationInputSchema ]).optional(),
  cursor: DealWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ DealScalarFieldEnumSchema,DealScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default DealFindFirstArgsSchema;
