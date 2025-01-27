import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadCompanyDetailsIncludeSchema } from '../inputTypeSchemas/LeadCompanyDetailsIncludeSchema'
import { LeadCompanyDetailsWhereUniqueInputSchema } from '../inputTypeSchemas/LeadCompanyDetailsWhereUniqueInputSchema'
import { LeadCompanyDetailsCreateInputSchema } from '../inputTypeSchemas/LeadCompanyDetailsCreateInputSchema'
import { LeadCompanyDetailsUncheckedCreateInputSchema } from '../inputTypeSchemas/LeadCompanyDetailsUncheckedCreateInputSchema'
import { LeadCompanyDetailsUpdateInputSchema } from '../inputTypeSchemas/LeadCompanyDetailsUpdateInputSchema'
import { LeadCompanyDetailsUncheckedUpdateInputSchema } from '../inputTypeSchemas/LeadCompanyDetailsUncheckedUpdateInputSchema'
import { LeadArgsSchema } from "../outputTypeSchemas/LeadArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LeadCompanyDetailsSelectSchema: z.ZodType<Prisma.LeadCompanyDetailsSelect> = z.object({
  id: z.boolean().optional(),
  leadId: z.boolean().optional(),
  companyName: z.boolean().optional(),
  industry: z.boolean().optional(),
  registrationNumber: z.boolean().optional(),
  vatNumber: z.boolean().optional(),
  annualRevenue: z.boolean().optional(),
  employeeCount: z.boolean().optional(),
  foundedYear: z.boolean().optional(),
  website: z.boolean().optional(),
  linkedinUrl: z.boolean().optional(),
  addressLine1: z.boolean().optional(),
  addressLine2: z.boolean().optional(),
  city: z.boolean().optional(),
  state: z.boolean().optional(),
  postalCode: z.boolean().optional(),
  country: z.boolean().optional(),
  businessType: z.boolean().optional(),
  stockSymbol: z.boolean().optional(),
  parentCompany: z.boolean().optional(),
  subsidiaries: z.boolean().optional(),
  marketSegment: z.boolean().optional(),
  competitors: z.boolean().optional(),
  keyProducts: z.boolean().optional(),
  fiscalYearEnd: z.boolean().optional(),
  creditRating: z.boolean().optional(),
  paymentTerms: z.boolean().optional(),
  certifications: z.boolean().optional(),
  complianceStatus: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  lead: z.union([z.boolean(),z.lazy(() => LeadArgsSchema)]).optional(),
}).strict()

export const LeadCompanyDetailsUpsertArgsSchema: z.ZodType<Prisma.LeadCompanyDetailsUpsertArgs> = z.object({
  select: LeadCompanyDetailsSelectSchema.optional(),
  include: LeadCompanyDetailsIncludeSchema.optional(),
  where: LeadCompanyDetailsWhereUniqueInputSchema,
  create: z.union([ LeadCompanyDetailsCreateInputSchema,LeadCompanyDetailsUncheckedCreateInputSchema ]),
  update: z.union([ LeadCompanyDetailsUpdateInputSchema,LeadCompanyDetailsUncheckedUpdateInputSchema ]),
}).strict() ;

export default LeadCompanyDetailsUpsertArgsSchema;
