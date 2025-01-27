import { z } from 'zod';

export const InvoiceTemplateScalarFieldEnumSchema = z.enum(['id','createdAt','currency','customerLabel','dateFormat','deliveryType','descriptionLabel','discountLabel','dueDateLabel','fromDetails','fromLabel','includeDecimals','includeDiscount','includeQr','includeTax','includeUnits','includeVat','invoiceNoLabel','issueDateLabel','logoUrl','noteLabel','paymentDetails','paymentLabel','priceLabel','quantityLabel','size','taxLabel','taxRate','projectId','title','totalLabel','totalSummaryLabel','vatLabel','vatRate','version','isDefault','isArchived','language','description','tags','metadata','customFields','style','layout','fonts','colors','variables','sections','footerContent','headerContent','useCount','lastUsedAt']);

export default InvoiceTemplateScalarFieldEnumSchema;
