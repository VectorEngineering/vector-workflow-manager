import type { Prisma } from '@prisma/client'

import { z } from 'zod'

export const ContractApprovalCreateWithoutContractInputSchema: z.ZodType<Prisma.ContractApprovalCreateWithoutContractInput> = z
    .object({
        id: z.string().cuid().optional(),
        stage: z.string(),
        status: z.string(),
        approverRole: z.string(),
        approverId: z.string().optional().nullable(),
        comments: z.string().optional().nullable(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional()
    })
    .strict()

export default ContractApprovalCreateWithoutContractInputSchema
