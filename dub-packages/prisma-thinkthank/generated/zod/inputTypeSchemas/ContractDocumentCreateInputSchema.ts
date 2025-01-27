import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { ContractCreateNestedOneWithoutContractDocumentsInputSchema } from './ContractCreateNestedOneWithoutContractDocumentsInputSchema';
import { DocumentCommentCreateNestedManyWithoutDocumentInputSchema } from './DocumentCommentCreateNestedManyWithoutDocumentInputSchema';
import { DocumentAnnotationCreateNestedManyWithoutDocumentInputSchema } from './DocumentAnnotationCreateNestedManyWithoutDocumentInputSchema';

export const ContractDocumentCreateInputSchema: z.ZodType<Prisma.ContractDocumentCreateInput> = z.object({
  id: z.string().cuid().optional(),
  type: z.string(),
  category: z.string().optional().nullable(),
  classification: z.string().optional().nullable(),
  importance: z.string().optional().nullable(),
  status: z.string(),
  title: z.string(),
  description: z.string().optional().nullable(),
  version: z.number().int().optional(),
  language: z.string().optional().nullable(),
  pageCount: z.number().int().optional().nullable(),
  wordCount: z.number().int().optional().nullable(),
  fileUrl: z.string(),
  fileType: z.string().optional().nullable(),
  fileSize: z.number().int().optional().nullable(),
  fileHash: z.string().optional().nullable(),
  originalFilename: z.string().optional().nullable(),
  mimeType: z.string().optional().nullable(),
  encoding: z.string().optional().nullable(),
  compression: z.string().optional().nullable(),
  storageProvider: z.string().optional().nullable(),
  storagePath: z.string().optional().nullable(),
  backupUrl: z.string().optional().nullable(),
  cdnUrl: z.string().optional().nullable(),
  accessLevel: z.string().optional().nullable(),
  accessPermissions: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  encryptionStatus: z.boolean().optional(),
  encryptionType: z.string().optional().nullable(),
  password: z.string().optional().nullable(),
  tags: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  keywords: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  metadata: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  customFields: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  signatures: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  certificateInfo: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  signatureStatus: z.string().optional().nullable(),
  signedBy: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  signedAt: z.coerce.date().optional().nullable(),
  reviewStatus: z.string().optional().nullable(),
  reviewedBy: z.string().optional().nullable(),
  reviewedAt: z.coerce.date().optional().nullable(),
  approvedBy: z.string().optional().nullable(),
  approvedAt: z.coerce.date().optional().nullable(),
  rejectionReason: z.string().optional().nullable(),
  versionNotes: z.string().optional().nullable(),
  versionChanges: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  previousVersion: z.string().optional().nullable(),
  isLatestVersion: z.boolean().optional(),
  retentionPeriod: z.number().int().optional().nullable(),
  retentionExpiryDate: z.coerce.date().optional().nullable(),
  complianceStatus: z.string().optional().nullable(),
  complianceNotes: z.string().optional().nullable(),
  legalHold: z.boolean().optional(),
  processingStatus: z.string().optional().nullable(),
  processingErrors: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  textExtracted: z.boolean().optional(),
  extractedText: z.string().optional().nullable(),
  ocrStatus: z.string().optional().nullable(),
  externalId: z.string().optional().nullable(),
  externalSystem: z.string().optional().nullable(),
  externalUrl: z.string().optional().nullable(),
  synchronizationStatus: z.string().optional().nullable(),
  viewCount: z.number().int().optional(),
  downloadCount: z.number().int().optional(),
  lastViewedBy: z.string().optional().nullable(),
  lastViewedAt: z.coerce.date().optional().nullable(),
  lastDownloadedBy: z.string().optional().nullable(),
  lastDownloadedAt: z.coerce.date().optional().nullable(),
  validateStatus: z.string().optional().nullable(),
  validationErrors: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  validatedBy: z.string().optional().nullable(),
  validatedAt: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  createdBy: z.string().optional().nullable(),
  updatedBy: z.string().optional().nullable(),
  archivedAt: z.coerce.date().optional().nullable(),
  archivedBy: z.string().optional().nullable(),
  restoredAt: z.coerce.date().optional().nullable(),
  restoredBy: z.string().optional().nullable(),
  contract: z.lazy(() => ContractCreateNestedOneWithoutContractDocumentsInputSchema),
  documentComments: z.lazy(() => DocumentCommentCreateNestedManyWithoutDocumentInputSchema).optional(),
  documentAnnotations: z.lazy(() => DocumentAnnotationCreateNestedManyWithoutDocumentInputSchema).optional()
}).strict();

export default ContractDocumentCreateInputSchema;
