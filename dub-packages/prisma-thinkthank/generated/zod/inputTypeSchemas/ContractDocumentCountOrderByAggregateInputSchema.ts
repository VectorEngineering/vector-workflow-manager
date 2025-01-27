import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ContractDocumentCountOrderByAggregateInputSchema: z.ZodType<Prisma.ContractDocumentCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  contractId: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  category: z.lazy(() => SortOrderSchema).optional(),
  classification: z.lazy(() => SortOrderSchema).optional(),
  importance: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  version: z.lazy(() => SortOrderSchema).optional(),
  language: z.lazy(() => SortOrderSchema).optional(),
  pageCount: z.lazy(() => SortOrderSchema).optional(),
  wordCount: z.lazy(() => SortOrderSchema).optional(),
  fileUrl: z.lazy(() => SortOrderSchema).optional(),
  fileType: z.lazy(() => SortOrderSchema).optional(),
  fileSize: z.lazy(() => SortOrderSchema).optional(),
  fileHash: z.lazy(() => SortOrderSchema).optional(),
  originalFilename: z.lazy(() => SortOrderSchema).optional(),
  mimeType: z.lazy(() => SortOrderSchema).optional(),
  encoding: z.lazy(() => SortOrderSchema).optional(),
  compression: z.lazy(() => SortOrderSchema).optional(),
  storageProvider: z.lazy(() => SortOrderSchema).optional(),
  storagePath: z.lazy(() => SortOrderSchema).optional(),
  backupUrl: z.lazy(() => SortOrderSchema).optional(),
  cdnUrl: z.lazy(() => SortOrderSchema).optional(),
  accessLevel: z.lazy(() => SortOrderSchema).optional(),
  accessPermissions: z.lazy(() => SortOrderSchema).optional(),
  encryptionStatus: z.lazy(() => SortOrderSchema).optional(),
  encryptionType: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  tags: z.lazy(() => SortOrderSchema).optional(),
  keywords: z.lazy(() => SortOrderSchema).optional(),
  metadata: z.lazy(() => SortOrderSchema).optional(),
  customFields: z.lazy(() => SortOrderSchema).optional(),
  signatures: z.lazy(() => SortOrderSchema).optional(),
  certificateInfo: z.lazy(() => SortOrderSchema).optional(),
  signatureStatus: z.lazy(() => SortOrderSchema).optional(),
  signedBy: z.lazy(() => SortOrderSchema).optional(),
  signedAt: z.lazy(() => SortOrderSchema).optional(),
  reviewStatus: z.lazy(() => SortOrderSchema).optional(),
  reviewedBy: z.lazy(() => SortOrderSchema).optional(),
  reviewedAt: z.lazy(() => SortOrderSchema).optional(),
  approvedBy: z.lazy(() => SortOrderSchema).optional(),
  approvedAt: z.lazy(() => SortOrderSchema).optional(),
  rejectionReason: z.lazy(() => SortOrderSchema).optional(),
  versionNotes: z.lazy(() => SortOrderSchema).optional(),
  versionChanges: z.lazy(() => SortOrderSchema).optional(),
  previousVersion: z.lazy(() => SortOrderSchema).optional(),
  isLatestVersion: z.lazy(() => SortOrderSchema).optional(),
  retentionPeriod: z.lazy(() => SortOrderSchema).optional(),
  retentionExpiryDate: z.lazy(() => SortOrderSchema).optional(),
  complianceStatus: z.lazy(() => SortOrderSchema).optional(),
  complianceNotes: z.lazy(() => SortOrderSchema).optional(),
  legalHold: z.lazy(() => SortOrderSchema).optional(),
  processingStatus: z.lazy(() => SortOrderSchema).optional(),
  processingErrors: z.lazy(() => SortOrderSchema).optional(),
  textExtracted: z.lazy(() => SortOrderSchema).optional(),
  extractedText: z.lazy(() => SortOrderSchema).optional(),
  ocrStatus: z.lazy(() => SortOrderSchema).optional(),
  externalId: z.lazy(() => SortOrderSchema).optional(),
  externalSystem: z.lazy(() => SortOrderSchema).optional(),
  externalUrl: z.lazy(() => SortOrderSchema).optional(),
  synchronizationStatus: z.lazy(() => SortOrderSchema).optional(),
  viewCount: z.lazy(() => SortOrderSchema).optional(),
  downloadCount: z.lazy(() => SortOrderSchema).optional(),
  lastViewedBy: z.lazy(() => SortOrderSchema).optional(),
  lastViewedAt: z.lazy(() => SortOrderSchema).optional(),
  lastDownloadedBy: z.lazy(() => SortOrderSchema).optional(),
  lastDownloadedAt: z.lazy(() => SortOrderSchema).optional(),
  validateStatus: z.lazy(() => SortOrderSchema).optional(),
  validationErrors: z.lazy(() => SortOrderSchema).optional(),
  validatedBy: z.lazy(() => SortOrderSchema).optional(),
  validatedAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  createdBy: z.lazy(() => SortOrderSchema).optional(),
  updatedBy: z.lazy(() => SortOrderSchema).optional(),
  archivedAt: z.lazy(() => SortOrderSchema).optional(),
  archivedBy: z.lazy(() => SortOrderSchema).optional(),
  restoredAt: z.lazy(() => SortOrderSchema).optional(),
  restoredBy: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default ContractDocumentCountOrderByAggregateInputSchema;
