import { z } from 'zod';

export const LinkScalarFieldEnumSchema = z.enum(['id','domain','key','url','shortLink','archived','expiresAt','expiredUrl','password','trackConversion','proxy','title','description','image','video','utm_source','utm_medium','utm_campaign','utm_term','utm_content','rewrite','doIndex','ios','android','geo','userId','projectId','externalId','tenantId','publicStats','clicks','lastClicked','leads','sales','saleAmount','createdAt','updatedAt','comments','programId']);

export default LinkScalarFieldEnumSchema;
