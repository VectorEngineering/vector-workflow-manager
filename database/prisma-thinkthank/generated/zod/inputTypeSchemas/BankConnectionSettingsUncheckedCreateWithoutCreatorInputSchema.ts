import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SyncFrequencySchema } from './SyncFrequencySchema'
import { ConnectionStatusSchema } from './ConnectionStatusSchema'
import { WebhookUncheckedCreateNestedManyWithoutBankConnectionSettingsInputSchema } from './WebhookUncheckedCreateNestedManyWithoutBankConnectionSettingsInputSchema'

export const BankConnectionSettingsUncheckedCreateWithoutCreatorInputSchema: z.ZodType<Prisma.BankConnectionSettingsUncheckedCreateWithoutCreatorInput> =
    z
        .object({
            id: z.string().cuid().optional(),
            syncEnabled: z.boolean().optional(),
            syncStartTime: z.string().optional().nullable(),
            syncDayOfWeek: z.number().int().optional().nullable(),
            syncDayOfMonth: z.number().int().optional().nullable(),
            syncFrequency: z.lazy(() => SyncFrequencySchema).optional(),
            connectionTimeout: z.number().int().optional(),
            readTimeout: z.number().int().optional(),
            maxRequestsPerHour: z.number().int().optional(),
            maxConcurrentRequests: z.number().int().optional(),
            syncTransactions: z.boolean().optional(),
            syncBalances: z.boolean().optional(),
            syncStatements: z.boolean().optional(),
            syncIdentity: z.boolean().optional(),
            syncCategories: z.boolean().optional(),
            syncMerchants: z.boolean().optional(),
            syncAttachments: z.boolean().optional(),
            historicalDays: z.number().int().optional(),
            refreshTokenEnabled: z.boolean().optional(),
            autoReconnectEnabled: z.boolean().optional(),
            connectionStatus: z.lazy(() => ConnectionStatusSchema).optional(),
            bankConnectionId: z.string(),
            createdAt: z.coerce.date().optional(),
            updatedAt: z.coerce.date().optional(),
            merchantEnrichmentEnabled: z.boolean().optional(),
            merchantCategorizationEnabled: z.boolean().optional(),
            merchantLogoEnrichmentEnabled: z.boolean().optional(),
            merchantNameCleaningEnabled: z.boolean().optional(),
            webhooks: z.lazy(() => WebhookUncheckedCreateNestedManyWithoutBankConnectionSettingsInputSchema).optional()
        })
        .strict()

export default BankConnectionSettingsUncheckedCreateWithoutCreatorInputSchema
