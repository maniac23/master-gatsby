import { FaPepperHot as icon } from 'react-icons/fa';

export default {
  name: 'topping', // computer name
  title: 'Toppings', // visible name
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Topping name',
      type: 'string',
      description: "What's the topping mane"
    },
    {
      name: 'vegetarian',
      title: 'Vegetarian',
      type: 'boolean',
      description: 'Is it vegetarian?',
      options: {
        layout: 'checkbox'
      }
    }
  ],
  preview: {
    select: {
      name: 'name',
      vegetarian: 'vegetarian'
    },
    prepare: ({ name, vegetarian }) => ({
      title: `${name} ${vegetarian ? '🌱' : ''}`
    })
  }
};
