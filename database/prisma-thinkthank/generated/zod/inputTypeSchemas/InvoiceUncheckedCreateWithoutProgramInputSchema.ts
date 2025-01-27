import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InvoiceStatusSchema } from './InvoiceStatusSchema'
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema'
import { InputJsonValueSchema } from './InputJsonValueSchema'
import { PayoutUncheckedCreateNestedManyWithoutInvoiceInputSchema } from './PayoutUncheckedCreateNestedManyWithoutInvoiceInputSchema'
import { InvoiceCommentUncheckedCreateNestedManyWithoutInvoiceInputSchema } from './InvoiceCommentUncheckedCreateNestedManyWithoutInvoiceInputSchema'
import { InvoiceAttachmentUncheckedCreateNestedManyWithoutInvoiceInputSchema } from './InvoiceAttachmentUncheckedCreateNestedManyWithoutInvoiceInputSchema'
import { InvoiceHistoryUncheckedCreateNestedManyWithoutInvoiceInputSchema } from './InvoiceHistoryUncheckedCreateNestedManyWithoutInvoiceInputSchema'

export const InvoiceUncheckedCreateWithoutProgramInputSchema: z.ZodType<Prisma.InvoiceUncheckedCreateWithoutProgramInput> = z
    .object({
        id: z.string().cuid().optional(),
        workspaceId: z.string(),
        number: z.string().optional().nullable(),
        status: z.lazy(() => InvoiceStatusSchema).optional(),
        amount: z.number().int().optional(),
        fee: z.number().int().optional(),
        total: z.number().int().optional(),
        receiptUrl: z.string().optional().nullable(),
        createdAt: z.coerce.date().optional(),
        bottomBlock: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
        companyDetails: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
        currency: z.string().optional().nullable(),
        customerDetails: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
        customerId: z.string().optional().nullable(),
        customerName: z.string().optional().nullable(),
        discount: z.number().optional().nullable(),
        dueDate: z.coerce.date().optional().nullable(),
        filePath: z.string().optional().nullable(),
        fileSize: z.number().int().optional().nullable(),
        fromDetails: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
        internalNote: z.string().optional().nullable(),
        invoiceNumber: z.string().optional().nullable(),
        issueDate: z.coerce.date().optional().nullable(),
        lineItems: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
        note: z.string().optional().nullable(),
        noteDetails: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
        paidAt: z.coerce.date().optional().nullable(),
        paymentDetails: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
        reminderSentAt: z.coerce.date().optional().nullable(),
        sentTo: z.string().optional().nullable(),
        subtotal: z.number().optional().nullable(),
        tax: z.number().optional().nullable(),
        teamId: z.string().optional().nullable(),
        token: z.string().optional().nullable(),
        topBlock: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
        updatedAt: z.coerce.date().optional().nullable(),
        url: z.string().optional().nullable(),
        userId: z.string().optional().nullable(),
        vat: z.number().optional().nullable(),
        viewedAt: z.coerce.date().optional().nullable(),
        version: z.number().int().optional(),
        language: z.string().optional().nullable(),
        timezone: z.string().optional().nullable(),
        tags: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
        metadata: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
        customFields: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
        paymentMethod: z.string().optional().nullable(),
        paymentStatus: z.string().optional().nullable(),
        paymentDue: z.number().optional().nullable(),
        partialPayments: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
        refundAmount: z.number().optional().nullable(),
        conversionRate: z.number().optional().nullable(),
        processingFees: z.number().optional().nullable(),
        profitMargin: z.number().optional().nullable(),
        costBreakdown: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
        autoRemind: z.boolean().optional(),
        reminderSchedule: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
        approvalStatus: z.string().optional().nullable(),
        approvedBy: z.string().optional().nullable(),
        approvedAt: z.coerce.date().optional().nullable(),
        taxExempt: z.boolean().optional(),
        taxExemptReason: z.string().optional().nullable(),
        complianceNotes: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
        auditTrail: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
        templateId: z.string().optional().nullable(),
        payouts: z.lazy(() => PayoutUncheckedCreateNestedManyWithoutInvoiceInputSchema).optional(),
        comments: z.lazy(() => InvoiceCommentUncheckedCreateNestedManyWithoutInvoiceInputSchema).optional(),
        attachments: z.lazy(() => InvoiceAttachmentUncheckedCreateNestedManyWithoutInvoiceInputSchema).optional(),
        history: z.lazy(() => InvoiceHistoryUncheckedCreateNestedManyWithoutInvoiceInputSchema).optional()
    })
    .strict()

export default InvoiceUncheckedCreateWithoutProgramInputSchema
