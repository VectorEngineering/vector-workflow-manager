import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { PayoutOrderByRelationAggregateInputSchema } from './PayoutOrderByRelationAggregateInputSchema';
import { ProgramOrderByWithRelationInputSchema } from './ProgramOrderByWithRelationInputSchema';
import { ProjectOrderByWithRelationInputSchema } from './ProjectOrderByWithRelationInputSchema';
import { CustomerOrderByWithRelationInputSchema } from './CustomerOrderByWithRelationInputSchema';
import { InvoiceCommentOrderByRelationAggregateInputSchema } from './InvoiceCommentOrderByRelationAggregateInputSchema';
import { InvoiceAttachmentOrderByRelationAggregateInputSchema } from './InvoiceAttachmentOrderByRelationAggregateInputSchema';
import { InvoiceHistoryOrderByRelationAggregateInputSchema } from './InvoiceHistoryOrderByRelationAggregateInputSchema';
import { InvoiceOrderByRelevanceInputSchema } from './InvoiceOrderByRelevanceInputSchema';

export const InvoiceOrderByWithRelationInputSchema: z.ZodType<Prisma.InvoiceOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  programId: z.lazy(() => SortOrderSchema).optional(),
  workspaceId: z.lazy(() => SortOrderSchema).optional(),
  number: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  amount: z.lazy(() => SortOrderSchema).optional(),
  fee: z.lazy(() => SortOrderSchema).optional(),
  total: z.lazy(() => SortOrderSchema).optional(),
  receiptUrl: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  bottomBlock: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  companyDetails: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  currency: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  customerDetails: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  customerId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  customerName: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  discount: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  dueDate: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  filePath: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  fileSize: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  fromDetails: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  internalNote: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  invoiceNumber: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  issueDate: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  lineItems: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  note: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  noteDetails: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  paidAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  paymentDetails: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  reminderSentAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  sentTo: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  subtotal: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  tax: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  teamId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  template: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  token: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  topBlock: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  updatedAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  url: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  userId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  vat: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  viewedAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  version: z.lazy(() => SortOrderSchema).optional(),
  language: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  timezone: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  tags: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  metadata: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  customFields: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  paymentMethod: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  paymentStatus: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  paymentDue: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  partialPayments: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  refundAmount: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  conversionRate: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  processingFees: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  profitMargin: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  costBreakdown: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  autoRemind: z.lazy(() => SortOrderSchema).optional(),
  reminderSchedule: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  approvalStatus: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  approvedBy: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  approvedAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  taxExempt: z.lazy(() => SortOrderSchema).optional(),
  taxExemptReason: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  complianceNotes: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  auditTrail: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  payouts: z.lazy(() => PayoutOrderByRelationAggregateInputSchema).optional(),
  program: z.lazy(() => ProgramOrderByWithRelationInputSchema).optional(),
  workspace: z.lazy(() => ProjectOrderByWithRelationInputSchema).optional(),
  customer: z.lazy(() => CustomerOrderByWithRelationInputSchema).optional(),
  comments: z.lazy(() => InvoiceCommentOrderByRelationAggregateInputSchema).optional(),
  attachments: z.lazy(() => InvoiceAttachmentOrderByRelationAggregateInputSchema).optional(),
  history: z.lazy(() => InvoiceHistoryOrderByRelationAggregateInputSchema).optional(),
  _relevance: z.lazy(() => InvoiceOrderByRelevanceInputSchema).optional()
}).strict();

export default InvoiceOrderByWithRelationInputSchema;
