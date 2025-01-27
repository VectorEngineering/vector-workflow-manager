import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { InstalledIntegrationIncludeSchema } from '../inputTypeSchemas/InstalledIntegrationIncludeSchema'
import { InstalledIntegrationWhereUniqueInputSchema } from '../inputTypeSchemas/InstalledIntegrationWhereUniqueInputSchema'
import { InstalledIntegrationCreateInputSchema } from '../inputTypeSchemas/InstalledIntegrationCreateInputSchema'
import { InstalledIntegrationUncheckedCreateInputSchema } from '../inputTypeSchemas/InstalledIntegrationUncheckedCreateInputSchema'
import { InstalledIntegrationUpdateInputSchema } from '../inputTypeSchemas/InstalledIntegrationUpdateInputSchema'
import { InstalledIntegrationUncheckedUpdateInputSchema } from '../inputTypeSchemas/InstalledIntegrationUncheckedUpdateInputSchema'
import { UserArgsSchema } from './UserArgsSchema'
import { IntegrationArgsSchema } from './IntegrationArgsSchema'
import { ProjectArgsSchema } from './ProjectArgsSchema'
import { OAuthRefreshTokenFindManyArgsSchema } from './OAuthRefreshTokenFindManyArgsSchema'
import { RestrictedTokenFindManyArgsSchema } from './RestrictedTokenFindManyArgsSchema'
import { WebhookArgsSchema } from './WebhookArgsSchema'
import { InstalledIntegrationCountOutputTypeArgsSchema } from './InstalledIntegrationCountOutputTypeArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const InstalledIntegrationSelectSchema: z.ZodType<Prisma.InstalledIntegrationSelect> = z
    .object({
        id: z.boolean().optional(),
        userId: z.boolean().optional(),
        integrationId: z.boolean().optional(),
        projectId: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        credentials: z.boolean().optional(),
        user: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
        integration: z.union([z.boolean(), z.lazy(() => IntegrationArgsSchema)]).optional(),
        project: z.union([z.boolean(), z.lazy(() => ProjectArgsSchema)]).optional(),
        refreshTokens: z.union([z.boolean(), z.lazy(() => OAuthRefreshTokenFindManyArgsSchema)]).optional(),
        accessTokens: z.union([z.boolean(), z.lazy(() => RestrictedTokenFindManyArgsSchema)]).optional(),
        webhook: z.union([z.boolean(), z.lazy(() => WebhookArgsSchema)]).optional(),
        _count: z.union([z.boolean(), z.lazy(() => InstalledIntegrationCountOutputTypeArgsSchema)]).optional()
    })
    .strict()

export const InstalledIntegrationUpsertArgsSchema: z.ZodType<Prisma.InstalledIntegrationUpsertArgs> = z
    .object({
        select: InstalledIntegrationSelectSchema.optional(),
        include: InstalledIntegrationIncludeSchema.optional(),
        where: InstalledIntegrationWhereUniqueInputSchema,
        create: z.union([InstalledIntegrationCreateInputSchema, InstalledIntegrationUncheckedCreateInputSchema]),
        update: z.union([InstalledIntegrationUpdateInputSchema, InstalledIntegrationUncheckedUpdateInputSchema])
    })
    .strict()

export default InstalledIntegrationUpsertArgsSchema
