import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { TokenIncludeSchema } from '../inputTypeSchemas/TokenIncludeSchema'
import { TokenWhereInputSchema } from '../inputTypeSchemas/TokenWhereInputSchema'
import { TokenOrderByWithRelationInputSchema } from '../inputTypeSchemas/TokenOrderByWithRelationInputSchema'
import { TokenWhereUniqueInputSchema } from '../inputTypeSchemas/TokenWhereUniqueInputSchema'
import { TokenScalarFieldEnumSchema } from '../inputTypeSchemas/TokenScalarFieldEnumSchema'
import { UserArgsSchema } from '../outputTypeSchemas/UserArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TokenSelectSchema: z.ZodType<Prisma.TokenSelect> = z
    .object({
        id: z.boolean().optional(),
        name: z.boolean().optional(),
        hashedKey: z.boolean().optional(),
        partialKey: z.boolean().optional(),
        expires: z.boolean().optional(),
        lastUsed: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        userId: z.boolean().optional(),
        user: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional()
    })
    .strict()

export const TokenFindFirstArgsSchema: z.ZodType<Prisma.TokenFindFirstArgs> = z
    .object({
        select: TokenSelectSchema.optional(),
        include: TokenIncludeSchema.optional(),
        where: TokenWhereInputSchema.optional(),
        orderBy: z.union([TokenOrderByWithRelationInputSchema.array(), TokenOrderByWithRelationInputSchema]).optional(),
        cursor: TokenWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.union([TokenScalarFieldEnumSchema, TokenScalarFieldEnumSchema.array()]).optional()
    })
    .strict()

export default TokenFindFirstArgsSchema
