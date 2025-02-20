import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { ProjectUsersOrderByWithRelationInputSchema } from './ProjectUsersOrderByWithRelationInputSchema';
import { NotificationPreferenceOrderByRelevanceInputSchema } from './NotificationPreferenceOrderByRelevanceInputSchema';

export const NotificationPreferenceOrderByWithRelationInputSchema: z.ZodType<Prisma.NotificationPreferenceOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  projectUserId: z.lazy(() => SortOrderSchema).optional(),
  linkUsageSummary: z.lazy(() => SortOrderSchema).optional(),
  domainConfigurationUpdates: z.lazy(() => SortOrderSchema).optional(),
  linkUsageWeeklyReport: z.lazy(() => SortOrderSchema).optional(),
  linkUsageLimitAlerts: z.lazy(() => SortOrderSchema).optional(),
  domainVerificationAlerts: z.lazy(() => SortOrderSchema).optional(),
  domainExpirationAlerts: z.lazy(() => SortOrderSchema).optional(),
  sslCertificateAlerts: z.lazy(() => SortOrderSchema).optional(),
  newTransactionAlerts: z.lazy(() => SortOrderSchema).optional(),
  largeTransactionAlerts: z.lazy(() => SortOrderSchema).optional(),
  recurringTransactionAlerts: z.lazy(() => SortOrderSchema).optional(),
  failedTransactionAlerts: z.lazy(() => SortOrderSchema).optional(),
  transactionDisputeUpdates: z.lazy(() => SortOrderSchema).optional(),
  upcomingPaymentReminders: z.lazy(() => SortOrderSchema).optional(),
  missedPaymentAlerts: z.lazy(() => SortOrderSchema).optional(),
  paymentConfirmations: z.lazy(() => SortOrderSchema).optional(),
  paymentMethodAlerts: z.lazy(() => SortOrderSchema).optional(),
  recurringPaymentUpdates: z.lazy(() => SortOrderSchema).optional(),
  lowBalanceAlerts: z.lazy(() => SortOrderSchema).optional(),
  negativeBalanceAlerts: z.lazy(() => SortOrderSchema).optional(),
  overdraftWarnings: z.lazy(() => SortOrderSchema).optional(),
  significantBalanceChanges: z.lazy(() => SortOrderSchema).optional(),
  availableCreditUpdates: z.lazy(() => SortOrderSchema).optional(),
  budgetLimitAlerts: z.lazy(() => SortOrderSchema).optional(),
  budgetOverrunNotifications: z.lazy(() => SortOrderSchema).optional(),
  monthlyBudgetSummaries: z.lazy(() => SortOrderSchema).optional(),
  categoryBudgetAlerts: z.lazy(() => SortOrderSchema).optional(),
  budgetRecommendations: z.lazy(() => SortOrderSchema).optional(),
  loginAttemptAlerts: z.lazy(() => SortOrderSchema).optional(),
  deviceAuthorizationAlerts: z.lazy(() => SortOrderSchema).optional(),
  securitySettingChanges: z.lazy(() => SortOrderSchema).optional(),
  fraudAlerts: z.lazy(() => SortOrderSchema).optional(),
  twoFactorAuthEvents: z.lazy(() => SortOrderSchema).optional(),
  connectionStatusChanges: z.lazy(() => SortOrderSchema).optional(),
  syncFailureAlerts: z.lazy(() => SortOrderSchema).optional(),
  reconnectionReminders: z.lazy(() => SortOrderSchema).optional(),
  newAccountDiscovery: z.lazy(() => SortOrderSchema).optional(),
  credentialUpdateReminders: z.lazy(() => SortOrderSchema).optional(),
  newDocumentAlerts: z.lazy(() => SortOrderSchema).optional(),
  documentSharingEvents: z.lazy(() => SortOrderSchema).optional(),
  signatureRequests: z.lazy(() => SortOrderSchema).optional(),
  documentExpirationAlerts: z.lazy(() => SortOrderSchema).optional(),
  complianceDocumentAlerts: z.lazy(() => SortOrderSchema).optional(),
  newInvoiceAlerts: z.lazy(() => SortOrderSchema).optional(),
  invoicePaymentReceipts: z.lazy(() => SortOrderSchema).optional(),
  overdueInvoiceReminders: z.lazy(() => SortOrderSchema).optional(),
  invoiceDisputeAlerts: z.lazy(() => SortOrderSchema).optional(),
  recurringInvoiceUpdates: z.lazy(() => SortOrderSchema).optional(),
  contractDraftAlerts: z.lazy(() => SortOrderSchema).optional(),
  contractSignatureAlerts: z.lazy(() => SortOrderSchema).optional(),
  contractRenewalReminders: z.lazy(() => SortOrderSchema).optional(),
  contractAmendmentAlerts: z.lazy(() => SortOrderSchema).optional(),
  contractTemplateUpdates: z.lazy(() => SortOrderSchema).optional(),
  monthlyReportAvailability: z.lazy(() => SortOrderSchema).optional(),
  customReportCompletion: z.lazy(() => SortOrderSchema).optional(),
  analyticsInsightAlerts: z.lazy(() => SortOrderSchema).optional(),
  taxReportAvailability: z.lazy(() => SortOrderSchema).optional(),
  auditReportAlerts: z.lazy(() => SortOrderSchema).optional(),
  newCustomerRegistrations: z.lazy(() => SortOrderSchema).optional(),
  customerProfileChanges: z.lazy(() => SortOrderSchema).optional(),
  customerPaymentUpdates: z.lazy(() => SortOrderSchema).optional(),
  customerSupportTickets: z.lazy(() => SortOrderSchema).optional(),
  customerActivityAlerts: z.lazy(() => SortOrderSchema).optional(),
  newCategoryAlerts: z.lazy(() => SortOrderSchema).optional(),
  categoryRuleUpdates: z.lazy(() => SortOrderSchema).optional(),
  uncategorizedTransactions: z.lazy(() => SortOrderSchema).optional(),
  categoryMergeNotifications: z.lazy(() => SortOrderSchema).optional(),
  autoCategorizeUpdates: z.lazy(() => SortOrderSchema).optional(),
  taxFormAvailability: z.lazy(() => SortOrderSchema).optional(),
  taxFilingDeadlines: z.lazy(() => SortOrderSchema).optional(),
  taxPaymentReminders: z.lazy(() => SortOrderSchema).optional(),
  annualTaxSummaries: z.lazy(() => SortOrderSchema).optional(),
  taxPreparationUpdates: z.lazy(() => SortOrderSchema).optional(),
  projectUser: z.lazy(() => ProjectUsersOrderByWithRelationInputSchema).optional(),
  _relevance: z.lazy(() => NotificationPreferenceOrderByRelevanceInputSchema).optional()
}).strict();

export default NotificationPreferenceOrderByWithRelationInputSchema;
