import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserIncludeSchema } from '../inputTypeSchemas/UserIncludeSchema'
import { UserCreateInputSchema } from '../inputTypeSchemas/UserCreateInputSchema'
import { UserUncheckedCreateInputSchema } from '../inputTypeSchemas/UserUncheckedCreateInputSchema'
import { WorkspaceFindManyArgsSchema } from "../outputTypeSchemas/WorkspaceFindManyArgsSchema"
import { WorkspaceMemberFindManyArgsSchema } from "../outputTypeSchemas/WorkspaceMemberFindManyArgsSchema"
import { EndpointFindManyArgsSchema } from "../outputTypeSchemas/EndpointFindManyArgsSchema"
import { UserCountOutputTypeArgsSchema } from "../outputTypeSchemas/UserCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const UserSelectSchema: z.ZodType<Prisma.UserSelect> = z.object({
  id: z.boolean().optional(),
  email: z.boolean().optional(),
  name: z.boolean().optional(),
  firstName: z.boolean().optional(),
  lastName: z.boolean().optional(),
  imageUrl: z.boolean().optional(),
  username: z.boolean().optional(),
  profileImageUrl: z.boolean().optional(),
  hasImage: z.boolean().optional(),
  lastSignInAt: z.boolean().optional(),
  lastActiveAt: z.boolean().optional(),
  banned: z.boolean().optional(),
  passwordEnabled: z.boolean().optional(),
  twoFactorEnabled: z.boolean().optional(),
  publicMetadata: z.boolean().optional(),
  privateMetadata: z.boolean().optional(),
  unsafeMetadata: z.boolean().optional(),
  emailVerified: z.boolean().optional(),
  leadCount: z.boolean().optional(),
  plan: z.boolean().optional(),
  stripeCustomerId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  onboardingComplete: z.boolean().optional(),
  companyName: z.boolean().optional(),
  role: z.boolean().optional(),
  useCase: z.boolean().optional(),
  workspaces: z.union([z.boolean(),z.lazy(() => WorkspaceFindManyArgsSchema)]).optional(),
  workspaceMembers: z.union([z.boolean(),z.lazy(() => WorkspaceMemberFindManyArgsSchema)]).optional(),
  endpoints: z.union([z.boolean(),z.lazy(() => EndpointFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UserCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const UserCreateArgsSchema: z.ZodType<Prisma.UserCreateArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  data: z.union([ UserCreateInputSchema,UserUncheckedCreateInputSchema ]),
}).strict() ;

export default UserCreateArgsSchema;
