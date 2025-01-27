import { z } from 'zod';

export const BankAccountScalarFieldEnumSchema = z.enum(['id','accountId','accountReference','accountNumber','routingNumber','mask','name','officialName','displayName','description','type','subtype','ownershipType','purpose','balance','baseBalance','availableBalance','pendingBalance','creditLimit','minBalance','targetBalance','overdraftLimit','interestRate','currency','baseCurrency','exchangeRate','exchangeRateTimestamp','enabled','hidden','favorite','manual','verified','frozen','closeDate','spendingLimit','dailyLimit','monthlyLimit','requiresApproval','approvalThreshold','status','errorDetails','errorRetries','lastSyncAt','nextSyncAt','errorCount','lastErrorAt','riskLevel','complianceStatus','lastReviewDate','nextReviewDate','reviewNotes','bankConnectionId','projectId','createdBy','createdAt','updatedAt','lastActivityAt']);

export default BankAccountScalarFieldEnumSchema;
