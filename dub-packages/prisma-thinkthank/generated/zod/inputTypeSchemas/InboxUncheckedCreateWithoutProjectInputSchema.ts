import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InboxTypeSchema } from './InboxTypeSchema';
import { InboxStatusSchema } from './InboxStatusSchema';
import { StorageLocationSchema } from './StorageLocationSchema';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { InboxAccessLevelSchema } from './InboxAccessLevelSchema';
import { InboxClassificationSchema } from './InboxClassificationSchema';
import { RetentionPolicySchema } from './RetentionPolicySchema';
import { InboxUncheckedCreateNestedManyWithoutParentInputSchema } from './InboxUncheckedCreateNestedManyWithoutParentInputSchema';
import { InboxActivityUncheckedCreateNestedManyWithoutInboxInputSchema } from './InboxActivityUncheckedCreateNestedManyWithoutInboxInputSchema';
import { InboxShareUncheckedCreateNestedManyWithoutInboxInputSchema } from './InboxShareUncheckedCreateNestedManyWithoutInboxInputSchema';
import { InboxLabelUncheckedCreateNestedManyWithoutInboxInputSchema } from './InboxLabelUncheckedCreateNestedManyWithoutInboxInputSchema';

export const InboxUncheckedCreateWithoutProjectInputSchema: z.ZodType<Prisma.InboxUncheckedCreateWithoutProjectInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  originalName: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  type: z.lazy(() => InboxTypeSchema).optional().nullable(),
  status: z.lazy(() => InboxStatusSchema).optional().nullable(),
  fileName: z.string().optional().nullable(),
  filePath: z.string().optional().nullable(),
  fileUrl: z.string().optional().nullable(),
  fileHash: z.string().optional().nullable(),
  fileType: z.string().optional().nullable(),
  fileExtension: z.string().optional().nullable(),
  size: z.number().int().optional().nullable(),
  contentType: z.string().optional().nullable(),
  checksum: z.string().optional().nullable(),
  compression: z.string().optional().nullable(),
  storageLocation: z.lazy(() => StorageLocationSchema).optional(),
  virusScanStatus: z.string().optional().nullable(),
  virusScanDate: z.coerce.date().optional().nullable(),
  securityFlags: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  accessAttempts: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  lastSecurityAudit: z.coerce.date().optional().nullable(),
  encryptionMethod: z.string().optional().nullable(),
  encryptionKeyId: z.string().optional().nullable(),
  digitalSignature: z.string().optional().nullable(),
  certificateId: z.string().optional().nullable(),
  folderId: z.string().optional().nullable(),
  path: z.string().optional().nullable(),
  tags: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  starred: z.boolean().optional(),
  pinned: z.boolean().optional(),
  sortOrder: z.number().int().optional().nullable(),
  displayOrder: z.number().int().optional().nullable(),
  accessLevel: z.lazy(() => InboxAccessLevelSchema).optional(),
  classification: z.lazy(() => InboxClassificationSchema).optional(),
  password: z.string().optional().nullable(),
  encryptionKey: z.string().optional().nullable(),
  shareableLink: z.string().optional().nullable(),
  accessCount: z.number().int().optional(),
  maxAccessCount: z.number().int().optional().nullable(),
  accessHistory: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  ipRestrictions: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  allowedDomains: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  geoRestrictions: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  retentionPolicy: z.lazy(() => RetentionPolicySchema).optional(),
  retentionDate: z.coerce.date().optional().nullable(),
  legalHold: z.boolean().optional(),
  dispositionDate: z.coerce.date().optional().nullable(),
  archiveDate: z.coerce.date().optional().nullable(),
  purgeDate: z.coerce.date().optional().nullable(),
  amount: z.number().optional().nullable(),
  baseAmount: z.number().optional().nullable(),
  baseCurrency: z.string().optional().nullable(),
  currency: z.string().optional().nullable(),
  exchangeRate: z.number().optional().nullable(),
  taxAmount: z.number().optional().nullable(),
  totalAmount: z.number().optional().nullable(),
  date: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  lastAccessedAt: z.coerce.date().optional().nullable(),
  expiresAt: z.coerce.date().optional().nullable(),
  effectiveDate: z.coerce.date().optional().nullable(),
  lastValidated: z.coerce.date().optional().nullable(),
  lastBackupDate: z.coerce.date().optional().nullable(),
  processingStatus: z.string().optional().nullable(),
  processingErrors: z.string().optional().nullable(),
  retryCount: z.number().int().optional(),
  maxRetries: z.number().int().optional(),
  workflow: z.string().optional().nullable(),
  approvalStatus: z.string().optional().nullable(),
  approvedBy: z.string().optional().nullable(),
  approvedAt: z.coerce.date().optional().nullable(),
  rejectionReason: z.string().optional().nullable(),
  nextReviewDate: z.coerce.date().optional().nullable(),
  ocrText: z.string().optional().nullable(),
  ocrLanguage: z.string().optional().nullable(),
  ocrConfidence: z.number().optional().nullable(),
  ocrEngine: z.string().optional().nullable(),
  analysisResults: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  metadata: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  contentHash: z.string().optional().nullable(),
  contentAnalysis: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  aiTags: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  customMetadata: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  version: z.number().int().optional(),
  versionNotes: z.string().optional().nullable(),
  parentVersion: z.string().optional().nullable(),
  isLatestVersion: z.boolean().optional(),
  versionHistory: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  changeLog: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  branchName: z.string().optional().nullable(),
  mergeHistory: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  forwardedTo: z.string().optional().nullable(),
  forwardedBy: z.string().optional().nullable(),
  forwardedAt: z.coerce.date().optional().nullable(),
  sharedWith: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  collaborators: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  lockHolder: z.string().optional().nullable(),
  lockExpiresAt: z.coerce.date().optional().nullable(),
  lastModifiedBy: z.string().optional().nullable(),
  referenceId: z.string().optional().nullable(),
  referenceType: z.string().optional().nullable(),
  sourceSystem: z.string().optional().nullable(),
  externalLinks: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  dependencies: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  relatedFiles: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  createdById: z.string().optional().nullable(),
  ownerId: z.string().optional().nullable(),
  lastModifiedById: z.string().optional().nullable(),
  attachmentId: z.string().optional().nullable(),
  transactionId: z.string().optional().nullable(),
  complianceStatus: z.string().optional().nullable(),
  complianceTags: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  dataPrivacyLevel: z.string().optional().nullable(),
  regulatoryFlags: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  auditTrail: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  backupStatus: z.string().optional().nullable(),
  lastBackupId: z.string().optional().nullable(),
  recoveryPoint: z.string().optional().nullable(),
  backupLocation: z.string().optional().nullable(),
  children: z.lazy(() => InboxUncheckedCreateNestedManyWithoutParentInputSchema).optional(),
  activities: z.lazy(() => InboxActivityUncheckedCreateNestedManyWithoutInboxInputSchema).optional(),
  shares: z.lazy(() => InboxShareUncheckedCreateNestedManyWithoutInboxInputSchema).optional(),
  labels: z.lazy(() => InboxLabelUncheckedCreateNestedManyWithoutInboxInputSchema).optional()
}).strict();

export default InboxUncheckedCreateWithoutProjectInputSchema;
