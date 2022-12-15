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
      options: {
        list: [
          {title: 'Exhaust', value: 'exhaust'},
          {title: 'Forfeit', value: 'forfeit'},
          {title: 'Use twice then exhaust', value: 'useTwiceThenExhaust'},
        ], // <-- predefined values
        layout: 'dropdown', // <-- defaults to 'dropdown'
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'bodyPart',
      title: 'Body Part',
      type: 'string',
      options: {
        list: [
          {title: 'Head', value: 'head'},
          {title: 'Chest', value: 'chest'},
          {title: 'Hand', value: 'hand'},
          {title: 'Two Hand', value: 'twoHand'},
          {title: 'Boot', value: 'boot'},
        ], // <-- predefined values
        layout: 'dropdown', // <-- defaults to 'dropdown'
      },
      validation: (Rule) => Rule.required(),
    },
  ],
}
