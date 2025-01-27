import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { InboxIncludeSchema } from '../inputTypeSchemas/InboxIncludeSchema'
import { InboxWhereUniqueInputSchema } from '../inputTypeSchemas/InboxWhereUniqueInputSchema'
import { InboxCreateInputSchema } from '../inputTypeSchemas/InboxCreateInputSchema'
import { InboxUncheckedCreateInputSchema } from '../inputTypeSchemas/InboxUncheckedCreateInputSchema'
import { InboxUpdateInputSchema } from '../inputTypeSchemas/InboxUpdateInputSchema'
import { InboxUncheckedUpdateInputSchema } from '../inputTypeSchemas/InboxUncheckedUpdateInputSchema'
import { ProjectArgsSchema } from './ProjectArgsSchema'
import { TransactionAttachmentArgsSchema } from './TransactionAttachmentArgsSchema'
import { TransactionArgsSchema } from './TransactionArgsSchema'
import { InboxArgsSchema } from './InboxArgsSchema'
import { InboxFindManyArgsSchema } from './InboxFindManyArgsSchema'
import { InboxActivityFindManyArgsSchema } from './InboxActivityFindManyArgsSchema'
import { InboxShareFindManyArgsSchema } from './InboxShareFindManyArgsSchema'
import { InboxLabelFindManyArgsSchema } from './InboxLabelFindManyArgsSchema'
import { InboxCountOutputTypeArgsSchema } from './InboxCountOutputTypeArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const InboxSelectSchema: z.ZodType<Prisma.InboxSelect> = z
    .object({
        id: z.boolean().optional(),
        name: z.boolean().optional(),
        originalName: z.boolean().optional(),
        description: z.boolean().optional(),
        type: z.boolean().optional(),
        status: z.boolean().optional(),
        fileName: z.boolean().optional(),
        filePath: z.boolean().optional(),
        fileUrl: z.boolean().optional(),
        fileHash: z.boolean().optional(),
        fileType: z.boolean().optional(),
        fileExtension: z.boolean().optional(),
        size: z.boolean().optional(),
        contentType: z.boolean().optional(),
        checksum: z.boolean().optional(),
        compression: z.boolean().optional(),
        storageLocation: z.boolean().optional(),
        virusScanStatus: z.boolean().optional(),
        virusScanDate: z.boolean().optional(),
        securityFlags: z.boolean().optional(),
        accessAttempts: z.boolean().optional(),
        lastSecurityAudit: z.boolean().optional(),
        encryptionMethod: z.boolean().optional(),
        encryptionKeyId: z.boolean().optional(),
        digitalSignature: z.boolean().optional(),
        certificateId: z.boolean().optional(),
        folderId: z.boolean().optional(),
        path: z.boolean().optional(),
        tags: z.boolean().optional(),
        starred: z.boolean().optional(),
        pinned: z.boolean().optional(),
        sortOrder: z.boolean().optional(),
        displayOrder: z.boolean().optional(),
        accessLevel: z.boolean().optional(),
        classification: z.boolean().optional(),
        password: z.boolean().optional(),
        encryptionKey: z.boolean().optional(),
        shareableLink: z.boolean().optional(),
        accessCount: z.boolean().optional(),
        maxAccessCount: z.boolean().optional(),
        accessHistory: z.boolean().optional(),
        ipRestrictions: z.boolean().optional(),
        allowedDomains: z.boolean().optional(),
        geoRestrictions: z.boolean().optional(),
        retentionPolicy: z.boolean().optional(),
        retentionDate: z.boolean().optional(),
        legalHold: z.boolean().optional(),
        dispositionDate: z.boolean().optional(),
        archiveDate: z.boolean().optional(),
        purgeDate: z.boolean().optional(),
        amount: z.boolean().optional(),
        baseAmount: z.boolean().optional(),
        baseCurrency: z.boolean().optional(),
        currency: z.boolean().optional(),
        exchangeRate: z.boolean().optional(),
        taxAmount: z.boolean().optional(),
        totalAmount: z.boolean().optional(),
        date: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        lastAccessedAt: z.boolean().optional(),
        expiresAt: z.boolean().optional(),
        effectiveDate: z.boolean().optional(),
        lastValidated: z.boolean().optional(),
        lastBackupDate: z.boolean().optional(),
        processingStatus: z.boolean().optional(),
        processingErrors: z.boolean().optional(),
        retryCount: z.boolean().optional(),
        maxRetries: z.boolean().optional(),
        workflow: z.boolean().optional(),
        approvalStatus: z.boolean().optional(),
        approvedBy: z.boolean().optional(),
        approvedAt: z.boolean().optional(),
        rejectionReason: z.boolean().optional(),
        nextReviewDate: z.boolean().optional(),
        ocrText: z.boolean().optional(),
        ocrLanguage: z.boolean().optional(),
        ocrConfidence: z.boolean().optional(),
        ocrEngine: z.boolean().optional(),
        analysisResults: z.boolean().optional(),
        metadata: z.boolean().optional(),
        contentHash: z.boolean().optional(),
        contentAnalysis: z.boolean().optional(),
        aiTags: z.boolean().optional(),
        customMetadata: z.boolean().optional(),
        version: z.boolean().optional(),
        versionNotes: z.boolean().optional(),
        parentVersion: z.boolean().optional(),
        isLatestVersion: z.boolean().optional(),
        versionHistory: z.boolean().optional(),
        changeLog: z.boolean().optional(),
        branchName: z.boolean().optional(),
        mergeHistory: z.boolean().optional(),
        forwardedTo: z.boolean().optional(),
        forwardedBy: z.boolean().optional(),
        forwardedAt: z.boolean().optional(),
        sharedWith: z.boolean().optional(),
        collaborators: z.boolean().optional(),
        lockHolder: z.boolean().optional(),
        lockExpiresAt: z.boolean().optional(),
        lastModifiedBy: z.boolean().optional(),
        referenceId: z.boolean().optional(),
        referenceType: z.boolean().optional(),
        sourceSystem: z.boolean().optional(),
        externalLinks: z.boolean().optional(),
        dependencies: z.boolean().optional(),
        relatedFiles: z.boolean().optional(),
        projectId: z.boolean().optional(),
        createdById: z.boolean().optional(),
        ownerId: z.boolean().optional(),
        lastModifiedById: z.boolean().optional(),
        attachmentId: z.boolean().optional(),
        transactionId: z.boolean().optional(),
        complianceStatus: z.boolean().optional(),
        complianceTags: z.boolean().optional(),
        dataPrivacyLevel: z.boolean().optional(),
        regulatoryFlags: z.boolean().optional(),
        auditTrail: z.boolean().optional(),
        backupStatus: z.boolean().optional(),
        lastBackupId: z.boolean().optional(),
        recoveryPoint: z.boolean().optional(),
        backupLocation: z.boolean().optional(),
        project: z.union([z.boolean(), z.lazy(() => ProjectArgsSchema)]).optional(),
        attachment: z.union([z.boolean(), z.lazy(() => TransactionAttachmentArgsSchema)]).optional(),
        transaction: z.union([z.boolean(), z.lazy(() => TransactionArgsSchema)]).optional(),
        parent: z.union([z.boolean(), z.lazy(() => InboxArgsSchema)]).optional(),
        children: z.union([z.boolean(), z.lazy(() => InboxFindManyArgsSchema)]).optional(),
        activities: z.union([z.boolean(), z.lazy(() => InboxActivityFindManyArgsSchema)]).optional(),
        shares: z.union([z.boolean(), z.lazy(() => InboxShareFindManyArgsSchema)]).optional(),
        labels: z.union([z.boolean(), z.lazy(() => InboxLabelFindManyArgsSchema)]).optional(),
        _count: z.union([z.boolean(), z.lazy(() => InboxCountOutputTypeArgsSchema)]).optional()
    })
    .strict()

export const InboxUpsertArgsSchema: z.ZodType<Prisma.InboxUpsertArgs> = z
    .object({
        select: InboxSelectSchema.optional(),
        include: InboxIncludeSchema.optional(),
        where: InboxWhereUniqueInputSchema,
        create: z.union([InboxCreateInputSchema, InboxUncheckedCreateInputSchema]),
        update: z.union([InboxUpdateInputSchema, InboxUncheckedUpdateInputSchema])
    })
    .strict()

export default InboxUpsertArgsSchema
