import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema'
import { InputJsonValueSchema } from './InputJsonValueSchema'
import { LeadCreateNestedOneWithoutLeadProductFitInputSchema } from './LeadCreateNestedOneWithoutLeadProductFitInputSchema'
import { LeadProductFitAssessmentCreateNestedManyWithoutProductFitInputSchema } from './LeadProductFitAssessmentCreateNestedManyWithoutProductFitInputSchema'

export const LeadProductFitCreateInputSchema: z.ZodType<Prisma.LeadProductFitCreateInput> = z
    .object({
        id: z.string().cuid().optional(),
        technicalFit: z.number(),
        businessFit: z.number(),
        culturalFit: z.number(),
        budgetFit: z.number(),
        overallFit: z.number(),
        strengthsWeaknesses: z.union([z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema]),
        customizationNeeds: z.union([z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema]),
        implementationComplexity: z.string(),
        requiredFeatures: z.union([z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema]),
        optionalFeatures: z.union([z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema]),
        dealBreakers: z.union([z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema]),
        integrationComplexity: z.string(),
        integrationRisks: z.union([z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema]),
        integrationCosts: z.number().optional().nullable(),
        implementationTimeline: z.union([z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema]),
        trainingNeeds: z.union([z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema]),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
        lead: z.lazy(() => LeadCreateNestedOneWithoutLeadProductFitInputSchema),
        assessments: z.lazy(() => LeadProductFitAssessmentCreateNestedManyWithoutProductFitInputSchema).optional()
    })
    .strict()

export default LeadProductFitCreateInputSchema
