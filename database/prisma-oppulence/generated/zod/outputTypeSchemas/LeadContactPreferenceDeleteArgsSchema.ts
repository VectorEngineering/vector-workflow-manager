import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadContactPreferenceIncludeSchema } from '../inputTypeSchemas/LeadContactPreferenceIncludeSchema'
import { LeadContactPreferenceWhereUniqueInputSchema } from '../inputTypeSchemas/LeadContactPreferenceWhereUniqueInputSchema'
import { LeadArgsSchema } from './LeadArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LeadContactPreferenceSelectSchema: z.ZodType<Prisma.LeadContactPreferenceSelect> = z
    .object({
        id: z.boolean().optional(),
        leadId: z.boolean().optional(),
        method: z.boolean().optional(),
        preferredTime: z.boolean().optional(),
        preferredDays: z.boolean().optional(),
        timezone: z.boolean().optional(),
        notes: z.boolean().optional(),
        isActive: z.boolean().optional(),
        lead: z.union([z.boolean(), z.lazy(() => LeadArgsSchema)]).optional()
    })
    .strict()

export const LeadContactPreferenceDeleteArgsSchema: z.ZodType<Prisma.LeadContactPreferenceDeleteArgs> = z
    .object({
        select: LeadContactPreferenceSelectSchema.optional(),
        include: LeadContactPreferenceIncludeSchema.optional(),
        where: LeadContactPreferenceWhereUniqueInputSchema
    })
    .strict()

export default LeadContactPreferenceDeleteArgsSchema
