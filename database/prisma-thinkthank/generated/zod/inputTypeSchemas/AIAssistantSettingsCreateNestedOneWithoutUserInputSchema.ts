import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AIAssistantSettingsCreateWithoutUserInputSchema } from './AIAssistantSettingsCreateWithoutUserInputSchema';
import { AIAssistantSettingsUncheckedCreateWithoutUserInputSchema } from './AIAssistantSettingsUncheckedCreateWithoutUserInputSchema';
import { AIAssistantSettingsCreateOrConnectWithoutUserInputSchema } from './AIAssistantSettingsCreateOrConnectWithoutUserInputSchema';
import { AIAssistantSettingsWhereUniqueInputSchema } from './AIAssistantSettingsWhereUniqueInputSchema';

export const AIAssistantSettingsCreateNestedOneWithoutUserInputSchema: z.ZodType<Prisma.AIAssistantSettingsCreateNestedOneWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => AIAssistantSettingsCreateWithoutUserInputSchema),z.lazy(() => AIAssistantSettingsUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AIAssistantSettingsCreateOrConnectWithoutUserInputSchema).optional(),
  connect: z.lazy(() => AIAssistantSettingsWhereUniqueInputSchema).optional()
}).strict();

export default AIAssistantSettingsCreateNestedOneWithoutUserInputSchema;
