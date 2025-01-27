import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const LeadMinOrderByAggregateInputSchema: z.ZodType<Prisma.LeadMinOrderByAggregateInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        name: z.lazy(() => SortOrderSchema).optional(),
        description: z.lazy(() => SortOrderSchema).optional(),
        note: z.lazy(() => SortOrderSchema).optional(),
        internalNotes: z.lazy(() => SortOrderSchema).optional(),
        reference: z.lazy(() => SortOrderSchema).optional(),
        amount: z.lazy(() => SortOrderSchema).optional(),
        probability: z.lazy(() => SortOrderSchema).optional(),
        weightedAmount: z.lazy(() => SortOrderSchema).optional(),
        actualAmount: z.lazy(() => SortOrderSchema).optional(),
        leadSource: z.lazy(() => SortOrderSchema).optional(),
        stage: z.lazy(() => SortOrderSchema).optional(),
        verificationStatus: z.lazy(() => SortOrderSchema).optional(),
        priority: z.lazy(() => SortOrderSchema).optional(),
        categoryTag: z.lazy(() => SortOrderSchema).optional(),
        closeDate: z.lazy(() => SortOrderSchema).optional(),
        nextFollowUp: z.lazy(() => SortOrderSchema).optional(),
        lastContactDate: z.lazy(() => SortOrderSchema).optional(),
        contactName: z.lazy(() => SortOrderSchema).optional(),
        contactEmail: z.lazy(() => SortOrderSchema).optional(),
        contactPhone: z.lazy(() => SortOrderSchema).optional(),
        contactTitle: z.lazy(() => SortOrderSchema).optional(),
        company: z.lazy(() => SortOrderSchema).optional(),
        industry: z.lazy(() => SortOrderSchema).optional(),
        pipelineStage: z.lazy(() => SortOrderSchema).optional(),
        salesRep: z.lazy(() => SortOrderSchema).optional(),
        territory: z.lazy(() => SortOrderSchema).optional(),
        winReason: z.lazy(() => SortOrderSchema).optional(),
        lossReason: z.lazy(() => SortOrderSchema).optional(),
        date: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        archivedAt: z.lazy(() => SortOrderSchema).optional(),
        convertedAt: z.lazy(() => SortOrderSchema).optional(),
        qualifiedAt: z.lazy(() => SortOrderSchema).optional(),
        closedAt: z.lazy(() => SortOrderSchema).optional(),
        lastActivity: z.lazy(() => SortOrderSchema).optional(),
        nextAction: z.lazy(() => SortOrderSchema).optional(),
        followUpStatus: z.lazy(() => SortOrderSchema).optional(),
        engagementScore: z.lazy(() => SortOrderSchema).optional(),
        assignedId: z.lazy(() => SortOrderSchema).optional(),
        createdBy: z.lazy(() => SortOrderSchema).optional(),
        updatedBy: z.lazy(() => SortOrderSchema).optional(),
        projectId: z.lazy(() => SortOrderSchema).optional(),
        dataConsent: z.lazy(() => SortOrderSchema).optional(),
        dataRetention: z.lazy(() => SortOrderSchema).optional(),
        externalId: z.lazy(() => SortOrderSchema).optional(),
        syncStatus: z.lazy(() => SortOrderSchema).optional(),
        lastSyncedAt: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default LeadMinOrderByAggregateInputSchema
