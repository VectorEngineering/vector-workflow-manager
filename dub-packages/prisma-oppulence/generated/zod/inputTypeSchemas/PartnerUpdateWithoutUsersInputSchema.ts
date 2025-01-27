import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { PartnerStatusSchema } from './PartnerStatusSchema';
import { EnumPartnerStatusFieldUpdateOperationsInputSchema } from './EnumPartnerStatusFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { ProgramEnrollmentUpdateManyWithoutPartnerNestedInputSchema } from './ProgramEnrollmentUpdateManyWithoutPartnerNestedInputSchema';
import { ProgramApplicationUpdateManyWithoutPartnerNestedInputSchema } from './ProgramApplicationUpdateManyWithoutPartnerNestedInputSchema';
import { PartnerInviteUpdateManyWithoutPartnerNestedInputSchema } from './PartnerInviteUpdateManyWithoutPartnerNestedInputSchema';
import { PayoutUpdateManyWithoutPartnerNestedInputSchema } from './PayoutUpdateManyWithoutPartnerNestedInputSchema';
import { SaleUpdateManyWithoutPartnerNestedInputSchema } from './SaleUpdateManyWithoutPartnerNestedInputSchema';

export const PartnerUpdateWithoutUsersInputSchema: z.ZodType<Prisma.PartnerUpdateWithoutUsersInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  bio: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  country: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => PartnerStatusSchema),z.lazy(() => EnumPartnerStatusFieldUpdateOperationsInputSchema) ]).optional(),
  stripeConnectId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  payoutsEnabled: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  showOnLeaderboard: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  programs: z.lazy(() => ProgramEnrollmentUpdateManyWithoutPartnerNestedInputSchema).optional(),
  applications: z.lazy(() => ProgramApplicationUpdateManyWithoutPartnerNestedInputSchema).optional(),
  invites: z.lazy(() => PartnerInviteUpdateManyWithoutPartnerNestedInputSchema).optional(),
  payouts: z.lazy(() => PayoutUpdateManyWithoutPartnerNestedInputSchema).optional(),
  sales: z.lazy(() => SaleUpdateManyWithoutPartnerNestedInputSchema).optional()
}).strict();

export default PartnerUpdateWithoutUsersInputSchema;
