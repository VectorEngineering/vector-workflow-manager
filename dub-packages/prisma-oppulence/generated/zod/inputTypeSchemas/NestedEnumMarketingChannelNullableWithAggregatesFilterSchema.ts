import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MarketingChannelSchema } from './MarketingChannelSchema';
import { NestedIntNullableFilterSchema } from './NestedIntNullableFilterSchema';
import { NestedEnumMarketingChannelNullableFilterSchema } from './NestedEnumMarketingChannelNullableFilterSchema';

export const NestedEnumMarketingChannelNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumMarketingChannelNullableWithAggregatesFilter> = z.object({
  equals: z.lazy(() => MarketingChannelSchema).optional().nullable(),
  in: z.lazy(() => MarketingChannelSchema).array().optional().nullable(),
  notIn: z.lazy(() => MarketingChannelSchema).array().optional().nullable(),
  not: z.union([ z.lazy(() => MarketingChannelSchema),z.lazy(() => NestedEnumMarketingChannelNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumMarketingChannelNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumMarketingChannelNullableFilterSchema).optional()
}).strict();

export default NestedEnumMarketingChannelNullableWithAggregatesFilterSchema;
