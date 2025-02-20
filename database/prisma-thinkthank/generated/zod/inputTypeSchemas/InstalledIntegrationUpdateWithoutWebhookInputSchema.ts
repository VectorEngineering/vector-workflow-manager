import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { UserUpdateOneRequiredWithoutInstalledIntegrationsNestedInputSchema } from './UserUpdateOneRequiredWithoutInstalledIntegrationsNestedInputSchema';
import { IntegrationUpdateOneRequiredWithoutInstallationsNestedInputSchema } from './IntegrationUpdateOneRequiredWithoutInstallationsNestedInputSchema';
import { ProjectUpdateOneRequiredWithoutInstalledIntegrationsNestedInputSchema } from './ProjectUpdateOneRequiredWithoutInstalledIntegrationsNestedInputSchema';
import { OAuthRefreshTokenUpdateManyWithoutInstalledIntegrationNestedInputSchema } from './OAuthRefreshTokenUpdateManyWithoutInstalledIntegrationNestedInputSchema';
import { RestrictedTokenUpdateManyWithoutInstalledIntegrationNestedInputSchema } from './RestrictedTokenUpdateManyWithoutInstalledIntegrationNestedInputSchema';

export const InstalledIntegrationUpdateWithoutWebhookInputSchema: z.ZodType<Prisma.InstalledIntegrationUpdateWithoutWebhookInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  credentials: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutInstalledIntegrationsNestedInputSchema).optional(),
  integration: z.lazy(() => IntegrationUpdateOneRequiredWithoutInstallationsNestedInputSchema).optional(),
  project: z.lazy(() => ProjectUpdateOneRequiredWithoutInstalledIntegrationsNestedInputSchema).optional(),
  refreshTokens: z.lazy(() => OAuthRefreshTokenUpdateManyWithoutInstalledIntegrationNestedInputSchema).optional(),
  accessTokens: z.lazy(() => RestrictedTokenUpdateManyWithoutInstalledIntegrationNestedInputSchema).optional()
}).strict();

export default InstalledIntegrationUpdateWithoutWebhookInputSchema;
