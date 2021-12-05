import { list } from '@keystone-6/core';
import { cloudinaryImage } from '@keystone-6/cloudinary';
import { relationship, text } from '@keystone-6/core/fields';

interface Cloudinary {
  cloudName: string;
  apiKey: string;
  apiSecret: string;
  folder: string;
}
const cloudinary: Cloudinary = {
  cloudName: `${process.env.CLOUDINARY_CLOUD_NAME}`,
  apiKey: `${process.env.CLOUDINARY_KEY}`,
  apiSecret: `${process.env.CLOUDINARY_SECRET}`,
  folder: 'sick-fits',
};
export const ProductImage = list({
  ui: {
    labelField: 'altText',
    isHidden: true,
  },
  fields: {
    image: cloudinaryImage({
      cloudinary,
      label: 'altText',
    }),
    altText: text({
      validation: { isRequired: true },
    }),
    product: relationship({
      ref: 'Product.photo',
      ui: { createView: { fieldMode: 'hidden' } },
    }),
  },
});
