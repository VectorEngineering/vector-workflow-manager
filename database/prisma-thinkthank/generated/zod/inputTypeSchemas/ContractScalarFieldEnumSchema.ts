import { z } from 'zod'

export const ContractScalarFieldEnumSchema = z.enum([
    'id',
    'customerId',
    'contractNumber',
    'title',
    'description',
    'type',
    'category',
    'department',
    'businessUnit',
    'priority',
    'status',
    'stage',
    'version',
    'isTemplate',
    'parentContractId',
    'startDate',
    'endDate',
    'signedDate',
    'effectiveDate',
    'terminationDate',
    'nextReviewDate',
    'renewalDate',
    'lastAmendmentDate',
    'value',
    'currency',
    'billingFrequency',
    'billingTerms',
    'paymentTerms',
    'autoRenewal',
    'renewalTerms',
    'terminationFee',
    'earlyTerminationTerms',
    'terms',
    'conditions',
    'governingLaw',
    'disputeResolution',
    'confidentialityLevel',
    'complianceStatus',
    'riskLevel',
    'riskAssessment',
    'contractOwner',
    'counterpartyId',
    'counterpartyName',
    'counterpartyContact',
    'witnesses',
    'signatories',
    'stakeholders',
    'deliverables',
    'milestones',
    'slaTerms',
    'performanceMetrics',
    'obligations',
    'penalties',
    'insuranceRequirements',
    'liabilityTerms',
    'indemnificationTerms',
    'limitationOfLiability',
    'intellectualProperty',
    'licensedAssets',
    'restrictions',
    'amendments',
    'changeHistory',
    'approvalHistory',
    'documentUrl',
    'supportingDocs',
    'attachments',
    'signatures',
    'accessLevel',
    'accessControlList',
    'encryptionLevel',
    'notificationSettings',
    'reminderSettings',
    'alertContacts',
    'customFields',
    'metadata',
    'notes',
    'externalReferences',
    'relatedContracts',
    'createdAt',
    'updatedAt',
    'createdBy',
    'updatedBy',
    'reviewedBy',
    'approvedBy',
    'archivedAt',
    'archivedBy'
])

export default ContractScalarFieldEnumSchema
