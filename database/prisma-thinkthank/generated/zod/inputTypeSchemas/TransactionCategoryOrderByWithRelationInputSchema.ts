import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { SortOrderInputSchema } from './SortOrderInputSchema'
import { ProjectOrderByWithRelationInputSchema } from './ProjectOrderByWithRelationInputSchema'
import { TransactionOrderByRelationAggregateInputSchema } from './TransactionOrderByRelationAggregateInputSchema'
import { TransactionCategoryOrderByRelationAggregateInputSchema } from './TransactionCategoryOrderByRelationAggregateInputSchema'
import { TransactionCategoryOrderByRelevanceInputSchema } from './TransactionCategoryOrderByRelevanceInputSchema'

export const TransactionCategoryOrderByWithRelationInputSchema: z.ZodType<Prisma.TransactionCategoryOrderByWithRelationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        name: z.lazy(() => SortOrderSchema).optional(),
        slug: z.lazy(() => SortOrderSchema).optional(),
        description: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        color: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        icon: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        parentId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        path: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        level: z.lazy(() => SortOrderSchema).optional(),
        isSystem: z.lazy(() => SortOrderSchema).optional(),
        isActive: z.lazy(() => SortOrderSchema).optional(),
        metadata: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        projectId: z.lazy(() => SortOrderSchema).optional(),
        budgetLimit: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        warningThreshold: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        trackingEnabled: z.lazy(() => SortOrderSchema).optional(),
        vatRate: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        taxCode: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        taxDeductible: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        project: z.lazy(() => ProjectOrderByWithRelationInputSchema).optional(),
        transactions: z.lazy(() => TransactionOrderByRelationAggregateInputSchema).optional(),
        parent: z.lazy(() => TransactionCategoryOrderByWithRelationInputSchema).optional(),
        children: z.lazy(() => TransactionCategoryOrderByRelationAggregateInputSchema).optional(),
        _relevance: z.lazy(() => TransactionCategoryOrderByRelevanceInputSchema).optional()
    })
    .strict()

export default TransactionCategoryOrderByWithRelationInputSchema
