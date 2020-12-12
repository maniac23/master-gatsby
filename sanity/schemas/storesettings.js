import { MdStore as icon } from 'react-icons/md';

export default {
  name: 'storeSettings', // computer name
  title: 'Settings', // visible name
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Store name',
      type: 'string',
      description: 'Name of the store',
    },
    {
      name: 'slicemaster',
      title: 'Slicemasters currently slicing',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'person' }] }],
    },
    {
      name: 'hotSlices',
      title: 'Hot slices available',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'pizza' }] }],
    },
  ],
};
