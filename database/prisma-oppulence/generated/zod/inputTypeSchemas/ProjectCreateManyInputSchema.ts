import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { AdminRoleSchema } from './AdminRoleSchema'
import { OrganizationSizeSchema } from './OrganizationSizeSchema'

export const ProjectCreateManyInputSchema: z.ZodType<Prisma.ProjectCreateManyInput> = z
    .object({
        id: z.string().cuid().optional(),
        name: z.string(),
        slug: z.string(),
        logo: z.string().optional().nullable(),
        inviteCode: z.string().optional().nullable(),
        plan: z.string().optional(),
        stripeId: z.string().optional().nullable(),
        billingCycleStart: z.number().int(),
        paymentFailedAt: z.coerce.date().optional().nullable(),
        stripeConnectId: z.string().optional().nullable(),
        payoutMethodId: z.string().optional().nullable(),
        shopifyStoreId: z.string().optional().nullable(),
        invoicePrefix: z.string().optional().nullable(),
        adminRole: z
            .lazy(() => AdminRoleSchema)
            .optional()
            .nullable(),
        organizationSize: z
            .lazy(() => OrganizationSizeSchema)
            .optional()
            .nullable(),
        reason: z.string().optional().nullable(),
        usage: z.number().int().optional(),
        usageLimit: z.number().int().optional(),
        linksUsage: z.number().int().optional(),
        linksLimit: z.number().int().optional(),
        salesUsage: z.number().int().optional(),
        salesLimit: z.number().int().optional(),
        domainsLimit: z.number().int().optional(),
        tagsLimit: z.number().int().optional(),
        usersLimit: z.number().int().optional(),
        aiUsage: z.number().int().optional(),
        aiLimit: z.number().int().optional(),
        transactionCategoriesLimit: z.number().int().optional(),
        bankConnectionsUsage: z.number().int().optional(),
        bankConnectionsLimit: z.number().int().optional(),
        bankAccountsUsage: z.number().int().optional(),
        bankAccountsLimit: z.number().int().optional(),
        documentsUsage: z.number().int().optional(),
        documentsLimit: z.number().int().optional(),
        documentStorageUsage: z.number().int().optional(),
        documentStorageLimit: z.number().int().optional(),
        contractTemplatesUsage: z.number().int().optional(),
        contractTemplatesLimit: z.number().int().optional(),
        activeContractsUsage: z.number().int().optional(),
        activeContractsLimit: z.number().int().optional(),
        invoiceTemplatesUsage: z.number().int().optional(),
        invoiceTemplatesLimit: z.number().int().optional(),
        monthlyInvoicesUsage: z.number().int().optional(),
        monthlyInvoicesLimit: z.number().int().optional(),
        customersUsage: z.number().int().optional(),
        customersLimit: z.number().int().optional(),
        customerTagsUsage: z.number().int().optional(),
        customerTagsLimit: z.number().int().optional(),
        reportsUsage: z.number().int().optional(),
        reportsLimit: z.number().int().optional(),
        reportStorageUsage: z.number().int().optional(),
        reportStorageLimit: z.number().int().optional(),
        apiRequestsUsage: z.number().int().optional(),
        apiRequestsLimit: z.number().int().optional(),
        webhooksUsage: z.number().int().optional(),
        webhooksLimit: z.number().int().optional(),
        integrationsUsage: z.number().int().optional(),
        integrationsLimit: z.number().int().optional(),
        apiTokensUsage: z.number().int().optional(),
        apiTokensLimit: z.number().int().optional(),
        teamMembersUsage: z.number().int().optional(),
        teamMembersLimit: z.number().int().optional(),
        auditLogRetention: z.number().int().optional(),
        referralLinkId: z.string().optional().nullable(),
        referredSignups: z.number().int().optional(),
        webhookEnabled: z.boolean().optional(),
        conversionEnabled: z.boolean().optional(),
        partnersEnabled: z.boolean().optional(),
        ssoEnabled: z.boolean().optional(),
        dotLinkClaimed: z.boolean().optional(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
        usageLastChecked: z.coerce.date().optional()
    })
    .strict()

export default ProjectCreateManyInputSchema
