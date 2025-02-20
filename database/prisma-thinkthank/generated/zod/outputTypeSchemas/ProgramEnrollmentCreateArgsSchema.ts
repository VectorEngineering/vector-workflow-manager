import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ProgramEnrollmentIncludeSchema } from '../inputTypeSchemas/ProgramEnrollmentIncludeSchema'
import { ProgramEnrollmentCreateInputSchema } from '../inputTypeSchemas/ProgramEnrollmentCreateInputSchema'
import { ProgramEnrollmentUncheckedCreateInputSchema } from '../inputTypeSchemas/ProgramEnrollmentUncheckedCreateInputSchema'
import { PartnerArgsSchema } from '../outputTypeSchemas/PartnerArgsSchema'
import { ProgramArgsSchema } from '../outputTypeSchemas/ProgramArgsSchema'
import { LinkArgsSchema } from '../outputTypeSchemas/LinkArgsSchema'
import { DiscountArgsSchema } from '../outputTypeSchemas/DiscountArgsSchema'
import { ProgramApplicationArgsSchema } from '../outputTypeSchemas/ProgramApplicationArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ProgramEnrollmentSelectSchema: z.ZodType<Prisma.ProgramEnrollmentSelect> = z
    .object({
        id: z.boolean().optional(),
        partnerId: z.boolean().optional(),
        programId: z.boolean().optional(),
        linkId: z.boolean().optional(),
        commissionAmount: z.boolean().optional(),
        discountId: z.boolean().optional(),
        applicationId: z.boolean().optional(),
        status: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        partner: z.union([z.boolean(), z.lazy(() => PartnerArgsSchema)]).optional(),
        program: z.union([z.boolean(), z.lazy(() => ProgramArgsSchema)]).optional(),
        link: z.union([z.boolean(), z.lazy(() => LinkArgsSchema)]).optional(),
        discount: z.union([z.boolean(), z.lazy(() => DiscountArgsSchema)]).optional(),
        application: z.union([z.boolean(), z.lazy(() => ProgramApplicationArgsSchema)]).optional()
    })
    .strict()

export const ProgramEnrollmentCreateArgsSchema: z.ZodType<Prisma.ProgramEnrollmentCreateArgs> = z
    .object({
        select: ProgramEnrollmentSelectSchema.optional(),
        include: ProgramEnrollmentIncludeSchema.optional(),
        data: z.union([ProgramEnrollmentCreateInputSchema, ProgramEnrollmentUncheckedCreateInputSchema])
    })
    .strict()

export default ProgramEnrollmentCreateArgsSchema
