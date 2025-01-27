import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PasswordResetTokenUpdateInputSchema } from '../inputTypeSchemas/PasswordResetTokenUpdateInputSchema'
import { PasswordResetTokenUncheckedUpdateInputSchema } from '../inputTypeSchemas/PasswordResetTokenUncheckedUpdateInputSchema'
import { PasswordResetTokenWhereUniqueInputSchema } from '../inputTypeSchemas/PasswordResetTokenWhereUniqueInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PasswordResetTokenSelectSchema: z.ZodType<Prisma.PasswordResetTokenSelect> = z.object({
  identifier: z.boolean().optional(),
  token: z.boolean().optional(),
  expires: z.boolean().optional(),
}).strict()

export const PasswordResetTokenUpdateArgsSchema: z.ZodType<Prisma.PasswordResetTokenUpdateArgs> = z.object({
  select: PasswordResetTokenSelectSchema.optional(),
  data: z.union([ PasswordResetTokenUpdateInputSchema,PasswordResetTokenUncheckedUpdateInputSchema ]),
  where: PasswordResetTokenWhereUniqueInputSchema,
}).strict() ;

export default PasswordResetTokenUpdateArgsSchema;
