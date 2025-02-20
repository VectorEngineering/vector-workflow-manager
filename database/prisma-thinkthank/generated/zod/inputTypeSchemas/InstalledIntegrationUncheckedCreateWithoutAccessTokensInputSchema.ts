import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { OAuthRefreshTokenUncheckedCreateNestedManyWithoutInstalledIntegrationInputSchema } from './OAuthRefreshTokenUncheckedCreateNestedManyWithoutInstalledIntegrationInputSchema';
import { WebhookUncheckedCreateNestedOneWithoutInstalledIntegrationInputSchema } from './WebhookUncheckedCreateNestedOneWithoutInstalledIntegrationInputSchema';

export const InstalledIntegrationUncheckedCreateWithoutAccessTokensInputSchema: z.ZodType<Prisma.InstalledIntegrationUncheckedCreateWithoutAccessTokensInput> = z.object({
  id: z.string().cuid().optional(),
  userId: z.string(),
  integrationId: z.string(),
  projectId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  credentials: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  refreshTokens: z.lazy(() => OAuthRefreshTokenUncheckedCreateNestedManyWithoutInstalledIntegrationInputSchema).optional(),
  webhook: z.lazy(() => WebhookUncheckedCreateNestedOneWithoutInstalledIntegrationInputSchema).optional()
}).strict();

export default InstalledIntegrationUncheckedCreateWithoutAccessTokensInputSchema;
