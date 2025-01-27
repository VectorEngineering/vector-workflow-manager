import { z } from 'zod';

export const ContractDocumentOrderByRelevanceFieldEnumSchema = z.enum(['id','contractId','type','category','classification','importance','status','title','description','language','fileUrl','fileType','fileHash','originalFilename','mimeType','encoding','compression','storageProvider','storagePath','backupUrl','cdnUrl','accessLevel','encryptionType','password','signatureStatus','reviewStatus','reviewedBy','approvedBy','rejectionReason','versionNotes','previousVersion','complianceStatus','complianceNotes','processingStatus','extractedText','ocrStatus','externalId','externalSystem','externalUrl','synchronizationStatus','lastViewedBy','lastDownloadedBy','validateStatus','validatedBy','createdBy','updatedBy','archivedBy','restoredBy']);

export default ContractDocumentOrderByRelevanceFieldEnumSchema;
