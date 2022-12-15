import name from './fields/name'

export default {
  name: 'item',
  type: 'document',
  title: 'Item',
  fields: [
    name,
    {
      name: 'cost',
      title: 'Cost',
      type: 'number',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },

    {
      name: 'exhaustionType',
      title: 'Exhaustion Type',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slot',
      title: 'Slot',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'imageUrl',
      title: 'Image URL',
      type: 'string',
    },
  ],
}
