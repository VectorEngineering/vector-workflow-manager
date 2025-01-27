import { z } from 'zod';

export const ReportScalarFieldEnumSchema = z.enum(['id','name','description','type','format','status','from','to','timeZone','fileUrl','fileSize','pageCount','rowCount','currency','language','template','watermark','isScheduled','visibility','password','shareUrl','shortLink','downloadCount','viewCount','processingTime','lastError','retryCount','createdAt','updatedAt','expireAt','lastAccessedAt','scheduledAt','completedAt','createdBy','projectId']);

export default ReportScalarFieldEnumSchema;
