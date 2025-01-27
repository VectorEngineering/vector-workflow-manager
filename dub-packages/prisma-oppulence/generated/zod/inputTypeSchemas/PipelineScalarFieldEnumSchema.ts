import { z } from 'zod';

export const PipelineScalarFieldEnumSchema = z.enum(['id','name','slug','description','type','isActive','isDefault','icon','color','currency','defaultStageId','pipelineFocus','pipelineSegment','pipelineCategory','pipelineGoal','typicalSalesCycle','averageDealSize','averageCloseRate','minimumDealSize','maximumDealSize','targetMarket','salesMethodology','qualificationCriteria','forecastingMethod','confidenceScore','revenueTarget','dealCountTarget','complianceLevel','securityTier','dataRetention','visibilityLevel','projectId','createdBy','updatedBy','createdAt','updatedAt','archivedAt']);

export default PipelineScalarFieldEnumSchema;
