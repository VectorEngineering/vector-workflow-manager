import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ReportIncludeSchema } from '../inputTypeSchemas/ReportIncludeSchema'
import { ReportCreateInputSchema } from '../inputTypeSchemas/ReportCreateInputSchema'
import { ReportUncheckedCreateInputSchema } from '../inputTypeSchemas/ReportUncheckedCreateInputSchema'
import { UserArgsSchema } from './UserArgsSchema'
import { ProjectArgsSchema } from './ProjectArgsSchema'
import { ReportFilterFindManyArgsSchema } from './ReportFilterFindManyArgsSchema'
import { ReportSortingFindManyArgsSchema } from './ReportSortingFindManyArgsSchema'
import { ReportColumnFindManyArgsSchema } from './ReportColumnFindManyArgsSchema'
import { ReportScheduleFindManyArgsSchema } from './ReportScheduleFindManyArgsSchema'
import { ReportRecipientFindManyArgsSchema } from './ReportRecipientFindManyArgsSchema'
import { ReportAccessFindManyArgsSchema } from './ReportAccessFindManyArgsSchema'
import { ReportCountOutputTypeArgsSchema } from './ReportCountOutputTypeArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ReportSelectSchema: z.ZodType<Prisma.ReportSelect> = z
    .object({
        id: z.boolean().optional(),
        name: z.boolean().optional(),
        description: z.boolean().optional(),
        type: z.boolean().optional(),
        format: z.boolean().optional(),
        status: z.boolean().optional(),
        from: z.boolean().optional(),
        to: z.boolean().optional(),
        timeZone: z.boolean().optional(),
        fileUrl: z.boolean().optional(),
        fileSize: z.boolean().optional(),
        pageCount: z.boolean().optional(),
        rowCount: z.boolean().optional(),
        currency: z.boolean().optional(),
        language: z.boolean().optional(),
        template: z.boolean().optional(),
        watermark: z.boolean().optional(),
        isScheduled: z.boolean().optional(),
        visibility: z.boolean().optional(),
        password: z.boolean().optional(),
        shareUrl: z.boolean().optional(),
        shortLink: z.boolean().optional(),
        downloadCount: z.boolean().optional(),
        viewCount: z.boolean().optional(),
        processingTime: z.boolean().optional(),
        lastError: z.boolean().optional(),
        retryCount: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        expireAt: z.boolean().optional(),
        lastAccessedAt: z.boolean().optional(),
        scheduledAt: z.boolean().optional(),
        completedAt: z.boolean().optional(),
        createdBy: z.boolean().optional(),
        projectId: z.boolean().optional(),
        creator: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
        project: z.union([z.boolean(), z.lazy(() => ProjectArgsSchema)]).optional(),
        filters: z.union([z.boolean(), z.lazy(() => ReportFilterFindManyArgsSchema)]).optional(),
        sortings: z.union([z.boolean(), z.lazy(() => ReportSortingFindManyArgsSchema)]).optional(),
        columns: z.union([z.boolean(), z.lazy(() => ReportColumnFindManyArgsSchema)]).optional(),
        schedules: z.union([z.boolean(), z.lazy(() => ReportScheduleFindManyArgsSchema)]).optional(),
        recipients: z.union([z.boolean(), z.lazy(() => ReportRecipientFindManyArgsSchema)]).optional(),
        accessUsers: z.union([z.boolean(), z.lazy(() => ReportAccessFindManyArgsSchema)]).optional(),
        _count: z.union([z.boolean(), z.lazy(() => ReportCountOutputTypeArgsSchema)]).optional()
    })
    .strict()

export const ReportCreateArgsSchema: z.ZodType<Prisma.ReportCreateArgs> = z
    .object({
        select: ReportSelectSchema.optional(),
        include: ReportIncludeSchema.optional(),
        data: z.union([ReportCreateInputSchema, ReportUncheckedCreateInputSchema])
    })
    .strict()

export default ReportCreateArgsSchema
