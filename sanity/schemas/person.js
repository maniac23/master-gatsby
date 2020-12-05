import { MdPerson as icon } from 'react-icons/md';

export default {
  name: 'person', // computer name
  title: 'Slicemasters', // visible name
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100
      }
    },
    {
      name: 'description',
      title: 'Description',
      description: 'Tell us about this person',
      type: 'text'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    }
  ]
};
