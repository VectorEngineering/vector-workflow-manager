import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ContractIncludeSchema } from '../inputTypeSchemas/ContractIncludeSchema'
import { ContractWhereInputSchema } from '../inputTypeSchemas/ContractWhereInputSchema'
import { ContractOrderByWithRelationInputSchema } from '../inputTypeSchemas/ContractOrderByWithRelationInputSchema'
import { ContractWhereUniqueInputSchema } from '../inputTypeSchemas/ContractWhereUniqueInputSchema'
import { ContractScalarFieldEnumSchema } from '../inputTypeSchemas/ContractScalarFieldEnumSchema'
import { CustomerArgsSchema } from '../outputTypeSchemas/CustomerArgsSchema'
import { ContractArgsSchema } from '../outputTypeSchemas/ContractArgsSchema'
import { ContractEventFindManyArgsSchema } from '../outputTypeSchemas/ContractEventFindManyArgsSchema'
import { ContractApprovalFindManyArgsSchema } from '../outputTypeSchemas/ContractApprovalFindManyArgsSchema'
import { ContractDocumentFindManyArgsSchema } from '../outputTypeSchemas/ContractDocumentFindManyArgsSchema'
import { ContractVersionFindManyArgsSchema } from '../outputTypeSchemas/ContractVersionFindManyArgsSchema'
import { ContractCountOutputTypeArgsSchema } from '../outputTypeSchemas/ContractCountOutputTypeArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ContractSelectSchema: z.ZodType<Prisma.ContractSelect> = z
    .object({
        id: z.boolean().optional(),
        customerId: z.boolean().optional(),
        contractNumber: z.boolean().optional(),
        title: z.boolean().optional(),
        description: z.boolean().optional(),
        type: z.boolean().optional(),
        category: z.boolean().optional(),
        department: z.boolean().optional(),
        businessUnit: z.boolean().optional(),
        priority: z.boolean().optional(),
        status: z.boolean().optional(),
        stage: z.boolean().optional(),
        version: z.boolean().optional(),
        isTemplate: z.boolean().optional(),
        parentContractId: z.boolean().optional(),
        startDate: z.boolean().optional(),
        endDate: z.boolean().optional(),
        signedDate: z.boolean().optional(),
        effectiveDate: z.boolean().optional(),
        terminationDate: z.boolean().optional(),
        nextReviewDate: z.boolean().optional(),
        renewalDate: z.boolean().optional(),
        lastAmendmentDate: z.boolean().optional(),
        value: z.boolean().optional(),
        currency: z.boolean().optional(),
        billingFrequency: z.boolean().optional(),
        billingTerms: z.boolean().optional(),
        paymentTerms: z.boolean().optional(),
        autoRenewal: z.boolean().optional(),
        renewalTerms: z.boolean().optional(),
        terminationFee: z.boolean().optional(),
        earlyTerminationTerms: z.boolean().optional(),
        terms: z.boolean().optional(),
        conditions: z.boolean().optional(),
        governingLaw: z.boolean().optional(),
        disputeResolution: z.boolean().optional(),
        confidentialityLevel: z.boolean().optional(),
        complianceStatus: z.boolean().optional(),
        riskLevel: z.boolean().optional(),
        riskAssessment: z.boolean().optional(),
        contractOwner: z.boolean().optional(),
        counterpartyId: z.boolean().optional(),
        counterpartyName: z.boolean().optional(),
        counterpartyContact: z.boolean().optional(),
        witnesses: z.boolean().optional(),
        signatories: z.boolean().optional(),
        stakeholders: z.boolean().optional(),
        deliverables: z.boolean().optional(),
        milestones: z.boolean().optional(),
        slaTerms: z.boolean().optional(),
        performanceMetrics: z.boolean().optional(),
        obligations: z.boolean().optional(),
        penalties: z.boolean().optional(),
        insuranceRequirements: z.boolean().optional(),
        liabilityTerms: z.boolean().optional(),
        indemnificationTerms: z.boolean().optional(),
        limitationOfLiability: z.boolean().optional(),
        intellectualProperty: z.boolean().optional(),
        licensedAssets: z.boolean().optional(),
        restrictions: z.boolean().optional(),
        amendments: z.boolean().optional(),
        changeHistory: z.boolean().optional(),
        approvalHistory: z.boolean().optional(),
        documentUrl: z.boolean().optional(),
        supportingDocs: z.boolean().optional(),
        attachments: z.boolean().optional(),
        signatures: z.boolean().optional(),
        accessLevel: z.boolean().optional(),
        accessControlList: z.boolean().optional(),
        encryptionLevel: z.boolean().optional(),
        notificationSettings: z.boolean().optional(),
        reminderSettings: z.boolean().optional(),
        alertContacts: z.boolean().optional(),
        customFields: z.boolean().optional(),
        metadata: z.boolean().optional(),
        notes: z.boolean().optional(),
        externalReferences: z.boolean().optional(),
        relatedContracts: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        createdBy: z.boolean().optional(),
        updatedBy: z.boolean().optional(),
        reviewedBy: z.boolean().optional(),
        approvedBy: z.boolean().optional(),
        archivedAt: z.boolean().optional(),
        archivedBy: z.boolean().optional(),
        customer: z.union([z.boolean(), z.lazy(() => CustomerArgsSchema)]).optional(),
        parentContract: z.union([z.boolean(), z.lazy(() => ContractArgsSchema)]).optional(),
        childContracts: z.union([z.boolean(), z.lazy(() => ContractFindManyArgsSchema)]).optional(),
        contractEvents: z.union([z.boolean(), z.lazy(() => ContractEventFindManyArgsSchema)]).optional(),
        contractApprovals: z.union([z.boolean(), z.lazy(() => ContractApprovalFindManyArgsSchema)]).optional(),
        contractDocuments: z.union([z.boolean(), z.lazy(() => ContractDocumentFindManyArgsSchema)]).optional(),
        contractVersions: z.union([z.boolean(), z.lazy(() => ContractVersionFindManyArgsSchema)]).optional(),
        _count: z.union([z.boolean(), z.lazy(() => ContractCountOutputTypeArgsSchema)]).optional()
    })
    .strict()

export const ContractFindManyArgsSchema: z.ZodType<Prisma.ContractFindManyArgs> = z
    .object({
        select: ContractSelectSchema.optional(),
        include: ContractIncludeSchema.optional(),
        where: ContractWhereInputSchema.optional(),
        orderBy: z.union([ContractOrderByWithRelationInputSchema.array(), ContractOrderByWithRelationInputSchema]).optional(),
        cursor: ContractWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.union([ContractScalarFieldEnumSchema, ContractScalarFieldEnumSchema.array()]).optional()
    })
    .strict()

export default ContractFindManyArgsSchema
