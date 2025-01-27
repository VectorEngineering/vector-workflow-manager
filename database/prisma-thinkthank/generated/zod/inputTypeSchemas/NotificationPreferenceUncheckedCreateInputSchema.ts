import type { Prisma } from '@prisma/client'

import { z } from 'zod'

export const NotificationPreferenceUncheckedCreateInputSchema: z.ZodType<Prisma.NotificationPreferenceUncheckedCreateInput> = z
    .object({
        id: z.string().cuid().optional(),
        projectUserId: z.string(),
        linkUsageSummary: z.boolean().optional(),
        domainConfigurationUpdates: z.boolean().optional(),
        linkUsageWeeklyReport: z.boolean().optional(),
        linkUsageLimitAlerts: z.boolean().optional(),
        domainVerificationAlerts: z.boolean().optional(),
        domainExpirationAlerts: z.boolean().optional(),
        sslCertificateAlerts: z.boolean().optional(),
        newTransactionAlerts: z.boolean().optional(),
        largeTransactionAlerts: z.boolean().optional(),
        recurringTransactionAlerts: z.boolean().optional(),
        failedTransactionAlerts: z.boolean().optional(),
        transactionDisputeUpdates: z.boolean().optional(),
        upcomingPaymentReminders: z.boolean().optional(),
        missedPaymentAlerts: z.boolean().optional(),
        paymentConfirmations: z.boolean().optional(),
        paymentMethodAlerts: z.boolean().optional(),
        recurringPaymentUpdates: z.boolean().optional(),
        lowBalanceAlerts: z.boolean().optional(),
        negativeBalanceAlerts: z.boolean().optional(),
        overdraftWarnings: z.boolean().optional(),
        significantBalanceChanges: z.boolean().optional(),
        availableCreditUpdates: z.boolean().optional(),
        budgetLimitAlerts: z.boolean().optional(),
        budgetOverrunNotifications: z.boolean().optional(),
        monthlyBudgetSummaries: z.boolean().optional(),
        categoryBudgetAlerts: z.boolean().optional(),
        budgetRecommendations: z.boolean().optional(),
        loginAttemptAlerts: z.boolean().optional(),
        deviceAuthorizationAlerts: z.boolean().optional(),
        securitySettingChanges: z.boolean().optional(),
        fraudAlerts: z.boolean().optional(),
        twoFactorAuthEvents: z.boolean().optional(),
        connectionStatusChanges: z.boolean().optional(),
        syncFailureAlerts: z.boolean().optional(),
        reconnectionReminders: z.boolean().optional(),
        newAccountDiscovery: z.boolean().optional(),
        credentialUpdateReminders: z.boolean().optional(),
        newDocumentAlerts: z.boolean().optional(),
        documentSharingEvents: z.boolean().optional(),
        signatureRequests: z.boolean().optional(),
        documentExpirationAlerts: z.boolean().optional(),
        complianceDocumentAlerts: z.boolean().optional(),
        newInvoiceAlerts: z.boolean().optional(),
        invoicePaymentReceipts: z.boolean().optional(),
        overdueInvoiceReminders: z.boolean().optional(),
        invoiceDisputeAlerts: z.boolean().optional(),
        recurringInvoiceUpdates: z.boolean().optional(),
        contractDraftAlerts: z.boolean().optional(),
        contractSignatureAlerts: z.boolean().optional(),
        contractRenewalReminders: z.boolean().optional(),
        contractAmendmentAlerts: z.boolean().optional(),
        contractTemplateUpdates: z.boolean().optional(),
        monthlyReportAvailability: z.boolean().optional(),
        customReportCompletion: z.boolean().optional(),
        analyticsInsightAlerts: z.boolean().optional(),
        taxReportAvailability: z.boolean().optional(),
        auditReportAlerts: z.boolean().optional(),
        newCustomerRegistrations: z.boolean().optional(),
        customerProfileChanges: z.boolean().optional(),
        customerPaymentUpdates: z.boolean().optional(),
        customerSupportTickets: z.boolean().optional(),
        customerActivityAlerts: z.boolean().optional(),
        newCategoryAlerts: z.boolean().optional(),
        categoryRuleUpdates: z.boolean().optional(),
        uncategorizedTransactions: z.boolean().optional(),
        categoryMergeNotifications: z.boolean().optional(),
        autoCategorizeUpdates: z.boolean().optional(),
        taxFormAvailability: z.boolean().optional(),
        taxFilingDeadlines: z.boolean().optional(),
        taxPaymentReminders: z.boolean().optional(),
        annualTaxSummaries: z.boolean().optional(),
        taxPreparationUpdates: z.boolean().optional()
    })
    .strict()

export default NotificationPreferenceUncheckedCreateInputSchema
