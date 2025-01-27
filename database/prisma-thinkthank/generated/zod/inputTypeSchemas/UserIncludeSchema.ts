import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { AccountFindManyArgsSchema } from '../outputTypeSchemas/AccountFindManyArgsSchema'
import { SessionFindManyArgsSchema } from '../outputTypeSchemas/SessionFindManyArgsSchema'
import { ProjectUsersFindManyArgsSchema } from '../outputTypeSchemas/ProjectUsersFindManyArgsSchema'
import { PartnerUserFindManyArgsSchema } from '../outputTypeSchemas/PartnerUserFindManyArgsSchema'
import { LinkFindManyArgsSchema } from '../outputTypeSchemas/LinkFindManyArgsSchema'
import { DashboardFindManyArgsSchema } from '../outputTypeSchemas/DashboardFindManyArgsSchema'
import { TokenFindManyArgsSchema } from '../outputTypeSchemas/TokenFindManyArgsSchema'
import { RestrictedTokenFindManyArgsSchema } from '../outputTypeSchemas/RestrictedTokenFindManyArgsSchema'
import { OAuthCodeFindManyArgsSchema } from '../outputTypeSchemas/OAuthCodeFindManyArgsSchema'
import { IntegrationFindManyArgsSchema } from '../outputTypeSchemas/IntegrationFindManyArgsSchema'
import { InstalledIntegrationFindManyArgsSchema } from '../outputTypeSchemas/InstalledIntegrationFindManyArgsSchema'
import { UtmTemplateFindManyArgsSchema } from '../outputTypeSchemas/UtmTemplateFindManyArgsSchema'
import { AppFindManyArgsSchema } from '../outputTypeSchemas/AppFindManyArgsSchema'
import { BankAccountFindManyArgsSchema } from '../outputTypeSchemas/BankAccountFindManyArgsSchema'
import { TransactionFindManyArgsSchema } from '../outputTypeSchemas/TransactionFindManyArgsSchema'
import { DocumentFindManyArgsSchema } from '../outputTypeSchemas/DocumentFindManyArgsSchema'
import { ReportAccessFindManyArgsSchema } from '../outputTypeSchemas/ReportAccessFindManyArgsSchema'
import { ReportFindManyArgsSchema } from '../outputTypeSchemas/ReportFindManyArgsSchema'
import { AIAssistantSettingsArgsSchema } from '../outputTypeSchemas/AIAssistantSettingsArgsSchema'
import { FinancialSettingsArgsSchema } from '../outputTypeSchemas/FinancialSettingsArgsSchema'
import { BankConnectionSettingsFindManyArgsSchema } from '../outputTypeSchemas/BankConnectionSettingsFindManyArgsSchema'
import { UserCountOutputTypeArgsSchema } from '../outputTypeSchemas/UserCountOutputTypeArgsSchema'

export const UserIncludeSchema: z.ZodType<Prisma.UserInclude> = z
    .object({
        accounts: z.union([z.boolean(), z.lazy(() => AccountFindManyArgsSchema)]).optional(),
        sessions: z.union([z.boolean(), z.lazy(() => SessionFindManyArgsSchema)]).optional(),
        projects: z.union([z.boolean(), z.lazy(() => ProjectUsersFindManyArgsSchema)]).optional(),
        partners: z.union([z.boolean(), z.lazy(() => PartnerUserFindManyArgsSchema)]).optional(),
        links: z.union([z.boolean(), z.lazy(() => LinkFindManyArgsSchema)]).optional(),
        dashboards: z.union([z.boolean(), z.lazy(() => DashboardFindManyArgsSchema)]).optional(),
        tokens: z.union([z.boolean(), z.lazy(() => TokenFindManyArgsSchema)]).optional(),
        restrictedTokens: z.union([z.boolean(), z.lazy(() => RestrictedTokenFindManyArgsSchema)]).optional(),
        oAuthCodes: z.union([z.boolean(), z.lazy(() => OAuthCodeFindManyArgsSchema)]).optional(),
        integrations: z.union([z.boolean(), z.lazy(() => IntegrationFindManyArgsSchema)]).optional(),
        installedIntegrations: z.union([z.boolean(), z.lazy(() => InstalledIntegrationFindManyArgsSchema)]).optional(),
        utmTemplates: z.union([z.boolean(), z.lazy(() => UtmTemplateFindManyArgsSchema)]).optional(),
        apps: z.union([z.boolean(), z.lazy(() => AppFindManyArgsSchema)]).optional(),
        bankAccounts: z.union([z.boolean(), z.lazy(() => BankAccountFindManyArgsSchema)]).optional(),
        Transaction: z.union([z.boolean(), z.lazy(() => TransactionFindManyArgsSchema)]).optional(),
        Document: z.union([z.boolean(), z.lazy(() => DocumentFindManyArgsSchema)]).optional(),
        reportAccess: z.union([z.boolean(), z.lazy(() => ReportAccessFindManyArgsSchema)]).optional(),
        reports: z.union([z.boolean(), z.lazy(() => ReportFindManyArgsSchema)]).optional(),
        aiAssistantSettings: z.union([z.boolean(), z.lazy(() => AIAssistantSettingsArgsSchema)]).optional(),
        financialSettings: z.union([z.boolean(), z.lazy(() => FinancialSettingsArgsSchema)]).optional(),
        BankConnectionSettings: z.union([z.boolean(), z.lazy(() => BankConnectionSettingsFindManyArgsSchema)]).optional(),
        _count: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsSchema)]).optional()
    })
    .strict()

export default UserIncludeSchema
