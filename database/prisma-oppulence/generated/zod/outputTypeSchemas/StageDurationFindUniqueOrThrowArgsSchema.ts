import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { StageDurationIncludeSchema } from '../inputTypeSchemas/StageDurationIncludeSchema'
import { StageDurationWhereUniqueInputSchema } from '../inputTypeSchemas/StageDurationWhereUniqueInputSchema'
import { PipelineArgsSchema } from './PipelineArgsSchema'
import { PipelineStageArgsSchema } from './PipelineStageArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const StageDurationSelectSchema: z.ZodType<Prisma.StageDurationSelect> = z
    .object({
        id: z.boolean().optional(),
        pipelineId: z.boolean().optional(),
        stageId: z.boolean().optional(),
        expectedDays: z.boolean().optional(),
        warningDays: z.boolean().optional(),
        criticalDays: z.boolean().optional(),
        pipeline: z.union([z.boolean(), z.lazy(() => PipelineArgsSchema)]).optional(),
        stage: z.union([z.boolean(), z.lazy(() => PipelineStageArgsSchema)]).optional()
    })
    .strict()

export const StageDurationFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.StageDurationFindUniqueOrThrowArgs> = z
    .object({
        select: StageDurationSelectSchema.optional(),
        include: StageDurationIncludeSchema.optional(),
        where: StageDurationWhereUniqueInputSchema
    })
    .strict()

export default StageDurationFindUniqueOrThrowArgsSchema
