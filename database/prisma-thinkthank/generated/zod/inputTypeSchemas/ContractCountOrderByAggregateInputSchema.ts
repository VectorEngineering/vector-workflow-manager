import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ContractCountOrderByAggregateInputSchema: z.ZodType<Prisma.ContractCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  customerId: z.lazy(() => SortOrderSchema).optional(),
  contractNumber: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  category: z.lazy(() => SortOrderSchema).optional(),
  department: z.lazy(() => SortOrderSchema).optional(),
  businessUnit: z.lazy(() => SortOrderSchema).optional(),
  priority: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  stage: z.lazy(() => SortOrderSchema).optional(),
  version: z.lazy(() => SortOrderSchema).optional(),
  isTemplate: z.lazy(() => SortOrderSchema).optional(),
  parentContractId: z.lazy(() => SortOrderSchema).optional(),
  startDate: z.lazy(() => SortOrderSchema).optional(),
  endDate: z.lazy(() => SortOrderSchema).optional(),
  signedDate: z.lazy(() => SortOrderSchema).optional(),
  effectiveDate: z.lazy(() => SortOrderSchema).optional(),
  terminationDate: z.lazy(() => SortOrderSchema).optional(),
  nextReviewDate: z.lazy(() => SortOrderSchema).optional(),
  renewalDate: z.lazy(() => SortOrderSchema).optional(),
  lastAmendmentDate: z.lazy(() => SortOrderSchema).optional(),
  value: z.lazy(() => SortOrderSchema).optional(),
  currency: z.lazy(() => SortOrderSchema).optional(),
  billingFrequency: z.lazy(() => SortOrderSchema).optional(),
  billingTerms: z.lazy(() => SortOrderSchema).optional(),
  paymentTerms: z.lazy(() => SortOrderSchema).optional(),
  autoRenewal: z.lazy(() => SortOrderSchema).optional(),
  renewalTerms: z.lazy(() => SortOrderSchema).optional(),
  terminationFee: z.lazy(() => SortOrderSchema).optional(),
  earlyTerminationTerms: z.lazy(() => SortOrderSchema).optional(),
  terms: z.lazy(() => SortOrderSchema).optional(),
  conditions: z.lazy(() => SortOrderSchema).optional(),
  governingLaw: z.lazy(() => SortOrderSchema).optional(),
  disputeResolution: z.lazy(() => SortOrderSchema).optional(),
  confidentialityLevel: z.lazy(() => SortOrderSchema).optional(),
  complianceStatus: z.lazy(() => SortOrderSchema).optional(),
  riskLevel: z.lazy(() => SortOrderSchema).optional(),
  riskAssessment: z.lazy(() => SortOrderSchema).optional(),
  contractOwner: z.lazy(() => SortOrderSchema).optional(),
  counterpartyId: z.lazy(() => SortOrderSchema).optional(),
  counterpartyName: z.lazy(() => SortOrderSchema).optional(),
  counterpartyContact: z.lazy(() => SortOrderSchema).optional(),
  witnesses: z.lazy(() => SortOrderSchema).optional(),
  signatories: z.lazy(() => SortOrderSchema).optional(),
  stakeholders: z.lazy(() => SortOrderSchema).optional(),
  deliverables: z.lazy(() => SortOrderSchema).optional(),
  milestones: z.lazy(() => SortOrderSchema).optional(),
  slaTerms: z.lazy(() => SortOrderSchema).optional(),
  performanceMetrics: z.lazy(() => SortOrderSchema).optional(),
  obligations: z.lazy(() => SortOrderSchema).optional(),
  penalties: z.lazy(() => SortOrderSchema).optional(),
  insuranceRequirements: z.lazy(() => SortOrderSchema).optional(),
  liabilityTerms: z.lazy(() => SortOrderSchema).optional(),
  indemnificationTerms: z.lazy(() => SortOrderSchema).optional(),
  limitationOfLiability: z.lazy(() => SortOrderSchema).optional(),
  intellectualProperty: z.lazy(() => SortOrderSchema).optional(),
  licensedAssets: z.lazy(() => SortOrderSchema).optional(),
  restrictions: z.lazy(() => SortOrderSchema).optional(),
  amendments: z.lazy(() => SortOrderSchema).optional(),
  changeHistory: z.lazy(() => SortOrderSchema).optional(),
  approvalHistory: z.lazy(() => SortOrderSchema).optional(),
  documentUrl: z.lazy(() => SortOrderSchema).optional(),
  supportingDocs: z.lazy(() => SortOrderSchema).optional(),
  attachments: z.lazy(() => SortOrderSchema).optional(),
  signatures: z.lazy(() => SortOrderSchema).optional(),
  accessLevel: z.lazy(() => SortOrderSchema).optional(),
  accessControlList: z.lazy(() => SortOrderSchema).optional(),
  encryptionLevel: z.lazy(() => SortOrderSchema).optional(),
  notificationSettings: z.lazy(() => SortOrderSchema).optional(),
  reminderSettings: z.lazy(() => SortOrderSchema).optional(),
  alertContacts: z.lazy(() => SortOrderSchema).optional(),
  customFields: z.lazy(() => SortOrderSchema).optional(),
  metadata: z.lazy(() => SortOrderSchema).optional(),
  notes: z.lazy(() => SortOrderSchema).optional(),
  externalReferences: z.lazy(() => SortOrderSchema).optional(),
  relatedContracts: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  createdBy: z.lazy(() => SortOrderSchema).optional(),
  updatedBy: z.lazy(() => SortOrderSchema).optional(),
  reviewedBy: z.lazy(() => SortOrderSchema).optional(),
  approvedBy: z.lazy(() => SortOrderSchema).optional(),
  archivedAt: z.lazy(() => SortOrderSchema).optional(),
  archivedBy: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default ContractCountOrderByAggregateInputSchema;
