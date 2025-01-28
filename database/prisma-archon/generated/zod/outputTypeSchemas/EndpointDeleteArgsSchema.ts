import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EndpointIncludeSchema } from '../inputTypeSchemas/EndpointIncludeSchema'
import { EndpointWhereUniqueInputSchema } from '../inputTypeSchemas/EndpointWhereUniqueInputSchema'
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { LeadFindManyArgsSchema } from "../outputTypeSchemas/LeadFindManyArgsSchema"
import { LogFindManyArgsSchema } from "../outputTypeSchemas/LogFindManyArgsSchema"
import { EndpointCountOutputTypeArgsSchema } from "../outputTypeSchemas/EndpointCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const EndpointSelectSchema: z.ZodType<Prisma.EndpointSelect> = z.object({
  id: z.boolean().optional(),
  userId: z.boolean().optional(),
  name: z.boolean().optional(),
  schema: z.boolean().optional(),
  enabled: z.boolean().optional(),
  webhookEnabled: z.boolean().optional(),
  emailNotify: z.boolean().optional(),
  webhook: z.boolean().optional(),
  formEnabled: z.boolean().optional(),
  successUrl: z.boolean().optional(),
  failUrl: z.boolean().optional(),
  token: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  leads: z.union([z.boolean(),z.lazy(() => LeadFindManyArgsSchema)]).optional(),
  logs: z.union([z.boolean(),z.lazy(() => LogFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => EndpointCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const EndpointDeleteArgsSchema: z.ZodType<Prisma.EndpointDeleteArgs> = z.object({
  select: EndpointSelectSchema.optional(),
  include: EndpointIncludeSchema.optional(),
  where: EndpointWhereUniqueInputSchema,
}).strict() ;

export default EndpointDeleteArgsSchema;
