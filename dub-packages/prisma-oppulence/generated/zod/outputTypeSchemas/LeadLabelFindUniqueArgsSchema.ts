import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadLabelIncludeSchema } from '../inputTypeSchemas/LeadLabelIncludeSchema'
import { LeadLabelWhereUniqueInputSchema } from '../inputTypeSchemas/LeadLabelWhereUniqueInputSchema'
import { LeadArgsSchema } from "../outputTypeSchemas/LeadArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LeadLabelSelectSchema: z.ZodType<Prisma.LeadLabelSelect> = z.object({
  id: z.boolean().optional(),
  leadId: z.boolean().optional(),
  name: z.boolean().optional(),
  color: z.boolean().optional(),
  description: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  lead: z.union([z.boolean(),z.lazy(() => LeadArgsSchema)]).optional(),
}).strict()

export const LeadLabelFindUniqueArgsSchema: z.ZodType<Prisma.LeadLabelFindUniqueArgs> = z.object({
  select: LeadLabelSelectSchema.optional(),
  include: LeadLabelIncludeSchema.optional(),
  where: LeadLabelWhereUniqueInputSchema,
}).strict() ;

export default LeadLabelFindUniqueArgsSchema;
