import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProgramArgsSchema } from "../outputTypeSchemas/ProgramArgsSchema"
import { PartnerArgsSchema } from "../outputTypeSchemas/PartnerArgsSchema"
import { PayoutArgsSchema } from "../outputTypeSchemas/PayoutArgsSchema"
import { CustomerArgsSchema } from "../outputTypeSchemas/CustomerArgsSchema"

export const SaleSelectSchema: z.ZodType<Prisma.SaleSelect> = z.object({
  id: z.boolean().optional(),
  programId: z.boolean().optional(),
  partnerId: z.boolean().optional(),
  payoutId: z.boolean().optional(),
  customerId: z.boolean().optional(),
  linkId: z.boolean().optional(),
  clickId: z.boolean().optional(),
  invoiceId: z.boolean().optional(),
  eventId: z.boolean().optional(),
  amount: z.boolean().optional(),
  currency: z.boolean().optional(),
  paymentProcessor: z.boolean().optional(),
  earnings: z.boolean().optional(),
  status: z.boolean().optional(),
  metadata: z.boolean().optional(),
  commissionAmount: z.boolean().optional(),
  commissionType: z.boolean().optional(),
  recurringCommission: z.boolean().optional(),
  recurringInterval: z.boolean().optional(),
  recurringDuration: z.boolean().optional(),
  isLifetimeRecurring: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  program: z.union([z.boolean(),z.lazy(() => ProgramArgsSchema)]).optional(),
  partner: z.union([z.boolean(),z.lazy(() => PartnerArgsSchema)]).optional(),
  payout: z.union([z.boolean(),z.lazy(() => PayoutArgsSchema)]).optional(),
  customer: z.union([z.boolean(),z.lazy(() => CustomerArgsSchema)]).optional(),
}).strict()

export default SaleSelectSchema;
