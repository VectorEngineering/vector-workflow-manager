import { Prisma } from '@prisma/client'
import Decimal from 'decimal.js'
import { z } from 'zod'
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema'
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema'
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema'
import { BoolWithAggregatesFilterSchema } from './BoolWithAggregatesFilterSchema'
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema'
import { DateTimeNullableWithAggregatesFilterSchema } from './DateTimeNullableWithAggregatesFilterSchema'
import { DecimalNullableWithAggregatesFilterSchema } from './DecimalNullableWithAggregatesFilterSchema'
import { isValidDecimalInput } from './isValidDecimalInput'
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema'
import { JsonNullableWithAggregatesFilterSchema } from './JsonNullableWithAggregatesFilterSchema'

export const ContractScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ContractScalarWhereWithAggregatesInput> = z
    .object({
        AND: z
            .union([
                z.lazy(() => ContractScalarWhereWithAggregatesInputSchema),
                z.lazy(() => ContractScalarWhereWithAggregatesInputSchema).array()
            ])
            .optional(),
        OR: z
            .lazy(() => ContractScalarWhereWithAggregatesInputSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => ContractScalarWhereWithAggregatesInputSchema),
                z.lazy(() => ContractScalarWhereWithAggregatesInputSchema).array()
            ])
            .optional(),
        id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        customerId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        contractNumber: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        title: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        description: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        type: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        category: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        department: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        businessUnit: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        priority: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        status: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        stage: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        version: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
        isTemplate: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
        parentContractId: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        startDate: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
        endDate: z
            .union([z.lazy(() => DateTimeNullableWithAggregatesFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        signedDate: z
            .union([z.lazy(() => DateTimeNullableWithAggregatesFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        effectiveDate: z
            .union([z.lazy(() => DateTimeNullableWithAggregatesFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        terminationDate: z
            .union([z.lazy(() => DateTimeNullableWithAggregatesFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        nextReviewDate: z
            .union([z.lazy(() => DateTimeNullableWithAggregatesFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        renewalDate: z
            .union([z.lazy(() => DateTimeNullableWithAggregatesFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        lastAmendmentDate: z
            .union([z.lazy(() => DateTimeNullableWithAggregatesFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        value: z
            .union([
                z.lazy(() => DecimalNullableWithAggregatesFilterSchema),
                z
                    .union([z.number(), z.string(), z.instanceof(Decimal), z.instanceof(Prisma.Decimal), DecimalJsLikeSchema])
                    .refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' })
            ])
            .optional()
            .nullable(),
        currency: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        billingFrequency: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        billingTerms: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        paymentTerms: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        autoRenewal: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
        renewalTerms: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        terminationFee: z
            .union([
                z.lazy(() => DecimalNullableWithAggregatesFilterSchema),
                z
                    .union([z.number(), z.string(), z.instanceof(Decimal), z.instanceof(Prisma.Decimal), DecimalJsLikeSchema])
                    .refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' })
            ])
            .optional()
            .nullable(),
        earlyTerminationTerms: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        terms: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        conditions: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        governingLaw: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        disputeResolution: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        confidentialityLevel: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        complianceStatus: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        riskLevel: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        riskAssessment: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
        contractOwner: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        counterpartyId: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        counterpartyName: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        counterpartyContact: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        witnesses: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        signatories: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        stakeholders: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        deliverables: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        milestones: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        slaTerms: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        performanceMetrics: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        obligations: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        penalties: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        insuranceRequirements: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        liabilityTerms: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        indemnificationTerms: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        limitationOfLiability: z
            .union([
                z.lazy(() => DecimalNullableWithAggregatesFilterSchema),
                z
                    .union([z.number(), z.string(), z.instanceof(Decimal), z.instanceof(Prisma.Decimal), DecimalJsLikeSchema])
                    .refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' })
            ])
            .optional()
            .nullable(),
        intellectualProperty: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        licensedAssets: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        restrictions: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        amendments: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
        changeHistory: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
        approvalHistory: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
        documentUrl: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        supportingDocs: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        attachments: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
        signatures: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
        accessLevel: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        accessControlList: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        encryptionLevel: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        notificationSettings: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
        reminderSettings: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
        alertContacts: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
        customFields: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
        metadata: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
        notes: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
        externalReferences: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
        relatedContracts: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
        createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
        updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
        createdBy: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        updatedBy: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        reviewedBy: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        approvedBy: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        archivedAt: z
            .union([z.lazy(() => DateTimeNullableWithAggregatesFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        archivedBy: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable()
    })
    .strict()

export default ContractScalarWhereWithAggregatesInputSchema
