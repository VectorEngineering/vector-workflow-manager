import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema'
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema'
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema'
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema'
import { LinkUpdateManyWithoutProjectDomainNestedInputSchema } from './LinkUpdateManyWithoutProjectDomainNestedInputSchema'
import { RegisteredDomainUpdateOneWithoutDomainNestedInputSchema } from './RegisteredDomainUpdateOneWithoutDomainNestedInputSchema'
import { ProgramUpdateManyWithoutPrimaryDomainNestedInputSchema } from './ProgramUpdateManyWithoutPrimaryDomainNestedInputSchema'

export const DomainUpdateWithoutProjectInputSchema: z.ZodType<Prisma.DomainUpdateWithoutProjectInput> = z
    .object({
        id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        slug: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        verified: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
        placeholder: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        expiredUrl: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        notFoundUrl: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        primary: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
        archived: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
        lastChecked: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
        logo: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
        updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
        links: z.lazy(() => LinkUpdateManyWithoutProjectDomainNestedInputSchema).optional(),
        registeredDomain: z.lazy(() => RegisteredDomainUpdateOneWithoutDomainNestedInputSchema).optional(),
        programs: z.lazy(() => ProgramUpdateManyWithoutPrimaryDomainNestedInputSchema).optional()
    })
    .strict()

export default DomainUpdateWithoutProjectInputSchema
