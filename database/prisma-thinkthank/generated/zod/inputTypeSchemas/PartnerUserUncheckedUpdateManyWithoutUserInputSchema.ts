import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema'
import { PartnerRoleSchema } from './PartnerRoleSchema'
import { EnumPartnerRoleFieldUpdateOperationsInputSchema } from './EnumPartnerRoleFieldUpdateOperationsInputSchema'
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema'

export const PartnerUserUncheckedUpdateManyWithoutUserInputSchema: z.ZodType<Prisma.PartnerUserUncheckedUpdateManyWithoutUserInput> = z
    .object({
        id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        role: z.union([z.lazy(() => PartnerRoleSchema), z.lazy(() => EnumPartnerRoleFieldUpdateOperationsInputSchema)]).optional(),
        partnerId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
        updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional()
    })
    .strict()

export default PartnerUserUncheckedUpdateManyWithoutUserInputSchema
