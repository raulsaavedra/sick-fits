import { list } from '@keystone-next/keystone';

import {
  integer,
  relationship,
  select,
  text,
} from '@keystone-next/keystone/fields';

export const Product = list({
  fields: {
    name: text({ validation: { isRequired: true } }),
    description: text({
      validation: { isRequired: true },
      ui: { displayMode: 'textarea' },
    }),
    status: select({
      validation: { isRequired: true },
      defaultValue: 'draft',
      options: [
        { value: 'draft', label: 'Draft' },
        { value: 'available', label: 'Available' },
        { value: 'unavailable', label: 'Unavailable' },
      ],
      ui: {
        displayMode: 'segmented-control',
        createView: {
          fieldMode: 'hidden',
        },
      },
    }),
    price: integer({
      validation: { isRequired: true },
      defaultValue: 0,
    }),
    photo: relationship({
      ref: 'ProductImage.product',
      ui: {
        displayMode: 'cards',
        cardFields: ['image', 'altText'],
        inlineCreate: { fields: ['image', 'altText'] },
        inlineEdit: { fields: ['image', 'altText'] },
      },
    }),
  },
});
