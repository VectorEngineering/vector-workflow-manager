import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { InvoiceTemplateIncludeSchema } from '../inputTypeSchemas/InvoiceTemplateIncludeSchema'
import { InvoiceTemplateWhereInputSchema } from '../inputTypeSchemas/InvoiceTemplateWhereInputSchema'
import { InvoiceTemplateOrderByWithRelationInputSchema } from '../inputTypeSchemas/InvoiceTemplateOrderByWithRelationInputSchema'
import { InvoiceTemplateWhereUniqueInputSchema } from '../inputTypeSchemas/InvoiceTemplateWhereUniqueInputSchema'
import { InvoiceTemplateScalarFieldEnumSchema } from '../inputTypeSchemas/InvoiceTemplateScalarFieldEnumSchema'
import { ProjectArgsSchema } from '../outputTypeSchemas/ProjectArgsSchema'
import { InvoiceFindManyArgsSchema } from '../outputTypeSchemas/InvoiceFindManyArgsSchema'
import { InvoiceTemplateCountOutputTypeArgsSchema } from '../outputTypeSchemas/InvoiceTemplateCountOutputTypeArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const InvoiceTemplateSelectSchema: z.ZodType<Prisma.InvoiceTemplateSelect> = z
    .object({
        id: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        currency: z.boolean().optional(),
        customerLabel: z.boolean().optional(),
        dateFormat: z.boolean().optional(),
        deliveryType: z.boolean().optional(),
        descriptionLabel: z.boolean().optional(),
        discountLabel: z.boolean().optional(),
        dueDateLabel: z.boolean().optional(),
        fromDetails: z.boolean().optional(),
        fromLabel: z.boolean().optional(),
        includeDecimals: z.boolean().optional(),
        includeDiscount: z.boolean().optional(),
        includeQr: z.boolean().optional(),
        includeTax: z.boolean().optional(),
        includeUnits: z.boolean().optional(),
        includeVat: z.boolean().optional(),
        invoiceNoLabel: z.boolean().optional(),
        issueDateLabel: z.boolean().optional(),
        logoUrl: z.boolean().optional(),
        noteLabel: z.boolean().optional(),
        paymentDetails: z.boolean().optional(),
        paymentLabel: z.boolean().optional(),
        priceLabel: z.boolean().optional(),
        quantityLabel: z.boolean().optional(),
        size: z.boolean().optional(),
        taxLabel: z.boolean().optional(),
        taxRate: z.boolean().optional(),
        projectId: z.boolean().optional(),
        title: z.boolean().optional(),
        totalLabel: z.boolean().optional(),
        totalSummaryLabel: z.boolean().optional(),
        vatLabel: z.boolean().optional(),
        vatRate: z.boolean().optional(),
        version: z.boolean().optional(),
        isDefault: z.boolean().optional(),
        isArchived: z.boolean().optional(),
        language: z.boolean().optional(),
        description: z.boolean().optional(),
        tags: z.boolean().optional(),
        metadata: z.boolean().optional(),
        customFields: z.boolean().optional(),
        style: z.boolean().optional(),
        layout: z.boolean().optional(),
        fonts: z.boolean().optional(),
        colors: z.boolean().optional(),
        variables: z.boolean().optional(),
        sections: z.boolean().optional(),
        footerContent: z.boolean().optional(),
        headerContent: z.boolean().optional(),
        useCount: z.boolean().optional(),
        lastUsedAt: z.boolean().optional(),
        timezone: z.boolean().optional(),
        project: z.union([z.boolean(), z.lazy(() => ProjectArgsSchema)]).optional(),
        Invoice: z.union([z.boolean(), z.lazy(() => InvoiceFindManyArgsSchema)]).optional(),
        _count: z.union([z.boolean(), z.lazy(() => InvoiceTemplateCountOutputTypeArgsSchema)]).optional()
    })
    .strict()

export const InvoiceTemplateFindFirstOrThrowArgsSchema: z.ZodType<Prisma.InvoiceTemplateFindFirstOrThrowArgs> = z
    .object({
        select: InvoiceTemplateSelectSchema.optional(),
        include: InvoiceTemplateIncludeSchema.optional(),
        where: InvoiceTemplateWhereInputSchema.optional(),
        orderBy: z.union([InvoiceTemplateOrderByWithRelationInputSchema.array(), InvoiceTemplateOrderByWithRelationInputSchema]).optional(),
        cursor: InvoiceTemplateWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.union([InvoiceTemplateScalarFieldEnumSchema, InvoiceTemplateScalarFieldEnumSchema.array()]).optional()
    })
    .strict()

export default InvoiceTemplateFindFirstOrThrowArgsSchema
