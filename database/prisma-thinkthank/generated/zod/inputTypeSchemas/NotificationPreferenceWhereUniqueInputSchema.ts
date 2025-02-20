import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { NotificationPreferenceWhereInputSchema } from './NotificationPreferenceWhereInputSchema'
import { BoolFilterSchema } from './BoolFilterSchema'
import { ProjectUsersRelationFilterSchema } from './ProjectUsersRelationFilterSchema'
import { ProjectUsersWhereInputSchema } from './ProjectUsersWhereInputSchema'

export const NotificationPreferenceWhereUniqueInputSchema: z.ZodType<Prisma.NotificationPreferenceWhereUniqueInput> = z
    .union([
        z.object({
            id: z.string().cuid(),
            projectUserId: z.string()
        }),
        z.object({
            id: z.string().cuid()
        }),
        z.object({
            projectUserId: z.string()
        })
    ])
    .and(
        z
            .object({
                id: z.string().cuid().optional(),
                projectUserId: z.string().optional(),
                AND: z
                    .union([
                        z.lazy(() => NotificationPreferenceWhereInputSchema),
                        z.lazy(() => NotificationPreferenceWhereInputSchema).array()
                    ])
                    .optional(),
                OR: z
                    .lazy(() => NotificationPreferenceWhereInputSchema)
                    .array()
                    .optional(),
                NOT: z
                    .union([
                        z.lazy(() => NotificationPreferenceWhereInputSchema),
                        z.lazy(() => NotificationPreferenceWhereInputSchema).array()
                    ])
                    .optional(),
                linkUsageSummary: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
                domainConfigurationUpdates: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
                linkUsageWeeklyReport: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
                linkUsageLimitAlerts: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
                domainVerificationAlerts: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
                domainExpirationAlerts: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
                sslCertificateAlerts: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
                newTransactionAlerts: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
                largeTransactionAlerts: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
                recurringTransactionAlerts: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
                failedTransactionAlerts: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
                transactionDisputeUpdates: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
                upcomingPaymentReminders: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
                missedPaymentAlerts: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
                paymentConfirmations: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
                paymentMethodAlerts: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
                recurringPaymentUpdates: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
                lowBalanceAlerts: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
                negativeBalanceAlerts: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
                overdraftWarnings: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
                significantBalanceChanges: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
                availableCreditUpdates: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
                budgetLimitAlerts: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
                budgetOverrunNotifications: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
                monthlyBudgetSummaries: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
                categoryBudgetAlerts: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
                budgetRecommendations: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
                loginAttemptAlerts: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
                deviceAuthorizationAlerts: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
                securitySettingChanges: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
                fraudAlerts: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
                twoFactorAuthEvents: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
                connectionStatusChanges: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
                syncFailureAlerts: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
                reconnectionReminders: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
                newAccountDiscovery: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
                credentialUpdateReminders: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
                newDocumentAlerts: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
                documentSharingEvents: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
                signatureRequests: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
                documentExpirationAlerts: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
                complianceDocumentAlerts: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
                newInvoiceAlerts: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
                invoicePaymentReceipts: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
                overdueInvoiceReminders: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
                invoiceDisputeAlerts: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
                recurringInvoiceUpdates: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
                contractDraftAlerts: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
                contractSignatureAlerts: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
                contractRenewalReminders: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
                contractAmendmentAlerts: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
                contractTemplateUpdates: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
                monthlyReportAvailability: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
                customReportCompletion: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
                analyticsInsightAlerts: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
                taxReportAvailability: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
                auditReportAlerts: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
                newCustomerRegistrations: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
                customerProfileChanges: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
                customerPaymentUpdates: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
                customerSupportTickets: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
                customerActivityAlerts: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
                newCategoryAlerts: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
                categoryRuleUpdates: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
                uncategorizedTransactions: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
                categoryMergeNotifications: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
                autoCategorizeUpdates: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
                taxFormAvailability: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
                taxFilingDeadlines: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
                taxPaymentReminders: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
                annualTaxSummaries: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
                taxPreparationUpdates: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
                projectUser: z
                    .union([z.lazy(() => ProjectUsersRelationFilterSchema), z.lazy(() => ProjectUsersWhereInputSchema)])
                    .optional()
            })
            .strict()
    )

export default NotificationPreferenceWhereUniqueInputSchema
